# Skill security manifest

Use this compact record for every candidate:

```yaml
name:
source:
owner:
pinnedRevision:
license:
reviewedAt:
decision: approved | restricted | reference | rejected
capabilities:
  filesystem: none | read | scoped-write | broad-write
  network: none | allowlisted | broad
  shell: none | fixed | arbitrary
  secrets: none | named-development-only | broad
  externalMutation: none | approval-required
telemetry:
dependencies: []
scripts: []
allowedProjects: []
restrictions: []
evidence: []
test:
  environment:
  syntheticFixture:
  result:
```

Approval expires when the pinned revision, dependency graph, permissions, owner, license, or distribution channel changes.
