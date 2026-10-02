# Forensic Laboratory Evidence Operations

Track physical evidence seals, custody transfers, laboratory examinations, analyst reviews and disclosure packets.

## Implemented records

- **Forensic Case**: name, case Number, requesting Agency, case Officer, received At, disclosure Due At, status.
- **Evidence Item**: name, item Number, description, seal Number, received At, storage Location, status.
- **Custody Transfer**: title, transferred At, from Custodian, to Custodian, seal Condition, receipt, status.
- **Examination Request**: title, discipline, question, requested At, priority, status.
- **Lab Examination**: title, analyst, method Version, performed At, observations, status.
- **Instrument Check**: title, instrument, serial Number, checked At, check Result, evidence, status.
- **Technical Review**: title, reviewer, reviewed At, findings, resolution, status.
- **Disclosure Packet**: title, prepared At, preparer, included References, exclusions, recipient, status.
- **Evidence Disposition**: title, disposition At, authority, action, receipt, status.
- **Operational Task**: title, owner, priority, start At, due At, done, notes, status.
- **Rule Version**: title, jurisdiction, version, effective At, expires At, source Url, requirement Text, status.
- **Document Requirement**: title, category, required By, source Reference, evidence Reference, review Notes, status.

## AI workflows

- Custody completeness review: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Examination request summary: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Method documentation gap check: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Analyst narrative organization: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Technical review response draft: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Disclosure packet index: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Evidence completeness review: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.
- Operations handoff draft: source-linked draft, saved history, three real AI input suggestion styles and three complete fictional examples.

## Calculations

- Custody continuity review: Detect custodian discontinuities, reversed timestamps and recorded seal exceptions without asserting evidence authenticity.
- Forensic Case evidence checklist: Check source presence against an explicitly supplied document list; reviewer assesses adequacy.
- Operational deadline queue: Compute overdue items from entered dates and completed flags; no external notifications.

## Workspace features

Role-based login and account management; validated create/edit/delete; required parent and sibling relationships; search and pagination; atomic JSON imports; CSV/JSON exports; optimistic concurrency; two independent human reviews; immutable source-text uploads with independent review; dated task calendar; aggregate reports; searchable audit trail; model catalog and administrator AI settings; configured HTTPS connectors with approval, idempotency and receipt checks.

## Integration boundaries

A finite working scope, not every conceivable feature. No production regulator, insurer, carrier, court, university or clinical integration is preconfigured. Source uploads support text/CSV/JSON/Markdown, not OCR/PDF parsing. AI produces drafts and cannot authorize clinical handling, adjudicate rights, select recipients or jurors, establish eligibility, certify regulatory compliance or send submissions. Live external execution requires a configured adapter and independent human approval of the current record. Calculations use supplied rules and units; example rules are fictional.
