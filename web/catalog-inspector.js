/* Fast, evidence-first preview for the catalog master-detail layout. */
(() => {
  'use strict';

  function safeHttpUrl(value) {
    try {
      const url = new URL(value);
      return ['http:', 'https:'].includes(url.protocol) ? url.href : '';
    } catch (error) {
      return '';
    }
  }

  function firstText(values, fallback) {
    return Array.isArray(values) && typeof values[0] === 'string' && values[0].trim()
      ? values[0].trim()
      : fallback;
  }

  function createInspectorModel(resource, labels = {}) {
    const sourceHref = resource?.linkHealth?.status === 'blocked' ? '' : safeHttpUrl(resource?.url);
    return Object.freeze({
      id: String(resource?.id || ''),
      title: String(resource?.title || 'Материал без названия'),
      description: String(resource?.simpleDescription || 'Описание пока не подготовлено.'),
      type: labels.types?.[resource?.type] || String(resource?.type || 'Материал'),
      trust: labels.trust?.[resource?.trust] || labels.trust?.unknown || 'Нужна проверка',
      linkHealth: labels.linkHealth?.[resource?.linkHealth?.status] || labels.linkHealth?.unchecked || 'Ссылка не проверена',
      decision: labels.decisions?.[resource?.decision] || labels.decisions?.reference || 'Оставить как reference',
      decisionKey: String(resource?.decision || 'reference'),
      risk: labels.risks?.[resource?.riskLevel] || labels.risks?.medium || 'Средний риск',
      riskKey: String(resource?.riskLevel || 'medium'),
      riskDetail: firstText(resource?.risks, 'Перед использованием проверьте источник, условия и permissions.'),
      useCase: firstText(resource?.useCases, 'Подходит для небольшой тестовой задачи.'),
      nextStep: firstText(resource?.quickStart, 'Откройте официальный источник и проверьте условия.'),
      projects: Array.isArray(resource?.projects) ? resource.projects.filter((item) => typeof item === 'string' && item.trim()).slice(0, 3) : [],
      runtime: labels.runtime?.[resource?.runtime] || labels.runtime?.unknown || 'Место запуска не проверено',
      cost: labels.cost?.[resource?.cost] || labels.cost?.unknown || 'Стоимость не проверена',
      signup: labels.signup?.[resource?.signup] || labels.signup?.unknown || 'Регистрация не проверена',
      license: String(resource?.licenseInfo?.label || resource?.license || 'Лицензия требует проверки'),
      sourceHref,
      sourceDomain: sourceHref ? new URL(sourceHref).hostname.replace(/^www\./, '') : '',
      detailHref: '#item/' + encodeURIComponent(String(resource?.id || '')),
      evidenceCount: Array.isArray(resource?.evidence) ? resource.evidence.length : 0,
    });
  }

  function node(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text != null) element.textContent = text;
    return element;
  }

  function addFact(list, label, value) {
    const row = node('div', 'inspector-fact');
    row.append(node('dt', '', label), node('dd', '', value));
    list.appendChild(row);
  }

  function render(root, resource, context) {
    const model = createInspectorModel(resource, context);
    root.replaceChildren();
    root.classList.add('has-selection');
    root.dataset.itemId = model.id;

    const head = node('header', 'inspector-head');
    const headTop = node('div', 'inspector-head-top');
    headTop.appendChild(node('span', 'inspector-label', 'Быстрый обзор'));
    const close = node('button', 'inspector-close', 'Закрыть');
    close.type = 'button';
    close.dataset.inspectorClose = 'true';
    headTop.appendChild(close);
    head.appendChild(headTop);

    const kicker = node('div', 'inspector-kicker');
    kicker.append(
      node('span', 'inspector-type', model.type),
      node('span', 'inspector-trust', model.trust),
    );
    head.appendChild(kicker);
    const title = node('h2', '', model.title);
    title.id = 'inspectorTitle';
    head.append(title, node('p', 'inspector-description', model.description));
    root.appendChild(head);

    const decision = node('section', 'inspector-decision decision-' + model.decisionKey);
    decision.append(
      node('span', '', 'Решение редакции'),
      node('b', '', model.decision),
      node('p', '', model.useCase),
    );
    root.appendChild(decision);

    const facts = node('dl', 'inspector-facts');
    addFact(facts, 'Стоимость', model.cost);
    addFact(facts, 'Запуск', model.runtime);
    addFact(facts, 'Лицензия', model.license);
    addFact(facts, 'Регистрация', model.signup);
    root.appendChild(facts);

    const projectSection = node('section', 'inspector-section');
    projectSection.appendChild(node('h3', '', 'Подходит для Eclipse'));
    const projectList = node('div', 'inspector-projects');
    const projects = model.projects.length ? model.projects : ['Нужен отдельный выбор проекта'];
    projects.forEach((project) => projectList.appendChild(node('span', '', project)));
    projectSection.appendChild(projectList);
    root.appendChild(projectSection);

    const riskSection = node('section', 'inspector-section inspector-risk risk-' + model.riskKey);
    riskSection.append(
      node('h3', '', model.risk),
      node('p', '', model.riskDetail),
    );
    root.appendChild(riskSection);

    const nextSection = node('section', 'inspector-section inspector-next');
    nextSection.append(
      node('h3', '', 'Безопасный следующий шаг'),
      node('p', '', model.nextStep),
      node('small', '', String(model.evidenceCount) + ' evidence-ссылок в полном анализе'),
    );
    root.appendChild(nextSection);

    const actions = node('footer', 'inspector-actions');
    const detail = node('a', 'inspector-primary', 'Полный анализ');
    detail.href = model.detailHref;
    actions.appendChild(detail);
    if (model.sourceHref) {
      const source = node('a', 'inspector-source', model.sourceDomain || 'Источник');
      source.href = model.sourceHref;
      source.target = '_blank';
      source.rel = 'noopener';
      actions.appendChild(source);
    }
    root.appendChild(actions);

    const localActions = node('div', 'inspector-local-actions');
    localActions.append(context.favoriteButton(resource, true), context.compareButton(resource, true));
    root.appendChild(localActions);
    return model;
  }

  window.EclipseCatalogInspector = Object.freeze({ createInspectorModel, render, safeHttpUrl });
})();
