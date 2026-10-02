export interface PageConfig {
  label: string;
  href: string;
  description: string;
  entities: string[];
  workflows: string[];
}

export interface EntityConfig {
  name: string;
  label: string;
  fields: Array<{ name: string; kind: "string" | "number" | "boolean" | "date" }>;
}

export interface WorkflowConfig {
  slug: string;
  title: string;
  description: string;
  prompt: string;
  fields: string[];
}

export const appConfig = {
  "slug": "ai-forensic-laboratory-evidence-operations",
  "title": "Forensic Laboratory Evidence Operations",
  "tagline": "Track physical evidence seals, custody transfers, laboratory examinations, analyst reviews and disclosure packets.",
  "accent": "rose"
};
export const pages: PageConfig[] = [
  {
    "label": "Intake & registers",
    "href": "/registers",
    "description": "Track physical evidence seals, custody transfers, laboratory examinations, analyst reviews and disclosure packets.",
    "entities": [
      "ForensicCase",
      "EvidenceItem",
      "CustodyTransfer"
    ],
    "workflows": [
      "custody-completeness-review",
      "examination-request-summary"
    ]
  },
  {
    "label": "Operational records",
    "href": "/workflow",
    "description": "Track physical evidence seals, custody transfers, laboratory examinations, analyst reviews and disclosure packets.",
    "entities": [
      "ExaminationRequest",
      "LabExamination",
      "InstrumentCheck"
    ],
    "workflows": [
      "method-documentation-gap-check",
      "analyst-narrative-organization"
    ]
  },
  {
    "label": "Review & delivery",
    "href": "/delivery",
    "description": "Track physical evidence seals, custody transfers, laboratory examinations, analyst reviews and disclosure packets.",
    "entities": [
      "TechnicalReview",
      "DisclosurePacket",
      "EvidenceDisposition"
    ],
    "workflows": [
      "technical-review-response-draft",
      "disclosure-packet-index"
    ]
  },
  {
    "label": "Tasks & requirements",
    "href": "/operations",
    "description": "Assignments, versioned rules and document requirements.",
    "entities": [
      "OperationalTask",
      "RuleVersion",
      "DocumentRequirement"
    ],
    "workflows": [
      "evidence-completeness-review",
      "operations-handoff-draft"
    ]
  }
];
export const entities: Record<string, EntityConfig> = {
  "ForensicCase": {
    "name": "ForensicCase",
    "label": "Forensic Case",
    "fields": [
      {
        "name": "name",
        "kind": "string"
      },
      {
        "name": "caseNumber",
        "kind": "string"
      },
      {
        "name": "requestingAgency",
        "kind": "string"
      },
      {
        "name": "caseOfficer",
        "kind": "string"
      },
      {
        "name": "receivedAt",
        "kind": "date"
      },
      {
        "name": "disclosureDueAt",
        "kind": "date"
      },
      {
        "name": "status",
        "kind": "string"
      }
    ]
  },
  "EvidenceItem": {
    "name": "EvidenceItem",
    "label": "Evidence Item",
    "fields": [
      {
        "name": "name",
        "kind": "string"
      },
      {
        "name": "itemNumber",
        "kind": "string"
      },
      {
        "name": "description",
        "kind": "string"
      },
      {
        "name": "sealNumber",
        "kind": "string"
      },
      {
        "name": "receivedAt",
        "kind": "date"
      },
      {
        "name": "storageLocation",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "forensicCaseId",
        "kind": "string"
      }
    ]
  },
  "CustodyTransfer": {
    "name": "CustodyTransfer",
    "label": "Custody Transfer",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "evidenceItemId",
        "kind": "string"
      },
      {
        "name": "transferredAt",
        "kind": "date"
      },
      {
        "name": "fromCustodian",
        "kind": "string"
      },
      {
        "name": "toCustodian",
        "kind": "string"
      },
      {
        "name": "sealCondition",
        "kind": "string"
      },
      {
        "name": "receipt",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "forensicCaseId",
        "kind": "string"
      }
    ]
  },
  "ExaminationRequest": {
    "name": "ExaminationRequest",
    "label": "Examination Request",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "evidenceItemId",
        "kind": "string"
      },
      {
        "name": "discipline",
        "kind": "string"
      },
      {
        "name": "question",
        "kind": "string"
      },
      {
        "name": "requestedAt",
        "kind": "date"
      },
      {
        "name": "priority",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "forensicCaseId",
        "kind": "string"
      }
    ]
  },
  "LabExamination": {
    "name": "LabExamination",
    "label": "Lab Examination",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "examinationRequestId",
        "kind": "string"
      },
      {
        "name": "analyst",
        "kind": "string"
      },
      {
        "name": "methodVersion",
        "kind": "string"
      },
      {
        "name": "performedAt",
        "kind": "date"
      },
      {
        "name": "observations",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "forensicCaseId",
        "kind": "string"
      }
    ]
  },
  "InstrumentCheck": {
    "name": "InstrumentCheck",
    "label": "Instrument Check",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "instrument",
        "kind": "string"
      },
      {
        "name": "serialNumber",
        "kind": "string"
      },
      {
        "name": "checkedAt",
        "kind": "date"
      },
      {
        "name": "checkResult",
        "kind": "string"
      },
      {
        "name": "evidence",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "forensicCaseId",
        "kind": "string"
      }
    ]
  },
  "TechnicalReview": {
    "name": "TechnicalReview",
    "label": "Technical Review",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "labExaminationId",
        "kind": "string"
      },
      {
        "name": "reviewer",
        "kind": "string"
      },
      {
        "name": "reviewedAt",
        "kind": "date"
      },
      {
        "name": "findings",
        "kind": "string"
      },
      {
        "name": "resolution",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "forensicCaseId",
        "kind": "string"
      }
    ]
  },
  "DisclosurePacket": {
    "name": "DisclosurePacket",
    "label": "Disclosure Packet",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "preparedAt",
        "kind": "date"
      },
      {
        "name": "preparer",
        "kind": "string"
      },
      {
        "name": "includedReferences",
        "kind": "string"
      },
      {
        "name": "exclusions",
        "kind": "string"
      },
      {
        "name": "recipient",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "forensicCaseId",
        "kind": "string"
      }
    ]
  },
  "EvidenceDisposition": {
    "name": "EvidenceDisposition",
    "label": "Evidence Disposition",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "evidenceItemId",
        "kind": "string"
      },
      {
        "name": "dispositionAt",
        "kind": "date"
      },
      {
        "name": "authority",
        "kind": "string"
      },
      {
        "name": "action",
        "kind": "string"
      },
      {
        "name": "receipt",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "forensicCaseId",
        "kind": "string"
      }
    ]
  },
  "OperationalTask": {
    "name": "OperationalTask",
    "label": "Operational Task",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "owner",
        "kind": "string"
      },
      {
        "name": "priority",
        "kind": "string"
      },
      {
        "name": "startAt",
        "kind": "date"
      },
      {
        "name": "dueAt",
        "kind": "date"
      },
      {
        "name": "done",
        "kind": "boolean"
      },
      {
        "name": "notes",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "forensicCaseId",
        "kind": "string"
      }
    ]
  },
  "RuleVersion": {
    "name": "RuleVersion",
    "label": "Rule Version",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "jurisdiction",
        "kind": "string"
      },
      {
        "name": "version",
        "kind": "string"
      },
      {
        "name": "effectiveAt",
        "kind": "date"
      },
      {
        "name": "expiresAt",
        "kind": "date"
      },
      {
        "name": "sourceUrl",
        "kind": "string"
      },
      {
        "name": "requirementText",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "forensicCaseId",
        "kind": "string"
      }
    ]
  },
  "DocumentRequirement": {
    "name": "DocumentRequirement",
    "label": "Document Requirement",
    "fields": [
      {
        "name": "title",
        "kind": "string"
      },
      {
        "name": "category",
        "kind": "string"
      },
      {
        "name": "requiredBy",
        "kind": "date"
      },
      {
        "name": "sourceReference",
        "kind": "string"
      },
      {
        "name": "evidenceReference",
        "kind": "string"
      },
      {
        "name": "reviewNotes",
        "kind": "string"
      },
      {
        "name": "status",
        "kind": "string"
      },
      {
        "name": "forensicCaseId",
        "kind": "string"
      }
    ]
  }
};
export const workflows: WorkflowConfig[] = [
  {
    "slug": "custody-completeness-review",
    "title": "Custody completeness review",
    "description": "Custody completeness review using selected forensic case records and supplied evidence.",
    "prompt": "Custody completeness review for Forensic Laboratory Evidence Operations. Operational scope: Track physical evidence seals, custody transfers, laboratory examinations, analyst reviews and disclosure packets. Specific AI scope: Check chain-of-custody completeness and assemble source-linked report drafts. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "examination-request-summary",
    "title": "Examination request summary",
    "description": "Examination request summary using selected forensic case records and supplied evidence.",
    "prompt": "Examination request summary for Forensic Laboratory Evidence Operations. Operational scope: Track physical evidence seals, custody transfers, laboratory examinations, analyst reviews and disclosure packets. Specific AI scope: Check chain-of-custody completeness and assemble source-linked report drafts. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "method-documentation-gap-check",
    "title": "Method documentation gap check",
    "description": "Method documentation gap check using selected forensic case records and supplied evidence.",
    "prompt": "Method documentation gap check for Forensic Laboratory Evidence Operations. Operational scope: Track physical evidence seals, custody transfers, laboratory examinations, analyst reviews and disclosure packets. Specific AI scope: Check chain-of-custody completeness and assemble source-linked report drafts. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "analyst-narrative-organization",
    "title": "Analyst narrative organization",
    "description": "Analyst narrative organization using selected forensic case records and supplied evidence.",
    "prompt": "Analyst narrative organization for Forensic Laboratory Evidence Operations. Operational scope: Track physical evidence seals, custody transfers, laboratory examinations, analyst reviews and disclosure packets. Specific AI scope: Check chain-of-custody completeness and assemble source-linked report drafts. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "technical-review-response-draft",
    "title": "Technical review response draft",
    "description": "Technical review response draft using selected forensic case records and supplied evidence.",
    "prompt": "Technical review response draft for Forensic Laboratory Evidence Operations. Operational scope: Track physical evidence seals, custody transfers, laboratory examinations, analyst reviews and disclosure packets. Specific AI scope: Check chain-of-custody completeness and assemble source-linked report drafts. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "disclosure-packet-index",
    "title": "Disclosure packet index",
    "description": "Disclosure packet index using selected forensic case records and supplied evidence.",
    "prompt": "Disclosure packet index for Forensic Laboratory Evidence Operations. Operational scope: Track physical evidence seals, custody transfers, laboratory examinations, analyst reviews and disclosure packets. Specific AI scope: Check chain-of-custody completeness and assemble source-linked report drafts. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "evidence-completeness-review",
    "title": "Evidence completeness review",
    "description": "Evidence completeness review using selected forensic case records and supplied evidence.",
    "prompt": "Evidence completeness review for Forensic Laboratory Evidence Operations. Operational scope: Track physical evidence seals, custody transfers, laboratory examinations, analyst reviews and disclosure packets. Specific AI scope: Check chain-of-custody completeness and assemble source-linked report drafts. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  },
  {
    "slug": "operations-handoff-draft",
    "title": "Operations handoff draft",
    "description": "Operations handoff draft using selected forensic case records and supplied evidence.",
    "prompt": "Operations handoff draft for Forensic Laboratory Evidence Operations. Operational scope: Track physical evidence seals, custody transfers, laboratory examinations, analyst reviews and disclosure packets. Specific AI scope: Check chain-of-custody completeness and assemble source-linked report drafts. Produce an editable, source-linked draft for the responsible professional. Distinguish observations, missing evidence and proposed next actions. Do not invent facts, decide legal eligibility, authorize clinical release, profile individuals, submit externally or invent calibrated probabilities. Use supplied rule versions only. For translation preserve identifiers, dates, names and numbers and mark uncertain terms.",
    "fields": [
      "objective",
      "sourceContext",
      "applicableRules",
      "knownDiscrepancies",
      "constraints",
      "requestedOutput",
      "optionalReviewerNotes",
      "optionalAdditionalEvidence"
    ]
  }
];
export function findPage(href:string){return pages.find(p=>p.href===href);}
