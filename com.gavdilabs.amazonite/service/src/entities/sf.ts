export interface IEntity {
  path: string;
  deletable: boolean;
  deletablePath: string;
  effectiveDated: boolean;
  insertable: boolean;
  keyProperties: IProperty[];
  label: ILocalstring;
  name: string;
  navigationProperties: INavigation[];
  nonNavigationProperties: IProperty[];
  properties: IProperty[];
  searchable: boolean;
  supportElm: boolean;
  updatable: boolean;
  updatablePath: string;
  upsertable: boolean;
}

export interface IJobReqTemplate_Hiring_Requisition_Manual {
  templateId: number;
  agencyPosting: boolean;
  assessment: string;
  candidateHired: number;
  city: string;
  comments: string;
  corporatePosting: boolean;
  country: string;
  currency: string;
  custCompanyText: string;
  custContractEndDate: Date;
  custInstrJob: string;
  custInstrOrg: string;
  custInstrPos: string;
  custInstrSalary: string;
  custInstrScreen: string;
  custInstrTeam: string;
  cust_intro_req: string;
  defaultLanguage: string;
  end: Date;
  evergreen: boolean;
  extJobDescFooter: string;
  extJobDescHeader: string;
  extListingLayout: string;
  extTitle: string;
  externalPrivatePosting: boolean;
  id: string;
  intJobDescFooter: string;
  intJobDescHeader: string;
  intranetPosting: boolean;
  intranetPrivatePosting: boolean;
  jobPostLanguage: string;
  jobStartDate: Date;
  listingLayout: string;
  numberOpenings: number;
  offerExtensionDate: Date;
  positionNumber: string;
  postalcode: string;
  questions: string;
  quickApply: boolean;
  salaryBase: number;
  salaryMax: number;
  salaryMin: number;
  sfstd_jobReqType: string;
  start: Date;
  stateProvince: string;
  targetBonusAmount: number;
  title: string;
  budgeted?: IPicklistOption;
  businessUnit_obj?: IFOBusinessUnit;
  coordinatorName?: IJobRequisitionOperator[];
  coordinatorTeam?: IJobRequisitionOperator[];
  costCenter_obj?: IFOCostCenter;
  custContractType?: IPicklistOption;
  custEmploymentType?: IPicklistOption;
  custFrequency?: IPicklistOption;
  custJustification?: IPicklistOption;
  department_obj?: IFODepartment;
  division_obj?: IFODivision;
  filter2?: IPicklistOption;
  hiringManagerName?: IJobRequisitionOperator[];
  hiringManagerTeam?: IJobRequisitionOperator[];
  interviewGuide?: IAttachment[];
  legalEntity_obj?: IFOCompany;
  location_obj?: IFOLocation[];
  recruiterName?: IJobRequisitionOperator[];
  recruiterTeam?: IJobRequisitionOperator[];
  relocationPack?: IPicklistOption;
  secondRecruiterTeam?: IJobRequisitionOperator[];
  sourcerTeam?: IJobRequisitionOperator[];
  status?: IPicklistOption;
  vTeam?: IJobRequisitionOperator[];
  vpOfStaffingTeam?: IJobRequisitionOperator[];
}

export interface IPaymentInformationDetailV3MWI {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountType: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface ITimeTypeCAN {
  TimeType_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  durationOfDisabilityPeriodOne: number;
  durationOfDisabilityPeriodThree: number;
  durationOfDisabilityPeriodTwo: number;
  entityUUID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  sicknessVariant: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  sicknessVariantNav?: IMDFEnumValue;
}

export interface IGoal_101 {
  id: number;
  category?: string;
  currentOwner: string;
  description: string;
  done: number;
  due?: Date;
  dueDateInUTC?: Date;
  flag?: number;
  guid: string;
  lastModified: Date;
  metric: string;
  modifier: string;
  name: string;
  numbering: string;
  planId: number;
  start?: Date;
  startDateInUTC?: Date;
  state: string;
  stateLabel: string;
  status: number;
  type: string;
  userId: string;
  weight: number;
  initiativesNal?: IInitiativeAlignmentBean[];
  permissionNav?: IGoalPermission_101;
}

export interface IJobRequisitionPostingFieldControls {
  jobPostingId: number;
  jobReqId: number;
  agencyComments: number;
  boardId: number;
  boardName: number;
  channelId: number;
  extPartnerAccountId: number;
  isPostingUpdatable: number;
  jobReqPostingPermissionsNav: number;
  jobRequisition: number;
  lastModifiedBy: number;
  lastModifiedByNav: number;
  lastModifiedDateTime: number;
  postEndDate: number;
  postEndDateOffset: number;
  postStartDate: number;
  postStartDateOffset: number;
  postedBy: number;
  postedByNav: number;
  postingStatus: number;
}

export interface IJobRequisitionLocale {
  jobReqLocalId: number;
  extJobDescFooter: string;
  extJobDescHeader: string;
  externalJobDescription: string;
  externalTitle: string;
  intJobDescFooter: string;
  intJobDescHeader: string;
  jobDescription: string;
  jobReqId: number;
  jobTitle: string;
  locale: string;
  status: string;
  templateHeaderFooter: string;
  jobReqLocalePermissionsNav?: IJobRequisitionLocaleFieldControls;
  jobRequisition?: IJobRequisition;
}

export interface IGoalPermission_101 {
  id: number;
  category: number;
  create: boolean;
  delete: boolean;
  description: number;
  done: number;
  due: number;
  edit: boolean;
  flag: number;
  metric: number;
  name: number;
  privateAccess: boolean;
  start: number;
  state: number;
  type: string;
  userId: string;
  view: boolean;
  weight: number;
}

export interface IFormRatingScaleValue {
  formContentId: number;
  formDataId: number;
  scaleId: string;
  sectionIndex: number;
  value: string;
  description: string;
  longDescription: string;
}

export interface IEmpEmploymentTermination {
  endDate: Date;
  personIdExternal: string;
  userId: string;
  attachmentId: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  eventReason: string;
  lastDateWorked: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  newMainEmploymentId: string;
  okToRehire: boolean;
  employmentNav?: IEmpEmployment;
  jobInfoNav?: IEmpJob;
  personNav?: IPerPerson;
  userNav?: IUser;
}

export interface IInnerMessage {
  key: string;
  messagedetails?: IMessageDetail[];
}

export interface IJobApplicationStatusLabel {
  appStatusId: number;
  candidateLabel: string;
  locale: string;
  statusLabel: string;
  appStatus?: IJobApplicationStatus;
}

export interface ICust_CC_AppConfig {
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  cust_Description: string;
  cust_Enabled: boolean;
  cust_FeatureName: string;
  cust_Permanent: boolean;
  cust_ReleaseVersion: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface ISelfReportSkillMapping {
  SkillProfile_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  skill: string;
  status: string;
  subModule: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  skillNav?: ISkillEntity;
  statusNav?: IMDFEnumValue;
}

export interface ISpotAwardProgramAdvancedSettings {
  SpotAwardProgram_externalCode: string;
  externalCode: string;
  budgetDeductionHierarchy: string;
  canOverrideGuidelineAmount: boolean;
  certificateTemplateGroupId: string;
  createdBy?: string;
  createdDateTime: Date;
  documentTemplateGroup: string;
  enableECIntegration: boolean;
  guidelineAdditionalCriteriaFieldId: string;
  isBudgetAssociated: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  messageToApproverVisibility: string;
  overrideGuidelineAmountMsg_ar_SA: string;
  overrideGuidelineAmountMsg_da_DK: string;
  overrideGuidelineAmountMsg_de_DE: string;
  overrideGuidelineAmountMsg_defaultValue: string;
  overrideGuidelineAmountMsg_en_DEBUG: string;
  overrideGuidelineAmountMsg_en_GB: string;
  overrideGuidelineAmountMsg_en_US: string;
  overrideGuidelineAmountMsg_fr_FR: string;
  overrideGuidelineAmountMsg_localized: string;
  overrideGuidelineAmountMsg_nl_NL: string;
  overrideGuidelineAmountMsg_pl_PL: string;
  overrideGuidelineAmountMsg_sv_SE: string;
  payComponent: string;
  useECAsDataSource: boolean;
  budgetDeductionHierarchyNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  messageToApproverVisibilityNav?: IMDFEnumValue;
  overrideGuidelineAmountMsgTranslationTextNav?: IMDFLocalizedValue[];
  payComponentNav?: IFOPayComponent[];
}

export interface ICust_CC_Note {
  cust_CC_UserFuncComp_externalCode: number;
  cust_CC_User_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  cust_Note: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface ICust_CC_ProfileTask {
  cust_CC_JobProfile_externalCode: number;
  cust_CC_ProfileComp_externalCode: number;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  cust_CompId: string;
  cust_MinCompleted: boolean;
  cust_ProfileCompId: string;
  cust_ProfileId: string;
  cust_Required: boolean;
  cust_TaskId: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface ITodoAction {
  actionId: number;
  categoryId: string;
  actionName: string;
  functionImportName: string;
  categoryNav?: ITodoCategory;
}

export interface ISpotAward {
  externalCode: number;
  approvalStatus: string;
  approvedDate: Date;
  awardAmount: number;
  budgetHolderId: string;
  category: string;
  commentForApprovers: string;
  commentForReceiver: string;
  createdBy?: string;
  createdDateTime: Date;
  currency: string;
  guidelineAmount: number;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  level: string;
  mdfSystemRecordStatus: string;
  nominatorId: string;
  recordId: string;
  remainingBudgetAmount: number;
  spotAwardProgram: string;
  userId: string;
  workflowRequestId: number;
  approvalStatusNav?: IMDFEnumValue;
  budgetHolderIdNav?: IUser;
  categoryNav?: ISpotAwardCategory;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  levelNav?: ISpotAwardLevel;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  nominatorIdNav?: IUser;
  spotAwardProgramNav?: ISpotAwardProgram;
  userIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IUpsertResult {
  key: string;
  editStatus: string;
  httpCode: number;
  index: number;
  message: string;
  status: string;
  inlineResults?: IInlineResult[];
  innermessage?: IInnerMessage;
}

export interface ICompanyProvisioner {
  id: string;
  createdAdminAccountNumber: number;
  email: string;
  name: string;
  status: string;
}

export interface IInterviewOverallAssessment {
  interviewOverallAssessmentId: number;
  averageRating: number;
  comments: string;
  interviewRefId: number;
  overallRating: string;
  type: string;
  interviewIndividualAssessment?: IInterviewIndividualAssessment[];
  interviewNotes?: IAttachment;
}

export interface ISimpleDevGoal {
  id: number;
  flag: number;
  name: string;
  type: string;
  userId: string;
  simpleDevGoal_UserIdNavigation?: IUser;
}

export interface IExternalLearnerPhoneInfo {
  itemId: number;
  areaCode: string;
  countryCode: string;
  extension: string;
  isPrimary: boolean;
  is_deleted: boolean;
  lastModifiedDateTime: Date;
  phoneNumber: string;
  phoneType: string;
  phoneTypeNav?: IPicklistOption;
}

export interface IEmployeeProfileBlockLink {
  EmployeeProfileBlockContent_code: string;
  EmployeeProfilePageConfig_code: string;
  EmployeeProfileSectionConfig_code: string;
  EmployeeProfileSubSectionConfig_code: string;
  code: string;
  createdBy?: string;
  createdDateTime: Date;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  order: number;
  url: string;
  createdByNav?: IUser;
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IGoalDetail {
  Activity_activityId: number;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  goalId: number;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  recordId: string;
  snapshot: boolean;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfGoalDetailToSimpleGoalNav?: ISimpleGoal;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface ILegalEntityARG {
  LegalEntity_effectiveStartDate: Date;
  LegalEntity_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  cuit: string;
  cuitCode: number;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IEmployeeProfileSectionConfig {
  EmployeeProfilePageConfig_code: string;
  code: string;
  createdBy?: string;
  createdDateTime: Date;
  isEnabled: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  order: number;
  titleForContingent_ar_SA: string;
  titleForContingent_da_DK: string;
  titleForContingent_de_DE: string;
  titleForContingent_defaultValue: string;
  titleForContingent_en_DEBUG: string;
  titleForContingent_en_GB: string;
  titleForContingent_en_US: string;
  titleForContingent_fr_FR: string;
  titleForContingent_localized: string;
  titleForContingent_nl_NL: string;
  titleForContingent_pl_PL: string;
  titleForContingent_sv_SE: string;
  title_ar_SA: string;
  title_da_DK: string;
  title_de_DE: string;
  title_defaultValue: string;
  title_en_DEBUG: string;
  title_en_GB: string;
  title_en_US: string;
  title_fr_FR: string;
  title_localized: string;
  title_nl_NL: string;
  title_pl_PL: string;
  title_sv_SE: string;
  type: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  subSections?: IEmployeeProfileSubSectionConfig[];
  titleForContingentTranslationTextNav?: IMDFLocalizedValue[];
  titleTranslationTextNav?: IMDFLocalizedValue[];
  typeNav?: IMDFEnumValue;
}

export interface IPayScalePayComponent {
  PayScaleLevel_code: string;
  PayScaleLevel_effectiveStartDate: Date;
  code: string;
  amount: number;
  createdBy?: string;
  createdDateTime: Date;
  currency: string;
  frequency: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  number: number;
  percentage: number;
  rate: number;
  unit: string;
  codeNav?: IFOPayComponent[];
  createdByNav?: IUser;
  currencyNav?: ICurrency[];
  frequencyNav?: IFOFrequency;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IBackground_InsideWorkExperience {
  backgroundElementId: number;
  userId: string;
  bgOrderPos: number;
  department: string;
  endDate: Date;
  lastModifiedDate: Date;
  startDate: Date;
  title: string;
  userIdNav?: IUser;
}

export interface ICalibrationSessionSubject {
  sessionSubjectId: number;
  authorizedBy: string;
  calSessionId: number;
  calibratedFlag: boolean;
  comments: string;
  createdBy?: string;
  createdDateTime: Date;
  externalComments: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  pmFolderMapId: number;
  pmFormDataId: number;
  pmFormOwnerId: string;
  reason: string;
  reasonId: number;
  status: number;
  userId: string;
  calSession?: ICalibrationSession;
  commentList?: ICalibrationSubjectComment[];
  pmRatingList?: ITalentRatings[];
  rankList?: ICalibrationSubjectRank[];
  subjectUser?: IUser;
}

export interface IPicklistLabel {
  locale: string;
  optionId: number;
  id: number;
  label: string;
  picklistOption?: IPicklistOption;
}

export interface ITimeZone {
  effectiveStartDate: Date;
  externalCode: string;
  comment: string;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  effectiveStatus: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemRecordStatus: string;
  name_ar_SA: string;
  name_da_DK: string;
  name_de_DE: string;
  name_defaultValue: string;
  name_en_DEBUG: string;
  name_en_GB: string;
  name_en_US: string;
  name_fr_FR: string;
  name_localized: string;
  name_nl_NL: string;
  name_pl_PL: string;
  name_sv_SE: string;
  supported: boolean;
  utcDstOffset: string;
  utcOffset: string;
  countryNav?: ICountry;
  createdByNav?: IUser;
  effectiveStatusNav?: IMDFEnumValue;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  nameTranslationTextNav?: IMDFLocalizedValue[];
  wfRequestNav?: IWfRequest[];
}

export interface IEmployeeProfileBlockContent {
  EmployeeProfilePageConfig_code: string;
  EmployeeProfileSectionConfig_code: string;
  EmployeeProfileSubSectionConfig_code: string;
  code: string;
  blockLayout: string;
  blockLink: string;
  blockSize: string;
  blockType: string;
  createdBy?: string;
  createdDateTime: Date;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  entries: number;
  extensionLink: string;
  extensionLinkLabel_ar_SA: string;
  extensionLinkLabel_da_DK: string;
  extensionLinkLabel_de_DE: string;
  extensionLinkLabel_defaultValue: string;
  extensionLinkLabel_en_DEBUG: string;
  extensionLinkLabel_en_GB: string;
  extensionLinkLabel_en_US: string;
  extensionLinkLabel_fr_FR: string;
  extensionLinkLabel_localized: string;
  extensionLinkLabel_nl_NL: string;
  extensionLinkLabel_pl_PL: string;
  extensionLinkLabel_sv_SE: string;
  fieldReferenceID: string;
  isDescriptionInline: boolean;
  labelSource: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  layout: string;
  linkedInApiToken: string;
  linkedInCompanyToken: string;
  mdfBlockConfig: string;
  mdfSystemRecordStatus: string;
  order: number;
  ratingOption: string;
  referenceID: string;
  ruleExternalCode: string;
  sortBy: string;
  threshold: string;
  title_ar_SA: string;
  title_da_DK: string;
  title_de_DE: string;
  title_defaultValue: string;
  title_en_DEBUG: string;
  title_en_GB: string;
  title_en_US: string;
  title_fr_FR: string;
  title_localized: string;
  title_nl_NL: string;
  title_pl_PL: string;
  title_sv_SE: string;
  blockLayoutNav?: IMDFEnumValue;
  blockLinks?: IEmployeeProfileBlockLink[];
  blockSizeNav?: IMDFEnumValue;
  blockTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  extensionLinkLabelTranslationTextNav?: IMDFLocalizedValue[];
  fields?: IEmployeeProfileFieldConfig[];
  lastModifiedByNav?: IUser;
  layoutNav?: IMDFEnumValue;
  mdfBlockConfigNav?: IMDFBlockConfig;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  titleTranslationTextNav?: IMDFLocalizedValue[];
}

export interface ITrendData_SysOverallPotential {
  id: number;
  description: string;
  endDate: Date;
  label: string;
  lastModified: Date;
  max: number;
  min: number;
  module: string;
  name: string;
  rating: number;
  source: string;
  startDate: Date;
  userId: string;
  userIdNav?: IUser;
}

export interface IGoalEnum {
  fieldId: string;
  planId: number;
  value: string;
  label: string;
}

export interface IDevLearningCertifications {
  certificateId: number;
  learningId: number;
  certificateCreatedBy: string;
  certificateCreatedDate: Date;
  certificateExpiredDate: Date;
  certificateIssueDate: Date;
  certificateLastModifiedBy: string;
  certificateLastModifiedDate: Date;
  certificateName: string;
}

export interface IPaymentInformationDetailV3JPN {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountType: string;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEffectiveStartDate: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
}

export interface IPhysicalReqContent {
  JobProfile_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  entity: string;
  jobProfileId: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  order: number;
  sectionId: string;
  sectionType: string;
  status: string;
  subModule: string;
  createdByNav?: IUser;
  entityNav?: IPhysicalReqEntity;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
}

export interface IOneTimeDeduction {
  externalCode: number;
  additionalInfo: string;
  advanceId: string;
  amount: number;
  auditUserSysId: string;
  createdBy?: string;
  createdDateTime: Date;
  currency: string;
  deductionDate: Date;
  equivalentAmount: number;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  payComponentType: string;
  referenceId: string;
  unitOfMeasure: string;
  userSysId: string;
  advanceIdNav?: INonRecurringPayment;
  attachmentNav?: IAttachment;
  auditUserSysIdNav?: IUser;
  createdByNav?: IUser;
  currencyNav?: ICurrency[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  payComponentTypeNav?: IFOPayComponent[];
  userSysIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface ITimeAccountType {
  externalCode: string;
  accountBookingOffsetInMonths: number;
  accountCreationAutomationLevel: string;
  accountCreationDay: number;
  accountCreationMonth: number;
  accountCreationOffsetInMonths: number;
  accountCreationReferenceDate: string;
  accountDetailRetentionGroup: string;
  accountRetentionGroup: string;
  accrualAutomationLevel: string;
  accrualCalculationMethod: string;
  accrualCreationOffset: number;
  accrualFrequency: string;
  accrualFrequencyStartDate: Date;
  accrualPeriodStartDay: number;
  accrualPeriodStartMonth: number;
  accrualRecalculationPostingMethod: string;
  accrualRule: string;
  accrualTransferDateRule: string;
  accrualTransferRule: string;
  accrualWaitingPeriod: number;
  accrualWaitingPeriodUnit: string;
  advancesAllowed: boolean;
  allowPayoutWithSimulation: string;
  calculateSnapshotApprovedAbsenceBalance: boolean;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  creation: string;
  effectOnTransferDateRule: string;
  entitlementMethod: string;
  entityUUID: string;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  hireRule: string;
  initialAccrualTransferDateRule: string;
  initialFlexibleAccountStartDateRule: string;
  interimRule: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  levelOfSimulationPrecision: string;
  maximumSimulationHorizonInMonths: number;
  mdfSystemRecordStatus: string;
  minimumBalanceAllowed: number;
  payComponent: string;
  payComponentAccrualSeparated: string;
  payComponentGroup: string;
  payComponentTermination: string;
  payComponentTerminationAccrualSeparated: string;
  payoutEligibility: string;
  pepCalendarAutomationLevel: string;
  periodEndProcessingRule: string;
  periodicTimeAccountUpdateProfile: string;
  postingOrder: string;
  purchaseEligibility: string;
  secondAccrualCreationOffset: number;
  simulateAccruals: boolean;
  simulationRule: string;
  snapshotsAllowed: boolean;
  terminationRule: string;
  terminationRuleDataEffectiveDate: string;
  timeAccountConfigurationRule: string;
  timeAccountPayoutProfile: string;
  timeAccountPurchaseProfile: string;
  unit: string;
  accountCreationAutomationLevelNav?: IMDFEnumValue;
  accountCreationReferenceDateNav?: IMDFEnumValue;
  accrualAutomationLevelNav?: IMDFEnumValue;
  accrualCalculationMethodNav?: IMDFEnumValue;
  accrualFrequencyNav?: IMDFEnumValue;
  accrualRecalculationPostingMethodNav?: IMDFEnumValue;
  accrualWaitingPeriodUnitNav?: IMDFEnumValue;
  allowPayoutWithSimulationNav?: IMDFEnumValue;
  countryExtensionAUS?: ITimeAccountTypeAUS;
  countryNav?: ICountry[];
  createdByNav?: IUser;
  creationNav?: IMDFEnumValue;
  entitlementMethodNav?: IMDFEnumValue;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  levelOfSimulationPrecisionNav?: IMDFEnumValue;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  payComponentAccrualSeparatedNav?: IFOPayComponent[];
  payComponentGroupNav?: IFOPayComponentGroup[];
  payComponentNav?: IFOPayComponent[];
  payComponentTerminationAccrualSeparatedNav?: IFOPayComponent[];
  payComponentTerminationNav?: IFOPayComponent[];
  payoutEligibilityNav?: IMDFEnumValue;
  pepCalendarAutomationLevelNav?: IMDFEnumValue;
  postingOrderNav?: IMDFEnumValue;
  purchaseEligibilityNav?: IMDFEnumValue;
  terminationRuleDataEffectiveDateNav?: IMDFEnumValue;
  timeAccountPayoutProfileNav?: ITimeAccountPayoutProfile;
  timeAccountPurchaseProfileNav?: ITimeAccountPurchaseProfile;
  unitNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IDevGoal_2006 {
  id: number;
  category: string;
  description: string;
  due: Date;
  flag: number;
  guid: string;
  lastModified: Date;
  modifier: string;
  name: string;
  numbering: string;
  planId: number;
  purpose: string;
  purposeLabel: string;
  start: Date;
  state: string;
  stateLabel: string;
  status: number;
  type: string;
  userId: string;
  goalModifier?: IUser;
  goalOwner?: IUser;
  initiativesNal?: IInitiativeAlignmentBean[];
}

export interface ITodo {
  categoryId: string;
  categoryLabel: string;
  displayOrder: number;
  status: number;
  todos: IToDoBean[];
}

export interface ICalibrationSessionReviewer {
  sessionReviewerId: number;
  calSessionId: number;
  reviewerType: string;
  userId: string;
  reviewerUser?: IUser;
}

export interface IFOWfConfigStepApprover {
  externalCode: string;
  stepNum: number;
  actionType: string;
  approverPositionRelationship: string;
  approverRole: string;
  approverType: string;
  context: string;
  createdBy?: string;
  createdDateTime: Date;
  emailConfiguration: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  relationshipToApprover: string;
  relationshipToPosition: string;
  respectRBP: boolean;
  skipType: string;
  approverDynamicRoleNav?: IFODynamicRole[];
  approverGroupNav?: IDynamicGroup;
  approverPositionNav?: IPosition[];
}

export interface IExtEmailInfo {
  emailInfoId: number;
  emailAddress: string;
  emailType: string;
  isPrimary: string;
  lastModifiedDateTime: Date;
  emailTypeNav?: IPicklistOption;
}

export interface ICust_GER_Template {
  ID: number;
  cust_GERApplication_externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  cust_AllowClose: boolean;
  cust_AppTemplateID: string;
  cust_BusinessUnitID: string;
  cust_BusinessUnitName: string;
  cust_CompanyID: string;
  cust_CompanyName: string;
  cust_DepartmentID: string;
  cust_DepartmentName: string;
  cust_DivisionID: string;
  cust_DivisionName: string;
  cust_JobCategory: string;
  cust_JobCategoryText: string;
  cust_JobDescription: string;
  cust_JobFunction: string;
  cust_JobFunctionText: string;
  cust_JobLevel: string;
  cust_JobLevelText: string;
  cust_JobTitle: string;
  cust_ReqTemplateID: string;
  cust_RequireAssignment: boolean;
  cust_RequiresQuestions: boolean;
  cust_jobCode: string;
  cust_partTime: boolean;
  cust_seasonal: boolean;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  cust_BusinessUnits?: IFOBusinessUnit[];
  cust_Departments?: IFODepartment[];
  cust_Divisions?: IFODivision[];
  cust_GERReqTempl?: ICust_GERReqTempl[];
  cust_LegalEntities?: IFOCompany[];
  cust_TemplateVariables?: ICust_GERTemplateVariables[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IPayrollConfigurationCategory {
  PayrollSystemConfiguration_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  externalCategoryName_ar_SA: string;
  externalCategoryName_da_DK: string;
  externalCategoryName_de_DE: string;
  externalCategoryName_defaultValue: string;
  externalCategoryName_en_DEBUG: string;
  externalCategoryName_en_GB: string;
  externalCategoryName_en_US: string;
  externalCategoryName_fr_FR: string;
  externalCategoryName_localized: string;
  externalCategoryName_nl_NL: string;
  externalCategoryName_pl_PL: string;
  externalCategoryName_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  externalCategoryNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  links?: IPayrollConfigurationCategoryLink[];
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IExternalLearnerPersonalInfo {
  itemId: number;
  birthName: string;
  birthNameAlt1: string;
  birthNameAlt2: string;
  certificateEndDate: Date;
  certificateStartDate: Date;
  challengeStatus: boolean;
  countryOfBirth: string;
  dateOfBirth: Date;
  dateOfDeath: Date;
  displayName: string;
  displayNameAlt1: string;
  displayNameAlt2: string;
  firstName: string;
  firstNameAlt1: string;
  firstNameAlt2: string;
  formalName: string;
  formalNameAlt1: string;
  formalNameAlt2: string;
  gender: string;
  initials: string;
  isOverridden: boolean;
  is_deleted: boolean;
  lastModifiedDateTime: Date;
  lastName: string;
  lastNameAlt1: string;
  lastNameAlt2: string;
  maritalStatus: string;
  middleName: string;
  middleNameAlt1: string;
  middleNameAlt2: string;
  nameFormatCode: string;
  namePrefix: string;
  nationality: string;
  nativePreferredLang: string;
  partnerName: string;
  partnerNamePrefix: string;
  preferredName: string;
  salutation: string;
  script: string;
  scriptAlt1: string;
  scriptAlt2: string;
  secondLastName: string;
  secondNationality: string;
  secondTitle: string;
  since: Date;
  suffix: string;
  thirdName: string;
  thirdNameAlt1: string;
  thirdNameAlt2: string;
  thirdNationality: string;
  title: string;
}

export interface IDevGoal_2007 {
  id: number;
  category: string;
  description: string;
  due: Date;
  flag: number;
  guid: string;
  lastModified: Date;
  modifier: string;
  name: string;
  numbering: string;
  planId: number;
  purpose: string;
  purposeLabel: string;
  start: Date;
  state: string;
  stateLabel: string;
  status: number;
  type: string;
  userId: string;
  goalModifier?: IUser;
  goalOwner?: IUser;
  initiativesNal?: IInitiativeAlignmentBean[];
}

export interface IJobRequisitionPosting {
  jobPostingId: number;
  jobReqId: number;
  agencyComments: string;
  boardId: string;
  boardName: string;
  channelId: string;
  extPartnerAccountId: number;
  isPostingUpdatable: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  postEndDate: Date;
  postEndDateOffset: Date;
  postStartDate: Date;
  postStartDateOffset: Date;
  postedBy: string;
  postingStatus: string;
  jobReqPostingPermissionsNav?: IJobRequisitionPostingFieldControls;
  jobRequisition?: IJobRequisition;
  lastModifiedByNav?: IUser;
  postedByNav?: IUser;
}

export interface ICust_CC_JobProfile {
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  cust_Description: string;
  cust_EndDate: Date;
  cust_Group: string;
  cust_IconId: string;
  cust_IsDeprecated: boolean;
  cust_Name: string;
  cust_ProfileType: string;
  cust_StartDate: Date;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  cust_ToProfileComp?: ICust_CC_ProfileComp[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface ICompetencyContent {
  JobProfile_externalCode: string;
  externalCode: string;
  competencyMappingId: string;
  createdBy?: string;
  createdDateTime: Date;
  entity: string;
  jobProfileId: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  order: number;
  role: string;
  sectionId: string;
  sectionType: string;
  status: string;
  subModule: string;
  createdByNav?: IUser;
  entityNav?: ICompetencyEntity;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  roleNav?: IRoleEntity;
  statusNav?: IMDFEnumValue;
}

export interface IDevGoal_2002 {
  id: number;
  category: string;
  description: string;
  due: Date;
  flag: number;
  guid: string;
  lastModified: Date;
  modifier: string;
  name: string;
  numbering: string;
  planId: number;
  start: Date;
  state: string;
  stateLabel: string;
  status: number;
  type: string;
  userId: string;
  goalModifier?: IUser;
  goalOwner?: IUser;
  initiativesNal?: IInitiativeAlignmentBean[];
}

export interface IBackground_Fsaelection {
  backgroundElementId: number;
  userId: string;
  bgOrderPos: number;
  fsabalance: string;
  fsacontributions: string;
  fsaelectionamount: string;
  fsafundsout: string;
  fsaplan: string;
  fsarepayment: string;
  lastModifiedDate: Date;
  fsaplanNav?: IPicklistOption;
  userIdNav?: IUser;
}

export interface ICandidateProfileExtension {
  candidateId: number;
  createdBy?: string;
  createdDateTime: Date;
  cust_AvailabilityDate: Date;
  cust_DrivingLicense: boolean;
  cust_Location: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface ITimeTypeDEU {
  TimeType_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  durationOfContinuedSickPayPeriod: number;
  durationOfContinuedSickPayTimeUnit: string;
  durationOfSickPaySupplementPeriod: number;
  durationOfSickPaySupplementTimeUnit: string;
  electronicSicknessCertificateExclusionReasonAllowed: boolean;
  entityUUID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  sicknessVariant: string;
  withoutSickPayDates: boolean;
  createdByNav?: IUser;
  durationOfContinuedSickPayTimeUnitNav?: IMDFEnumValue;
  durationOfSickPaySupplementTimeUnitNav?: IMDFEnumValue;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  sicknessVariantNav?: IMDFEnumValue;
}

export interface IEmployeeTimeMEX {
  EmployeeTime_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  daysAlreadyCumulatedForSameSickness: number;
  entityUUID: string;
  identicalSicknessGroup: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  referenceNumber: string;
  createdByNav?: IUser;
  identicalSicknessGroupNav?: IEmployeeTimeGroup;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface ICustomNav {
  title: string;
  altText: string;
  alwaysShow: boolean;
  isModule: boolean;
  isSelected: boolean;
  label: string;
  newWindow: boolean;
  url: string;
}

export interface IPerEmergencyContacts {
  name: string;
  personIdExternal: string;
  relationship: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  email: string;
  isDependent: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  operation: string;
  phone: string;
  primaryFlag: string;
  secondPhone: string;
  personNav?: IPerPerson;
  relationshipNav?: IPicklistOption;
}

export interface IRecurringDeduction {
  effectiveStartDate: Date;
  userSysId: string;
  createdBy?: string;
  createdDateTime: Date;
  effectiveEndDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  recurringItems?: IRecurringDeductionItem[];
  userSysIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IFormRouteStep {
  formDataId: number;
  stepOrder: number;
  completed: boolean;
  current: boolean;
  dueDate: string;
  overDue: boolean;
  stageName: string;
  stageType: string;
  stepDescription: string;
  stepId: string;
  stepName: string;
  stepType: string;
  userFullName: string;
  userId: string;
  userRole: string;
  routeSubStep?: IFormRouteSubStep[];
}

export interface IEmpTimeAccountBalance {
  timeAccount: string;
  accountClosed: boolean;
  balance: number;
  timeAccountType: string;
  timeUnit: string;
  userId: string;
}

export interface IPickListV2 {
  effectiveStartDate: Date;
  id: string;
  createdBy?: string;
  createdDateTime: Date;
  displayOrder: string;
  effectiveEndDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  legacyPickListId: string;
  mdfSystemRecordStatus: string;
  name: string;
  parentPickList: string;
  picklistCreationSource: string;
  status: string;
  createdByNav?: IUser;
  displayOrderNav?: IMDFEnumValue;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  parentPickListNav?: IPickListV2;
  picklistCreationSourceNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
  values?: IPickListValueV2[];
  wfRequestNav?: IWfRequest[];
}

export interface IJobRequisitionAssessment {
  assessmentAssociationId: number;
  appStatusSetItemId: number;
  assessmentPackageCode: string;
  createdBy?: string;
  createdDateTime: Date;
  emailTemplateId: number;
  jobReqId: number;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  vendorCode: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
}

export interface IFOJobClassLocalCAN {
  country: string;
  externalCode: string;
  startDate: Date;
  classificationGroupCA: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  mdfSystemRecordId: string;
  occupationalClassification: string;
  status: string;
  classificationGroupCANav?: IPickListValueV2[];
  countryNav?: ITerritory;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
}

export interface IJobClassificationITA {
  JobClassificationCountry_country: string;
  JobClassification_effectiveStartDate: Date;
  JobClassification_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  inailCode: number;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IJDTemplateFamilyMapping {
  JobDescTemplate_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  family: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  status: string;
  subModule: string;
  createdByNav?: IUser;
  familyNav?: IFamilyEntity;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
}

export interface ISuccessStoreContentBlob {
  contentId: string;
}

export interface ICandidateTags {
  tagId: number;
  candidateId: number;
  label: string;
  locale: string;
  candidates?: ICandidate[];
}

export interface ITimeAccountPayoutProfile {
  externalCode: string;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  entityUUID: string;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  payComponent: string;
  payComponentAccrualSeparated: string;
  payComponentGroup: string;
  payComponentTermination: string;
  payComponentTerminationAccrualSeparated: string;
  payoutMessageText_ar_SA: string;
  payoutMessageText_da_DK: string;
  payoutMessageText_de_DE: string;
  payoutMessageText_defaultValue: string;
  payoutMessageText_en_DEBUG: string;
  payoutMessageText_en_GB: string;
  payoutMessageText_en_US: string;
  payoutMessageText_fr_FR: string;
  payoutMessageText_localized: string;
  payoutMessageText_nl_NL: string;
  payoutMessageText_pl_PL: string;
  payoutMessageText_sv_SE: string;
  workflowConfiguration: string;
  countryNav?: ICountry[];
  createdByNav?: IUser;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  payComponentAccrualSeparatedNav?: IFOPayComponent[];
  payComponentGroupNav?: IFOPayComponentGroup[];
  payComponentNav?: IFOPayComponent[];
  payComponentTerminationAccrualSeparatedNav?: IFOPayComponent[];
  payComponentTerminationNav?: IFOPayComponent[];
  payoutMessageTextTranslationTextNav?: IMDFLocalizedValue[];
  wfRequestNav?: IWfRequest[];
  workflowConfigurationNav?: IFOWfConfig;
}

export interface IDGField {
  name: string;
  dataType: string;
  label: string;
  picklistId: string;
  allowedOperators?: IDGFieldOperator[];
}

export interface IPaymentInformationDetailV3NZL {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEffectiveStartDate: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  paymentReference: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
}

export interface IFormCompetencySection {
  formContentId: number;
  formDataId: number;
  sectionIndex: number;
  sectionDescription: string;
  sectionName: string;
  sectionWeight: string;
  sectionWeightKey: string;
  competencies?: IFormCompetency[];
  othersRatingComment?: IFormUserRatingComment[];
  sectionConfiguration?: IFormSectionConfiguration;
  selfRatingComment?: IFormUserRatingComment;
}

export interface IThemeConfig {
  id: string;
  themeConfiguration: IGlobalThemeConfiguration;
}

export interface IEmpCompensation {
  startDate: Date;
  userId: string;
  changeReason: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  event: string;
  eventReason: string;
  isEligibleForCar: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  operation: string;
  payGroup: string;
  payType: string;
  payrollId: string;
  empCompensationCalculatedNav?: IEmpCompensationCalculated;
  empCompensationGroupSumCalculatedNav?: IEmpCompensationGroupSumCalculated[];
  empPayCompRecurringNav?: IEmpPayCompRecurring[];
  employmentNav?: IEmpEmployment;
  eventNav?: IPicklistOption;
  eventReasonNav?: IFOEventReason;
  payGroupNav?: IFOPayGroup;
  payTypeNav?: IPicklistOption;
  userNav?: IUser;
  wfRequestNav?: IWfRequest;
}

export interface IHoliday {
  holidayCode: string;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  entityUUID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  name_ar_SA: string;
  name_da_DK: string;
  name_de_DE: string;
  name_defaultValue: string;
  name_en_DEBUG: string;
  name_en_GB: string;
  name_en_US: string;
  name_fr_FR: string;
  name_localized: string;
  name_nl_NL: string;
  name_pl_PL: string;
  name_sv_SE: string;
  oldName: string;
  countryNav?: ICountry[];
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  nameTranslationTextNav?: IMDFLocalizedValue[];
  wfRequestNav?: IWfRequest[];
}

export interface ITeamGoal_1000 {
  id: number;
  category?: string;
  currentOwner: string;
  description: string;
  done: number;
  due?: Date;
  dueDateInUTC?: Date;
  flag?: number;
  guid: string;
  lastModified: Date;
  metric: string;
  modifier: string;
  name: string;
  numbering: string;
  planId: number;
  start?: Date;
  startDateInUTC?: Date;
  state: string;
  stateLabel: string;
  status: number;
  type: string;
  userId: string;
  weight: number;
  assignees?: IGoal_1000[];
  initiatives?: IInitiativeAlignmentBean[];
  shares?: ITeamGoalOwner[];
}

export interface ISkillEntity {
  externalCode: string;
  category_ar_SA: string;
  category_da_DK: string;
  category_de_DE: string;
  category_defaultValue: string;
  category_en_DEBUG: string;
  category_en_GB: string;
  category_en_US: string;
  category_fr_FR: string;
  category_localized: string;
  category_nl_NL: string;
  category_pl_PL: string;
  category_sv_SE: string;
  createdBy?: string;
  createdDateTime: Date;
  definition_ar_SA: string;
  definition_da_DK: string;
  definition_de_DE: string;
  definition_defaultValue: string;
  definition_en_DEBUG: string;
  definition_en_GB: string;
  definition_en_US: string;
  definition_fr_FR: string;
  definition_localized: string;
  definition_nl_NL: string;
  definition_pl_PL: string;
  definition_sv_SE: string;
  group_ar_SA: string;
  group_da_DK: string;
  group_de_DE: string;
  group_defaultValue: string;
  group_en_DEBUG: string;
  group_en_GB: string;
  group_en_US: string;
  group_fr_FR: string;
  group_localized: string;
  group_nl_NL: string;
  group_pl_PL: string;
  group_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  libName_ar_SA: string;
  libName_da_DK: string;
  libName_de_DE: string;
  libName_defaultValue: string;
  libName_en_DEBUG: string;
  libName_en_GB: string;
  libName_en_US: string;
  libName_fr_FR: string;
  libName_localized: string;
  libName_nl_NL: string;
  libName_pl_PL: string;
  libName_sv_SE: string;
  mdfSystemRecordStatus: string;
  name_ar_SA: string;
  name_da_DK: string;
  name_de_DE: string;
  name_defaultValue: string;
  name_en_DEBUG: string;
  name_en_GB: string;
  name_en_US: string;
  name_fr_FR: string;
  name_localized: string;
  name_nl_NL: string;
  name_pl_PL: string;
  name_sv_SE: string;
  proLevel1_ar_SA: string;
  proLevel1_da_DK: string;
  proLevel1_de_DE: string;
  proLevel1_defaultValue: string;
  proLevel1_en_DEBUG: string;
  proLevel1_en_GB: string;
  proLevel1_en_US: string;
  proLevel1_fr_FR: string;
  proLevel1_localized: string;
  proLevel1_nl_NL: string;
  proLevel1_pl_PL: string;
  proLevel1_sv_SE: string;
  proLevel2_ar_SA: string;
  proLevel2_da_DK: string;
  proLevel2_de_DE: string;
  proLevel2_defaultValue: string;
  proLevel2_en_DEBUG: string;
  proLevel2_en_GB: string;
  proLevel2_en_US: string;
  proLevel2_fr_FR: string;
  proLevel2_localized: string;
  proLevel2_nl_NL: string;
  proLevel2_pl_PL: string;
  proLevel2_sv_SE: string;
  proLevel3_ar_SA: string;
  proLevel3_da_DK: string;
  proLevel3_de_DE: string;
  proLevel3_defaultValue: string;
  proLevel3_en_DEBUG: string;
  proLevel3_en_GB: string;
  proLevel3_en_US: string;
  proLevel3_fr_FR: string;
  proLevel3_localized: string;
  proLevel3_nl_NL: string;
  proLevel3_pl_PL: string;
  proLevel3_sv_SE: string;
  proLevel4_ar_SA: string;
  proLevel4_da_DK: string;
  proLevel4_de_DE: string;
  proLevel4_defaultValue: string;
  proLevel4_en_DEBUG: string;
  proLevel4_en_GB: string;
  proLevel4_en_US: string;
  proLevel4_fr_FR: string;
  proLevel4_localized: string;
  proLevel4_nl_NL: string;
  proLevel4_pl_PL: string;
  proLevel4_sv_SE: string;
  proLevel5_ar_SA: string;
  proLevel5_da_DK: string;
  proLevel5_de_DE: string;
  proLevel5_defaultValue: string;
  proLevel5_en_DEBUG: string;
  proLevel5_en_GB: string;
  proLevel5_en_US: string;
  proLevel5_fr_FR: string;
  proLevel5_localized: string;
  proLevel5_nl_NL: string;
  proLevel5_pl_PL: string;
  proLevel5_sv_SE: string;
  status: string;
  subModule: string;
  categoryTranslationTextNav?: IMDFLocalizedValue[];
  createdByNav?: IUser;
  definitionTranslationTextNav?: IMDFLocalizedValue[];
  groupTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  legalEntities?: IFOCompany[];
  libNameTranslationTextNav?: IMDFLocalizedValue[];
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  nameTranslationTextNav?: IMDFLocalizedValue[];
  proLevel1TranslationTextNav?: IMDFLocalizedValue[];
  proLevel2TranslationTextNav?: IMDFLocalizedValue[];
  proLevel3TranslationTextNav?: IMDFLocalizedValue[];
  proLevel4TranslationTextNav?: IMDFLocalizedValue[];
  proLevel5TranslationTextNav?: IMDFLocalizedValue[];
  statusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IONB2Process {
  processId: string;
  activitiesConfig: string;
  activitiesStatus: string;
  bpeProcessInstanceId: string;
  cancelEventReason: string;
  cancelOffboardingReason: string;
  cancelOnboardingReason: string;
  cancellationComment: string;
  cancellationDate: Date;
  cancelledDueToRestart: boolean;
  createdBy?: string;
  createdDateTime: Date;
  customDataCollectionConfig: string;
  employeePersonId: number;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  locale: string;
  manager: string;
  managerPersonId: number;
  mdfSystemRecordStatus: string;
  offboardingActivitiesConfig: string;
  onboardingHireStatus: string;
  onboardingHiredDate: Date;
  onboardingInternalHire: boolean;
  processRestarted: boolean;
  processStatus: string;
  processTrigger: string;
  processType: string;
  processVariant: string;
  stableId: string;
  startDate: Date;
  targetDate: Date;
  targetSystem: string;
  user: string;
  activitiesStatusNav?: IMDFEnumValue;
  cancelEventReasonNav?: IFOEventReason[];
  cancelOffboardingReasonNav?: IPickListValueV2[];
  cancelOnboardingReasonNav?: IPickListValueV2[];
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  managerNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  onboardingHireStatusNav?: IMDFEnumValue;
  processStatusNav?: IMDFEnumValue;
  processTasks?: IONB2ProcessTask[];
  processTriggerNav?: IONB2ProcessTrigger;
  processTypeNav?: IMDFEnumValue;
  targetSystemNav?: IMDFEnumValue;
  toBuddyActivity?: IONB2BuddyActivity;
  toComplianceProcess?: IComplianceProcess[];
  toDataCollectionUserConfig?: IONB2DataCollectionUserConfig;
  toEquipmentActivity?: IONB2EquipmentActivity[];
  userNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IWorkflowAllowedActionList {
  wfRequestId: number;
  allowApprove: boolean;
  allowDelegateDecline: boolean;
  allowDelegateGrant: boolean;
  allowDelegateRevoke: boolean;
  allowPostComment: boolean;
  allowReject: boolean;
  allowResubmit: boolean;
  allowSendback: boolean;
  allowUpdateRequest: boolean;
  allowWithdraw: boolean;
}

export interface IJobAnalyzerReportingData {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  currency: string;
  detectedSkills: string;
  femaleScore: number;
  feminineBiasedTerms: string;
  jobReqId: number;
  languageScore: number;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  maleScore: number;
  marketSkills: string;
  masculineBiasedTerms: string;
  matchedJobFamilyCode: string;
  matchedJobFamilyLabel: string;
  matchedJobFamilyType: string;
  matchedJobLocationCode: string;
  matchedJobLocationType: string;
  mdfSystemRecordStatus: string;
  neutralScore: number;
  predictedSalary: number;
  salaryRangeHigh: number;
  salaryRangeLow: number;
  createdByNav?: IUser;
  currencyNav?: ICurrency[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IEmployeeTime {
  externalCode: string;
  approvalStatus: string;
  cancellationWorkflowRequestId: number;
  comment: string;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  cust_FR_AA_REASON: string;
  deductionQuantity: number;
  displayQuantity: number;
  editable: boolean;
  endDate: Date;
  endTime: Date;
  entityUUID: string;
  flexibleRequesting: boolean;
  fractionQuantity: number;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  loaActualReturnDate: Date;
  loaEndJobInfoId: number;
  loaExpectedReturnDate: Date;
  loaStartJobInfoId: number;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEffectiveStartDate: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  originalQuantityInDays: number;
  physicalEndDate: Date;
  physicalStartDate: Date;
  quantityInDays: number;
  quantityInHours: number;
  recurrenceGroup: string;
  startDate: Date;
  startTime: Date;
  timeRecordOrigin: string;
  timeType: string;
  undeterminedEndDate: boolean;
  userId: string;
  workflowInitiatedByAdmin: boolean;
  workflowRequestId: number;
  approvalStatusNav?: IMDFEnumValue;
  countryExtensionAUS?: IEmployeeTimeAUS;
  countryExtensionCAN?: IEmployeeTimeCAN;
  countryExtensionCOL?: IEmployeeTimeCOL;
  countryExtensionDEU?: IEmployeeTimeDEU;
  countryExtensionESP?: IEmployeeTimeESP;
  countryExtensionMEX?: IEmployeeTimeMEX;
  countryExtensionNLD?: IEmployeeTimeNLD;
  countryExtensionPOL?: IEmployeeTimePOL;
  countryExtensionUSA?: IEmployeeTimeUSA;
  createdByNav?: IUser;
  cust_FR_AA_REASONNav?: IPickListValueV2[];
  cust_attachmentNav?: IAttachment;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
  recurrenceGroupNav?: IEmployeeTimeGroup;
  timeCalendar?: IEmployeeTimeCalendar[];
  timeRecordOriginNav?: IMDFEnumValue;
  timeTypeNav?: ITimeType;
  userIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface ICalibrationSessionParticipantsInfo {
  sessionId: string;
  email: string;
  firstName: string;
  lastName: string;
  reviewerType: string;
  uniqueldentifier: string;
  username: string;
}

export interface IEmpCostDistributionItem {
  EmpCostDistribution_effectiveStartDate: Date;
  EmpCostDistribution_usersSysId: string;
  externalCode: number;
  costCenter: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  percentage: number;
  costCenterNav?: IFOCostCenter[];
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IFOLegalEntityLocalDEFLT {
  country: string;
  externalCode: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  status: string;
  countryNav?: ITerritory;
}

export interface ITimeAccountPostingRule {
  TimeType_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  entityUUID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  timeAccountType: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  timeAccountTypeNav?: ITimeAccountType;
}

export interface IMDFBlockConfig {
  code: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  objectType: string;
  screenId: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IBackground_PreferredNextMove {
  backgroundElementId: number;
  userId: string;
  bgOrderPos: number;
  comments: string;
  function: string;
  lastModifiedDate: Date;
  level: string;
  timeframe: string;
  title: string;
  functionNav?: IPicklistOption;
  levelNav?: IPicklistOption;
  timeframeNav?: IPicklistOption;
  userIdNav?: IUser;
}

export interface IAttachment {
  attachmentId: number;
  country: string;
  createdDate: Date;
  deletable: boolean;
  deprecable: boolean;
  description: string;
  documentCategory: string;
  documentEntityId: string;
  documentEntityType: string;
  documentType: string;
  externalId: number;
  fileContent: Buffer;
  fileExtension: string;
  fileName: string;
  fileSize: number;
  imageConvertInProgress: boolean;
  language: string;
  lastAccessed: Date;
  lastModifiedDateTime: Date;
  mimeType: string;
  module: string;
  moduleCategory: string;
  ownerId: string;
  ownerIdType: string;
  piiFlag: number;
  searchable: boolean;
  softDelete: boolean;
  userId: string;
  viewable: boolean;
  candidateNav?: ICandidate;
  userNav?: IUser;
}

export interface IRBPBasicPermission {
  permissionId: number;
  permissionLongValue: number;
  permissionStringValue: string;
  permissionType: string;
}

export interface IONB2DataCollectionUserConfig {
  id: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  process: string;
  subjectUser: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  processNav?: IONB2Process;
  subjectUserNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IGoalTaskPermission_3 {
  id: number;
  createRow: boolean;
  deleteRow: boolean;
  description: number;
  done: number;
  due: number;
  moveRow: boolean;
  type: string;
  userId: string;
}

export interface IGoalTaskPermission_2 {
  id: number;
  createRow: boolean;
  deleteRow: boolean;
  description: number;
  done: number;
  due: number;
  moveRow: boolean;
  type: string;
  userId: string;
}

export interface IFormRouteMap {
  formDataId: number;
  routeId: number;
  routeName: string;
  routeStep?: IFormRouteStep[];
}

export interface IPaymentInformationDetailV3ISR {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  branchName: string;
  branchNumberCode: string;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEffectiveStartDate: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
}

export interface ICandidateBackground_Education {
  backgroundElementId: number;
  bgOrderPos: number;
  candidateId: number;
  degree: string;
  endDate: Date;
  lastModifiedDateTime: Date;
  major: string;
  school: string;
  startDate: Date;
  candidate?: ICandidate;
  degreeNav?: IPicklistOption;
  majorNav?: IPicklistOption;
}

export interface IEmployeeTimeGroupItem {
  EmployeeTimeGroup_externalCode: string;
  externalCode: string;
  comment: string;
  createdBy?: string;
  createdDateTime: Date;
  employeeTime: string;
  entityUUID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  employeeTimeNav?: IEmployeeTime;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IAchievement {
  achievementId: number;
  achievementDate: Date;
  achievementName: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  parentExternalId: number;
  parentTypeEnum: string;
  recordId: string;
  reviewed: boolean;
  snapshot: boolean;
  subjectUserId: string;
  createdByNav?: IUser;
  devGoalDetailList?: IAchievementDevGoalDetail[];
  goalDetailList?: IAchievementGoalDetail[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  parentTypeEnumNav?: IMDFEnumValue;
  subjectUserIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IForm360ParticipantSection {
  formContentId: number;
  formDataId: number;
  sectionConfigurable: boolean;
  sectionDescription: string;
  sectionIndex: number;
  sectionName: string;
  formParticipants?: IForm360Participant[];
  participantConfig?: IForm360ParticipantConfig;
}

export interface IInformationDataSubjectConfiguration {
  externalCode: string;
  configData: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  locale: string;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IEmpPayCompNonRecurring {
  payComponentCode: string;
  payDate: Date;
  userId: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  currencyCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  notes: string;
  operation: string;
  value: number;
  employmentNav?: IEmpEmployment;
  payComponentCodeNav?: IFOPayComponent[];
  userNav?: IUser;
  wfRequestNav?: IWfRequest;
}

export interface IForm360Participant {
  formContentId: number;
  formDataId: number;
  participantId: string;
  isExternalUser: boolean;
  isFixedCategory: boolean;
  isRemovable: boolean;
  participantAction: string;
  participantCategory: string;
  participantOrder: number;
  participantUsername: string;
  participantDetails?: IForm360ParticipantDetail[];
  participantUser?: IUser;
}

export interface IBackground_Benefitselection {
  backgroundElementId: number;
  userId: string;
  bgOrderPos: number;
  dental: string;
  depdisability: string;
  depgender: string;
  depname: string;
  depnationalid: string;
  depsmoke: string;
  depstudent: string;
  endDate: Date;
  health: string;
  lastModifiedDate: Date;
  relation: string;
  dentalNav?: IPicklistOption;
  depdisabilityNav?: IPicklistOption;
  depgenderNav?: IPicklistOption;
  depsmokeNav?: IPicklistOption;
  depstudentNav?: IPicklistOption;
  healthNav?: IPicklistOption;
  relationNav?: IPicklistOption;
  userIdNav?: IUser;
}

export interface IEmploymentConditionContent {
  JobProfile_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  entity: string;
  jobProfileId: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  order: number;
  sectionId: string;
  sectionType: string;
  status: string;
  subModule: string;
  createdByNav?: IUser;
  entityNav?: IEmploymentConditionEntity;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
}

export interface ICandidate {
  candidateId: number;
  address: string;
  agreeToPrivacyStatement: string;
  anonymized: string;
  anonymizedDateTime: Date;
  candidateLocale: string;
  cellPhone: string;
  city: string;
  consentToMarketing: string;
  contactEmail: string;
  country: string;
  creationDateTime: Date;
  dataPrivacyId: number;
  dateofAvailability: Date;
  externalCandidate: boolean;
  firstName: string;
  lastLoginDateTime: Date;
  lastModifiedDateTime: Date;
  lastName: string;
  middleName: string;
  partnerMemberId: string;
  partnerSource: number;
  password: string;
  primaryEmail: string;
  privacyAcceptDateTime: Date;
  publicIntranet: boolean;
  shareProfile: string;
  state: string;
  usersSysId: string;
  visibilityOption: boolean;
  zip: string;
  candidateProfileConversionInfo?: ICandidateProfileConversionInfo;
  candidateProfileExtension?: ICandidateProfileExtension;
  education?: ICandidateBackground_Education[];
  globalInfo?: ICandidateBackground_GlobalInfo[];
  insideWorkExperience?: ICandidateBackground_InsideWorkExperience[];
  jobReqFwdCandidates?: IJobReqFwdCandidates[];
  jobsApplied?: IJobApplication[];
  languages?: ICandidateBackground_Languages[];
  mobility?: ICandidateBackground_Mobility[];
  outsideWorkExperience?: ICandidateBackground_OutsideWorkExperience[];
  supportingDoc?: IAttachment[];
  tags?: ICandidateTags[];
  user?: IUser;
}

export interface IFormCustomizedWeightedRatingSection {
  formContentId: number;
  formDataId: number;
  sectionDescription: string;
  sectionIndex: number;
  sectionName: string;
  calculatedRating?: IFormUserRatingComment;
  manualRating?: IFormUserRatingComment;
  sectionConfiguration?: IFormSectionConfiguration;
}

export interface ICandidateBackground_OutsideWorkExperience {
  backgroundElementId: number;
  bgOrderPos: number;
  businessType: string;
  candidateId: number;
  employer: string;
  endDate: Date;
  lastModifiedDateTime: Date;
  startDate: Date;
  startTitle: string;
  businessTypeNav?: IPicklistOption;
  candidate?: ICandidate;
}

export interface IJobApplicationOnboardingData {
  onboardingId: number;
  applicationId: number;
  status: string;
  submittedBy: string;
  submittedOn: Date;
  jobApplication?: IJobApplication;
  onboardingStatus?: IJobApplicationOnboardingStatus[];
  submittedByNav?: IUser;
}

export interface IFormSignatureSection {
  formContentId: number;
  formDataId: number;
  sectionIndex: number;
  sectionDescription: string;
  sectionName: string;
  signatures?: IFormSignature[];
}

export interface IFOJobClassLocalITA {
  country: string;
  externalCode: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  inailCode: number;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  mdfSystemRecordId: string;
  status: string;
  countryNav?: ITerritory;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
}

export interface IPayPeriod {
  PayCalendar_payGroup: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  offcycle: boolean;
  payCheckIssueDate: Date;
  payPeriodBeginDate: Date;
  payPeriodEndDate: Date;
  processingRunId: string;
  runType: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  runTypeNav?: IPickListValueV2[];
}

export interface IFOPayRange {
  externalCode: string;
  startDate: Date;
  companyFlx: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  currency: string;
  description: string;
  endDate: Date;
  frequencyCode: string;
  geozoneFlx: string;
  jobFunctionFlx: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  maximumPay: number;
  midPoint: number;
  minimumPay: number;
  name: string;
  payGradeFlx: string;
  status: string;
  companyFlxNav?: IFOCompany[];
  descriptionTranslationNav?: IFoTranslation;
  frequencyCodeNav?: IFOFrequency;
  geozoneFlxNav?: IFOGeozone;
  jobFunctionFlxNav?: IFOJobFunction[];
  nameTranslationNav?: IFoTranslation;
  payGradeFlxNav?: IFOPayGrade;
}

export interface ICust_CC_UserComp {
  cust_CC_UserFuncComp_externalCode: number;
  cust_CC_User_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  cust_CompId: string;
  cust_EndDate: Date;
  cust_Handled: boolean;
  cust_HandledBy: string;
  cust_LastRatedBy: string;
  cust_Rating: string;
  cust_Requested: boolean;
  cust_StartDate: Date;
  cust_State: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  cust_HandledByNav?: IUser;
  cust_StateNav?: IPickListValueV2[];
  cust_ToUserTask?: ICust_CC_UserTask[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IJobProfile {
  externalCode: string;
  compData_ar_SA: string;
  compData_da_DK: string;
  compData_de_DE: string;
  compData_defaultValue: string;
  compData_en_DEBUG: string;
  compData_en_GB: string;
  compData_en_US: string;
  compData_fr_FR: string;
  compData_localized: string;
  compData_nl_NL: string;
  compData_pl_PL: string;
  compData_sv_SE: string;
  createdBy?: string;
  createdDateTime: Date;
  draft: boolean;
  footer_ar_SA: string;
  footer_da_DK: string;
  footer_de_DE: string;
  footer_defaultValue: string;
  footer_en_DEBUG: string;
  footer_en_GB: string;
  footer_en_US: string;
  footer_fr_FR: string;
  footer_localized: string;
  footer_nl_NL: string;
  footer_pl_PL: string;
  footer_sv_SE: string;
  header_ar_SA: string;
  header_da_DK: string;
  header_de_DE: string;
  header_defaultValue: string;
  header_en_DEBUG: string;
  header_en_GB: string;
  header_en_US: string;
  header_fr_FR: string;
  header_localized: string;
  header_nl_NL: string;
  header_pl_PL: string;
  header_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifierName: string;
  longDesc_ar_SA: string;
  longDesc_da_DK: string;
  longDesc_de_DE: string;
  longDesc_defaultValue: string;
  longDesc_en_DEBUG: string;
  longDesc_en_GB: string;
  longDesc_en_US: string;
  longDesc_fr_FR: string;
  longDesc_localized: string;
  longDesc_nl_NL: string;
  longDesc_pl_PL: string;
  longDesc_sv_SE: string;
  mdfSystemRecordStatus: string;
  migrated: boolean;
  name_ar_SA: string;
  name_da_DK: string;
  name_de_DE: string;
  name_defaultValue: string;
  name_en_DEBUG: string;
  name_en_GB: string;
  name_en_US: string;
  name_fr_FR: string;
  name_localized: string;
  name_nl_NL: string;
  name_pl_PL: string;
  name_sv_SE: string;
  position: string;
  role: string;
  shortDesc_ar_SA: string;
  shortDesc_da_DK: string;
  shortDesc_de_DE: string;
  shortDesc_defaultValue: string;
  shortDesc_en_DEBUG: string;
  shortDesc_en_GB: string;
  shortDesc_en_US: string;
  shortDesc_fr_FR: string;
  shortDesc_localized: string;
  shortDesc_nl_NL: string;
  shortDesc_pl_PL: string;
  shortDesc_sv_SE: string;
  status: string;
  subModule: string;
  template: string;
  certificationContents?: ICertificationContent[];
  compDataTranslationTextNav?: IMDFLocalizedValue[];
  compDatas?: IJobProfileLocalizedData[];
  competencyContents?: ICompetencyContent[];
  createdByNav?: IUser;
  educationDegreeContents?: IEducationDegreeContent[];
  educationMajorContents?: IEducationMajorContent[];
  employmentConditionContents?: IEmploymentConditionContent[];
  footerTranslationTextNav?: IMDFLocalizedValue[];
  footers?: IJobProfileLocalizedData[];
  headerTranslationTextNav?: IMDFLocalizedValue[];
  headers?: IJobProfileLocalizedData[];
  interviewQuestionContents?: IInterviewQuestionContent[];
  jobResponsibilityContents?: IJobResponsibilityContent[];
  lastModifiedByNav?: IUser;
  longDescTranslationTextNav?: IMDFLocalizedValue[];
  longDesciptions?: IJobProfileLocalizedData[];
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  nameTranslationTextNav?: IMDFLocalizedValue[];
  physicalReqContents?: IPhysicalReqContent[];
  positionNav?: IPositionEntity;
  relevantIndustryContents?: IRelevantIndustryContent[];
  roleNav?: IRoleEntity;
  shortDescTranslationTextNav?: IMDFLocalizedValue[];
  shortDesciptions?: IJobProfileLocalizedData[];
  skillContents?: ISkillContent[];
  statusNav?: IMDFEnumValue;
  templateNav?: IJobDescTemplate;
  wfRequestNav?: IWfRequest[];
}

export interface IJobApplicationBackgroundCheckRequest {
  requestId: number;
  applicationId: number;
  createdByUser: string;
  createdDateTime: Date;
  lastModifiedDateTime: Date;
  orderStatus: string;
  responseCode: string;
  responseDetail: string;
  vendorCode: string;
  vendorOrderNo: string;
  createdByUserNav?: IUser;
  jobApplication?: IJobApplication;
}

export interface IRoleTalentPoolMappingEntity {
  RoleEntity_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  description: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  mdfTalentPool: string;
  name: string;
  status: string;
  subModule: string;
  talentPoolId: number;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfTalentPoolNav?: ITalentPool[];
  statusNav?: IMDFEnumValue;
}

export interface IJobApplicationQuestionResponse {
  applicationId: number;
  order: number;
  answer: string;
  appLocale: string;
  expectedAnswer: string;
  expectedAnswerValue: number;
  highLow: string;
  maxLength: number;
  question: string;
  questionResponse: string;
  type: string;
  jobApplication?: IJobApplication;
}

export interface ICust_GERFeature {
  ID: number;
  cust_GERApplication_externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  cust_Description: string;
  cust_Status: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface ICust_GERTemplateVariables {
  ID: number;
  cust_GERApplication_externalCode: string;
  cust_GER_Template_ID: number;
  createdBy?: string;
  createdDateTime: Date;
  cust_required: boolean;
  cust_value: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  name: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IJobApplicationStatusAuditTrail {
  revNumber: number;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedProxyUser: string;
  revType: number;
  skippedStatus: number;
  statusComments: string;
  createdByNav?: IUser;
  jobAppStatus?: IJobApplicationStatus;
  jobApplication?: IJobApplication;
  lastModifiedByNav?: IUser;
  lastModifiedProxyUserNav?: IUser;
}

export interface IPaymentInformationDetailV3IRQ {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountType: string;
  checkDigit: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IFOCostCenter {
  externalCode: string;
  startDate: Date;
  costcenterExternalObjectID: string;
  costcenterManager: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  cust_toLegalEntityProp: string;
  description: string;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  endDate: Date;
  entityOID: string;
  entityUUID: string;
  glStatementCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  mdfSystemRecordId: string;
  name: string;
  name_ar_SA: string;
  name_da_DK: string;
  name_de_DE: string;
  name_defaultValue: string;
  name_en_DEBUG: string;
  name_en_GB: string;
  name_en_US: string;
  name_fr_FR: string;
  name_localized: string;
  name_nl_NL: string;
  name_pl_PL: string;
  name_sv_SE: string;
  parent: string;
  status: string;
  costcenterManagerNav?: IUser;
  createdByNav?: IUser;
  cust_toLegalEntity?: IFOCompany[];
  descriptionTranslationNav?: IFoTranslation;
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  nameTranslationNav?: IFoTranslation;
  nameTranslationTextNav?: IMDFLocalizedValue[];
  parentNav?: IFOCostCenter;
  statusNav?: IMDFEnumValue;
}

export interface IPicklistOption {
  id: number;
  externalCode: string;
  localeLabel: string;
  maxValue: number;
  mdfExternalCode: string;
  minValue: number;
  optionValue: number;
  sortOrder: number;
  status: string;
  childPicklistOptions?: IPicklistOption[];
  parentPicklistOption?: IPicklistOption;
  picklist?: IPicklist;
  picklistLabels?: IPicklistLabel[];
}

export interface ILocalizedData {
  localizedDataCode: string;
  localizedDataLocale: string;
  localizedDataTranslation: string;
}

export interface IPerPerson {
  personIdExternal: string;
  countryOfBirth: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  dateOfBirth: Date;
  includeAllRecords: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  perPersonUuid: string;
  personId: number;
  userId: string;
  countryOfBirthNav?: ITerritory;
  emailNav?: IPerEmail[];
  emergencyContactNav?: IPerEmergencyContacts[];
  employmentNav?: IEmpEmployment[];
  homeAddressNavDEFLT?: IPerAddressDEFLT[];
  nationalIdNav?: IPerNationalId[];
  personEmpTerminationInfoNav?: IPersonEmpTerminationInfo;
  personRerlationshipNav?: IPerPersonRelationship[];
  personTypeUsageNav?: IPersonTypeUsage;
  personalInfoNav?: IPerPersonal[];
  phoneNav?: IPerPhone[];
  secondaryAssignmentsNav?: ISecondaryAssignments[];
  socialAccountNav?: IPerSocialAccount[];
  userAccountNav?: IUserAccount;
}

export interface IFormCompetency {
  formContentId: number;
  formDataId: number;
  itemId: number;
  sectionIndex: number;
  assignments: string;
  category: string;
  description: string;
  expectedRating: string;
  itemIndex: number;
  name: string;
  source: string;
  weight: string;
  weightKey: string;
  competencyBehaviors?: IFormCompetencyBehavior[];
  customElement?: IFormCustomElement[];
  itemConfiguration?: IFormItemConfiguration;
  officialRating?: IFormUserRatingComment;
  othersRatingComment?: IFormUserRatingComment[];
  selfRatingComment?: IFormUserRatingComment;
}

export interface ICust_CC_AppProperties {
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  cust_Description: string;
  cust_Name: string;
  cust_Value: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface ICust_CC_User {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  cust_LastVisitedDate: Date;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  cust_ToUserFuncComp?: ICust_CC_UserFuncComp[];
  cust_ToVariant?: ICust_CC_VariantSearch[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IDevGoalPermission_2007 {
  id: number;
  category: number;
  create: boolean;
  delete: boolean;
  description: number;
  due: number;
  edit: boolean;
  flag: number;
  name: number;
  privateAccess: boolean;
  purpose: number;
  start: number;
  state: number;
  type: string;
  userId: string;
  view: boolean;
}

export interface IUserRewardInfo {
  userId: string;
  availableAmount: number;
  currency: string;
  walletId: string;
}

export interface IContinuousFeedbackRequest {
  requestId: number;
  feedbackId: number;
  requestText: string;
  requestedDate: Date;
  requestedForAchievementId: string;
  requestedForActivityId: string;
  requesteeId: string;
  requesterId: string;
  subjectUserId: string;
  feedbackRequestToFeedbackRequesteeNav?: IUser;
  feedbackRequestToFeedbackRequesterNav?: IUser;
  feedbackRequestToFeedbackResponseNav?: IContinuousFeedback;
  feedbackRequestToSubjectUserNav?: IUser;
}

export interface IDevGoalPermission_2006 {
  id: number;
  category: number;
  create: boolean;
  delete: boolean;
  description: number;
  due: number;
  edit: boolean;
  flag: number;
  name: number;
  privateAccess: boolean;
  purpose: number;
  start: number;
  state: number;
  type: string;
  userId: string;
  view: boolean;
}

export interface IEmployeeProfilePageConfig {
  code: string;
  aboutMeVideoUpdateBy: string;
  aboutMeVideoUpdateDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  currentPeriodEndDate: Date;
  currentPeriodStartDate: Date;
  disableBGImageUploadByUser: boolean;
  employmentDifferentiatorCode: string;
  headerOverlayFontColor: string;
  includeInProgressDocs: boolean;
  isAboutMeTextEnabled: boolean;
  isAboutMeVideoEnabled: boolean;
  isAllFieldsDefaultExpanded: boolean;
  isAllowUploadBGPhoto: boolean;
  isHeaderOverlayDisabled: boolean;
  isMyNameEnabled: boolean;
  isPercentCompleteEnabled: boolean;
  isPronounsEnabled: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  myNameUpdateBy: string;
  myNameUpdateDate: Date;
  nameFormatCode: string;
  pptcSelectedSectionCode: string;
  templateLabel: string;
  createdByNav?: IUser;
  headerConfig?: IEmployeeProfileHeaderConfig;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  sections?: IEmployeeProfileSectionConfig[];
  wfRequestNav?: IWfRequest[];
}

export interface ITemporaryTimeInformation {
  externalCode: string;
  comment: string;
  createdBy?: string;
  createdDateTime: Date;
  dayModel: string;
  endDate: Date;
  entityUUID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  recordId: string;
  startDate: Date;
  userId: string;
  workSchedule: string;
  createdByNav?: IUser;
  dayModelNav?: IWorkScheduleDayModel;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
  userIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
  workScheduleNav?: IWorkSchedule;
}

export interface IDGFilter {
  filterId: string;
  expressions?: IDGExpression[];
  field?: IDGField;
}

export interface ITimeTypeProfile {
  externalCode: string;
  bookTimeOffInLieuOnTimeSheetApproval: boolean;
  bookWorkingTimeOnTimeSheetApproval: boolean;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  defaultImportAttendanceTimeType: string;
  entityUUID: string;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mainAttendanceTimeType: string;
  mainBreakTimeType: string;
  mainESSTimeType: string;
  mdfSystemRecordStatus: string;
  timeAccountTypeForTimeOffInLieu: string;
  timeAccountTypeForWorkingTimeAccount: string;
  timeRecordingVariant: string;
  availableTimeTypes?: IAvailableTimeType[];
  countryNav?: ICountry[];
  createdByNav?: IUser;
  defaultImportAttendanceTimeTypeNav?: ITimeType;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mainAttendanceTimeTypeNav?: ITimeType;
  mainBreakTimeTypeNav?: ITimeType;
  mainESSTimeTypeNav?: ITimeType;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  timeAccountTypeForTimeOffInLieuNav?: ITimeAccountType;
  timeAccountTypeForWorkingTimeAccountNav?: ITimeAccountType;
  timeRecordingVariantNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IDevGoalPermission_2002 {
  id: number;
  category: number;
  create: boolean;
  delete: boolean;
  description: number;
  due: number;
  edit: boolean;
  flag: number;
  name: number;
  privateAccess: boolean;
  start: number;
  state: number;
  type: string;
  userId: string;
  view: boolean;
}

export interface IWfRequestStep {
  wfRequestStepId: number;
  actionType: string;
  approverType: string;
  assignedTo: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  ownerId: string;
  processedBy: string;
  relatedTo: string;
  role: string;
  status: string;
  stepNum: number;
  wfRequestId: number;
  dynamicRoleNav?: IFODynamicRole;
  ownerNav?: IUser;
  positionNav?: IPosition[];
  processedByNav?: IUser;
  wfRequestNav?: IWfRequest;
}

export interface IPayScaleLevel {
  code: string;
  effectiveStartDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  effectiveEndDate: Date;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  nextPayScaleLevel: string;
  payScaleLevel: string;
  createdByNav?: IUser;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  nextPayScaleLevelNav?: IPayScaleLevel;
  payScaleGroup?: IPayScaleGroup;
  toPayScalePayComponents?: IPayScalePayComponent[];
  wfRequestNav?: IWfRequest[];
}

export interface IHireDateChange {
  code: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  newHireDate: Date;
  originalHireDate: Date;
  processingStatus: string;
  usersSysId: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  processingStatusNav?: IMDFEnumValue;
  usersSysIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IFOPayComponentGroup {
  externalCode: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  currency: string;
  description: string;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  name: string;
  payComponentFlx: string;
  showOnCompUI: boolean;
  sortOrder: number;
  status: string;
  useForComparatioCalc: boolean;
  useForRangePenetration: boolean;
  descriptionTranslationNav?: IFoTranslation;
  nameTranslationNav?: IFoTranslation;
  payComponentFlxNav?: IFOPayComponent[];
}

export interface IMarketingBrand {
  marketingBrandId: string;
  brandName_ar_SA: string;
  brandName_da_DK: string;
  brandName_de_DE: string;
  brandName_defaultValue: string;
  brandName_en_DEBUG: string;
  brandName_en_GB: string;
  brandName_en_US: string;
  brandName_fr_FR: string;
  brandName_localized: string;
  brandName_nl_NL: string;
  brandName_pl_PL: string;
  brandName_sv_SE: string;
  brandUrl: string;
  createdBy?: string;
  createdDateTime: Date;
  defaultBrand: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  micrositeId: string;
  brandNameTranslationTextNav?: IMDFLocalizedValue[];
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IPhysicalReqEntity {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  requirement_ar_SA: string;
  requirement_da_DK: string;
  requirement_de_DE: string;
  requirement_defaultValue: string;
  requirement_en_DEBUG: string;
  requirement_en_GB: string;
  requirement_en_US: string;
  requirement_fr_FR: string;
  requirement_localized: string;
  requirement_nl_NL: string;
  requirement_pl_PL: string;
  requirement_sv_SE: string;
  status: string;
  subModule: string;
  createdByNav?: IUser;
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  legalEntities?: IFOCompany[];
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  requirementTranslationTextNav?: IMDFLocalizedValue[];
  statusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IBackground_FuncExperience {
  backgroundElementId: number;
  userId: string;
  bgOrderPos: number;
  comments: string;
  experience: string;
  lastModifiedDate: Date;
  years: number;
  experienceNav?: IPicklistOption;
  userIdNav?: IUser;
}

export interface IInterviewQuestionEntity {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  question_ar_SA: string;
  question_da_DK: string;
  question_de_DE: string;
  question_defaultValue: string;
  question_en_DEBUG: string;
  question_en_GB: string;
  question_en_US: string;
  question_fr_FR: string;
  question_localized: string;
  question_nl_NL: string;
  question_pl_PL: string;
  question_sv_SE: string;
  status: string;
  subModule: string;
  type_ar_SA: string;
  type_da_DK: string;
  type_de_DE: string;
  type_defaultValue: string;
  type_en_DEBUG: string;
  type_en_GB: string;
  type_en_US: string;
  type_fr_FR: string;
  type_localized: string;
  type_nl_NL: string;
  type_pl_PL: string;
  type_sv_SE: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  legalEntities?: IFOCompany[];
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  questionTranslationTextNav?: IMDFLocalizedValue[];
  statusNav?: IMDFEnumValue;
  typeTranslationTextNav?: IMDFLocalizedValue[];
  wfRequestNav?: IWfRequest[];
}

export interface IFOCorporateAddressDEFLT {
  addressId: number;
  address1: string;
  address10: string;
  address11: string;
  address2: string;
  address3: string;
  address4: string;
  address5: string;
  address6: string;
  address7: string;
  address8: string;
  address9: string;
  city: string;
  country: string;
  county: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  province: string;
  startDate: Date;
  state: string;
  zipCode: string;
  address3Nav?: IPicklistOption;
  address4Nav?: IPicklistOption;
  address5Nav?: IPicklistOption;
  address6Nav?: IPicklistOption;
  address7Nav?: IPicklistOption;
  cityNav?: IPicklistOption;
  countryNav?: IPicklistOption;
  countyNav?: IPicklistOption;
  provinceNav?: IPicklistOption;
  stateNav?: IPicklistOption;
}

export interface IBehaviorMappingEntity {
  CompetencyEntity_externalCode: string;
  externalCode: string;
  behaviorName_ar_SA: string;
  behaviorName_da_DK: string;
  behaviorName_de_DE: string;
  behaviorName_defaultValue: string;
  behaviorName_en_DEBUG: string;
  behaviorName_en_GB: string;
  behaviorName_en_US: string;
  behaviorName_fr_FR: string;
  behaviorName_localized: string;
  behaviorName_nl_NL: string;
  behaviorName_pl_PL: string;
  behaviorName_sv_SE: string;
  createdBy?: string;
  createdDateTime: Date;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  status: string;
  subModule: string;
  behaviorNameTranslationTextNav?: IMDFLocalizedValue[];
  createdByNav?: IUser;
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  legalEntities?: IFOCompany[];
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
}

export interface IWfRequestUIData {
  wfRequestId: number;
  actionType: string;
  actions: string;
  assigneeUserId: string;
  assigneeUserName: string;
  businessUnit: string;
  changedData: string;
  costCenter: string;
  deeplink: string;
  department: string;
  division: string;
  effectiveDate: string;
  eventReason: string;
  isAssigned: boolean;
  isEffectiveDateType: boolean;
  isObjectBase: boolean;
  jobTitle: string;
  legalEntity: string;
  location: string;
  objectName: string;
  objectType: string;
  operateDate: string;
  operateType: string;
  operateUserId: string;
  operateUserName: string;
  receivedOn: string;
  subjectUserId: string;
  subjectUserName: string;
  todoSubjectLine: string;
}

export interface IFormBehaviorRatingComment {
  behaviorId: number;
  formContentId: number;
  formDataId: number;
  itemId: number;
  ratingType: string;
  sectionIndex: number;
  userId: string;
  comment: string;
  commentKey: string;
  commentLabel: string;
  commentPermission: string;
  firstName: string;
  fullName: string;
  lastName: string;
  rating: string;
  ratingKey: string;
  ratingLabel: string;
  ratingPermission: string;
  textRating: string;
}

export interface ICandidateBackground_Mobility {
  backgroundElementId: number;
  bgOrderPos: number;
  candidateId: number;
  lastModifiedDateTime: Date;
  location: string;
  willingness: string;
  candidate?: ICandidate;
  willingnessNav?: IPicklistOption;
}

export interface IPaymentInformationDetailV3ZWE {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountType: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IEmployeeProfileHeaderConfig {
  EmployeeProfilePageConfig_code: string;
  code: string;
  createdBy?: string;
  createdDateTime: Date;
  customField1Enabled: boolean;
  customField1Key: string;
  customField2Enabled: boolean;
  customField2Key: string;
  customField3Enabled: boolean;
  customField3Key: string;
  departmentEnabled: boolean;
  displayNameEnabled: boolean;
  divisionEnabled: boolean;
  emailEnabled: boolean;
  identificationEnabled: boolean;
  jobTitleEnabled: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  localTimeEnabled: boolean;
  locationEnabled: boolean;
  mdfSystemRecordStatus: string;
  phoneNumber1Enabled: boolean;
  phoneNumber1Key: string;
  phoneNumber2Enabled: boolean;
  phoneNumber2Key: string;
  profilePhotoEnabled: boolean;
  socialNetwork1Enabled: boolean;
  socialNetwork1Key: string;
  socialNetwork2Enabled: boolean;
  socialNetwork2Key: string;
  timeZoneEnabled: boolean;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  phoneNumber1KeyNav?: IMDFEnumValue;
  phoneNumber2KeyNav?: IMDFEnumValue;
  socialNetwork1KeyNav?: IMDFEnumValue;
  socialNetwork2KeyNav?: IMDFEnumValue;
}

export interface IBackground_Certificates {
  backgroundElementId: number;
  userId: string;
  attachement: number;
  bgOrderPos: number;
  description: string;
  endDate: Date;
  institution: string;
  lastModifiedDate: Date;
  name: string;
  startDate: Date;
  attachementNav?: IAttachment;
  userIdNav?: IUser;
}

export interface IEmployeeTimeNLD {
  EmployeeTime_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  entityUUID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  workCapacityPercentageDuringIllness: number;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IPerGlobalInfoDNK {
  country: string;
  personIdExternal: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  genericDate1: Date;
  genericDate2: Date;
  genericDate3: Date;
  genericDate6: Date;
  genericNumber1: number;
  genericNumber2: number;
  genericNumber3: number;
  genericNumber4: number;
  genericNumber5: number;
  genericNumber6: number;
  genericNumber7: number;
  genericNumber8: number;
  genericString1: string;
  genericString10: string;
  genericString11: string;
  genericString12: string;
  genericString13: string;
  genericString14: string;
  genericString15: string;
  genericString17: string;
  genericString2: string;
  genericString20: string;
  genericString3: string;
  genericString4: string;
  genericString5: string;
  genericString6: string;
  genericString7: string;
  genericString8: string;
  genericString9: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  operation: string;
  countryNav?: ITerritory;
  personNav?: IPerPerson;
}

export interface ICandidateProfileConversionInfo {
  candidateId: number;
  alumniUsersSysId: string;
  isAlumni: boolean;
  postConvExtEmailAddress1: string;
  postConvExtEmailAddress2: string;
  alumniUser?: IUser;
}

export interface IPaymentInformationDetailV3ITA {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  checkDigit: string;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEffectiveStartDate: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
}

export interface IFamilyEntity {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  createdLocale: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  name_ar_SA: string;
  name_da_DK: string;
  name_de_DE: string;
  name_defaultValue: string;
  name_en_DEBUG: string;
  name_en_GB: string;
  name_en_US: string;
  name_fr_FR: string;
  name_localized: string;
  name_nl_NL: string;
  name_pl_PL: string;
  name_sv_SE: string;
  status: string;
  subModule: string;
  competencies?: IFamilyCompetencyMappingEntity[];
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  nameTranslationTextNav?: IMDFLocalizedValue[];
  skills?: IFamilySkillMappingEntity[];
  statusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IEmpGlobalAssignment {
  userId: string;
  assignmentClass: string;
  assignmentType: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  payrollEndDate: Date;
  personIdExternal: string;
  plannedEndDate: Date;
  startDate: Date;
  assignmentTypeNav?: IPicklistOption;
  employmentNav?: IEmpEmployment;
  userNav?: IUser;
}

export interface IEmployeeDataReplicationConfirmation {
  externalCode: string;
  additionalTimeInformation: string;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  personId: number;
  proxyExternalCodeList: string;
  replicationContentType: string;
  replicationProcessingTime: string;
  replicationStartTime: string;
  replicationTargetSystem: string;
  replicationUpdateStatus: string;
  usersSysId: string;
  countryNav?: ICountry[];
  createdByNav?: IUser;
  employeeDataReplicationConfirmationErrorMessages?: IEmployeeDataReplicationConfirmationErrorMessage[];
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  replicationContentTypeNav?: IMDFEnumValue;
  replicationTargetSystemNav?: IReplicationTargetSystem;
  replicationUpdateStatusNav?: IMDFEnumValue;
  usersSysIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IPersonKey {
  personIdExternal: string;
  perPersonUuid: string;
  personId: number;
  userAccountNav?: IUserAccount;
}

export interface IEmployeeTimePOL {
  EmployeeTime_externalCode: string;
  externalCode: number;
  absenceCode: string;
  createdBy?: string;
  createdDateTime: Date;
  entityUUID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  zlaDeliveryDate: Date;
  zlaDocumentNumber: string;
  zlaIssueDate: Date;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IGoal_999 {
  id: number;
  category?: string;
  currentOwner: string;
  description: string;
  due?: Date;
  dueDateInUTC?: Date;
  flag?: number;
  guid: string;
  lastModified: Date;
  metric: string;
  modifier: string;
  name: string;
  numbering: string;
  planId: number;
  start?: Date;
  startDateInUTC?: Date;
  state: string;
  stateLabel: string;
  status: number;
  type: string;
  userId: string;
  weight: number;
  initiativesNal?: IInitiativeAlignmentBean[];
  permissionNav?: IGoalPermission_999;
}

export interface IGoal_998 {
  id: number;
  category?: string;
  currentOwner: string;
  description: string;
  due?: Date;
  dueDateInUTC?: Date;
  flag?: number;
  guid: string;
  lastModified: Date;
  metric: string;
  modifier: string;
  name: string;
  numbering: string;
  planId: number;
  start?: Date;
  startDateInUTC?: Date;
  state: string;
  stateLabel: string;
  status: number;
  type: string;
  userId: string;
  weight: number;
  initiativesNal?: IInitiativeAlignmentBean[];
  permissionNav?: IGoalPermission_998;
}

export interface ICust_GER_PersonnelSubArea {
  ID: number;
  cust_GERApplication_externalCode: string;
  cust_GER_PersonnelArea_ID: number;
  createdBy?: string;
  createdDateTime: Date;
  cust_AreaExternalCode: string;
  cust_Default: boolean;
  cust_Text: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  cust_Units?: ICust_GER_PersonnelUnit[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IRCMAdminReassignOfferApprover {
  applicationId: number;
  currUserId: string;
  offerDetailId: number;
  candidateName: string;
  jobReqId: number;
  jobReqTitle: string;
  targetUserId: string;
  currUser?: IUser;
  targetUser?: IUser;
}

export interface IContinuousPerformanceUserPermission {
  permStringValue: string;
  permType: string;
  targetUserId: string;
  hasPermission: boolean;
}

export interface IFOJobCode {
  externalCode: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  defaultJobLevel: string;
  defaultSupervisorLevel: string;
  description: string;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  endDate: Date;
  entityUUID: string;
  grade: string;
  isRegular: string;
  jobFunction: string;
  jobLevel: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  mdfSystemRecordId: string;
  name: string;
  name_ar_SA: string;
  name_da_DK: string;
  name_de_DE: string;
  name_defaultValue: string;
  name_en_DEBUG: string;
  name_en_GB: string;
  name_en_US: string;
  name_fr_FR: string;
  name_localized: string;
  name_nl_NL: string;
  name_pl_PL: string;
  name_sv_SE: string;
  regularTemporary: string;
  standardHours: number;
  status: string;
  supervisorLevel: string;
  workerCompCode: string;
  createdByNav?: IUser;
  defaultJobLevelNav?: IPickListValueV2;
  defaultSupervisorLevelNav?: IPickListValueV2;
  descriptionTranslationNav?: ILocalizedData[];
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  gradeNav?: IFOPayGrade;
  isRegularNav?: IPicklistOption;
  jobFunctionNav?: IFOJobFunction;
  jobLevelNav?: IPicklistOption;
  lastModifiedByNav?: IUser;
  localNavAUS?: IFOJobClassLocalAUS;
  localNavBRA?: IFOJobClassLocalBRA;
  localNavCAN?: IFOJobClassLocalCAN;
  localNavDEFLT?: IFOJobClassLocalDEFLT;
  localNavFRA?: IFOJobClassLocalFRA;
  localNavGBR?: IFOJobClassLocalGBR;
  localNavITA?: IFOJobClassLocalITA;
  localNavUSA?: IFOJobClassLocalUSA;
  nameTranslationNav?: ILocalizedData[];
  nameTranslationTextNav?: IMDFLocalizedValue[];
  regularTemporaryNav?: IPickListValueV2;
  statusNav?: IMDFEnumValue;
  supervisorLevelNav?: IPicklistOption;
  toJobClassificationCountry?: IJobClassificationCountry[];
}

export interface IWorkSchedule {
  externalCode: string;
  averageHoursPerDay: number;
  averageHoursPerMonth: number;
  averageHoursPerWeek: number;
  averageHoursPerYear: number;
  averageWorkingDaysPerWeek: number;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  crossMidnightAllowed: boolean;
  entityUUID: string;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  flexibleRequestingAllowed: boolean;
  individualWorkSchedule: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  modelCategory: string;
  periodModel: string;
  recordId: string;
  searchString: string;
  shiftClassification: string;
  simulatedWorkSchedule: boolean;
  startingDate: Date;
  timeRecordingVariant: string;
  userId: string;
  countryNav?: ICountry[];
  createdByNav?: IUser;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  modelCategoryNav?: IMDFEnumValue;
  periodModelNav?: IWorkSchedule;
  shiftClassificationNav?: IShiftClassification;
  timeRecordingVariantNav?: IMDFEnumValue;
  userIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
  workScheduleDayModels?: IWorkScheduleDayModelAssignment[];
  workScheduleDays?: IWorkScheduleDay[];
}

export interface IBackground_Googledocs {
  backgroundElementId: number;
  userId: string;
  bgOrderPos: number;
  documentName: string;
  documenturl: string;
  lastModifiedDate: Date;
  lastmodifieddate: Date;
  userIdNav?: IUser;
}

export interface IPaymentInformationDetailV3CHL {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  checkDigit: string;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEffectiveStartDate: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
}

export interface ILegalEntityESP {
  LegalEntity_effectiveStartDate: Date;
  LegalEntity_externalCode: string;
  externalCode: number;
  certificadoDeIdentificacionFiscal: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface ICust_GEHTemplate {
  ID: number;
  cust_GEHApplication_externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  cust_AppSourceID: string;
  cust_AppTemplateID: string;
  cust_Filter2: string;
  cust_GDSContextName: string;
  cust_GDSDocumentTypeName: string;
  cust_GDSPortfolioName: string;
  cust_JobOfferTemplateID: string;
  cust_Recruiter: string;
  cust_ReqTemplateID: string;
  cust_jobCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  cust_AppSourceIDNav?: IPickListValueV2[];
  cust_BusinessUnits?: IFOBusinessUnit[];
  cust_Departments?: IFODepartment[];
  cust_Divisions?: IFODivision[];
  cust_Filter2Nav?: IPickListValueV2[];
  cust_LegalEntities?: IFOCompany[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface ILegalEntityUSA {
  LegalEntity_effectiveStartDate: Date;
  LegalEntity_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  eeoCompanyCode: string;
  employerID: string;
  fedReserveBankDistrict: string;
  federalReserveBankID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  legalEntityType: string;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  legalEntityTypeNav?: IPickListValueV2[];
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IPerSocialAccount {
  domain: string;
  personIdExternal: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  imId: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  operation: string;
  url: string;
  domainNav?: IPicklistOption;
  personNav?: IPerPerson;
}

export interface ICust_Performancedata {
  effectiveStartDate: Date;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  cust_ManagerComments: string;
  cust_ManagerRating: string;
  cust_Objectives: string;
  cust_OverallRating: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  externalCodeNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IONB2ProcessTask {
  ONB2Process_processId: string;
  taskId: string;
  completedBy: string;
  createdBy?: string;
  createdDateTime: Date;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  responsibilityConfig: string;
  startDate: Date;
  status: string;
  type: string;
  completedByNav?: IUser;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
  typeNav?: IMDFEnumValue;
}

export interface IBackground_SysScoreCardDevelopmentObjectivesPortlet {
  backgroundElementId: number;
  userId: string;
  bgOrderPos: number;
  lastModifiedDate: Date;
  title: string;
  userIdNav?: IUser;
}

export interface IUserAccount {
  username: string;
  accountId: number;
  accountIsLocked: string;
  accountStatus: string;
  accountUuid: string;
  createdDateTime: Date;
  defaultLocale: string;
  email: string;
  lastInactivationDateTime: Date;
  lastLoginFailedDateTime: Date;
  lastModifiedDateTime: Date;
  personIdExternal: string;
  sapGlobalUserId: string;
  timeZone: string;
  userType: string;
  user?: IUser[];
}

export interface IPayrollSystemConfiguration {
  externalCode: string;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  enableBsi: boolean;
  enableEnhancedValidationsForProduction: boolean;
  enablePayStatement: boolean;
  enablePayrollUiIntegration: boolean;
  enablePaystatementDownloadFunctionality: boolean;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  payrollSystemClientId: string;
  payrollSystemUrl: string;
  respectBSIAdminFlag: boolean;
  sapSystemConfiguration: string;
  status: string;
  thirdPartyIdpUrl: string;
  categories?: IPayrollConfigurationCategory[];
  countryNav?: ICountry[];
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  sapSystemConfigurationNav?: ISAPSystemConfiguration;
  statusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IRoleSkillMappingEntity {
  RoleEntity_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  proLevel_ar_SA: string;
  proLevel_da_DK: string;
  proLevel_de_DE: string;
  proLevel_defaultValue: string;
  proLevel_en_DEBUG: string;
  proLevel_en_GB: string;
  proLevel_en_US: string;
  proLevel_fr_FR: string;
  proLevel_localized: string;
  proLevel_nl_NL: string;
  proLevel_pl_PL: string;
  proLevel_sv_SE: string;
  skill: string;
  status: string;
  subModule: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  proLevelTranslationTextNav?: IMDFLocalizedValue[];
  skillNav?: ISkillEntity;
  statusNav?: IMDFEnumValue;
}

export interface ICust_CC_UserFuncComp {
  cust_CC_User_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  cust_EndDate: Date;
  cust_StartDate: Date;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  cust_ToFuncComp?: ICust_CC_FuncComp;
  cust_ToNote?: ICust_CC_Note[];
  cust_ToUserComp?: ICust_CC_UserComp[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IFormObjectiveSection {
  formContentId: number;
  formDataId: number;
  sectionIndex: number;
  objPlanId: number;
  objPlanType: string;
  sectionDescription: string;
  sectionName: string;
  sectionWeight: string;
  sectionWeightKey: string;
  objectives?: IFormObjective[];
  othersRatingComment?: IFormUserRatingComment[];
  sectionConfiguration?: IFormSectionConfiguration;
  selfRatingComment?: IFormUserRatingComment;
}

export interface IDevGoalAchievementsList {
  goalId: string;
  subjectUserId: string;
  achievementCreatedBy: string;
  achievementCreatedDate: Date;
  achievementDate: Date;
  achievementId: string;
  achievementLastModifiedBy: string;
  achievementLastModifiedDate: Date;
  achievementName: string;
  achievementParentExternalId: number;
  achievementParentType: string;
}

export interface IPaymentInformationDetailV3GBR {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  buildingSocietyRollNumber: string;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEffectiveStartDate: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
}

export interface IEmployeeProfileSubSectionConfig {
  EmployeeProfilePageConfig_code: string;
  EmployeeProfileSectionConfig_code: string;
  code: string;
  createdBy?: string;
  createdDateTime: Date;
  isEnabled: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  order: number;
  title_ar_SA: string;
  title_da_DK: string;
  title_de_DE: string;
  title_defaultValue: string;
  title_en_DEBUG: string;
  title_en_GB: string;
  title_en_US: string;
  title_fr_FR: string;
  title_localized: string;
  title_nl_NL: string;
  title_pl_PL: string;
  title_sv_SE: string;
  type: string;
  blocks?: IEmployeeProfileBlockContent[];
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  titleTranslationTextNav?: IMDFLocalizedValue[];
  typeNav?: IMDFEnumValue;
}

export interface IFOLegalEntityLocalDEU {
  country: string;
  externalCode: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  mdfSystemRecordId: string;
  socialAccidentInsurance: string;
  socialAccidentInsuranceRegistrationNumber: string;
  status: string;
  taxUnit: string;
  countryNav?: ITerritory;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
}

export interface IHolidayAssignment {
  HolidayCalendar_externalCode: string;
  date: Date;
  createdBy?: string;
  createdDateTime: Date;
  entityUUID: string;
  holiday: string;
  holidayCategory: string;
  holidayClass: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  holidayCategoryNav?: IHolidayCategory;
  holidayClassNav?: IMDFEnumValue;
  holidayNav?: IHoliday;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface ICustomPayTypeAssignment {
  CustomPayType_externalCode: string;
  externalCode: number;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  countryNav?: ICountry[];
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface ICust_GEHApplication {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  cust_GEHTemplate?: ICust_GEHTemplate[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IJobReqFwdCandidates {
  candidateId: number;
  jobReqId: number;
  candidateSiteid: number;
  createdDate: Date;
  expirationDate: Date;
  extRecruiterId: number;
  jobBoardName: string;
  lastModifiedDate: Date;
  rcmAppStatusSetItemId: number;
  referralId: number;
  referralKey: string;
  referredBy: string;
  status: string;
  type: string;
  candidate?: ICandidate[];
  jobRequisition?: IJobRequisition;
  referredByNav?: IUser;
}

export interface ICust_CC_FuncComp {
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  cust_Classification: string;
  cust_Description: string;
  cust_DescriptionTranslations_ar_SA: string;
  cust_DescriptionTranslations_da_DK: string;
  cust_DescriptionTranslations_de_DE: string;
  cust_DescriptionTranslations_defaultValue: string;
  cust_DescriptionTranslations_en_DEBUG: string;
  cust_DescriptionTranslations_en_GB: string;
  cust_DescriptionTranslations_en_US: string;
  cust_DescriptionTranslations_fr_FR: string;
  cust_DescriptionTranslations_localized: string;
  cust_DescriptionTranslations_nl_NL: string;
  cust_DescriptionTranslations_pl_PL: string;
  cust_DescriptionTranslations_sv_SE: string;
  cust_DocumentLinkage: boolean;
  cust_DocumentUpload: boolean;
  cust_Draft: boolean;
  cust_EndDate: Date;
  cust_GroupId: string;
  cust_IconId: string;
  cust_Link: string;
  cust_ParentDependent: boolean;
  cust_ParentId: string;
  cust_StartDate: Date;
  cust_SubClassification: string;
  cust_delimitationDate: Date;
  cust_isDeprecated: boolean;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  cust_ClassificationNav?: IPickListValueV2[];
  cust_DescriptionTranslationsTranslationTextNav?: IMDFLocalizedValue[];
  cust_ToComp?: ICust_CC_Competency[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IFormReviewerInfoSection {
  formContentId: number;
  formDataId: number;
  sectionDescription: string;
  sectionIndex: number;
  sectionName: string;
  reviewerInfoElements?: IFormCustomElement[];
}

export interface IDGExpression {
  expressionID: string;
  operator?: IDGFieldOperator;
  values?: IDGFieldValue[];
}

export interface IWorkOrder {
  effectiveStartDate: Date;
  userSysId: string;
  billingAmount: number;
  billingRate: string;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  currency: string;
  effectiveEndDate: Date;
  effectiveStatus: string;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  startDate: Date;
  vendor: string;
  workOrderId: string;
  workOrderName: string;
  workOrderOwnerId: string;
  workerType: string;
  billingRateNav?: IFOFrequency;
  createdByNav?: IUser;
  currencyNav?: ICurrency;
  effectiveStatusNav?: IMDFEnumValue;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  userSysIdNav?: IUser;
  vendorNav?: IVendorInfo;
  wfRequestNav?: IWfRequest[];
  workOrderOwnerIdNav?: IUser;
  workerTypeNav?: IPickListValueV2;
}

export interface IFormIntroductionSection {
  formContentId: number;
  formDataId: number;
  sectionDescription: string;
  sectionIndex: number;
  sectionName: string;
}

export interface IPayScaleArea {
  code: string;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  payScaleArea: string;
  countryNav?: ICountry[];
  createdByNav?: IUser;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface ISkillContent {
  JobProfile_externalCode: string;
  externalCode: string;
  competency: string;
  createdBy?: string;
  createdDateTime: Date;
  entity: string;
  jobProfileId: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  order: number;
  proLevel_ar_SA: string;
  proLevel_da_DK: string;
  proLevel_de_DE: string;
  proLevel_defaultValue: string;
  proLevel_en_DEBUG: string;
  proLevel_en_GB: string;
  proLevel_en_US: string;
  proLevel_fr_FR: string;
  proLevel_localized: string;
  proLevel_nl_NL: string;
  proLevel_pl_PL: string;
  proLevel_sv_SE: string;
  role: string;
  sectionId: string;
  sectionType: string;
  skillMappingId: string;
  status: string;
  subModule: string;
  competencyNav?: ICompetencyEntity;
  createdByNav?: IUser;
  entityNav?: ISkillEntity;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  proLevelTranslationTextNav?: IMDFLocalizedValue[];
  roleNav?: IRoleEntity;
  statusNav?: IMDFEnumValue;
}

export interface IFormObjective {
  formContentId: number;
  formDataId: number;
  itemId: number;
  sectionIndex: number;
  assignments: string;
  category: string;
  deleted: boolean;
  done: string;
  hasCompetency: boolean;
  itemOrder: number;
  metric: string;
  name: string;
  state: string;
  stateColor: string;
  useMLTRating: boolean;
  weight: string;
  weightKey: string;
  comments?: IFormObjectiveComment[];
  customElement?: IFormCustomElement[];
  itemConfiguration?: IFormItemConfiguration;
  metricLookupTables?: IFormObjectiveDetails[];
  milestones?: IFormObjectiveDetails[];
  objectiveDetails?: IFormObjectiveDetails[];
  officialRating?: IFormUserRatingComment;
  otherDetails?: IFormObjectiveOtherDetails;
  othersRatingComment?: IFormUserRatingComment[];
  selfRatingComment?: IFormUserRatingComment;
  targets?: IFormObjectiveDetails[];
  tasks?: IFormObjectiveDetails[];
}

export interface IFormObjectiveOtherDetails {
  formContentId: number;
  formDataId: number;
  itemId: number;
  sectionIndex: number;
  metricLookupTables?: IFormObjectiveOtherDetailsItem;
  milestones?: IFormObjectiveOtherDetailsItem;
  targets?: IFormObjectiveOtherDetailsItem;
  tasks?: IFormObjectiveOtherDetailsItem;
}

export interface IForm360ParticipantColumn {
  columnKey: string;
  formContentId: number;
  formDataId: number;
  columnLabel: string;
  columnOrder: number;
}

export interface IJobApplicationSnapshot_Languages {
  backgroundElementId: number;
  applicationId: number;
  bgOrderPos: number;
  language: string;
  lastModifiedDateTime: Date;
  readingProf: string;
  speakingProf: string;
  writingProf: string;
  application?: IJobApplication;
  languageNav?: IPicklistOption;
  readingProfNav?: IPicklistOption;
  speakingProfNav?: IPicklistOption;
  writingProfNav?: IPicklistOption;
}

export interface IEmpJobRelationships {
  relationshipType: string;
  startDate: Date;
  userId: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  operation: string;
  relUserId: string;
  employmentNav?: IEmpEmployment;
  relEmploymentNav?: IEmpEmployment;
  relUserNav?: IUser;
  relationshipTypeNav?: IPicklistOption;
  userNav?: IUser;
}

export interface IAlertMessage {
  externalCode: string;
  alertDescription: string;
  alertDescriptionLocalized_ar_SA: string;
  alertDescriptionLocalized_da_DK: string;
  alertDescriptionLocalized_de_DE: string;
  alertDescriptionLocalized_defaultValue: string;
  alertDescriptionLocalized_en_DEBUG: string;
  alertDescriptionLocalized_en_GB: string;
  alertDescriptionLocalized_en_US: string;
  alertDescriptionLocalized_fr_FR: string;
  alertDescriptionLocalized_localized: string;
  alertDescriptionLocalized_nl_NL: string;
  alertDescriptionLocalized_pl_PL: string;
  alertDescriptionLocalized_sv_SE: string;
  alertHeader: string;
  alertHeaderLocalized_ar_SA: string;
  alertHeaderLocalized_da_DK: string;
  alertHeaderLocalized_de_DE: string;
  alertHeaderLocalized_defaultValue: string;
  alertHeaderLocalized_en_DEBUG: string;
  alertHeaderLocalized_en_GB: string;
  alertHeaderLocalized_en_US: string;
  alertHeaderLocalized_fr_FR: string;
  alertHeaderLocalized_localized: string;
  alertHeaderLocalized_nl_NL: string;
  alertHeaderLocalized_pl_PL: string;
  alertHeaderLocalized_sv_SE: string;
  createdBy?: string;
  createdDateTime: Date;
  effectiveStatus: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  alertDescriptionLocalizedTranslationTextNav?: IMDFLocalizedValue[];
  alertHeaderLocalizedTranslationTextNav?: IMDFLocalizedValue[];
  createdByNav?: IUser;
  effectiveStatusNav?: IMDFEnumValue;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IFormPMReviewContentDetail {
  formContentId: number;
  formDataId: number;
  competencySections?: IFormCompetencySection[];
  customSections?: IFormCustomSection[];
  customizedWeightedRatingSection?: IFormCustomizedWeightedRatingSection;
  introductionSection?: IFormIntroductionSection;
  objCompSummarySection?: IFormObjCompSummarySection;
  objectiveSections?: IFormObjectiveSection[];
  perfPotSummarySection?: IFormPerfPotSummarySection;
  signatureSection?: IFormSignatureSection;
  summarySection?: IFormSummarySection;
  userInformationSection?: IFormUserInformationSection;
}

export interface IShiftClassification {
  externalCode: string;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  entityUUID: string;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  countryNav?: ICountry[];
  createdByNav?: IUser;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IDevLearning_4201 {
  learningId: number;
  assignee: string;
  completedDate: Date;
  description: string;
  guid: string;
  isActive: boolean;
  name: string;
  status: string;
  userId: string;
  LearningUserIdNavigation?: IUser;
  learningCertNavigation?: IDevLearningCertifications[];
}

export interface IPaymentMethodV3 {
  externalCode: string;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEffectiveStartDate: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  createdByNav?: IUser;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
  toPaymentMethodAssignmentV3?: IPaymentMethodAssignmentV3[];
  wfRequestNav?: IWfRequest[];
}

export interface IPosition {
  code: string;
  effectiveStartDate: Date;
  businessUnit: string;
  changeReason: string;
  comment: string;
  company: string;
  costCenter: string;
  createdBy?: string;
  createdDateTime: Date;
  creationSource: string;
  criticality: number;
  cust_jobFunction: string;
  department: string;
  description: string;
  division: string;
  effectiveEndDate: Date;
  effectiveStatus: string;
  employeeClass: string;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  incumbent: string;
  jobCode: string;
  jobLevel: string;
  jobTitle: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  legacyPositionId: number;
  location: string;
  mdfSystemOptimisticLockUUID: string;
  mdfSystemRecordStatus: string;
  multipleIncumbentsAllowed: boolean;
  payGrade: string;
  payRange: string;
  positionControlled: boolean;
  positionCriticality: string;
  positionTitle: string;
  regularTemporary: string;
  standardHours: number;
  targetFTE: number;
  technicalParameters: string;
  transactionSequence: number;
  type: string;
  vacant: boolean;
  businessUnitNav?: IFOBusinessUnit;
  changeReasonNav?: IPickListValueV2;
  companyNav?: IFOCompany;
  costCenterNav?: IFOCostCenter;
  createdByNav?: IUser;
  creationSourceNav?: IMDFEnumValue;
  cust_jobFunctionNav?: IFOJobFunction;
  departmentNav?: IFODepartment;
  divisionNav?: IFODivision;
  effectiveStatusNav?: IMDFEnumValue;
  employeeClassNav?: IPickListValueV2;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  incumbentNav?: IUser;
  jobCodeNav?: IFOJobCode;
  jobLevelNav?: IPickListValueV2;
  lastModifiedByNav?: IUser;
  locationNav?: IFOLocation;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  parentPosition?: IPosition;
  payGradeNav?: IFOPayGrade;
  payRangeNav?: IFOPayRange;
  positionCriticalityNav?: IPickListValueV2;
  positionMatrixRelationship?: IPositionMatrixRelationship[];
  regularTemporaryNav?: IPickListValueV2;
  rightToReturn?: IRightToReturn[];
  successorNav?: ISuccessor[];
  wfRequestNav?: IWfRequest[];
}

export interface IFOLocationGroup {
  externalCode: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  description: string;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  name: string;
  status: string;
  descriptionTranslationNav?: IFoTranslation;
  nameTranslationNav?: IFoTranslation;
}

export interface IFOJobClassLocalFRA {
  country: string;
  externalCode: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  employeeCategory: number;
  endDate: Date;
  inseeCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  mdfSystemRecordId: string;
  status: string;
  countryNav?: ITerritory;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
}

export interface IJobApplicationAssessmentReport {
  id: number;
  orderId: number;
  reportURL: string;
  status: number;
  statusDate: Date;
  statusDetails: string;
  assessmentReportDetail?: IJobApplicationAssessmentReportDetail[];
  jobApplicationAssessmentOrder?: IJobApplicationAssessmentOrder;
}

export interface ITodoCategory {
  categoryId: string;
  categoryName: string;
  description: string;
  domainEntityName: string;
  expandable: boolean;
  external: boolean;
  functionalArea: string;
  module: string;
  actionsNav?: ITodoAction[];
}

export interface IHolidayCalendar {
  externalCode: string;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  entityUUID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  name_ar_SA: string;
  name_da_DK: string;
  name_de_DE: string;
  name_defaultValue: string;
  name_en_DEBUG: string;
  name_en_GB: string;
  name_en_US: string;
  name_fr_FR: string;
  name_localized: string;
  name_nl_NL: string;
  name_pl_PL: string;
  name_sv_SE: string;
  oldName: string;
  countryNav?: ICountry[];
  createdByNav?: IUser;
  holidayAssignments?: IHolidayAssignment[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  nameTranslationTextNav?: IMDFLocalizedValue[];
  wfRequestNav?: IWfRequest[];
}

export interface ISpotAwardCategory {
  SpotAwardProgram_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  recordId: string;
  title_ar_SA: string;
  title_da_DK: string;
  title_de_DE: string;
  title_defaultValue: string;
  title_en_DEBUG: string;
  title_en_GB: string;
  title_en_US: string;
  title_fr_FR: string;
  title_localized: string;
  title_nl_NL: string;
  title_pl_PL: string;
  title_sv_SE: string;
  categoryImageNav?: IAttachment;
  createdByNav?: IUser;
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  titleTranslationTextNav?: IMDFLocalizedValue[];
}

export interface ICurrencyExchangeRate {
  effectiveStartDate: Date;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  currencyExchangeRateType: string;
  effectiveEndDate: Date;
  effectiveStatus: string;
  exchangeRate: number;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  mdfSystemCreatedBy: string;
  mdfSystemCreatedDate: Date;
  mdfSystemEntityId: string;
  mdfSystemLastModifiedBy: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  sourceCurrency: string;
  targetCurrency: string;
  createdByNav?: IUser;
  currencyExchangeRateTypeNav?: IPickListValueV2;
  effectiveStatusNav?: IMDFEnumValue;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  sourceCurrencyNav?: ICurrency;
  targetCurrencyNav?: ICurrency;
  wfRequestNav?: IWfRequest[];
}

export interface IPerGlobalInfoNLD {
  country: string;
  personIdExternal: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  genericDate1: Date;
  genericDate2: Date;
  genericDate3: Date;
  genericDate6: Date;
  genericNumber1: number;
  genericNumber2: number;
  genericNumber3: number;
  genericNumber4: number;
  genericNumber5: number;
  genericNumber6: number;
  genericNumber7: number;
  genericNumber8: number;
  genericString1: string;
  genericString10: string;
  genericString11: string;
  genericString12: string;
  genericString13: string;
  genericString14: string;
  genericString15: string;
  genericString17: string;
  genericString2: string;
  genericString20: string;
  genericString3: string;
  genericString4: string;
  genericString5: string;
  genericString6: string;
  genericString7: string;
  genericString8: string;
  genericString9: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  operation: string;
  countryNav?: ITerritory;
  genericNumber2Nav?: IPicklistOption;
  genericNumber3Nav?: IPicklistOption;
  genericString1Nav?: IPicklistOption;
  genericString2Nav?: IPicklistOption;
  personNav?: IPerPerson;
}

export interface IForm360SummaryViewSection {
  formContentId: number;
  formDataId: number;
  export360ReportURL: string;
  isActiveReportLink: boolean;
  isAddParticipant: boolean;
  isAnonymous: boolean;
  isRemoveParticipant: boolean;
  isSendAllReminder: boolean;
  isShow360ReportLink: boolean;
  isShowCategory: boolean;
  isShowCategoryWeights: boolean;
  isShowComments: boolean;
  isShowExportBtn: boolean;
  isShowOverallRating: boolean;
  isShowRating: boolean;
  isShowReportLink: boolean;
  isShowSendBackForm: boolean;
  maxRating: number;
  oldShow360ReportURL: string;
  overallRating: number;
  overallRatingDisplayString: string;
  show360ReportURL: string;
  categoryWeights?: IForm360SummaryViewCategory[];
  formRaters?: IForm360SummaryViewRater[];
}

export interface IGoalAchievements {
  goalId: string;
  subjectUserId: string;
  achievementList?: IGoalAchievementsList[];
}

export interface IJobReqTemplate_EZHire_Simplified {
  templateId: number;
  assessment: string;
  candidateHired: number;
  comments: string;
  corporatePosting: boolean;
  country: string;
  currency: string;
  custCompanyText: string;
  custInstrJob: string;
  custInstrOrg: string;
  custInstrPos: string;
  custInstrSalary: string;
  custInstrScreen: string;
  custInstrTeam: string;
  cust_intro_req: string;
  defaultLanguage: string;
  end: Date;
  extJobDescFooter: string;
  extJobDescHeader: string;
  extListingLayout: string;
  extTitle: string;
  externalPrivatePosting: boolean;
  id: string;
  intJobDescFooter: string;
  intJobDescHeader: string;
  intranetPosting: boolean;
  intranetPrivatePosting: boolean;
  jobPostLanguage: string;
  jobStartDate: Date;
  listingLayout: string;
  numberOpenings: number;
  offerExtensionDate: Date;
  positionNumber: string;
  questions: string;
  quickApply: boolean;
  salaryBase: number;
  start: Date;
  targetBonusAmount: number;
  title: string;
  businessUnit_obj?: IFOBusinessUnit;
  costCenter_obj?: IFOCostCenter;
  custFrequency?: IPicklistOption;
  department_obj?: IFODepartment;
  division_obj?: IFODivision;
  filter2?: IPicklistOption;
  hiringManagerName?: IJobRequisitionOperator[];
  interviewGuide?: IAttachment[];
  legalEntity_obj?: IFOCompany;
  location_obj?: IFOLocation[];
  recruiterName?: IJobRequisitionOperator[];
  status?: IPicklistOption;
}

export interface ICust_LegalEntityBEL {
  LegalEntity_effectiveStartDate: Date;
  LegalEntity_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  cust_CompanyFormat: string;
  cust_TaxNumber: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  cust_CompanyFormatNav?: IPickListValueV2[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IComplianceDocumentFlow {
  documentFlowCode: string;
  createdBy?: string;
  createdDateTime: Date;
  declinedBy: string;
  declinedDocuments: string;
  declinedReason: string;
  docFlowBpeUserTaskId: string;
  documentFlowStatus: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  process: string;
  subjectUser: string;
  createdByNav?: IUser;
  declinedByNav?: IUser;
  documentFlowStatusNav?: IMDFEnumValue;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  processNav?: IComplianceProcess;
  subjectUserNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IPerAddressDEFLT {
  addressType: string;
  personIdExternal: string;
  startDate: Date;
  address1: string;
  address10: string;
  address11: string;
  address12: string;
  address2: string;
  address20: string;
  address3: string;
  address4: string;
  address5: string;
  address6: string;
  address7: string;
  address8: string;
  address9: string;
  city: string;
  country: string;
  county: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  includeAllRecords: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  notes: string;
  operation: string;
  province: string;
  state: string;
  zipCode: string;
  address12Nav?: IPicklistOption;
  address3Nav?: IPicklistOption;
  address4Nav?: IPicklistOption;
  address6Nav?: IPicklistOption;
  cityNav?: IPicklistOption;
  countryNav?: ITerritory;
  countyNav?: IPicklistOption;
  personNav?: IPerPerson;
  provinceNav?: IPicklistOption;
  stateNav?: IPicklistOption;
  wfRequestNav?: IWfRequest;
  zipCodeNav?: IPicklistOption;
}

export interface IFormObjectiveOtherDetailsItemValueCell {
  formContentId: number;
  formDataId: number;
  itemId: number;
  sectionIndex: number;
  type: number;
  colId: string;
  colIndex: number;
  datatype: string;
  rowIndex: number;
  value: string;
}

export interface IPerGlobalInfoARE {
  country: string;
  personIdExternal: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  genericDate1: Date;
  genericDate2: Date;
  genericDate3: Date;
  genericDate6: Date;
  genericNumber1: number;
  genericNumber2: number;
  genericNumber3: number;
  genericNumber4: number;
  genericNumber5: number;
  genericNumber6: number;
  genericNumber7: number;
  genericNumber8: number;
  genericString1: string;
  genericString10: string;
  genericString11: string;
  genericString12: string;
  genericString13: string;
  genericString14: string;
  genericString15: string;
  genericString17: string;
  genericString2: string;
  genericString20: string;
  genericString3: string;
  genericString4: string;
  genericString5: string;
  genericString6: string;
  genericString7: string;
  genericString8: string;
  genericString9: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  operation: string;
  countryNav?: ITerritory;
  genericNumber2Nav?: IPicklistOption;
  genericNumber6Nav?: IPicklistOption;
  genericString1Nav?: IPicklistOption;
  genericString4Nav?: IPicklistOption;
  genericString6Nav?: IPicklistOption;
  personNav?: IPerPerson;
}

export interface IHolidayCategory {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  entityUUID: string;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IForm360ParticipantConfig {
  formContentId: number;
  formDataId: number;
  participantCategories?: IForm360ParticipantCategory[];
  participantColumns?: IForm360ParticipantColumn[];
}

export interface IAdvancesEligibility {
  effectiveStartDate: Date;
  externalCode: string;
  advanceType: string;
  basePayComponent: string;
  basePayComponentGroup: string;
  calculationPercentageOn: string;
  company: string;
  createdBy?: string;
  createdDateTime: Date;
  currency: string;
  currencyGO: string;
  dayOfDeduction: string;
  deductionDateFormat: string;
  deductionPayCompOTD: string;
  deductionPayCompRD: string;
  defaultWorkflow: string;
  department: string;
  effectiveEndDate: Date;
  effectiveStatus: string;
  eligibilityAmount: number;
  eligibilityRule: string;
  enableAutoRecovery: string;
  exceptionForNumberOfInstallments: boolean;
  exceptionForRequestedAmount: boolean;
  exceptionWorkflow: string;
  externalName: string;
  firstOccurenceStartDate: Date;
  installmentAmount: number;
  installmentFrequency: string;
  interestRate: number;
  interestType: string;
  isUnlimitedAmount: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  maximumEligibilityAmount: number;
  mdfSystemRecordStatus: string;
  monthDate: string;
  numberOfInstallments: number;
  numberOfInstallmentsEditableByEmployee: string;
  numberOfOccurences: number;
  occuranceOfDay: string;
  payComponentType: string;
  paygrade: string;
  periodEndDate: Date;
  periodStartDate: Date;
  recoveryMode: string;
  recoveryModeEditableByEmployee: string;
  unitOfPeriod: string;
  validityPeriod: number;
  advanceTypeNav?: IFOPayComponent;
  basePayComponentGroupNav?: IFOPayComponentGroup;
  basePayComponentNav?: IFOPayComponent;
  calculationPercentageOnNav?: IMDFEnumValue;
  companyNav?: IFOCompany;
  createdByNav?: IUser;
  currencyGONav?: ICurrency;
  currencyNav?: IPickListValueV2;
  dayOfDeductionNav?: IMDFEnumValue;
  deductionDateFormatNav?: IMDFEnumValue;
  defaultWorkflowNav?: IFOWfConfig;
  departmentNav?: IFODepartment;
  effectiveStatusNav?: IMDFEnumValue;
  enableAutoRecoveryNav?: IMDFEnumValue;
  exceptionWorkflowNav?: IFOWfConfig;
  installmentFrequencyNav?: IFOFrequency;
  interestTypeNav?: IMDFEnumValue;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  monthDateNav?: IMDFEnumValue;
  numberOfInstallmentsEditableByEmployeeNav?: IMDFEnumValue;
  occuranceOfDayNav?: IMDFEnumValue;
  payComponentTypeNav?: IMDFEnumValue;
  paygradeNav?: IFOPayGrade;
  recoveryModeEditableByEmployeeNav?: IMDFEnumValue;
  recoveryModeNav?: IMDFEnumValue;
  unitOfPeriodNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IGoalPermission_999 {
  id: number;
  category: number;
  create: boolean;
  delete: boolean;
  description: number;
  due: number;
  edit: boolean;
  flag: number;
  metric: number;
  name: number;
  privateAccess: boolean;
  start: number;
  state: number;
  type: string;
  userId: string;
  view: boolean;
  weight: number;
}

export interface IRelevantIndustryContent {
  JobProfile_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  entity: string;
  jobProfileId: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  order: number;
  sectionId: string;
  sectionType: string;
  status: string;
  subModule: string;
  createdByNav?: IUser;
  entityNav?: IRelevantIndustryEntity;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
}

export interface IPersonEmpTerminationInfo {
  personIdExternal: string;
  activeEmploymentsCount: number;
  latestTerminationDate: Date;
}

export interface IONB2ProcessTrigger {
  triggerId: string;
  atsApplicationId: string;
  atsUserId: string;
  bpeProcessInstanceId: string;
  createdBy?: string;
  createdDateTime: Date;
  hireType: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  onboardingInfoId: string;
  rcmApplicationId: number;
  rcmCandidateId: number;
  rcmCompany: string;
  rcmHiringMgr: string;
  rcmJobReqId: number;
  rcmOfferId: number;
  rcmPrimaryEmail: string;
  rcmStartDate: string;
  rehireUser: string;
  triggerStatus: string;
  triggerType: string;
  atsUserIdNav?: IUser;
  createdByNav?: IUser;
  hireTypeNav?: IMDFEnumValue;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  rehireUserNav?: IUser;
  toProcess?: IONB2Process;
  triggerStatusNav?: IMDFEnumValue;
  triggerTypeNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IGoalPermission_998 {
  id: number;
  category: number;
  create: boolean;
  delete: boolean;
  description: number;
  due: number;
  edit: boolean;
  flag: number;
  metric: number;
  name: number;
  privateAccess: boolean;
  start: number;
  state: number;
  type: string;
  userId: string;
  view: boolean;
  weight: number;
}

export interface IPerGlobalInfoSWE {
  country: string;
  personIdExternal: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  genericDate1: Date;
  genericDate2: Date;
  genericDate3: Date;
  genericDate6: Date;
  genericNumber1: number;
  genericNumber2: number;
  genericNumber3: number;
  genericNumber4: number;
  genericNumber5: number;
  genericNumber6: number;
  genericNumber7: number;
  genericNumber8: number;
  genericString1: string;
  genericString10: string;
  genericString11: string;
  genericString12: string;
  genericString13: string;
  genericString14: string;
  genericString15: string;
  genericString17: string;
  genericString2: string;
  genericString20: string;
  genericString3: string;
  genericString4: string;
  genericString5: string;
  genericString6: string;
  genericString7: string;
  genericString8: string;
  genericString9: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  operation: string;
  countryNav?: ITerritory;
  personNav?: IPerPerson;
}

export interface ICandidateBackground_GlobalInfo {
  backgroundElementId: number;
  bgOrderPos: number;
  candidateId: number;
  ethnicity: string;
  lastModifiedDateTime: Date;
  candidate?: ICandidate;
}

export interface IFormRouteSubStep {
  formDataId: number;
  stepOrder: number;
  subStepOrder: number;
  currentStep: boolean;
  entryUser: boolean;
  exitUser: boolean;
  userFullName: string;
  userId: string;
  userRole: string;
}

export interface IActivityStatus {
  activityStatusId: string;
  colorRGBCode: string;
  createAchievement: boolean;
  createdBy?: string;
  createdDateTime: Date;
  defaultStatus: boolean;
  deleted: boolean;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  iconName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  priority: number;
  recordId: string;
  removeActivityFromMeeting: boolean;
  snapshot: boolean;
  statusName_ar_SA: string;
  statusName_da_DK: string;
  statusName_de_DE: string;
  statusName_defaultValue: string;
  statusName_en_DEBUG: string;
  statusName_en_GB: string;
  statusName_en_US: string;
  statusName_fr_FR: string;
  statusName_localized: string;
  statusName_nl_NL: string;
  statusName_pl_PL: string;
  statusName_sv_SE: string;
  createdByNav?: IUser;
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNameTranslationTextNav?: IMDFLocalizedValue[];
  wfRequestNav?: IWfRequest[];
}

export interface IBackground_VarPayEmpHistData {
  backgroundElementId: number;
  basis: number;
  country: string;
  endDate: Date;
  jobGrade: string;
  lastModifiedDate: Date;
  location: string;
  salary: string;
  startDate: Date;
  tgtPct: string;
  title: string;
  userId: string;
  varPayProgramName: number;
}

export interface IPerPersonRelationship {
  personIdExternal: string;
  relatedPersonIdExternal: string;
  startDate: Date;
  addressAddress1: string;
  addressAddress2: string;
  addressAddress3: string;
  addressCity: string;
  addressCountry: string;
  addressCounty: string;
  addressProvince: string;
  addressState: string;
  addressZipCode: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  firstName: string;
  isAccompanyingDependent: boolean;
  isAddressSameAsPerson: boolean;
  isBeneficiary: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  lastName: string;
  operation: string;
  relationshipType: string;
  personNav?: IPerPerson;
  relNationalIdNav?: IPerNationalId;
  relPersonNav?: IPerPerson;
  relPersonalNav?: IPerPersonal;
  relationshipTypeNav?: IPicklistOption;
}

export interface IFormItemConfiguration {
  formContentId: number;
  formDataId: number;
  itemId: number;
  sectionIndex: number;
  behaviorRemovable: boolean;
  itemCommentRequired: boolean;
  itemEditable: boolean;
  itemRatingRequired: boolean;
  itemRemovable: boolean;
  itemRemovableKey: string;
  itemViewable: boolean;
  itemWeightPermission: string;
  itemWeightRequired: boolean;
  suppressItemComments: boolean;
  suppressItemCommentsLabel: boolean;
}

export interface IDeductionScreenId {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  onetimeDeductionId: string;
  onetimeDeductionUserGoEmployeeEditId: string;
  onetimeDeductionUserGoEmployeeId: string;
  recurringDeductionId: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IRcmCompetency {
  rcmCompetencyId: number;
  category: string;
  commonCompetencyId: number;
  description: string;
  locale: string;
  name: string;
  source: string;
  type: string;
}

export interface IInitiativeAlignmentBean {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  goalId: number;
  goalName: string;
  goalType: string;
  initiativeGroupBeanRowId: number;
  initiativeId: number;
  initiativeName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IJobRequisition {
  jobReqId: number;
  age: number;
  appTemplateId: number;
  assessRatingScaleName: string;
  candidateHired: number;
  candidateProgress: number;
  city: string;
  closedDateTime: Date;
  comments: string;
  corporatePosting: boolean;
  country: string;
  createdDateTime: Date;
  currency: string;
  custCompanyText: string;
  custContractEndDate: Date;
  custInstrJob: string;
  custInstrOrg: string;
  custInstrPos: string;
  custInstrSalary: string;
  custInstrScreen: string;
  custInstrTeam: string;
  cust_intro_req: string;
  defaultLanguage: string;
  deleted: string;
  erpAmount: number;
  evergreen: boolean;
  formDataId: number;
  formDueDate: Date;
  internalStatus: string;
  intranetPosting: boolean;
  isDraft: boolean;
  jobCode: string;
  jobReqGUId: string;
  jobStartDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedProxyUserId: string;
  numberOpenings: number;
  openingsFilled: number;
  overallScaleName: string;
  parentJobReqId: number;
  positionNumber: string;
  postalcode: string;
  quickApply: boolean;
  ratedApplicantCount: number;
  restorecoordinatorTeamAdminDefaults: boolean;
  restorehiringManagerTeamAdminDefaults: boolean;
  restorerecruiterTeamAdminDefaults: boolean;
  restoresecondRecruiterTeamAdminDefaults: boolean;
  restoresourcerTeamAdminDefaults: boolean;
  restorevTeamAdminDefaults: boolean;
  restorevpOfStaffingTeamAdminDefaults: boolean;
  reverseScale: string;
  salaryBase: number;
  salaryMax: number;
  salaryMin: number;
  sfstd_jobReqType: string;
  stateProvince: string;
  statusSetId: number;
  targetBonusAmount: number;
  templateId: number;
  templateName: string;
  templateType: string;
  timeToFill: number;
  approver?: IJobRequisitionOperator[];
  assessment?: IJobRequisitionAssessment[];
  budgeted?: IPicklistOption[];
  businessUnit_obj?: IFOBusinessUnit;
  competencies?: IRcmCompetency[];
  coordinator?: IJobRequisitionOperator[];
  coordinatorTeam?: IJobRequisitionOperator[];
  coordinatorTeamGroup?: IJobRequisitionGroupOperator[];
  costCenter_obj?: IFOCostCenter;
  currentOwner?: IJobRequisitionOperator[];
  custContractType?: IPicklistOption[];
  custEmploymentType?: IPicklistOption[];
  custFrequency?: IPicklistOption[];
  custJustification?: IPicklistOption[];
  department_obj?: IFODepartment;
  division_obj?: IFODivision;
  filter2?: IPicklistOption[];
  hiringManager?: IJobRequisitionOperator[];
  hiringManagerTeam?: IJobRequisitionOperator[];
  hiringManagerTeamGroup?: IJobRequisitionGroupOperator[];
  interviewGuide?: IAttachment[];
  jobAnalyzerReportingData?: IJobAnalyzerReportingData[];
  jobApplications?: IJobApplication[];
  jobReqFwdCandidates?: IJobReqFwdCandidates[];
  jobReqLocale?: IJobRequisitionLocale[];
  jobReqPermissionsNav?: IJobRequisitionFieldControls;
  jobReqPostings?: IJobRequisitionPosting[];
  jobReqScreeningQuestions?: IJobReqScreeningQuestion[];
  lastModifiedByNav?: IUser;
  lastModifiedProxyUserNav?: IUser;
  legalEntity_obj?: IFOCompany;
  location_obj?: IFOLocation[];
  location_objlist?: IJobReqFOLocation[];
  originator?: IJobRequisitionOperator[];
  questions?: IJobReqQuestion[];
  recruiter?: IJobRequisitionOperator[];
  recruiterTeam?: IJobRequisitionOperator[];
  recruiterTeamGroup?: IJobRequisitionGroupOperator[];
  relocationPack?: IPicklistOption[];
  routeMap?: IFormRouteMap;
  secondRecruiterTeam?: IJobRequisitionOperator[];
  secondRecruiterTeamGroup?: IJobRequisitionGroupOperator[];
  sourcerTeam?: IJobRequisitionOperator[];
  sourcerTeamGroup?: IJobRequisitionGroupOperator[];
  status?: IPicklistOption[];
  vTeam?: IJobRequisitionOperator[];
  vTeamGroup?: IJobRequisitionGroupOperator[];
  vpOfStaffingTeam?: IJobRequisitionOperator[];
  vpOfStaffingTeamGroup?: IJobRequisitionGroupOperator[];
}

export interface ICandidateBackground_InsideWorkExperience {
  backgroundElementId: number;
  bgOrderPos: number;
  candidateId: number;
  department: string;
  endDate: Date;
  lastModifiedDateTime: Date;
  startDate: Date;
  title: string;
  candidate?: ICandidate;
}

export interface IMentoringProgramParticipantInfo {
  mentoringProgramId: string;
  roleType: string;
  uniqueIdentifier: string;
  MentoringProgramParticipantInfo_of_User?: IUser;
}

export interface ITalentPool {
  code: string;
  effectiveStartDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  effectiveEndDate: Date;
  effectiveStatus: string;
  enableReadiness: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  name_ar_SA: string;
  name_da_DK: string;
  name_de_DE: string;
  name_defaultValue: string;
  name_en_DEBUG: string;
  name_en_GB: string;
  name_en_US: string;
  name_fr_FR: string;
  name_localized: string;
  name_nl_NL: string;
  name_pl_PL: string;
  name_sv_SE: string;
  owner: string;
  type: string;
  createdByNav?: IUser;
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  effectiveStatusNav?: IMDFEnumValue;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  nameTranslationTextNav?: IMDFLocalizedValue[];
  ownerNav?: IUser;
  successorNav?: ISuccessor[];
  typeNav?: IPickListValueV2;
  wfRequestNav?: IWfRequest[];
}

export interface IWorkScheduleDayModel {
  externalCode: string;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  crossMidnightAllowed: boolean;
  description: string;
  entityUUID: string;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  hoursAndMinutes: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  nonWorkingDay: boolean;
  roundingBasedOnWorkScheduleInformation: string;
  shiftClassification: string;
  timeRecordingVariant: string;
  workingHours: number;
  countryNav?: ICountry[];
  createdByNav?: IUser;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  segments?: IWorkScheduleDayModelSegment[];
  shiftClassificationNav?: IShiftClassification;
  timeRecordingVariantNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IGoal_1 {
  id: number;
  category?: string;
  currentOwner: string;
  due?: Date;
  dueDateInUTC?: Date;
  flag?: number;
  guid: string;
  lastModified: Date;
  modifier: string;
  name: string;
  numbering: string;
  planId: number;
  start?: Date;
  startDateInUTC?: Date;
  state: string;
  stateLabel: string;
  status: number;
  type: string;
  userId: string;
  initiativesNal?: IInitiativeAlignmentBean[];
  permissionNav?: IGoalPermission_1;
}

export interface IGoal_3 {
  id: number;
  bizxActual: number;
  bizxPos?: number;
  bizxPosLabel: string;
  bizxStrategic?: number;
  bizxStrategicLabel: string;
  bizxTarget: number;
  category?: string;
  currentOwner: string;
  done: number;
  due?: Date;
  dueDateInUTC?: Date;
  flag?: number;
  guid: string;
  lastModified: Date;
  metric: string;
  modifier: string;
  name: string;
  numbering: string;
  planId: number;
  start?: Date;
  startDateInUTC?: Date;
  state: string;
  stateLabel: string;
  status: number;
  type: string;
  userId: string;
  weight: number;
  initiativesNal?: IInitiativeAlignmentBean[];
  milestones?: IGoalMilestone_3[];
  permissionNav?: IGoalPermission_3;
  tasks?: IGoalTask_3[];
}

export interface IJobApplicationInterview {
  applicationInterviewId: number;
  applicationId: number;
  candSlotMapId: number;
  endDate: Date;
  isTimeSet: number;
  notes: string;
  recruitEventStaffId: number;
  source: string;
  startDate: Date;
  status: string;
  templateType: string;
  interviewNotes?: IAttachment;
  interviewOverallAssessment?: IInterviewOverallAssessment;
  interviewer?: IUser;
  jobAppInterviewPermissionsNav?: IJobApplicationInterviewFieldControls;
  jobApplication?: IJobApplication;
  jobRequisition?: IJobRequisition;
  resume?: IAttachment;
}

export interface IGoal_2 {
  id: number;
  category?: string;
  currentOwner: string;
  done: number;
  due?: Date;
  dueDateInUTC?: Date;
  flag?: number;
  guid: string;
  lastModified: Date;
  metric: string;
  modifier: string;
  name: string;
  numbering: string;
  planId: number;
  start?: Date;
  startDateInUTC?: Date;
  state: string;
  stateLabel: string;
  status: number;
  type: string;
  userId: string;
  weight: number;
  initiativesNal?: IInitiativeAlignmentBean[];
  milestones?: IGoalMilestone_2[];
  permissionNav?: IGoalPermission_2;
  tasks?: IGoalTask_2[];
}

export interface IBackground_Documents {
  backgroundElementId: number;
  userId: string;
  DocName: string;
  attachment: number;
  bgOrderPos: number;
  lastModifiedDate: Date;
  attachmentNav?: IAttachment;
  userIdNav?: IUser;
}

export interface IGoal_5 {
  id: number;
  actualAchievement?: number;
  category: string;
  currentOwner: string;
  due?: Date;
  dueDateInUTC?: Date;
  flag?: number;
  guid: string;
  lastModified: Date;
  metric: string;
  mltAchievementType: number;
  modifier: string;
  name: string;
  numbering: string;
  planId: number;
  rating: number;
  start?: Date;
  startDateInUTC?: Date;
  state: string;
  stateLabel: string;
  status: number;
  type: string;
  userId: string;
  weight: number;
  initiativesNal?: IInitiativeAlignmentBean[];
  metriclookup?: IGoalMetricLookup_5[];
  permissionNav?: IGoalPermission_5;
}

export interface IGoal_4 {
  id: number;
  actualAchievement?: number;
  category: string;
  currentOwner: string;
  due?: Date;
  dueDateInUTC?: Date;
  flag?: number;
  guid: string;
  lastModified: Date;
  metric: string;
  mltAchievementType: number;
  modifier: string;
  name: string;
  numbering: string;
  planId: number;
  rating: number;
  start?: Date;
  startDateInUTC?: Date;
  state: string;
  stateLabel: string;
  status: number;
  type: string;
  userId: string;
  weight: number;
  initiativesNal?: IInitiativeAlignmentBean[];
  metriclookup?: IGoalMetricLookup_4[];
  permissionNav?: IGoalPermission_4;
}

export interface IGoal_6 {
  id: number;
  Purpose: string;
  PurposeLabel: string;
  category?: string;
  currentOwner: string;
  description: string;
  due?: Date;
  dueDateInUTC?: Date;
  flag?: number;
  guid: string;
  lastModified: Date;
  modifier: string;
  name: string;
  numbering: string;
  planId: number;
  start?: Date;
  startDateInUTC?: Date;
  state: string;
  stateLabel: string;
  status: number;
  type: string;
  userId: string;
  initiativesNal?: IInitiativeAlignmentBean[];
  permissionNav?: IGoalPermission_6;
}

export interface IFormContent {
  formContentId: number;
  formDataId: number;
  formSubjectId: string;
  lastModifiedDate: Date;
  status: number;
  folders?: IFormFolder[];
  form360ReviewContentDetail?: IForm360ReviewContentDetail[];
  formHeader?: IFormHeader;
  pmReviewContentDetail?: IFormPMReviewContentDetail[];
}

export interface IExternalUser {
  userId: string;
  defaultLocale: string;
  is_deleted: boolean;
  lastModifiedDateTime: Date;
  loginMethod: string;
  password: string;
  personGUID: string;
  personId: number;
  personIdExternal: string;
  productName: string;
  status: string;
  timeZone: string;
  userName: string;
  extAddressInfo?: IExtAddressInfo[];
  extEmailInfo?: IExtEmailInfo[];
  extPersonalInfo?: IExtPersonalInfo;
  extPhoneInfo?: IExtPhoneInfo[];
}

export interface IEMEventPayload {
  id: number;
  fileName: string;
  fileType: string;
  mimeType: string;
  payload: Buffer;
  type: string;
}

export interface IPaymentInformationDetailV3MOZ {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountType: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IFOPayComponent {
  externalCode: string;
  startDate: Date;
  basePayComponentGroup: string;
  canOverride: boolean;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  currency: string;
  description: string;
  displayOnSelfService: boolean;
  endDate: Date;
  frequencyCode: string;
  isEarning: boolean;
  isEndDatedPayment: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  name: string;
  number: number;
  payComponentType: string;
  payComponentValue: number;
  rate: number;
  recurring: boolean;
  selfServiceDescription: string;
  status: string;
  target: boolean;
  unitOfMeasure: string;
  usedForCompPlanning: string;
  basePayComponentGroupNav?: IFOPayComponentGroup;
  descriptionTranslationNav?: IFoTranslation;
  frequencyCodeNav?: IFOFrequency;
  nameTranslationNav?: IFoTranslation;
}

export interface IPaymentInformationV3 {
  effectiveStartDate: Date;
  worker: string;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  effectiveEndDate: Date;
  jobCountry: string;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  createdByNav?: IUser;
  jobCountryNav?: ICountry;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
  toPaymentInformationDetailV3?: IPaymentInformationDetailV3[];
  wfRequestNav?: IWfRequest[];
  workerNav?: IUser;
}

export interface IGoalTask_2 {
  id: number;
  description: string;
  done: number;
  due: Date;
  flag: number;
  index: number;
  lastModified: Date;
  modifier: string;
  objId: number;
  permissionNav?: IGoalTaskPermission_2;
}

export interface IGoalTask_3 {
  id: number;
  description: string;
  done: number;
  due: Date;
  flag: number;
  index: number;
  lastModified: Date;
  modifier: string;
  objId: number;
  permissionNav?: IGoalTaskPermission_3;
}

export interface IEmployeeProfileFieldConfig {
  EmployeeProfileBlockContent_code: string;
  EmployeeProfilePageConfig_code: string;
  EmployeeProfileSectionConfig_code: string;
  EmployeeProfileSubSectionConfig_code: string;
  code: string;
  createdBy?: string;
  createdDateTime: Date;
  fieldId: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  order: number;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IOfferLetter {
  offerLetterId: number;
  applicationId: number;
  body: string;
  bodyLocale: string;
  bodyTemplateId: number;
  bonusPayoutFreq: string;
  candResponseComments: string;
  candResponseDate: Date;
  comments: string;
  countryCode: string;
  countryName: string;
  createDate: Date;
  createdBy?: string;
  currencyCode: string;
  jobStartDate: Date;
  jobTitle: string;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  locale: string;
  localeCode: string;
  mailboxes: string;
  offerExpirationDate: Date;
  offerLetter: Buffer;
  offerSentDate: Date;
  overtimeRate: number;
  salaryRate: number;
  salaryRateType: string;
  sendMode: string;
  status: string;
  stockGrant: number;
  stockOption: number;
  subject: string;
  targetBonusAmount: number;
  targetBonusPercent: number;
  templateId: number;
  templateName: string;
  tokens: string;
  attachments?: IAttachment[];
  createdByNav?: IUser;
  jobApplication?: IJobApplication;
  lastModifiedByNav?: IUser;
  offerLetterPDFmail?: IAttachment;
}

export interface IFormJobRole {
  formContentId: number;
  formDataId: number;
  roleId: number;
  order: number;
  roleDesc: string;
  roleName: string;
}

export interface ISimpleGoal {
  id: number;
  flag: number;
  name: string;
  type: string;
  userId: string;
}

export interface IJobApplicationAssessmentOrder {
  id: number;
  applicationId: number;
  assessmentUrl: string;
  createdBy?: string;
  createdDateTime: Date;
  handbackUrl: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  packageCode: string;
  vendorCode: string;
  assessmentReport?: IJobApplicationAssessmentReport[];
  createdByNav?: IUser;
  jobApplication?: IJobApplication;
  lastModifiedByNav?: IUser;
}

export interface IJobClassificationUSA {
  JobClassificationCountry_country: string;
  JobClassification_effectiveStartDate: Date;
  JobClassification_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  eeo1JobCategory: string;
  eeo4JobCategory: string;
  eeo5JobCategory: string;
  eeo6JobCategory: string;
  eeoJobGroup: string;
  flsaStatusUSA: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  localJobTitle: string;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  eeo1JobCategoryNav?: IPickListValueV2[];
  eeo4JobCategoryNav?: IPickListValueV2[];
  eeo5JobCategoryNav?: IPickListValueV2[];
  eeo6JobCategoryNav?: IPickListValueV2[];
  eeoJobGroupNav?: IPickListValueV2[];
  flsaStatusUSANav?: IPickListValueV2[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IPayrollDataMaintenanceTask {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  currentTaskCreationDate: Date;
  employeeDataEffectiveFromDate: Date;
  externalNameTaskType_ar_SA: string;
  externalNameTaskType_da_DK: string;
  externalNameTaskType_de_DE: string;
  externalNameTaskType_defaultValue: string;
  externalNameTaskType_en_DEBUG: string;
  externalNameTaskType_en_GB: string;
  externalNameTaskType_en_US: string;
  externalNameTaskType_fr_FR: string;
  externalNameTaskType_localized: string;
  externalNameTaskType_nl_NL: string;
  externalNameTaskType_pl_PL: string;
  externalNameTaskType_sv_SE: string;
  initiatedBy: string;
  isMasterDataChangeHappenedInBetween: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastTaskCreationDate: Date;
  legalEntity: string;
  mdfSystemRecordStatus: string;
  status: string;
  taskType: string;
  userId: string;
  createdByNav?: IUser;
  externalNameTaskTypeTranslationTextNav?: IMDFLocalizedValue[];
  initiatedByNav?: IUser;
  lastModifiedByNav?: IUser;
  legalEntityNav?: IFOCompany[];
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
  userIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IJobReqScreeningQuestion {
  jobReqId: number;
  locale: string;
  order: number;
  disqualifier: boolean;
  expectedAnswerValue: number;
  expectedDir: string;
  jobReqContent: string;
  maxLength: number;
  questionDescription: string;
  questionId: number;
  questionName: string;
  questionParentId: number;
  questionParentResponse: string;
  questionType: string;
  questionWeight: number;
  ratingScale: string;
  required: boolean;
  score: boolean;
  choices?: IJobReqScreeningQuestionChoice[];
  jobRequisition?: IJobRequisition;
}

export interface IBackground_Awards {
  backgroundElementId: number;
  userId: string;
  bgOrderPos: number;
  description: string;
  institution: string;
  issueDate: Date;
  lastModifiedDate: Date;
  name: string;
  userIdNav?: IUser;
}

export interface IAutoDelegateConfig {
  delegator: string;
  createdBy?: string;
  createdDateTime: Date;
  delegationStatus: string;
  endTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  optimisticLockUUID: string;
  startTime: Date;
  autoDelegateDetails?: IAutoDelegateDetail[];
  createdByNav?: IUser;
  delegationStatusNav?: IMDFEnumValue;
  delegatorNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface ISecondaryAssignments {
  effectiveStartDate: Date;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  effectiveEndDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  allSfProcesses?: ISecondaryAssignmentsItem[];
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IThemeInfo {
  id: string;
  accessibilityPreferences: IAccessibilityPreferences;
  fingerprints: IThemeFingerprintsBean;
  lastModifiedDate: number;
  locale: string;
  modules: string;
  ui5Theme: string;
  urls: IThemeUrlsBean;
}

export interface IJobRequisitionGroupOperator {
  jobReqId: number;
  operatorRole: string;
  userGroupId: number;
  adminSelectedGroupToBeRemoved: boolean;
  isAdminSelected: boolean;
  isDisabled: boolean;
  userGroupName: string;
  jobRequisition?: IJobRequisition;
}

export interface IDevGoalDetail {
  Activity_activityId: number;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  goalId: number;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  recordId: string;
  snapshot: boolean;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfDevGoalDetailToSimpleDevGoalNav?: ISimpleDevGoal;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IFoTranslation {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  foField: string;
  foObjectID: string;
  foType: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  value_ar_SA: string;
  value_da_DK: string;
  value_de_DE: string;
  value_defaultValue: string;
  value_en_DEBUG: string;
  value_en_GB: string;
  value_en_US: string;
  value_fr_FR: string;
  value_localized: string;
  value_nl_NL: string;
  value_pl_PL: string;
  value_sv_SE: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  valueTranslationTextNav?: IMDFLocalizedValue[];
  wfRequestNav?: IWfRequest[];
}

export interface ICurrencyConversion {
  code: string;
  effectiveStartDate: Date;
  baseCurrency: string;
  conversionRate: number;
  createdBy?: string;
  createdDateTime: Date;
  effectiveEndDate: Date;
  effectiveStatus: string;
  exchangeRateType: string;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  toCurrency: string;
  baseCurrencyNav?: ICurrency;
  createdByNav?: IUser;
  effectiveStatusNav?: IMDFEnumValue;
  exchangeRateTypeNav?: IPickListValueV2;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  toCurrencyNav?: ICurrency;
  wfRequestNav?: IWfRequest[];
}

export interface IJobReqFOLocation {
  jobReqMultiSelectId: number;
  fieldName: string;
  isPrimary: boolean;
  jobReqId: number;
  parentFieldValue: number;
  value?: IFOLocation[];
}

export interface ITimeAccountPurchaseProfilePayComponentAssignment {
  TimeAccountPurchaseProfile_externalCode: string;
  payComponent: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  payComponentNav?: IFOPayComponent[];
}

export interface IRoleCompetencyBehaviorMappingEntity {
  RoleEntity_externalCode: string;
  externalCode: string;
  behaviorMappingEntity: string;
  competency: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  rating_ar_SA: string;
  rating_da_DK: string;
  rating_de_DE: string;
  rating_defaultValue: string;
  rating_en_DEBUG: string;
  rating_en_GB: string;
  rating_en_US: string;
  rating_fr_FR: string;
  rating_localized: string;
  rating_nl_NL: string;
  rating_pl_PL: string;
  rating_sv_SE: string;
  status: string;
  subModule: string;
  weight_ar_SA: string;
  weight_da_DK: string;
  weight_de_DE: string;
  weight_defaultValue: string;
  weight_en_DEBUG: string;
  weight_en_GB: string;
  weight_en_US: string;
  weight_fr_FR: string;
  weight_localized: string;
  weight_nl_NL: string;
  weight_pl_PL: string;
  weight_sv_SE: string;
  behaviorMappingEntityNav?: IBehaviorMappingEntity;
  competencyNav?: ICompetencyEntity;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  ratingTranslationTextNav?: IMDFLocalizedValue[];
  statusNav?: IMDFEnumValue;
  weightTranslationTextNav?: IMDFLocalizedValue[];
}

export interface IFormReviewFeedback {
  feedbackId: number;
  appraiserUserEmail: string;
  appraiserUserId: string;
  companyId: string;
  digiCode: string;
  formDataId: number;
  pmFeedback: string;
  requestDate: Date;
  requestUserEmail: string;
  requestUserId: string;
  requestUserRole: string;
  responseDate: Date;
  responseId: string;
  subjectUserEmail: string;
  subjectUserId: string;
}

export interface IJobApplicationBackgroundCheckResult {
  statusId: number;
  createdDateTime: Date;
  finalStep: boolean;
  reportUrl: string;
  stepMessage: string;
  stepName: string;
  stepStatus: string;
  vendorCode: string;
  vendorOrderNo: string;
  backgroundCheckRequest?: IJobApplicationBackgroundCheckRequest;
}

export interface ISpotAwardBudget {
  effectiveStartDate: Date;
  externalCode: string;
  budgetAmount: number;
  createdBy?: string;
  createdDateTime: Date;
  currency: string;
  effectiveEndDate: Date;
  effectiveStatus: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  spotAwardProgram: string;
  usedAmount: number;
  userId: string;
  createdByNav?: IUser;
  effectiveStatusNav?: IMDFEnumValue;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  spotAwardProgramNav?: ISpotAwardProgram;
  userIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IFOJobClassLocalUSA {
  country: string;
  externalCode: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  eeo1JobCategory: string;
  eeo4JobCategory: string;
  eeo5JobCategory: string;
  eeo6JobCategory: string;
  eeoJobGroup: string;
  endDate: Date;
  flsaStatusUSA: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  localJobTitle: string;
  mdfSystemRecordId: string;
  status: string;
  countryNav?: ITerritory;
  createdByNav?: IUser;
  eeo1JobCategoryNav?: IPickListValueV2[];
  eeo4JobCategoryNav?: IPickListValueV2[];
  eeo5JobCategoryNav?: IPickListValueV2[];
  eeo6JobCategoryNav?: IPickListValueV2[];
  eeoJobGroupNav?: IPickListValueV2[];
  flsaStatusUSANav?: IPickListValueV2[];
  lastModifiedByNav?: IUser;
}

export interface IWorkScheduleDayModelAssignment {
  WorkSchedule_externalCode: string;
  day: number;
  category: string;
  createdBy?: string;
  createdDateTime: Date;
  dayModel: string;
  dayWorkingHours: number;
  entityUUID: string;
  hoursAndMinutes: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  roundingBasedOnWorkScheduleInformation: string;
  categoryNav?: IMDFEnumValue;
  createdByNav?: IUser;
  dayModelNav?: IWorkScheduleDayModel;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  segments?: IWorkScheduleDayModelAssignmentSegment[];
}

export interface IJobApplicationAudit {
  fieldOrderPos: number;
  revNumber: number;
  changedBy: string;
  clobFieldRef: string;
  clobNewValueXML: string;
  clobOldValueXML: string;
  dateNewValue: Date;
  dateOldValue: Date;
  fieldId: string;
  fieldType: string;
  jobPostEndDate: Date;
  jobPostStartDate: Date;
  jobPostingId: number;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedExtId: number;
  mergedFrom: string;
  newValue: string;
  oldValue: string;
  refType: string;
  revType: number;
  source: string;
  jobApplication?: IJobApplication;
  lastModifiedByNav?: IUser;
}

export interface ICust_CC_UserCompDocument {
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  cust_DocumentAttachmentId: string;
  cust_DocumentName: string;
  cust_DocumentUrl: string;
  cust_FileName: string;
  cust_FileType: string;
  cust_TypeOfComp: string;
  cust_UserCompId: string;
  cust_UserFuncCompId: string;
  cust_UserId: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  cust_DocumentAttachmentNav?: IAttachment;
  cust_UserIdNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IGoalPlanTemplate {
  id: number;
  defaultTemplate: boolean;
  description: string;
  displayOrder: number;
  dueDate: Date;
  fieldOrder: string;
  mobileFields: string;
  name: string;
  parentPlanId: number;
  percentageValueOver100: boolean;
  startDate: Date;
  useTextForPrivacy: boolean;
  enums?: IGoalEnum[];
  goalWeights?: IGoalWeight[];
  goals?: ISimpleGoal[];
  planStates?: IGoalPlanState[];
}

export interface IFormFolder {
  folderId: number;
  folderName: string;
  userId: string;
  forms?: IFormContent[];
}

export interface ICPMNotificationConfig {
  notificationId: number;
  createdBy?: string;
  createdDateTime: Date;
  displayOrder: number;
  enabled: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  recordId: string;
  threshold: number;
  type: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  typeNav?: IPickListValueV2[];
  wfRequestNav?: IWfRequest[];
}

export interface IAssignedComplianceForm {
  id: string;
  bpeUserTaskId: string;
  complianceFormName: string;
  createdBy?: string;
  createdDateTime: Date;
  dueDate: Date;
  form: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  order: number;
  participantType: string;
  preRequisiteFormNames: string;
  process: string;
  rank: number;
  responsibleUser: string;
  status: string;
  subjectUser: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  participantTypeNav?: IMDFEnumValue;
  processNav?: IComplianceProcess;
  responsibleUserNav?: IUser;
  statusNav?: IMDFEnumValue;
  subjectUserNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface ICust_GER_PersonnelArea {
  ID: number;
  cust_GERApplication_externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  cust_Text: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  cust_SubAreas?: ICust_GER_PersonnelSubArea[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IWorkScheduleDay {
  WorkSchedule_externalCode: string;
  day: number;
  createdBy?: string;
  createdDateTime: Date;
  entityUUID: string;
  hoursAndMinutes: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  workingHours: number;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IMyPendingWorkflow {
  wfRequestId: string;
  desc: string;
  subject: string;
  url: string;
}

export interface ICalibrationSubjectComment {
  subjectCommentId: number;
  authorizedBy: string;
  comment: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  reason: string;
  reasonId: number;
  status: number;
  calSessionSubject?: ICalibrationSessionSubject;
}

export interface ITimeAccount {
  externalCode: string;
  accountClosed: boolean;
  accountType: string;
  bookingEndDate: Date;
  bookingStartDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  cust_balanceAtAccountClosing: number;
  endDate: Date;
  entityUUID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  startDate: Date;
  userId: string;
  accountTypeNav?: ITimeAccountType;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  timeAccountDetails?: ITimeAccountDetail[];
  userIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IComplianceFormSignature {
  ComplianceFormData_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  signatureStatus: string;
  signatureUser: string;
  signatureUserFullName: string;
  signatureUserRole: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  signatureStatusNav?: IMDFEnumValue;
  signatureUserNav?: IUser;
  signatureUserRoleNav?: IMDFEnumValue;
}

export interface IEmployeeTimeCOL {
  EmployeeTime_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  entityUUID: string;
  identicalSicknessGroup: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  identicalSicknessGroupNav?: IEmployeeTimeGroup;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IRecurringDeductionItem {
  RecurringDeduction_effectiveStartDate: Date;
  RecurringDeduction_userSysId: string;
  payComponentType: string;
  additionalInfo: string;
  advanceId: string;
  amount: number;
  createdBy?: string;
  createdDateTime: Date;
  currency: string;
  editPermission: string;
  endDate: Date;
  equivalentAmount: number;
  frequency: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  referenceId: string;
  unitOfMeasure: string;
  advanceIdNav?: INonRecurringPayment;
  attachmentNav?: IAttachment;
  createdByNav?: IUser;
  currencyNav?: ICurrency[];
  frequencyNav?: IFOFrequency;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  payComponentTypeNav?: IFOPayComponent[];
}

export interface IEducationDegreeEntity {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  degree_ar_SA: string;
  degree_da_DK: string;
  degree_de_DE: string;
  degree_defaultValue: string;
  degree_en_DEBUG: string;
  degree_en_GB: string;
  degree_en_US: string;
  degree_fr_FR: string;
  degree_localized: string;
  degree_nl_NL: string;
  degree_pl_PL: string;
  degree_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  status: string;
  subModule: string;
  createdByNav?: IUser;
  degreeTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  legalEntities?: IFOCompany[];
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IEmployeeTimeESP {
  EmployeeTime_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  entityUUID: string;
  identicalSicknessGroup: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  originalAbsence: boolean;
  createdByNav?: IUser;
  identicalSicknessGroupNav?: IEmployeeTimeGroup;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IBackground_OutsideWorkExperience {
  backgroundElementId: number;
  userId: string;
  bgOrderPos: number;
  businessType: string;
  employer: string;
  endDate: Date;
  lastModifiedDate: Date;
  startDate: Date;
  startTitle: string;
  businessTypeNav?: IPicklistOption;
  userIdNav?: IUser;
}

export interface IAchievementDevGoalDetail {
  Achievement_achievementId: number;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  goalId: number;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  recordId: string;
  snapshot: boolean;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfAchievementDevGoalDetailToSimpleDevGoalNav?: ISimpleDevGoal;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface ISpotAwardGuidelinesRule {
  SpotAwardProgram_externalCode: string;
  externalCode: string;
  additionalCriteria: string;
  category: string;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  currency: string;
  guideLineRuleOrder: number;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  level: string;
  maxRuleAmount: number;
  mdfSystemRecordStatus: string;
  minRuleAmount: number;
  ruleAmount: number;
  ruleAmountIncrement: number;
  categoryNav?: ISpotAwardCategory;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  levelNav?: ISpotAwardLevel;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IEmployeeTimeUSA {
  EmployeeTime_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  disabilityPeriodOneEndDate: Date;
  disabilityPeriodThreeEndDate: Date;
  disabilityPeriodTwoEndDate: Date;
  entityUUID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  policyDeviation: string;
  refDisabilityPeriodOneEndDate: Date;
  refDisabilityPeriodThreeEndDate: Date;
  refDisabilityPeriodTwoEndDate: Date;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  policyDeviationNav?: IMDFEnumValue;
}

export interface IForm360SummaryViewCategory {
  category: string;
  formContentId: number;
  formDataId: number;
  categoryOrder: number;
  categoryWeight: string;
}

export interface IMDFLocalizedValue {
  locale: string;
  value: string;
}

export interface IFOLocation {
  externalCode: string;
  startDate: Date;
  addressAddress1: string;
  addressAddress10: string;
  addressAddress11: string;
  addressAddress2: string;
  addressAddress3: string;
  addressAddress4: string;
  addressAddress5: string;
  addressAddress6: string;
  addressAddress7: string;
  addressAddress8: string;
  addressAddress9: string;
  addressCity: string;
  addressCountry: string;
  addressCounty: string;
  addressProvince: string;
  addressState: string;
  addressZipCode: string;
  companyFlx: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  description: string;
  endDate: Date;
  geozoneFlx: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  locationGroup: string;
  name: string;
  status: string;
  timezone: string;
  addressNavDEFLT?: IFOCorporateAddressDEFLT;
  companyFlxNav?: IFOCompany[];
  descriptionTranslationNav?: IFoTranslation;
  geozoneFlxNav?: IFOGeozone;
  locationGroupNav?: IFOLocationGroup;
  nameTranslationNav?: IFoTranslation;
}

export interface IFOWfConfig {
  externalCode: string;
  actionType: string;
  approverRole: string;
  approverType: string;
  context: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  description: string;
  emailConfiguration: number;
  futureDatedAlternateWorkflow: string;
  isCcLinkToApprovalPage: boolean;
  isDelegateSupported: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  name: string;
  relationshipToApprover: string;
  remindIndays: number;
  respectRBP: boolean;
  skipType: string;
  stepNum: number;
  descriptionTranslationNav?: IFoTranslation;
  futureDatedAlternateWorkflowNav?: IFOWfConfig;
  nameTranslationNav?: IFoTranslation;
  wfStepApproverNav?: IFOWfConfigStepApprover[];
}

export interface IBackground_Courses {
  backgroundElementId: number;
  userId: string;
  bgOrderPos: number;
  course: string;
  endDate: Date;
  institution: string;
  instructionType: string;
  lastModifiedDate: Date;
  length: string;
  instructionTypeNav?: IPicklistOption;
  lengthNav?: IPicklistOption;
  userIdNav?: IUser;
}

export interface IMDFTenantPreferredTimeZone {
  tenantId: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  timeZoneId: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IDGPeoplePool {
  peoplePoolId: string;
  filters?: IDGFilter[];
}

export interface IPayrollDataMaintenanceTaskConfiguration {
  externalCode: string;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  status: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
  taskTypes?: IPayrollDataMaintenanceTaskTypeConfiguration[];
  wfRequestNav?: IWfRequest[];
}

export interface IRBPRule {
  ruleId: number;
  accessGroupLevel: number;
  accessUserType: string;
  excludeSelf: boolean;
  includeSelf: boolean;
  myFilter: string;
  relationRole: string;
  status: number;
  targetGroupLevel: number;
  targetUserType: string;
  accessGroups?: IDynamicGroup[];
  roles?: IRBPRole;
  targetGroups?: IDynamicGroup[];
}

export interface ISAPSystemConfiguration {
  externalCode: string;
  apiUrl: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  payrollSystemClientId: string;
  payrollSystemId: string;
  payrollSystemUrl: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IJobReqTemplate_Hiring_Requisition_with_Position {
  templateId: number;
  agencyPosting: boolean;
  assessment: string;
  city: string;
  comments: string;
  corporatePosting: boolean;
  country: string;
  currency: string;
  custCompanyText: string;
  custContractEndDate: Date;
  custInstrJob: string;
  custInstrOrg: string;
  custInstrPos: string;
  custInstrSalary: string;
  custInstrScreen: string;
  custInstrTeam: string;
  cust_intro_req: string;
  defaultLanguage: string;
  end: Date;
  erpAmount: number;
  extJobDescFooter: string;
  extJobDescHeader: string;
  extListingLayout: string;
  extTitle: string;
  externalPrivatePosting: boolean;
  id: string;
  intJobDescFooter: string;
  intJobDescHeader: string;
  intranetPosting: boolean;
  intranetPrivatePosting: boolean;
  jobCode: string;
  jobPostLanguage: string;
  jobStartDate: Date;
  listingLayout: string;
  numberOpenings: number;
  offerExtensionDate: Date;
  positionNumber: string;
  postalcode: string;
  questions: string;
  quickApply: boolean;
  salaryBase: number;
  salaryMax: number;
  salaryMin: number;
  start: Date;
  stateProvince: string;
  targetBonusAmount: number;
  title: string;
  budgeted?: IPicklistOption;
  businessUnit_obj?: IFOBusinessUnit;
  coordinatorName?: IJobRequisitionOperator[];
  coordinatorTeam?: IJobRequisitionOperator[];
  costCenter_obj?: IFOCostCenter;
  custContractType?: IPicklistOption;
  custEmploymentType?: IPicklistOption;
  custFrequency?: IPicklistOption;
  custJustification?: IPicklistOption;
  department_obj?: IFODepartment;
  division_obj?: IFODivision;
  filter2?: IPicklistOption;
  hiringManagerName?: IJobRequisitionOperator[];
  hiringManagerTeam?: IJobRequisitionOperator[];
  interviewGuide?: IAttachment[];
  legalEntity_obj?: IFOCompany;
  location_obj?: IFOLocation[];
  recruiterName?: IJobRequisitionOperator[];
  recruiterTeam?: IJobRequisitionOperator[];
  relocationPack?: IPicklistOption;
  secondRecruiterTeam?: IJobRequisitionOperator[];
  sourcerTeam?: IJobRequisitionOperator[];
  status?: IPicklistOption;
  vTeam?: IJobRequisitionOperator[];
  vpOfStaffingTeam?: IJobRequisitionOperator[];
}

export interface IJobResponsibilityContent {
  JobProfile_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  entity: string;
  jobProfileId: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  order: number;
  sectionId: string;
  sectionType: string;
  status: string;
  subModule: string;
  createdByNav?: IUser;
  entityNav?: IJobResponsibilityEntity;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
}

export interface IFormTemplate {
  formTemplateId: number;
  formTemplateName: string;
  formTemplateType: string;
  associatedForms?: IFormHeader[];
}

export interface ICust_GERReqTempl {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  cust_AppTemplateID: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  cust_templateFields?: ICust_GERReqTemplField[];
  cust_templateOperators?: ICust_GERReqTemplOperator[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IGoalMilestonePermission_3 {
  id: number;
  createRow: boolean;
  deleteRow: boolean;
  description: number;
  due: number;
  moveRow: boolean;
  start: number;
  type: string;
  userId: string;
}

export interface ICompetencyType {
  guid: number;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  name_ar_SA: string;
  name_da_DK: string;
  name_de_DE: string;
  name_defaultValue: string;
  name_en_DEBUG: string;
  name_en_GB: string;
  name_en_US: string;
  name_fr_FR: string;
  name_localized: string;
  name_nl_NL: string;
  name_pl_PL: string;
  name_sv_SE: string;
  subModule: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  nameTranslationTextNav?: IMDFLocalizedValue[];
  wfRequestNav?: IWfRequest[];
}

export interface IJobOfferApprover {
  offerApproverId: number;
  approvalStepId: string;
  approverAction: string;
  approverActionDate: Date;
  approverFirstName: string;
  approverLastName: string;
  approverOrder: number;
  comment: string;
  createdBy?: string;
  createdDate: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  offerApprovalId: number;
  username: string;
  approverNav?: IUser;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  offerApproval?: IJobOffer;
}

export interface IONB2BuddyActivity {
  activityId: string;
  activityStatus: string;
  activityStatusDate: Date;
  activityTitle: string;
  activityType: string;
  buddyPersonId: number;
  buddyUser: string;
  createdBy?: string;
  createdDateTime: Date;
  dueDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastNudgedBy: string;
  lastNudgedDate: Date;
  mdfSystemRecordStatus: string;
  optional: boolean;
  personalNote: string;
  process: string;
  reason: string;
  responsibleUsers: string;
  subjectUser: string;
  activityStatusNav?: IMDFEnumValue;
  activityTypeNav?: IMDFEnumValue;
  buddyUserNav?: IUser;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  lastNudgedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  processNav?: IONB2Process;
  subjectUserNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IBudgetGroup {
  effectiveStartDate: Date;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  description: string;
  effectiveEndDate: Date;
  effectiveStatus: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  userId: string;
  createdByNav?: IUser;
  effectiveStatusNav?: IMDFEnumValue;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  parentBudgetGroup?: IBudgetGroup;
  userIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IRatedSkillMapping {
  SkillProfile_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  expectedLevel_ar_SA: string;
  expectedLevel_da_DK: string;
  expectedLevel_de_DE: string;
  expectedLevel_defaultValue: string;
  expectedLevel_en_DEBUG: string;
  expectedLevel_en_GB: string;
  expectedLevel_en_US: string;
  expectedLevel_fr_FR: string;
  expectedLevel_localized: string;
  expectedLevel_nl_NL: string;
  expectedLevel_pl_PL: string;
  expectedLevel_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  managerRatedLevel_ar_SA: string;
  managerRatedLevel_da_DK: string;
  managerRatedLevel_de_DE: string;
  managerRatedLevel_defaultValue: string;
  managerRatedLevel_en_DEBUG: string;
  managerRatedLevel_en_GB: string;
  managerRatedLevel_en_US: string;
  managerRatedLevel_fr_FR: string;
  managerRatedLevel_localized: string;
  managerRatedLevel_nl_NL: string;
  managerRatedLevel_pl_PL: string;
  managerRatedLevel_sv_SE: string;
  mdfSystemRecordStatus: string;
  selfRatedLevel_ar_SA: string;
  selfRatedLevel_da_DK: string;
  selfRatedLevel_de_DE: string;
  selfRatedLevel_defaultValue: string;
  selfRatedLevel_en_DEBUG: string;
  selfRatedLevel_en_GB: string;
  selfRatedLevel_en_US: string;
  selfRatedLevel_fr_FR: string;
  selfRatedLevel_localized: string;
  selfRatedLevel_nl_NL: string;
  selfRatedLevel_pl_PL: string;
  selfRatedLevel_sv_SE: string;
  skill: string;
  status: string;
  subModule: string;
  createdByNav?: IUser;
  expectedLevelTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  managerRatedLevelTranslationTextNav?: IMDFLocalizedValue[];
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  selfRatedLevelTranslationTextNav?: IMDFLocalizedValue[];
  skillNav?: ISkillEntity;
  statusNav?: IMDFEnumValue;
}

export interface IONB2EquipmentType {
  code: string;
  createdBy?: string;
  createdDateTime: Date;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  inUse: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  ui5StandardIconId: string;
  createdByNav?: IUser;
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  iconNav?: IAttachment;
  inUseNav?: IMDFEnumValue;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  toEquipmentTypeValue?: IONB2EquipmentTypeValue[];
  wfRequestNav?: IWfRequest[];
}

export interface IUserPermissions {
  userId: number;
  addressLine1: number;
  addressLine2: number;
  addressLine3: number;
  assignmentUUID: number;
  benchStrength: number;
  benchStrengthNav: number;
  bonusBudgetAmount: number;
  bonusTarget: number;
  businessPhone: number;
  businessSegment: number;
  cellPhone: number;
  citizenship: number;
  city: number;
  companyExitDate: number;
  compensationBonusEligible: number;
  compensationEligible: number;
  compensationReadOnly: number;
  compensationSalaryEligible: number;
  compensationSalaryRateType: number;
  compensationSalaryRateUnits: number;
  compensationStockEligible: number;
  competency: number;
  competencyRatingNav: number;
  country: number;
  criticalTalentComments: number;
  custom01: number;
  custom02: number;
  custom03: number;
  custom04: number;
  custom06: number;
  custom07: number;
  custom08: number;
  custom09: number;
  custom10: number;
  custom11: number;
  custom12: number;
  custom13: number;
  custom14: number;
  custom15: number;
  customManager: number;
  customReports: number;
  dateOfBirth: number;
  dateOfCurrentPosition: number;
  dateOfPosition: number;
  defaultFullName: number;
  defaultLocale: number;
  department: number;
  directReports: number;
  displayName: number;
  division: number;
  dummyNominationNav: number;
  email: number;
  empId: number;
  empInfo: number;
  employeeClass: number;
  ethnicity: number;
  ethnicityNav: number;
  fax: number;
  finalJobCode: number;
  finalJobFamily: number;
  finalJobRole: number;
  firstName: number;
  futureLeader: number;
  gender: number;
  hireDate: number;
  homePhone: number;
  hr: number;
  hrReports: number;
  impactOfLoss: number;
  impactOfLossComments: number;
  impactOfLossNav: number;
  isPrimaryAssignment: number;
  issueComments: number;
  jobCode: number;
  jobFamily: number;
  jobLevel: number;
  jobRole: number;
  jobTitle: number;
  keyPosition: number;
  lastModified: number;
  lastModifiedDateTime: number;
  lastModifiedWithTZ: number;
  lastName: number;
  lastReviewDate: number;
  level: number;
  localCurrencyCode: number;
  location: number;
  lumpsum2Target: number;
  lumpsumTarget: number;
  manager: number;
  married: number;
  matrix1Label: number;
  matrix2Label: number;
  matrixManaged: number;
  matrixManager: number;
  matrixReports: number;
  meritEffectiveDate: number;
  meritTarget: number;
  mi: number;
  minority: number;
  nationality: number;
  newToPosition: number;
  nickname: number;
  nominationNav: number;
  objective: number;
  onboardingId: number;
  origHireDate: number;
  password: number;
  payGrade: number;
  performance: number;
  potential: number;
  promotionAmount: number;
  proxy: number;
  raiseProrating: number;
  reasonForLeaving: number;
  reasonForLeavingNav: number;
  reloComments: number;
  reloLocation: number;
  reloWilling: number;
  reloWillingNav: number;
  reviewFreq: number;
  riskOfLoss: number;
  riskOfLossNav: number;
  salary: number;
  salaryBudgetExtra2Percentage: number;
  salaryBudgetExtraPercentage: number;
  salaryBudgetFinalSalaryPercentage: number;
  salaryBudgetLumpsumPercentage: number;
  salaryBudgetMeritPercentage: number;
  salaryBudgetPromotionPercentage: number;
  salaryBudgetTotalRaisePercentage: number;
  salaryLocal: number;
  salaryProrating: number;
  salutation: number;
  salutationNav: number;
  sciLastModified: number;
  seatingChart: number;
  secondManager: number;
  secondReports: number;
  serviceDate: number;
  ssn: number;
  state: number;
  status: number;
  stockBudgetOptionAmount: number;
  stockBudgetOther1Amount: number;
  stockBudgetOther2Amount: number;
  stockBudgetOther3Amount: number;
  stockBudgetStockAmount: number;
  stockBudgetUnitAmount: number;
  suffix: number;
  sysCostOfSource: number;
  sysSource: number;
  sysSourceNav: number;
  sysStartingSalary: number;
  talentPool: number;
  teamMembersSize: number;
  timeZone: number;
  title: number;
  totalTeamSize: number;
  userPermissionsNav: number;
  username: number;
  veteranDisabled: number;
  veteranMedal: number;
  veteranProtected: number;
  veteranSeparated: number;
  zipCode: number;
}

export interface IJobApplicationFieldControls {
  applicationId: number;
  address: number;
  agencyInfo: number;
  anonymizedDate: number;
  anonymizedFlag: number;
  appLocale: number;
  appStatusSetItemId: number;
  applicationTemplateId: number;
  assessmentAttachment: number;
  assessmentStatus: number;
  averageRating: number;
  bkgrndChkAttachment: number;
  bkgrndChkStatus: number;
  candConversionProcessed: number;
  candTypeWhenHired: number;
  candidate: number;
  candidateId: number;
  candidateSource: number;
  cellPhone: number;
  city: number;
  contactEmail: number;
  country: number;
  countryCode: number;
  countryPicklist: number;
  coverLetter: number;
  dataSource: number;
  duplicateProfile: number;
  education: number;
  exportedOn: number;
  firstName: number;
  formerEmployee: number;
  globalInfo: number;
  hiredOn: number;
  insideWorkExperience: number;
  jobAppGuid: number;
  jobAppPermissionsNav: number;
  jobAppStatus: number;
  jobApplicationAssessmentOrder: number;
  jobApplicationAudit: number;
  jobApplicationComments: number;
  jobApplicationInterview: number;
  jobApplicationOnboardingData: number;
  jobApplicationQuestionResponse: number;
  jobApplicationStatusAuditTrail: number;
  jobOffer: number;
  jobReqId: number;
  jobRequisition: number;
  languages: number;
  lastModifiedBy: number;
  lastModifiedByProxy: number;
  lastModifiedDateTime: number;
  lastName: number;
  middleName: number;
  mobility: number;
  nonApplicantStatus: number;
  offerLetter: number;
  outsideWorkExperience: number;
  owner: number;
  ownershpDate: number;
  profileUpdated: number;
  rating: number;
  reference: number;
  referenceComments: number;
  referralName: number;
  referredBy: number;
  referredByNav: number;
  rejectReason: number;
  resume: number;
  resumeUploadDate: number;
  snapShotDate: number;
  source: number;
  sourceLabel: number;
  startDate: number;
  state: number;
  status: number;
  statusComments: number;
  statusId: number;
  supportingDoc: number;
  timeToHire: number;
  userNav: number;
  usersSysId: number;
  zip: number;
}

export interface ILegalEntityRUS {
  LegalEntity_effectiveStartDate: Date;
  LegalEntity_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  okpoNumber: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface ICust_GERReqTemplField {
  cust_GERReqTempl_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  cust_behavior: string;
  cust_dataType: string;
  cust_label: string;
  cust_sequence: number;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IJobClassificationFRA {
  JobClassificationCountry_country: string;
  JobClassification_effectiveStartDate: Date;
  JobClassification_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  employeeCategory: number;
  inseeCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IPaymentInformationDetailV3ECU {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountType: string;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEffectiveStartDate: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
}

export interface IPaymentMethodAssignmentV3 {
  PaymentMethodV3_externalCode: string;
  externalCode: number;
  country: string;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEffectiveStartDate: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  countryNav?: ICountry[];
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
}

export interface IGoalMilestonePermission_2 {
  id: number;
  createRow: boolean;
  deleteRow: boolean;
  description: number;
  due: number;
  moveRow: boolean;
  start: number;
  type: string;
  userId: string;
}

export interface IFormAuditTrail {
  auditTrailId: number;
  auditTrailAction: string;
  auditTrailCoSender: string;
  auditTrailComment: string;
  auditTrailLastModified: Date;
  auditTrailRecipient: string;
  auditTrailSendProxy: string;
  auditTrailSender: string;
  formContentAssociatedStepId: string;
  formContentId: number;
  formDataId: number;
  formSubjectId: string;
  formContent?: IFormContent;
  formHeader?: IFormHeader;
}

export interface IPaymentInformationDetailV3VEN {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountType: string;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEffectiveStartDate: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  paymentReference: string;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
}

export interface IDevGoalEnum {
  fieldId: string;
  planId: number;
  value: string;
  label: string;
}

export interface IPaymentInformationDetailV3GHA {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountType: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface ISpotAwardProgram {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  currencyConversionTable: string;
  displayedProgramName_ar_SA: string;
  displayedProgramName_da_DK: string;
  displayedProgramName_de_DE: string;
  displayedProgramName_defaultValue: string;
  displayedProgramName_en_DEBUG: string;
  displayedProgramName_en_GB: string;
  displayedProgramName_en_US: string;
  displayedProgramName_fr_FR: string;
  displayedProgramName_localized: string;
  displayedProgramName_nl_NL: string;
  displayedProgramName_pl_PL: string;
  displayedProgramName_sv_SE: string;
  enabled: boolean;
  endDate: Date;
  functionalCurrency: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  pointType: string;
  programDescription_ar_SA: string;
  programDescription_da_DK: string;
  programDescription_de_DE: string;
  programDescription_defaultValue: string;
  programDescription_en_DEBUG: string;
  programDescription_en_GB: string;
  programDescription_en_US: string;
  programDescription_fr_FR: string;
  programDescription_localized: string;
  programDescription_nl_NL: string;
  programDescription_pl_PL: string;
  programDescription_sv_SE: string;
  programType: string;
  recordId: string;
  startDate: Date;
  advancedSettings?: ISpotAwardProgramAdvancedSettings;
  categories?: ISpotAwardCategory[];
  createdByNav?: IUser;
  displayedProgramNameTranslationTextNav?: IMDFLocalizedValue[];
  eligRules?: ISpotAwardEligibilityRule[];
  guidelineRules?: ISpotAwardGuidelinesRule[];
  lastModifiedByNav?: IUser;
  levels?: ISpotAwardLevel[];
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  programDescriptionTranslationTextNav?: IMDFLocalizedValue[];
  programImageNav?: IAttachment;
  programTypeNav?: IMDFEnumValue;
  spotAwardBudgets?: ISpotAwardBudget[];
  wfRequestNav?: IWfRequest[];
}

export interface IEmployeeDataReplicationNotification {
  externalCode: string;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  personId: number;
  replicationContentType: string;
  replicationEvent: string;
  replicationEventTime: string;
  replicationTargetSystem: string;
  senderId: string;
  usersSysId: string;
  countryNav?: ICountry[];
  createdByNav?: IUser;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  replicationContentTypeNav?: IMDFEnumValue;
  replicationEventNav?: IMDFEnumValue;
  replicationTargetSystemNav?: IReplicationTargetSystem;
  usersSysIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IFOJobClassLocalDEFLT {
  country: string;
  externalCode: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  status: string;
  countryNav?: ITerritory;
}

export interface IBackground_Education {
  backgroundElementId: number;
  userId: string;
  bgOrderPos: number;
  degree: string;
  endDate: Date;
  lastModifiedDate: Date;
  major: string;
  school: string;
  startDate: Date;
  degreeNav?: IPicklistOption;
  majorNav?: IPicklistOption;
  userIdNav?: IUser;
}

export interface IThemeTemplate {
  id: string;
  bodyStyleClass: string;
  footer: string;
  header: string;
  langDir: string;
  locale: string;
  scripts: string;
  styles: string;
  template: string;
  ui5BaseThemeRootUrl: string;
}

export interface IExtAddressInfo {
  addressId: number;
  address1: string;
  address2: string;
  addressType: string;
  city: string;
  country: string;
  lastModifiedDateTime: Date;
  province: string;
  state: string;
  zipCode: string;
  addressTypeNav?: IPicklistOption;
}

export interface IMentoringProgram {
  externalId: number;
  actualMatchingDate: Date;
  actualMenteeSignupDate: Date;
  actualMentorSignupDate: Date;
  actualStartDate: Date;
  completedDate: Date;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  description: string;
  descriptionI18n_ar_SA: string;
  descriptionI18n_da_DK: string;
  descriptionI18n_de_DE: string;
  descriptionI18n_defaultValue: string;
  descriptionI18n_en_DEBUG: string;
  descriptionI18n_en_GB: string;
  descriptionI18n_en_US: string;
  descriptionI18n_fr_FR: string;
  descriptionI18n_localized: string;
  descriptionI18n_nl_NL: string;
  descriptionI18n_pl_PL: string;
  descriptionI18n_sv_SE: string;
  endDate: Date;
  jamEnabled: boolean;
  jamGroupId: string;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  matchingDate: Date;
  matchingType: string;
  maximumOfMentee: number;
  maximumOfMentor: number;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEffectiveStartDate: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  menteeSignupDate: Date;
  mentorApprovalNotice: string;
  mentorApprovalNoticeI18n_ar_SA: string;
  mentorApprovalNoticeI18n_da_DK: string;
  mentorApprovalNoticeI18n_de_DE: string;
  mentorApprovalNoticeI18n_defaultValue: string;
  mentorApprovalNoticeI18n_en_DEBUG: string;
  mentorApprovalNoticeI18n_en_GB: string;
  mentorApprovalNoticeI18n_en_US: string;
  mentorApprovalNoticeI18n_fr_FR: string;
  mentorApprovalNoticeI18n_localized: string;
  mentorApprovalNoticeI18n_nl_NL: string;
  mentorApprovalNoticeI18n_pl_PL: string;
  mentorApprovalNoticeI18n_sv_SE: string;
  mentorApprovalType: string;
  mentorSignupDate: Date;
  mentorshipClosureEnabled: boolean;
  name: string;
  nameI18n_ar_SA: string;
  nameI18n_da_DK: string;
  nameI18n_de_DE: string;
  nameI18n_defaultValue: string;
  nameI18n_en_DEBUG: string;
  nameI18n_en_GB: string;
  nameI18n_en_US: string;
  nameI18n_fr_FR: string;
  nameI18n_localized: string;
  nameI18n_nl_NL: string;
  nameI18n_pl_PL: string;
  nameI18n_sv_SE: string;
  needMentorApproval: boolean;
  photoId: string;
  programMessageTypeId: string;
  startDate: Date;
  status: string;
  createdByNav?: IUser;
  descriptionI18nTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  matchingTypeNav?: IMDFEnumValue;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
  mentorApprovalNoticeI18nTranslationTextNav?: IMDFLocalizedValue[];
  mentorApprovalTypeNav?: IMDFEnumValue;
  nameI18nTranslationTextNav?: IMDFLocalizedValue[];
  statusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IFormCompetencyBehavior {
  behaviorId: number;
  formContentId: number;
  formDataId: number;
  itemId: number;
  sectionIndex: number;
  behaviorIndex: number;
  behaviorName: string;
  category: string;
  description: string;
  expectedRating: string;
  weight: string;
  weightKey: string;
  officialRating?: IFormBehaviorRatingComment;
  othersRatingComment?: IFormBehaviorRatingComment[];
  selfRatingComment?: IFormBehaviorRatingComment;
}

export interface ICalibrationTemplate {
  templateId: number;
  createdBy?: string;
  createdDateTime: Date;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  startDate: Date;
  status: number;
  templateName: string;
  executiveReviewerList?: IUser[];
}

export interface IFOLegalEntityLocalFRA {
  country: string;
  externalCode: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  mdfSystemRecordId: string;
  nafCodePost2008: string;
  sirenCode: number;
  status: string;
  countryNav?: ITerritory;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
}

export interface IJobApplicationSnapshot_GlobalInfo {
  backgroundElementId: number;
  applicationId: number;
  bgOrderPos: number;
  ethnicity: string;
  lastModifiedDateTime: Date;
  application?: IJobApplication;
}

export interface IEmpJob {
  seqNumber: number;
  startDate: Date;
  userId: string;
  businessUnit: string;
  company: string;
  contractEndDate: Date;
  costCenter: string;
  countryOfCompany: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  customString1: string;
  customString13: string;
  customString2: string;
  department: string;
  division: string;
  effectiveLatestChange: boolean;
  emplStatus: string;
  employeeClass: string;
  employeeNoticePeriod: number;
  employeeType: string;
  endDate: Date;
  event: string;
  eventReason: string;
  fte: number;
  holidayCalendarCode: string;
  isCompetitionClauseActive: boolean;
  isFulltimeEmployee: boolean;
  isSideLineJobAllowed: boolean;
  jobCode: string;
  jobTitle: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  location: string;
  managerId: string;
  operation: string;
  payGrade: string;
  payScaleArea: string;
  payScaleGroup: string;
  payScaleLevel: string;
  payScaleType: string;
  position: string;
  positionEntryDate: Date;
  probationPeriodEndDate: Date;
  regularTemp: string;
  standardHours: number;
  timeRecordingVariant: string;
  timeTypeProfileCode: string;
  timezone: string;
  travelDistance: number;
  workingDaysPerWeek: number;
  workscheduleCode: string;
  businessUnitNav?: IFOBusinessUnit;
  companyNav?: IFOCompany;
  costCenterNav?: IFOCostCenter;
  countryOfCompanyNav?: IPicklistOption;
  customString13Nav?: IPicklistOption;
  customString1Nav?: IPicklistOption;
  customString2Nav?: IFOJobFunction;
  departmentNav?: IFODepartment;
  divisionNav?: IFODivision;
  emplStatusNav?: IPicklistOption;
  employeeClassNav?: IPicklistOption;
  employeeNoticePeriodNav?: IPicklistOption;
  employeeTypeNav?: IPicklistOption;
  employmentNav?: IEmpEmployment;
  eventNav?: IPicklistOption;
  eventReasonNav?: IFOEventReason;
  holidayCalendarCodeNav?: IHolidayCalendar;
  jobCodeNav?: IFOJobCode;
  locationNav?: IFOLocation;
  managerEmploymentNav?: IEmpEmployment;
  managerUserNav?: IUser;
  payGradeNav?: IFOPayGrade;
  payScaleAreaNav?: IPayScaleArea;
  payScaleGroupNav?: IPayScaleGroup;
  payScaleLevelNav?: IPayScaleLevel;
  payScaleTypeNav?: IPayScaleType;
  positionNav?: IPosition;
  regularTempNav?: IPicklistOption;
  timeTypeProfileCodeNav?: ITimeTypeProfile;
  userNav?: IUser;
  wfRequestNav?: IWfRequest;
  workscheduleCodeNav?: IWorkSchedule;
}

export interface IActivity {
  activityId: number;
  activityName: string;
  activityPriority: string;
  activityState: string;
  activityStatus: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  meetingOwnerId: string;
  recordId: string;
  snapshot: boolean;
  subjectUserId: string;
  achievements?: IAchievement[];
  activityStatusNav?: IActivityStatus;
  createdByNav?: IUser;
  devGoalDetailList?: IDevGoalDetail[];
  feedbacks?: IActivityFeedback[];
  goalDetailList?: IGoalDetail[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  subjectUserIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IInterviewIndividualAssessment {
  interviewIndividualAssessmentId: number;
  comments: string;
  interviewOverallAssessmentId: number;
  isDeleted: string;
  rating: string;
  refId: number;
  type: string;
  jobProfileCompetency?: ICompetencyEntity;
  rcmCompetency?: IRcmCompetency[];
}

export interface IJobOfferTemplate_Offer_Detail_Template {
  templateId: number;
  currency: string;
  firstName: string;
  jobStartDate: Date;
  lastName: string;
  middleName: string;
  offerExtensionDate: Date;
  otherCompensation: string;
  relocationCost: number;
  salaryBase: number;
  targetBonusAmount: number;
  custFrequency?: IPicklistOption;
  relocationPack?: IPicklistOption;
  resume?: IAttachment;
}

export interface IFOBusinessUnit {
  externalCode: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  cust_legalentityProp: string;
  description: string;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  endDate: Date;
  entityUUID: string;
  headOfUnit: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  mdfSystemRecordId: string;
  name: string;
  name_ar_SA: string;
  name_da_DK: string;
  name_de_DE: string;
  name_defaultValue: string;
  name_en_DEBUG: string;
  name_en_GB: string;
  name_en_US: string;
  name_fr_FR: string;
  name_localized: string;
  name_nl_NL: string;
  name_pl_PL: string;
  name_sv_SE: string;
  status: string;
  createdByNav?: IUser;
  cust_legalentity?: IFOCompany[];
  descriptionTranslationNav?: IFoTranslation;
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  headOfUnitNav?: IUser;
  lastModifiedByNav?: IUser;
  nameTranslationNav?: IFoTranslation;
  nameTranslationTextNav?: IMDFLocalizedValue[];
  statusNav?: IMDFEnumValue;
}

export interface IPickListValueV2 {
  PickListV2_effectiveStartDate: Date;
  PickListV2_id: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  externalStandardizedCode: string;
  lValue: number;
  label_ar_SA: string;
  label_da_DK: string;
  label_de_DE: string;
  label_defaultValue: string;
  label_en_DEBUG: string;
  label_en_GB: string;
  label_en_US: string;
  label_fr_FR: string;
  label_localized: string;
  label_nl_NL: string;
  label_pl_PL: string;
  label_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  legacyStatus: number;
  maxVal: number;
  mdfSystemRecordStatus: string;
  minVal: number;
  nonUniqueExternalCode: string;
  optValue: number;
  optionId: number;
  parentPickListValue: string;
  rValue: number;
  status: string;
  createdByNav?: IUser;
  labelTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  parentPickListValueNav?: IPickListValueV2[];
  statusNav?: IMDFEnumValue;
}

export interface IJobClassificationAUS {
  JobClassificationCountry_country: string;
  JobClassification_effectiveStartDate: Date;
  JobClassification_externalCode: string;
  externalCode: number;
  ascoCode: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IGoalAchievementsList {
  goalId: string;
  subjectUserId: string;
  achievementCreatedBy: string;
  achievementCreatedDate: Date;
  achievementDate: Date;
  achievementId: string;
  achievementLastModifiedBy: string;
  achievementLastModifiedDate: Date;
  achievementName: string;
  achievementParentExternalId: number;
  achievementParentType: string;
}

export interface IDigitalSupportIncident {
  externalCode: string;
  bcpIncidentId: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IJobOffer {
  offerApprovalId: number;
  anonymizedDate: Date;
  anonymizedFlag: string;
  applicationId: number;
  createdBy?: string;
  createdDate: Date;
  currency: string;
  firstName: string;
  formDataId: number;
  formTemplateId: number;
  initialComment: string;
  internalStatus: string;
  jobStartDate: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastName: string;
  offerExtensionDate: Date;
  otherCompensation: string;
  redefineTemplateApprovers?: string;
  relocationCost: number;
  salaryBase: number;
  targetBonusAmount: number;
  templateId: number;
  userIsCurrentApprover: boolean;
  userIsOriginator: boolean;
  version: number;
  approvers?: IJobOfferApprover[];
  createdByNav?: IUser;
  custFrequency?: IPicklistOption[];
  jobApplication?: IJobApplication;
  jobOfferPermissionsNav?: IJobOfferFieldControls;
  lastModifiedByNav?: IUser;
  relocationPack?: IPicklistOption[];
  resume?: IAttachment;
}

export interface ICust_CC_ProfileAssignment {
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  cust_Department: string;
  cust_Division: string;
  cust_EndDate: Date;
  cust_IsMultiCriteria: boolean;
  cust_Job: string;
  cust_Learner: string;
  cust_Location: string;
  cust_ProfileId: string;
  cust_StartDate: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  cust_LearnerNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IFOEventReason {
  externalCode: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  description: string;
  emplStatus: string;
  endDate: Date;
  event: string;
  implicitPositionAction: number;
  includeInWorkExperience: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  name: string;
  status: string;
  descriptionTranslationNav?: IFoTranslation;
  emplStatusNav?: IPicklistOption;
  eventNav?: IPicklistOption;
  implicitPositionActionNav?: IPicklistOption;
  nameTranslationNav?: IFoTranslation;
}

export interface ICurrency {
  code: string;
  effectiveStartDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  defaultDecimals: number;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  effectiveEndDate: Date;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemCreatedBy: string;
  mdfSystemCreatedDate: Date;
  mdfSystemEntityId: string;
  mdfSystemLastModifiedBy: string;
  mdfSystemLastModifiedDate: Date;
  mdfSystemLastModifiedDateWithTZ: Date;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  status: string;
  symbol: string;
  createdByNav?: IUser;
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IFormJobDescSection {
  formContentId: number;
  formDataId: number;
  sectionIndex: number;
  sectionDescription: string;
  sectionName: string;
  jobRoles?: IFormJobRole[];
}

export interface ITimeAccountDetail {
  TimeAccount_externalCode: string;
  externalCode: string;
  accrualPeriodId: string;
  advanced: boolean;
  bookingAmount: number;
  bookingDate: Date;
  bookingType: string;
  bookingUnit: string;
  calendarEntry: string;
  changeCalendar: string;
  comment: string;
  createdBy?: string;
  createdDateTime: Date;
  employeeTime: string;
  entityUUID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  payoutAccrualSeparated: boolean;
  periodicUpdatePeriodId: string;
  referenceObject: string;
  bookingTypeNav?: IMDFEnumValue;
  bookingUnitNav?: IMDFEnumValue;
  calendarEntryNav?: IEmployeeTimeCalendar;
  createdByNav?: IUser;
  employeeTimeNav?: IEmployeeTime;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IVendorInfo {
  effectiveStartDate: Date;
  vendorCode: string;
  createdBy?: string;
  createdDateTime: Date;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  effectiveStatus: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemCreatedBy: string;
  mdfSystemCreatedDate: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEntityId: string;
  mdfSystemLastModifiedBy: string;
  mdfSystemLastModifiedDate: Date;
  mdfSystemLastModifiedDateWithTZ: Date;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  vendorName: string;
  createdByNav?: IUser;
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  effectiveStatusNav?: IMDFEnumValue;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface ITalentGraphicOption {
  dataIndex: string;
  optionKey: string;
  dataImage: string;
  dataLabel: string;
  dataShortLabel: string;
  dataValue: string;
  gradientBackgroundColor: string;
  optionIndex: number;
  optionLabel: string;
  optionName: string;
  optionScaleId: string;
  optionTarget: string;
  optionType: string;
}

export interface IDevGoalAchievements {
  goalId: string;
  subjectUserId: string;
  achievementList?: IDevGoalAchievementsList[];
}

export interface IPaymentInformationDetailV3TUN {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountType: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface ICust_CC_RatingExplanation {
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  cust_CompId: string;
  cust_Description: string;
  cust_DescriptionTranslations_ar_SA: string;
  cust_DescriptionTranslations_da_DK: string;
  cust_DescriptionTranslations_de_DE: string;
  cust_DescriptionTranslations_defaultValue: string;
  cust_DescriptionTranslations_en_DEBUG: string;
  cust_DescriptionTranslations_en_GB: string;
  cust_DescriptionTranslations_en_US: string;
  cust_DescriptionTranslations_fr_FR: string;
  cust_DescriptionTranslations_localized: string;
  cust_DescriptionTranslations_nl_NL: string;
  cust_DescriptionTranslations_pl_PL: string;
  cust_DescriptionTranslations_sv_SE: string;
  cust_RatingValue: number;
  cust_Weightage: number;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  cust_DescriptionTranslationsTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IFormObjectiveOtherDetailsItemCol {
  formContentId: number;
  formDataId: number;
  itemId: number;
  sectionIndex: number;
  type: number;
  datatype: string;
  desc: string;
  id: string;
  index: number;
  label: string;
}

export interface IAchievementGoalDetail {
  Achievement_achievementId: number;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  goalId: number;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  recordId: string;
  snapshot: boolean;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfAchievementGoalDetailToSimpleGoalNav?: ISimpleGoal;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface ICust_GERReqTemplOperator {
  cust_GERReqTempl_externalCode: string;
  operatorType: string;
  createdBy?: string;
  createdDateTime: Date;
  cust_allowsMultiple: boolean;
  cust_operatorTypeName: string;
  cust_required: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  operatorTypeNav?: IPickListValueV2[];
}

export interface IEmployeeDataReplicationConfirmationErrorMessage {
  EmployeeDataReplicationConfirmation_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  detailedSourceMessageURL: string;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  replicationMessageNodeType: string;
  sourceAttributeDescription: string;
  sourceAttributeId: string;
  sourceMessageSeverity: string;
  sourceMessageText: string;
  sourceMessageTypeId: string;
  sourceMessageVariable1: string;
  sourceMessageVariable2: string;
  sourceMessageVariable3: string;
  sourceMessageVariable4: string;
  sourceObjectTypeDescription: string;
  sourceObjectTypeId: string;
  sourcePersonIdentifier: string;
  sourceValidityPeriodEndDate: Date;
  sourceValidityPeriodStartDate: Date;
  technicalInformation: string;
  userSysId: string;
  workagreementId: string;
  createdByNav?: IUser;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IPaymentInformationDetailV3BRA {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  checkDigit: string;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEffectiveStartDate: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
}

export interface IEPPublicProfile {
  userId: string;
  aboutMeVideoToken: string;
  aboutMeVideoUploadId: string;
  applicationId: string;
  hasAboutMeVideo: boolean;
  hasIntroduction: boolean;
  hasMyName: boolean;
  hasMyNameAudio: boolean;
  introduction: string;
  isAddBadgeAllowed: boolean;
  isBadgesSectionEnabled: boolean;
  isExpressiveMode: boolean;
  isExpressivePhotoEditable: boolean;
  liveProfilePhotoPermission: string;
  mediaServiceBaseUrl: string;
  myNameAudioToken: string;
  myNameAudioUploadId: string;
  myNameText: string;
}

export interface IJobRequisitionOperator {
  jobReqId: number;
  operatorRole: string;
  adminSelectedUserToBeRemoved: boolean;
  email: string;
  fax: string;
  firstName: string;
  isAdminSelected: boolean;
  lastName: string;
  phone: string;
  userName: string;
  usersSysId: string;
  jobRequisition?: IJobRequisition;
  userNav?: IUser;
}

export interface IFOJobClassLocalBRA {
  country: string;
  externalCode: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  mdfSystemRecordId: string;
  occupationalCode: string;
  status: string;
  countryNav?: ITerritory;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  occupationalCodeNav?: IPickListValueV2[];
}

export interface IEducationMajorEntity {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  major_ar_SA: string;
  major_da_DK: string;
  major_de_DE: string;
  major_defaultValue: string;
  major_en_DEBUG: string;
  major_en_GB: string;
  major_en_US: string;
  major_fr_FR: string;
  major_localized: string;
  major_nl_NL: string;
  major_pl_PL: string;
  major_sv_SE: string;
  mdfSystemRecordStatus: string;
  status: string;
  subModule: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  legalEntities?: IFOCompany[];
  majorTranslationTextNav?: IMDFLocalizedValue[];
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IPerPhone {
  personIdExternal: string;
  phoneType: string;
  areaCode: string;
  countryCode: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  extension: string;
  includeAllRecords: boolean;
  isPrimary: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  operation: string;
  phoneNumber: string;
  personNav?: IPerPerson;
  phoneTypeNav?: IPicklistOption;
}

export interface IJobOfferFieldControls {
  offerApprovalId: number;
  anonymizedDate: number;
  anonymizedFlag: number;
  applicationId: number;
  approvers: number;
  createdBy?: number;
  createdByNav: number;
  createdDate: number;
  currency: number;
  custFrequency: number;
  firstName: number;
  formDataId: number;
  formTemplateId: number;
  initialComment: number;
  internalStatus: number;
  jobApplication: number;
  jobOfferPermissionsNav: number;
  jobStartDate: number;
  lastModifiedBy: number;
  lastModifiedByNav: number;
  lastModifiedDate: number;
  lastName: number;
  offerExtensionDate: number;
  otherCompensation: number;
  redefineTemplateApprovers: number;
  relocationCost: number;
  relocationPack: number;
  resume: number;
  salaryBase: number;
  targetBonusAmount: number;
  templateId: number;
  userIsCurrentApprover: number;
  userIsOriginator: number;
  version: number;
}

export interface IEmpPayCompRecurring {
  payComponent: string;
  seqNumber: number;
  startDate: Date;
  userId: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  currencyCode: string;
  endDate: Date;
  frequency: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  notes: string;
  operation: string;
  paycompvalue: number;
  compensationNav?: IEmpCompensation;
  employmentNav?: IEmpEmployment;
  frequencyNav?: IFOFrequency;
  payComponentNav?: IFOPayComponent;
  userNav?: IUser;
}

export interface IFormPerfPotSummarySection {
  formContentId: number;
  formDataId: number;
  sectionDescription: string;
  sectionIndex: number;
  sectionName: string;
  othersSectionComments?: IFormUserRatingComment[];
  performanceRating?: IFormUserRatingComment;
  performanceRatingScale?: IFormRatingScale;
  potentialRating?: IFormUserRatingComment;
  potentialRatingScale?: IFormRatingScale;
  sectionComment?: IFormUserRatingComment;
  sectionConfiguration?: IFormSectionConfiguration;
}

export interface IGoalPermission_1000 {
  id: number;
  category: number;
  create: boolean;
  delete: boolean;
  description: number;
  done: number;
  due: number;
  edit: boolean;
  flag: number;
  metric: number;
  name: number;
  privateAccess: boolean;
  start: number;
  state: number;
  type: string;
  userId: string;
  view: boolean;
  weight: number;
}

export interface IPayrollDataMaintenanceTaskTypeConfiguration {
  PayrollDataMaintenanceTaskConfiguration_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  externalName: string;
  externalNameTaskType_ar_SA: string;
  externalNameTaskType_da_DK: string;
  externalNameTaskType_de_DE: string;
  externalNameTaskType_defaultValue: string;
  externalNameTaskType_en_DEBUG: string;
  externalNameTaskType_en_GB: string;
  externalNameTaskType_en_US: string;
  externalNameTaskType_fr_FR: string;
  externalNameTaskType_localized: string;
  externalNameTaskType_nl_NL: string;
  externalNameTaskType_pl_PL: string;
  externalNameTaskType_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  taskType: string;
  createdByNav?: IUser;
  externalNameTaskTypeTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  links?: IPayrollDataMaintenanceTaskTypeLinkConfiguration[];
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IEmployeeTimeDEU {
  EmployeeTime_externalCode: string;
  externalCode: number;
  continuedPayCreditedDays: number;
  continuedPayEndDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  deviationFromSickPayPeriods: string;
  electronicSicknessCertificateExclusionReason: string;
  entityUUID: string;
  identicalSicknessGroup: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  overlappingSicknessGroup: string;
  paySupplementEndDate: Date;
  paySupplementStartDate: Date;
  refContinuedPayEndDate: Date;
  refPaySupplementEndDate: Date;
  refPaySupplementStartDate: Date;
  sicknessCertificateStartDate: Date;
  createdByNav?: IUser;
  deviationFromSickPayPeriodsNav?: IMDFEnumValue;
  electronicSicknessCertificateExclusionReasonNav?: IElectronicSicknessCertificateExclusionReasonDEU;
  identicalSicknessGroupNav?: IEmployeeTimeGroup;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  overlappingSicknessGroupNav?: IEmployeeTimeGroup;
}

export interface IPaymentInformationDetailV3MEX {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  checkDigit: string;
  clabe: string;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEffectiveStartDate: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
}

export interface IEducationMajorContent {
  JobProfile_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  entity: string;
  jobProfileId: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mappedDegreeId: string;
  mdfSystemRecordStatus: string;
  order: number;
  sectionId: string;
  sectionType: string;
  status: string;
  subModule: string;
  createdByNav?: IUser;
  entityNav?: IEducationMajorEntity;
  lastModifiedByNav?: IUser;
  mappedDegreeIdNav?: IEducationDegreeEntity;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
}

export interface IONB2EquipmentTypeValue {
  code: string;
  createdBy?: string;
  createdDateTime: Date;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  inUse: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  type: string;
  createdByNav?: IUser;
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  inUseNav?: IMDFEnumValue;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  typeNav?: IONB2EquipmentType;
  wfRequestNav?: IWfRequest[];
}

export interface IForm360ReviewContentDetail {
  formContentId: number;
  formDataId: number;
  formLastModified: number;
  formLocale: string;
  formMode: string;
  formTitle: string;
  isCompFilterExists: boolean;
  isShowSummaryViewLink: boolean;
  isStartDateEnforcedReadOnly: boolean;
  liveFlag: number;
  originatorUserId: string;
  originatorUserName: string;
  sectionsInSummaryView: string;
  subjectFirstName: string;
  subjectUserGender: string;
  subjectUserId: string;
  subjectUserName: string;
  competencySections?: IFormCompetencySection[];
  customSections?: IFormCustomSection[];
  form360RaterSection?: IForm360RaterSection;
  introductionSection?: IFormIntroductionSection;
  jobDescSection?: IFormJobDescSection;
  objectiveSections?: IFormObjectiveSection[];
  originatorUser?: IUser;
  participantSection?: IForm360ParticipantSection;
  raterListSection?: IFormRaterListSection[];
  reviewInfoSection?: IFormReviewInfoSection;
  reviewerInfoSection?: IFormReviewerInfoSection;
  signatureSection?: IFormSignatureSection;
  subjectUser?: IUser;
  summarySection?: IFormSummarySection;
  summaryViewSection?: IForm360SummaryViewSection;
  userInformationSection?: IFormUserInformationSection;
}

export interface IDGFieldValue {
  fieldValue: string;
  fieldValuePickListOption?: IPicklistOption;
}

export interface IActivityFeedback {
  Activity_activityId: number;
  activityFeedbackId: number;
  achievement: string;
  commentContent: string;
  commenter: string;
  createdBy?: string;
  createdDateTime: Date;
  feedbackFlag: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  recordId: string;
  reviewed: boolean;
  snapshot: boolean;
  achievementNav?: IAchievement;
  createdByNav?: IUser;
  feedbackFlagNav?: IFeedbackFlag;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IElectronicSicknessCertificateExclusionReasonDEU {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  entityUUID: string;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IGoalWeight {
  planId: number;
  type: string;
  maxValue: number;
  minValue: number;
}

export interface IEmpWorkPermit {
  country: string;
  documentNumber: string;
  documentType: string;
  issueDate: Date;
  userId: string;
  attachment: Buffer;
  attachmentFileName: string;
  attachmentFileSize: number;
  attachmentFileType: string;
  attachmentId: string;
  attachmentMimeType: string;
  attachmentStatus: number;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  documentTitle: string;
  expirationDate: Date;
  isValidated: boolean;
  issuePlace: string;
  issuingAuthority: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  notes: string;
  countryNav?: IPicklistOption;
  documentTypeNav?: IPicklistOption;
  employmentNav?: IEmpEmployment;
  userNav?: IUser;
}

export interface IFormHeader {
  formDataId: number;
  creationDate: Date;
  currentStep: string;
  dateAssigned: Date;
  formDataStatus: number;
  formDataVersion: string;
  formLastModifiedDate: Date;
  formOriginator: string;
  formReviewDueDate: Date;
  formReviewEndDate: Date;
  formReviewStartDate: Date;
  formSubjectId: string;
  formTemplateId: number;
  formTemplateType: string;
  formTitle: string;
  isRated: boolean;
  rating: number;
  sender: string;
  stepDueDate: Date;
  formAttachments?: IAttachment[];
  formAuditTrails?: IFormAuditTrail[];
  formContents?: IFormContent[];
  formFeedbackList?: IFormReviewFeedbackList;
  formLastContent?: IFormContent;
  formRouteMap?: IFormRouteMap;
  formSender?: IUser;
  formSubject?: IUser;
  formTemplate?: IFormTemplate;
}

export interface IFormCustomElementListValue {
  elementKey: string;
  formContentId: number;
  formDataId: number;
  itemId: number;
  name: string;
  sectionIndex: number;
  listIndex: number;
  selected: boolean;
  value: string;
}

export interface IFormCustomSection {
  formContentId: number;
  formDataId: number;
  sectionIndex: number;
  sectionDescription: string;
  sectionName: string;
  customElement?: IFormCustomElement[];
  othersRatingComment?: IFormUserRatingComment[];
  sectionConfiguration?: IFormSectionConfiguration;
  selfRatingComment?: IFormUserRatingComment;
}

export interface IBank {
  externalCode: string;
  bankBranch: string;
  bankCountry: string;
  bankName: string;
  businessIdentifierCode: string;
  city: string;
  createdBy?: string;
  createdDateTime: Date;
  effectiveStatus: string;
  entityOID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemOptimisticLockUUID: string;
  mdfSystemRecordStatus: string;
  postalCode: string;
  routingNumber: string;
  street: string;
  bankCountryNav?: ICountry[];
  createdByNav?: IUser;
  effectiveStatusNav?: IMDFEnumValue;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IMentoringProgramMatchedParticipant {
  externalId: number;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  matchingCategory: string;
  matchingScore: number;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEffectiveStartDate: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  mentee: string;
  mentor: string;
  mentorshipClosureDate: Date;
  mentorshipClosureNote: string;
  mentorshipStatus: string;
  mentorshipWithdrawDate: Date;
  passiveUser: string;
  programId: string;
  simplifiedMatchedArea: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  matchingCategoryNav?: IMDFEnumValue;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
  menteeNav?: IUser;
  mentorNav?: IUser;
  mentorshipStatusNav?: IMDFEnumValue;
  passiveUserNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IBackground_Languages {
  backgroundElementId: number;
  userId: string;
  bgOrderPos: number;
  language: string;
  lastModifiedDate: Date;
  readingProf: string;
  speakingProf: string;
  variant: string;
  writingProf: string;
  languageNav?: IPicklistOption;
  readingProfNav?: IPicklistOption;
  speakingProfNav?: IPicklistOption;
  userIdNav?: IUser;
  variantNav?: IPicklistOption;
  writingProfNav?: IPicklistOption;
}

export interface IInterviewQuestionContent {
  JobProfile_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  entity: string;
  jobProfileId: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  order: number;
  sectionId: string;
  sectionType: string;
  status: string;
  subModule: string;
  createdByNav?: IUser;
  entityNav?: IInterviewQuestionEntity;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
}

export interface IFormSignature {
  formContentId: number;
  formDataId: number;
  sectionIndex: number;
  stepId: string;
  actionInformation: string;
  roleType: string;
  signedBy: string;
  signedDate: string;
  status: string;
  stepOrder: number;
  comment?: IFormUserRatingComment;
}

export interface ICompetencyEntity {
  externalCode: string;
  capabilityCategory: string;
  capabilityGroup: string;
  capabilityLibraryStructure: string;
  capabilityType: string;
  category_ar_SA: string;
  category_da_DK: string;
  category_de_DE: string;
  category_defaultValue: string;
  category_en_DEBUG: string;
  category_en_GB: string;
  category_en_US: string;
  category_fr_FR: string;
  category_localized: string;
  category_nl_NL: string;
  category_pl_PL: string;
  category_sv_SE: string;
  collection: boolean;
  core: boolean;
  createdBy?: string;
  createdDateTime: Date;
  critical: boolean;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  entityId: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  libName_ar_SA: string;
  libName_da_DK: string;
  libName_de_DE: string;
  libName_defaultValue: string;
  libName_en_DEBUG: string;
  libName_en_GB: string;
  libName_en_US: string;
  libName_fr_FR: string;
  libName_localized: string;
  libName_nl_NL: string;
  libName_pl_PL: string;
  libName_sv_SE: string;
  mdfSystemRecordStatus: string;
  name_ar_SA: string;
  name_da_DK: string;
  name_de_DE: string;
  name_defaultValue: string;
  name_en_DEBUG: string;
  name_en_GB: string;
  name_en_US: string;
  name_fr_FR: string;
  name_localized: string;
  name_nl_NL: string;
  name_pl_PL: string;
  name_sv_SE: string;
  proficiencyLevelSet: string;
  status: string;
  subModule: string;
  trending: boolean;
  behaviors?: IBehaviorMappingEntity[];
  capabilityTypeNav?: IMDFEnumValue;
  categoryTranslationTextNav?: IMDFLocalizedValue[];
  competencies?: ICompetencyEntity[];
  competencyTypes?: ICompetencyType[];
  createdByNav?: IUser;
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  legalEntities?: IFOCompany[];
  libNameTranslationTextNav?: IMDFLocalizedValue[];
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  nameTranslationTextNav?: IMDFLocalizedValue[];
  statusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IJobApplicationInterviewFieldControls {
  applicationInterviewId: number;
  applicationId: number;
  candSlotMapId: number;
  endDate: number;
  interviewNotes: number;
  interviewOverallAssessment: number;
  interviewer: number;
  isTimeSet: number;
  jobAppInterviewPermissionsNav: number;
  jobApplication: number;
  jobRequisition: number;
  notes: number;
  recruitEventStaffId: number;
  resume: number;
  source: number;
  startDate: number;
  status: number;
  templateType: number;
}

export interface IEPCustomBackgroundPortlet {
  backgroundElementId: string;
  backgroundPropertyLists: IEPCustomBackgroundPortletProperty[];
  editable: boolean;
  userId: string;
  viewable: boolean;
}

export interface IFeedbackFlag {
  feedbackFlagId: string;
  color: string;
  createdBy?: string;
  createdDateTime: Date;
  flagName_ar_SA: string;
  flagName_da_DK: string;
  flagName_de_DE: string;
  flagName_defaultValue: string;
  flagName_en_DEBUG: string;
  flagName_en_GB: string;
  flagName_en_US: string;
  flagName_fr_FR: string;
  flagName_localized: string;
  flagName_nl_NL: string;
  flagName_pl_PL: string;
  flagName_sv_SE: string;
  icon: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  recordId: string;
  createdByNav?: IUser;
  flagNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IFormUserRatingComment {
  formContentId: number;
  formDataId: number;
  itemId: number;
  ratingType: string;
  sectionIndex: number;
  userId: string;
  comment: string;
  commentKey: string;
  commentLabel: string;
  commentPermission: string;
  firstName: string;
  fullName: string;
  lastName: string;
  rating: string;
  ratingKey: string;
  ratingLabel: string;
  ratingPermission: string;
  textRating: string;
}

export interface IPersonTypeUsage {
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  person: string;
  personType: string;
  startDate: Date;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  personTypeNav?: IPersonType;
  wfRequestNav?: IWfRequest[];
}

export interface IRBPRole {
  roleId: number;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  roleDesc: string;
  roleName: string;
  userType: string;
  permissions?: IRBPBasicPermission[];
  rules?: IRBPRule[];
}

export interface IFODivision {
  externalCode: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  cust_BusinessUnitProp: string;
  description: string;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  endDate: Date;
  entityUUID: string;
  headOfUnit: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  mdfSystemRecordId: string;
  name: string;
  name_ar_SA: string;
  name_da_DK: string;
  name_de_DE: string;
  name_defaultValue: string;
  name_en_DEBUG: string;
  name_en_GB: string;
  name_en_US: string;
  name_fr_FR: string;
  name_localized: string;
  name_nl_NL: string;
  name_pl_PL: string;
  name_sv_SE: string;
  status: string;
  createdByNav?: IUser;
  cust_BusinessUnit?: IFOBusinessUnit[];
  descriptionTranslationNav?: IFoTranslation;
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  headOfUnitNav?: IUser;
  lastModifiedByNav?: IUser;
  nameTranslationNav?: IFoTranslation;
  nameTranslationTextNav?: IMDFLocalizedValue[];
  statusNav?: IMDFEnumValue;
}

export interface ICertificationEntity {
  externalCode: string;
  certification_ar_SA: string;
  certification_da_DK: string;
  certification_de_DE: string;
  certification_defaultValue: string;
  certification_en_DEBUG: string;
  certification_en_GB: string;
  certification_en_US: string;
  certification_fr_FR: string;
  certification_localized: string;
  certification_nl_NL: string;
  certification_pl_PL: string;
  certification_sv_SE: string;
  createdBy?: string;
  createdDateTime: Date;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  status: string;
  subModule: string;
  certificationTranslationTextNav?: IMDFLocalizedValue[];
  createdByNav?: IUser;
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  legalEntities?: IFOCompany[];
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IPaymentInformationDetailV3SUR {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountType: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IDigitalSupportSystemInformation {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  dataCenter: string;
  installationNumber: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  systemId: string;
  systemNumber: string;
  systemType: string;
  tenantId: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IWfRequestComments {
  wfRequestCommentId: number;
  actionType: string;
  comments: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  userId: string;
  wfRequestId: number;
  wfRequestStepId: number;
  userNav?: IUser;
}

export interface IEmployeeTimeCAN {
  EmployeeTime_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  disabilityPeriodOneEndDate: Date;
  disabilityPeriodThreeEndDate: Date;
  disabilityPeriodTwoEndDate: Date;
  entityUUID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  policyDeviation: string;
  refDisabilityPeriodOneEndDate: Date;
  refDisabilityPeriodThreeEndDate: Date;
  refDisabilityPeriodTwoEndDate: Date;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  policyDeviationNav?: IMDFEnumValue;
}

export interface IEmployeePayrollRunResults {
  externalCode: string;
  mdfSystemEffectiveStartDate: Date;
  clientId: string;
  companyId: string;
  createdBy?: string;
  createdDateTime: Date;
  currency: string;
  employmentId: string;
  endDateWhenPaid: Date;
  externalName: string;
  isVoid: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemRecordStatus: string;
  payDate: Date;
  payStatementAvailability: string;
  payrollId: string;
  payrollProviderId: string;
  payrollProviderPayrollRunType: string;
  payrollRunType: string;
  personId: string;
  sequenceNumber: string;
  startDateWhenPaid: Date;
  systemId: string;
  userId: string;
  companyIdNav?: IFOCompany;
  createdByNav?: IUser;
  currencyNav?: ICurrency;
  employeePayrollRunResultsItems?: IEmployeePayrollRunResultsItems[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  payStatementAvailabilityNav?: IMDFEnumValue;
  payrollRunTypeNav?: IPickListValueV2;
  userIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface ICustomPayType {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  standardPayType: string;
  createdByNav?: IUser;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  standardPayTypeNav?: IMDFEnumValue;
  toCustomPayTypeAssignment?: ICustomPayTypeAssignment[];
  wfRequestNav?: IWfRequest[];
}

export interface IFOCompany {
  externalCode: string;
  startDate: Date;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  currency: string;
  defaultLocation: string;
  defaultPayGroup: string;
  description: string;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  endDate: Date;
  entityOID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  mdfSystemRecordId: string;
  name: string;
  name_ar_SA: string;
  name_da_DK: string;
  name_de_DE: string;
  name_defaultValue: string;
  name_en_DEBUG: string;
  name_en_GB: string;
  name_en_US: string;
  name_fr_FR: string;
  name_localized: string;
  name_nl_NL: string;
  name_pl_PL: string;
  name_sv_SE: string;
  standardHours: number;
  status: string;
  countryNav?: ITerritory;
  countryOfRegistrationNav?: ICountry;
  createdByNav?: IUser;
  currencyNav?: ICurrency;
  cust_toLegalEntityBEL?: ICust_LegalEntityBEL;
  defaultLocationNav?: IFOLocation;
  defaultPayGroupNav?: IFOPayGroup;
  descriptionTranslationNav?: IFoTranslation;
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  localNavARG?: IFOLegalEntityLocalARG;
  localNavDEFLT?: IFOLegalEntityLocalDEFLT;
  localNavDEU?: IFOLegalEntityLocalDEU;
  localNavESP?: IFOLegalEntityLocalESP;
  localNavFRA?: IFOLegalEntityLocalFRA;
  localNavUSA?: IFOLegalEntityLocalUSA;
  nameTranslationNav?: IFoTranslation;
  nameTranslationTextNav?: IMDFLocalizedValue[];
  statusNav?: IMDFEnumValue;
  toLegalEntityARG?: ILegalEntityARG;
  toLegalEntityDEU?: ILegalEntityDEU;
  toLegalEntityESP?: ILegalEntityESP;
  toLegalEntityFRA?: ILegalEntityFRA;
  toLegalEntityRUS?: ILegalEntityRUS;
  toLegalEntityUSA?: ILegalEntityUSA;
}

export interface IEmployeeDataReplicationElement {
  externalCode: string;
  allowReplicationInCorrectionPhase: boolean;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  firstReplicationStartTimeSinceLastSuccess: Date;
  isWaitingForConfirmation: boolean;
  lastConfirmation: string;
  lastConfirmationWithSuccess: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastReplicationStartNotification: string;
  lastReplicationStartTime: string;
  mdfSystemOptimisticLockUUID: string;
  mdfSystemRecordStatus: string;
  noOfFailedReplicationsWithoutManualInteraction: number;
  personId: number;
  replicationContentType: string;
  replicationProcessingTime: string;
  replicationTargetSystem: string;
  replicationUpdateStatus: string;
  scheduledReplicationTime: string;
  searchFieldOverallStatus: string;
  searchFieldPersonId: number;
  searchFieldReplicationProcessingTime: string;
  usersSysId: string;
  countryNav?: ICountry[];
  createdByNav?: IUser;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastConfirmationNav?: IEmployeeDataReplicationConfirmation;
  lastConfirmationWithSuccessNav?: IEmployeeDataReplicationConfirmation;
  lastModifiedByNav?: IUser;
  lastReplicationStartNotificationNav?: IEmployeeDataReplicationNotification;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  personNav?: IPerPerson;
  replicationContentTypeNav?: IMDFEnumValue;
  replicationTargetSystemNav?: IReplicationTargetSystem;
  replicationUpdateStatusNav?: IMDFEnumValue;
  searchFieldOverallStatusNav?: IMDFEnumValue;
  usersSysIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IPaymentInformationDetailV3ZAF {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountHolderRelationship: string;
  accountType: string;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEffectiveStartDate: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  accountHolderRelationshipNav?: IMDFEnumValue;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
}

export interface ILegalEntityDEU {
  LegalEntity_effectiveStartDate: Date;
  LegalEntity_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  socialAccidentInsurance: string;
  socialAccidentInsuranceRegistrationNumber: string;
  taxUnit: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IJobApplicationAssessmentReportDetail {
  id: number;
  scoreComponent: string;
  scoreValue: string;
  assessmentReport?: IJobApplicationAssessmentReport;
}

export interface IForm360SummaryViewRater {
  formContentId: number;
  formDataId: number;
  category: string;
  comment: string;
  displayName: string;
  formStatus: string;
  formStatusDisplayString: string;
  isDisplayAnonymous: boolean;
  isExternalUser: boolean;
  isFixedParticipant: boolean;
  isFormRecallable: boolean;
  isShowContentLink: boolean;
  isShowDocCommentsForSendBack: boolean;
  isShowReminderEmail: boolean;
  maxRating: number;
  order: number;
  overallRating: number;
  overallRatingDisplayString: string;
  participantId: string;
  showContentLinkURL: string;
  participantUser?: IUser;
}

export interface IEmpEmployment {
  personIdExternal: string;
  userId: string;
  assignmentClass: string;
  assignmentIdExternal: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  employmentId: number;
  endDate: Date;
  hiringNotCompleted: boolean;
  includeAllRecords: boolean;
  isContingentWorker: boolean;
  isECRecord: boolean;
  jobNumber: number;
  lastDateWorked: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  okToRehire: boolean;
  originalStartDate: Date;
  seniorityDate: Date;
  startDate: Date;
  compInfoNav?: IEmpCompensation[];
  costDistributionNav?: IEmpCostDistribution[];
  empGlobalAssignmentNav?: IEmpGlobalAssignment;
  empJobRelationshipNav?: IEmpJobRelationships[];
  empPayCompNonRecurringNav?: IEmpPayCompNonRecurring[];
  empWorkPermitNav?: IEmpWorkPermit[];
  jobInfoNav?: IEmpJob[];
  onboardingInfoNav?: IOnboardingInfo[];
  paymentInformationNav?: IPaymentInformationV3[];
  personNav?: IPerPerson;
  photoNav?: IPhoto[];
  userNav?: IUser;
  wfRequestNav?: IWfRequest;
  workOrderNav?: IWorkOrder[];
}

export interface ICompetencyRating {
  id: number;
  formContentId: number;
  formDataId: number;
  guid: string;
  lastModified: Date;
  lastModifiedDateTime: Date;
  lastModifiedWithTZ: Date;
  module: number;
  rater: string;
  raterCategory: string;
  rating: number;
  scaleMax: number;
  scaleMin: number;
  source: number;
  status: number;
  type: number;
  userId: string;
  validFrom: Date;
  validTo: Date;
  userNav?: IUser;
}

export interface IJobApplicationStatus {
  appStatusSetId: number;
  appStatusId: number;
  appStatusName: string;
  jobAppStatusLabel?: IJobApplicationStatusLabel[];
  jobApplications?: IJobApplication[];
}

export interface IInlineResult {
  inlineProperty: string;
  results?: IUpsertResult[];
}

export interface IPayScaleGroup {
  code: string;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  payScaleArea: string;
  payScaleGroup: string;
  payScaleType: string;
  countryNav?: ICountry[];
  createdByNav?: IUser;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  payScaleAreaNav?: IPayScaleArea;
  payScaleTypeNav?: IPayScaleType;
  wfRequestNav?: IWfRequest[];
}

export interface IExtPersonalInfo {
  personalInfoId: number;
  firstName: string;
  lastModifiedDateTime: Date;
  lastName: string;
  middleName: string;
}

export interface IFODepartment {
  externalCode: string;
  startDate: Date;
  costCenter: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  cust_DivisionProp: string;
  description: string;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  endDate: Date;
  entityUUID: string;
  headOfUnit: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  mdfSystemRecordId: string;
  name: string;
  name_ar_SA: string;
  name_da_DK: string;
  name_de_DE: string;
  name_defaultValue: string;
  name_en_DEBUG: string;
  name_en_GB: string;
  name_en_US: string;
  name_fr_FR: string;
  name_localized: string;
  name_nl_NL: string;
  name_pl_PL: string;
  name_sv_SE: string;
  parent: string;
  status: string;
  costCenterNav?: IFOCostCenter;
  createdByNav?: IUser;
  cust_Division?: IFODivision[];
  descriptionTranslationNav?: IFoTranslation;
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  headOfUnitNav?: IUser;
  lastModifiedByNav?: IUser;
  nameTranslationNav?: IFoTranslation;
  nameTranslationTextNav?: IMDFLocalizedValue[];
  parentNav?: IFODepartment;
  statusNav?: IMDFEnumValue;
}

export interface IFormSummarySection {
  formContentId: number;
  formDataId: number;
  sectionDescription: string;
  sectionIndex: number;
  sectionName: string;
  sectionRatingRequired: boolean;
  calculatedFormRating?: IFormUserRatingComment;
  othersRatingComment?: IFormUserRatingComment[];
  overallAdjustedRating?: IFormUserRatingComment;
  overallFormRating?: IFormUserRatingComment;
  sectionConfiguration?: IFormSectionConfiguration;
  selfRatingComment?: IFormUserRatingComment;
}

export interface IFormRaterListSection {
  formContentId: number;
  formDataId: number;
  category: string;
  cellPhone: string;
  company: string;
  department: string;
  division: string;
  internalOrExternal: string;
  jobCode: string;
  jobTitle: string;
  mail: string;
  manager: string;
  participantID: string;
  participantName: string;
  participantUser?: IUser;
}

export interface IBackground_SpecialAssign {
  backgroundElementId: number;
  userId: string;
  bgOrderPos: number;
  description: string;
  endDate: Date;
  lastModifiedDate: Date;
  project: string;
  startDate: Date;
  userIdNav?: IUser;
}

export interface IJobApplicationOnboardingStatus {
  onboardingStatusId: number;
  createdDate: Date;
  lastModifiedDate: Date;
  message: string;
  name: string;
  onboardingId: number;
  status: string;
  statusType: string;
  type: string;
  url: string;
  onboardingData?: IJobApplicationOnboardingData;
}

export interface ISpotAwardRedemption {
  externalCode: number;
  comments: string;
  createdBy?: string;
  createdDateTime: Date;
  currency: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  recordId: string;
  totalOrderAmount: number;
  userId: string;
  vendorIdentifier: string;
  vendorTransactionId: string;
  wallet: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  orders?: ISpotAwardRedemptionOrder[];
  userIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IDynamicGroup {
  groupID: number;
  activeMembershipCount: number;
  createdBy?: string;
  groupName: string;
  groupType: string;
  lastModifiedDate: Date;
  staticGroup: boolean;
  totalMemberCount: number;
  userType: string;
  dgExcludePools?: IDGPeoplePool[];
  dgIncludePools?: IDGPeoplePool[];
}

export interface ISecondaryAssignmentsItem {
  SecondaryAssignments_effectiveStartDate: Date;
  SecondaryAssignments_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  usersSysId: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  usersSysIdNav?: IUser;
}

export interface ICust_CC_Group {
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IPayrollDataMaintenanceTaskTypeLinkConfiguration {
  PayrollDataMaintenanceTaskConfiguration_externalCode: string;
  PayrollDataMaintenanceTaskTypeConfiguration_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  externalName: string;
  infotypeName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IJobRequisitionFieldControls {
  jobReqId: number;
  age: number;
  appTemplateId: number;
  approver: number;
  assessRatingScaleName: number;
  assessment: number;
  budgeted: number;
  businessUnit_obj: number;
  candidateHired: number;
  candidateProgress: number;
  city: number;
  closedDateTime: number;
  comments: number;
  competencies: number;
  coordinator: number;
  coordinatorTeam: number;
  coordinatorTeamGroup: number;
  corporatePosting: number;
  costCenter_obj: number;
  country: number;
  createdDateTime: number;
  currency: number;
  currentOwner: number;
  custCompanyText: number;
  custContractEndDate: number;
  custContractType: number;
  custEmploymentType: number;
  custFrequency: number;
  custInstrJob: number;
  custInstrOrg: number;
  custInstrPos: number;
  custInstrSalary: number;
  custInstrScreen: number;
  custInstrTeam: number;
  custJustification: number;
  cust_intro_req: number;
  defaultLanguage: number;
  deleted: number;
  department_obj: number;
  division_obj: number;
  erpAmount: number;
  evergreen: number;
  filter2: number;
  formDataId: number;
  formDueDate: number;
  hiringManager: number;
  hiringManagerTeam: number;
  hiringManagerTeamGroup: number;
  internalStatus: number;
  interviewGuide: number;
  intranetPosting: number;
  isDraft: number;
  jobAnalyzerReportingData: number;
  jobApplications: number;
  jobCode: number;
  jobReqFwdCandidates: number;
  jobReqGUId: number;
  jobReqLocale: number;
  jobReqPermissionsNav: number;
  jobReqPostings: number;
  jobReqScreeningQuestions: number;
  jobStartDate: number;
  lastModifiedBy: number;
  lastModifiedByNav: number;
  lastModifiedDateTime: number;
  lastModifiedProxyUserId: number;
  lastModifiedProxyUserNav: number;
  legalEntity_obj: number;
  location_obj: number;
  location_objlist: number;
  numberOpenings: number;
  openingsFilled: number;
  originator: number;
  overallScaleName: number;
  parentJobReqId: number;
  positionNumber: number;
  postalcode: number;
  questions: number;
  quickApply: number;
  ratedApplicantCount: number;
  recruiter: number;
  recruiterTeam: number;
  recruiterTeamGroup: number;
  relocationPack: number;
  restorecoordinatorTeamAdminDefaults: number;
  restorehiringManagerTeamAdminDefaults: number;
  restorerecruiterTeamAdminDefaults: number;
  restoresecondRecruiterTeamAdminDefaults: number;
  restoresourcerTeamAdminDefaults: number;
  restorevTeamAdminDefaults: number;
  restorevpOfStaffingTeamAdminDefaults: number;
  reverseScale: number;
  routeMap: number;
  salaryBase: number;
  salaryMax: number;
  salaryMin: number;
  secondRecruiterTeam: number;
  secondRecruiterTeamGroup: number;
  sfstd_jobReqType: number;
  sourcerTeam: number;
  sourcerTeamGroup: number;
  stateProvince: number;
  status: number;
  statusSetId: number;
  targetBonusAmount: number;
  templateId: number;
  templateName: number;
  templateType: number;
  timeToFill: number;
  vTeam: number;
  vTeamGroup: number;
  vpOfStaffingTeam: number;
  vpOfStaffingTeamGroup: number;
}

export interface IPhoto {
  photoType: number;
  userId: string;
  height: number;
  lastModified: Date;
  lastModifiedDateTime: Date;
  lastModifiedWithTZ: Date;
  mimeType: string;
  personUUID: string;
  photo: Buffer;
  photoHash: string;
  photoId: number;
  photoName: string;
  width: number;
  userNav?: IUser;
}

export interface IJobCodeMappingEntity {
  RoleEntity_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  jobCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  status: string;
  subModule: string;
  type: string;
  usage: number;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
}

export interface IFOLegalEntityLocalUSA {
  country: string;
  externalCode: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  eeoCompanyCode: string;
  employerID: string;
  endDate: Date;
  fedReserveBankDistrict: string;
  federalReserveBankID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  legalEntityType: string;
  mdfSystemRecordId: string;
  status: string;
  countryNav?: ITerritory;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  legalEntityTypeNav?: IPickListValueV2[];
}

export interface IPaymentInformationDetailV3MKD {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountType: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IFOLegalEntityLocalESP {
  country: string;
  externalCode: string;
  startDate: Date;
  certificadoDeIdentificacionFiscal: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  mdfSystemRecordId: string;
  status: string;
  countryNav?: ITerritory;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
}

export interface ICalibrationSubjectRank {
  subjectRankId: number;
  dataType: number;
  rank: number;
  ratingValue: number;
  calSessionSubject?: ICalibrationSessionSubject;
}

export interface IOnboardingInfo {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  onboardingStableId: string;
  processHireStatus: string;
  processStatus: string;
  processSubType: string;
  processType: string;
  targetDate: Date;
  user: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  processHireStatusNav?: IMDFEnumValue;
  processStatusNav?: IMDFEnumValue;
  processSubTypeNav?: IMDFEnumValue;
  processTypeNav?: IMDFEnumValue;
  userNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface ICust_GERBrand {
  brandId: number;
  cust_GERApplication_externalCode: string;
  brandName: string;
  createdBy?: string;
  createdDateTime: Date;
  cust_country: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  cust_countryNav?: IPickListValueV2[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IPositionSkillMappingEntity {
  PositionEntity_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  proLevel_ar_SA: string;
  proLevel_da_DK: string;
  proLevel_de_DE: string;
  proLevel_defaultValue: string;
  proLevel_en_DEBUG: string;
  proLevel_en_GB: string;
  proLevel_en_US: string;
  proLevel_fr_FR: string;
  proLevel_localized: string;
  proLevel_nl_NL: string;
  proLevel_pl_PL: string;
  proLevel_sv_SE: string;
  skill: string;
  status: string;
  subModule: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  proLevelTranslationTextNav?: IMDFLocalizedValue[];
  skillNav?: ISkillEntity;
  statusNav?: IMDFEnumValue;
}

export interface IJobRequisitionLocaleFieldControls {
  jobReqLocalId: number;
  extJobDescFooter: number;
  extJobDescHeader: number;
  externalJobDescription: number;
  externalTitle: number;
  intJobDescFooter: number;
  intJobDescHeader: number;
  jobDescription: number;
  jobReqId: number;
  jobReqLocalePermissionsNav: number;
  jobRequisition: number;
  jobTitle: number;
  locale: number;
  status: number;
  templateHeaderFooter: number;
}

export interface IPerGlobalInfoPRT {
  country: string;
  personIdExternal: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  genericDate1: Date;
  genericDate2: Date;
  genericDate3: Date;
  genericDate6: Date;
  genericNumber1: number;
  genericNumber2: number;
  genericNumber3: number;
  genericNumber4: number;
  genericNumber5: number;
  genericNumber6: number;
  genericNumber7: number;
  genericNumber8: number;
  genericString1: string;
  genericString10: string;
  genericString11: string;
  genericString12: string;
  genericString13: string;
  genericString14: string;
  genericString15: string;
  genericString17: string;
  genericString2: string;
  genericString20: string;
  genericString3: string;
  genericString4: string;
  genericString5: string;
  genericString6: string;
  genericString7: string;
  genericString8: string;
  genericString9: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  operation: string;
  countryNav?: ITerritory;
  personNav?: IPerPerson;
}

export interface IFamilyCompetencyMappingEntity {
  FamilyEntity_externalCode: string;
  externalCode: string;
  competency: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  status: string;
  subModule: string;
  competencyNav?: ICompetencyEntity;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
}

export interface IJobApplicationSnapshot_Education {
  backgroundElementId: number;
  applicationId: number;
  bgOrderPos: number;
  degree: string;
  endDate: Date;
  lastModifiedDateTime: Date;
  major: string;
  school: string;
  startDate: Date;
  application?: IJobApplication;
  degreeNav?: IPicklistOption;
  majorNav?: IPicklistOption;
}

export interface IFormObjCompSummarySection {
  formContentId: number;
  formDataId: number;
  sectionCommentsLabel: string;
  sectionDescription: string;
  sectionIndex: number;
  sectionName: string;
  adjustedCompRating?: IFormUserRatingComment;
  adjustedObjRating?: IFormUserRatingComment;
  calculatedCompRating?: IFormUserRatingComment;
  calculatedObjRating?: IFormUserRatingComment;
  compRatingScale?: IFormRatingScale;
  objRatingScale?: IFormRatingScale;
  ococRating?: IFormUserRatingComment;
  othersSectionComments?: IFormUserRatingComment[];
  overallCompRating?: IFormUserRatingComment;
  overallObjRating?: IFormUserRatingComment;
  sectComment?: IFormUserRatingComment;
  sectionConfiguration?: IFormSectionConfiguration;
}

export interface IFOPayGrade {
  externalCode: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  description: string;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  name: string;
  status: string;
  descriptionTranslationNav?: IFoTranslation;
  nameTranslationNav?: IFoTranslation;
}

export interface IJobProfileLocalizedData {
  JobProfile_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  desc_ar_SA: string;
  desc_da_DK: string;
  desc_de_DE: string;
  desc_defaultValue: string;
  desc_en_DEBUG: string;
  desc_en_GB: string;
  desc_en_US: string;
  desc_fr_FR: string;
  desc_localized: string;
  desc_nl_NL: string;
  desc_pl_PL: string;
  desc_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  sectionId: string;
  sectionType: string;
  status: string;
  subModule: string;
  createdByNav?: IUser;
  descTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
}

export interface IPaymentInformationDetailV3ARG {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountType: string;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEffectiveStartDate: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
}

export interface IAbsenceCountingMethod {
  externalCode: string;
  base: string;
  considerHolidays: boolean;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  deductionFactor: number;
  entityUUID: string;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  friday: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  monday: boolean;
  saturday: boolean;
  sunday: boolean;
  thursday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  baseNav?: IMDFEnumValue;
  countryNav?: ICountry[];
  createdByNav?: IUser;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IPaymentInformationDetailV3KEN {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountType: string;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEffectiveStartDate: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
}

export interface ITerritory {
  territoryCode: string;
  territoryName: string;
}

export interface IExternalLearner {
  userId: string;
  defaultLocale: string;
  is_deleted: boolean;
  lastModifiedDateTime: Date;
  loginMethod: string;
  password: string;
  personGUID: string;
  personId: number;
  personIdExternal: string;
  productName: string;
  sourceChannel: string;
  status: string;
  timeZone: string;
  userName: string;
  emailInfo?: IExternalLearnerEmailInfo[];
  homeAddress?: IExternalLearnerAddressInfo[];
  personalInfo?: IExternalLearnerPersonalInfo;
  phoneInfo?: IExternalLearnerPhoneInfo[];
  sourceChannelNav?: IPicklistOption;
}

export interface ICertificationContent {
  JobProfile_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  entity: string;
  jobProfileId: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  order: number;
  sectionId: string;
  sectionType: string;
  status: string;
  subModule: string;
  createdByNav?: IUser;
  entityNav?: ICertificationEntity;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
}

export interface IPerGlobalInfoNOR {
  country: string;
  personIdExternal: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  genericDate1: Date;
  genericDate2: Date;
  genericDate3: Date;
  genericDate6: Date;
  genericNumber1: number;
  genericNumber2: number;
  genericNumber3: number;
  genericNumber4: number;
  genericNumber5: number;
  genericNumber6: number;
  genericNumber7: number;
  genericNumber8: number;
  genericString1: string;
  genericString10: string;
  genericString11: string;
  genericString12: string;
  genericString13: string;
  genericString14: string;
  genericString15: string;
  genericString17: string;
  genericString2: string;
  genericString20: string;
  genericString3: string;
  genericString4: string;
  genericString5: string;
  genericString6: string;
  genericString7: string;
  genericString8: string;
  genericString9: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  operation: string;
  countryNav?: ITerritory;
  personNav?: IPerPerson;
}

export interface IEMEventAttribute {
  id: number;
  name: string;
  value: string;
}

export interface ICust_GER_PersonnelUnit {
  ID: number;
  cust_GERApplication_externalCode: string;
  cust_GER_PersonnelArea_ID: number;
  cust_GER_PersonnelSubArea_ID: number;
  createdBy?: string;
  createdDateTime: Date;
  cust_Chain: string;
  cust_ChainText: string;
  cust_City: string;
  cust_Default: boolean;
  cust_HRPartner: string;
  cust_PostalCode: string;
  cust_RecruitingAdministrator: string;
  cust_Region: string;
  cust_RegionISO: string;
  cust_RegionText: string;
  cust_Street: string;
  cust_Text: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IPaymentInformationDetailV3SVN {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountType: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface ISpotAwardRedemptionProduct {
  SpotAwardRedemptionOrder_externalCode: number;
  SpotAwardRedemption_externalCode: number;
  externalCode: number;
  category: string;
  createdBy?: string;
  createdDateTime: Date;
  description: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  name: string;
  price: number;
  productId: string;
  recordId: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IPaymentInformationDetailV3SVK {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  constantSymbol: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  specificSymbol: string;
  variableSymbol: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface ICandidateEmployeeReferral {
  candidateEmployeeReferralId: number;
  applicantStatusSetItemId: number;
  createdDate: Date;
  expirationDate: Date;
  lastModifiedDate: Date;
  referralKey: string;
  referredBy: string;
  status: number;
  candidate?: ICandidateLight;
  jobRequisition?: IJobRequisition;
  referralResume?: IAttachment;
  user?: IUser;
}

export interface INonRecurringPayment {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  currencyCode: string;
  currencyGO: string;
  formId: number;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  nonRecurringPayPeriodEndDate: Date;
  nonRecurringPayPeriodStartDate: Date;
  notes: string;
  payCompValue: number;
  payComponentCode: string;
  payComponentGroupId: number;
  payComponentType: string;
  payDate: Date;
  recordStatus: string;
  sentToPayroll: Date;
  taxTreatment: string;
  templateId: number;
  userSysId: string;
  advance?: IAdvance;
  createdByNav?: IUser;
  currencyGONav?: ICurrency[];
  lastModifiedByNav?: IUser;
  payComponentCodeNav?: IFOPayComponent[];
  recordStatusNav?: IMDFEnumValue;
  userSysIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface ITrendData_SysOverallPerformance {
  id: number;
  description: string;
  endDate: Date;
  label: string;
  lastModified: Date;
  max: number;
  min: number;
  module: string;
  name: string;
  rating: number;
  source: string;
  startDate: Date;
  userId: string;
  userIdNav?: IUser;
}

export interface ISuccessStoreContent {
  contentId: number;
  bestPractice: boolean;
  comments: string;
  contentType: string;
  customField: string;
  defaultContent: boolean;
  defaultContentName: string;
  domain: string;
  expiryOnDate: Date;
  publishOnDate: Date;
  revisionNo: string;
  status: string;
  wizardable: boolean;
  contentData?: ISuccessStoreContentBlob;
}

export interface IMDFEnumValue {
  key: string;
  value: string;
  ar_SA: string;
  da_DK: string;
  de_DE: string;
  en_DEBUG: string;
  en_GB: string;
  en_US: string;
  fr_FR: string;
  localized: string;
  nl_NL: string;
  pl_PL: string;
  sv_SE: string;
}

export interface IAccrualCalculationBase {
  externalCode: string;
  actualQuantity: number;
  createdBy?: string;
  createdDateTime: Date;
  date: Date;
  entityUUID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  quantity1: number;
  quantity2: number;
  quantity3: number;
  quantity4: number;
  quantity5: number;
  userId: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  userIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface ISpotAwardRedemptionOrder {
  SpotAwardRedemption_externalCode: number;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  orderAmount: number;
  quantity: number;
  recordId: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  product?: ISpotAwardRedemptionProduct;
}

export interface IPaymentInformationDetailV3 {
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountNumber: string;
  accountOwner: string;
  amount: number;
  bank: string;
  bankCountry: string;
  businessIdentifierCode: string;
  createdBy?: string;
  createdDateTime: Date;
  currency: string;
  customPayType: string;
  iban: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  paySequence: number;
  payType: string;
  paymentMethod: string;
  percent: number;
  purpose: string;
  routingNumber: string;
  bankCountryNav?: ICountry[];
  bankNav?: IBank;
  createdByNav?: IUser;
  currencyNav?: ICurrency[];
  customPayTypeNav?: ICustomPayType;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  payTypeNav?: IMDFEnumValue;
  paymentMethodNav?: IPaymentMethodV3;
  toPaymentInformationDetailV3ARG?: IPaymentInformationDetailV3ARG;
  toPaymentInformationDetailV3BLR?: IPaymentInformationDetailV3BLR;
  toPaymentInformationDetailV3BOL?: IPaymentInformationDetailV3BOL;
  toPaymentInformationDetailV3BRA?: IPaymentInformationDetailV3BRA;
  toPaymentInformationDetailV3CHL?: IPaymentInformationDetailV3CHL;
  toPaymentInformationDetailV3COL?: IPaymentInformationDetailV3COL;
  toPaymentInformationDetailV3CZE?: IPaymentInformationDetailV3CZE;
  toPaymentInformationDetailV3ECU?: IPaymentInformationDetailV3ECU;
  toPaymentInformationDetailV3ESP?: IPaymentInformationDetailV3ESP;
  toPaymentInformationDetailV3FRA?: IPaymentInformationDetailV3FRA;
  toPaymentInformationDetailV3GBR?: IPaymentInformationDetailV3GBR;
  toPaymentInformationDetailV3GHA?: IPaymentInformationDetailV3GHA;
  toPaymentInformationDetailV3IRQ?: IPaymentInformationDetailV3IRQ;
  toPaymentInformationDetailV3ISR?: IPaymentInformationDetailV3ISR;
  toPaymentInformationDetailV3ITA?: IPaymentInformationDetailV3ITA;
  toPaymentInformationDetailV3JPN?: IPaymentInformationDetailV3JPN;
  toPaymentInformationDetailV3KEN?: IPaymentInformationDetailV3KEN;
  toPaymentInformationDetailV3MEX?: IPaymentInformationDetailV3MEX;
  toPaymentInformationDetailV3MKD?: IPaymentInformationDetailV3MKD;
  toPaymentInformationDetailV3MMR?: IPaymentInformationDetailV3MMR;
  toPaymentInformationDetailV3MOZ?: IPaymentInformationDetailV3MOZ;
  toPaymentInformationDetailV3MWI?: IPaymentInformationDetailV3MWI;
  toPaymentInformationDetailV3NAM?: IPaymentInformationDetailV3NAM;
  toPaymentInformationDetailV3NGA?: IPaymentInformationDetailV3NGA;
  toPaymentInformationDetailV3NZL?: IPaymentInformationDetailV3NZL;
  toPaymentInformationDetailV3PER?: IPaymentInformationDetailV3PER;
  toPaymentInformationDetailV3PRY?: IPaymentInformationDetailV3PRY;
  toPaymentInformationDetailV3SUR?: IPaymentInformationDetailV3SUR;
  toPaymentInformationDetailV3SVK?: IPaymentInformationDetailV3SVK;
  toPaymentInformationDetailV3SVN?: IPaymentInformationDetailV3SVN;
  toPaymentInformationDetailV3TUN?: IPaymentInformationDetailV3TUN;
  toPaymentInformationDetailV3USA?: IPaymentInformationDetailV3USA;
  toPaymentInformationDetailV3VEN?: IPaymentInformationDetailV3VEN;
  toPaymentInformationDetailV3ZAF?: IPaymentInformationDetailV3ZAF;
  toPaymentInformationDetailV3ZWE?: IPaymentInformationDetailV3ZWE;
}

export interface ITimeTypeUSA {
  TimeType_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  durationOfDisabilityPeriodOne: number;
  durationOfDisabilityPeriodThree: number;
  durationOfDisabilityPeriodTwo: number;
  entityUUID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  sicknessVariant: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  sicknessVariantNav?: IMDFEnumValue;
}

export interface IPaymentInformationDetailV3PRY {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountType: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IBackground_Compensation {
  backgroundElementId: number;
  userId: string;
  bgOrderPos: number;
  bonusTotal: number;
  compaRatio: number;
  curSalary: string;
  finSalary: string;
  jobTitle: string;
  lastModifiedDate: Date;
  lumpSum: number;
  merit: string;
  options: number;
  pmRating: string;
  stock: number;
  stockGrantDate: Date;
  sysCompTemplateName: string;
  sysReviewEndDate: Date;
  sysReviewStartDate: Date;
  totalComp: number;
  userIdNav?: IUser;
}

export interface IJobAppTemplate_EZHire_Simplified_Candidate_Detail_Info_Template {
  templateId: number;
  address: string;
  averageRating: number;
  candidateName: string;
  cellPhone: string;
  city: string;
  comments: string;
  contactEmail: string;
  firstName: string;
  formerEmployee: boolean;
  interviewResult: string;
  lastName: string;
  middleName: string;
  overdueInterviews: string;
  questionResponse: string;
  referralName: string;
  startDate: Date;
  zip: string;
  assessmentAttachment?: IAttachment[];
  assessmentStatus?: IPicklistOption;
  bkgrndChkAttachment?: IAttachment[];
  bkgrndChkStatus?: IPicklistOption;
  candidateSource?: IPicklistOption;
  country?: IPicklistOption;
  coverLetter?: IAttachment;
  rejectReason?: IPicklistOption;
  resume?: IAttachment;
  state?: IPicklistOption;
  statusId?: IPicklistOption;
  supportingDoc?: IAttachment[];
}

export interface IFOGeozone {
  externalCode: string;
  startDate: Date;
  adjustmentPercentage: number;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  description: string;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  name: string;
  status: string;
  descriptionTranslationNav?: IFoTranslation;
  nameTranslationNav?: IFoTranslation;
}

export interface IForm360ParticipantCategory {
  categoryValue: string;
  formContentId: number;
  formDataId: number;
  categoryLabel: string;
  categoryOrder: number;
}

export interface IJobReqScreeningQuestionChoice {
  locale: string;
  optionId: number;
  optionValue: number;
  optionLabel: string;
}

export interface ISkillProfile {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  status: string;
  createdByNav?: IUser;
  externalCodeNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  ratedSkills?: IRatedSkillMapping[];
  selfReportSkills?: ISelfReportSkillMapping[];
  statusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IWfRequestParticipator {
  wfRequestParticipatorId: number;
  actorType: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  ownerId: string;
  participatorType: string;
  processingOrder: number;
  relatedTo: string;
  roleId: string;
  wfRequestId: number;
  dynamicGroupNav?: IDynamicGroup;
  dynamicRoleNav?: IFODynamicRole;
  ownerNav?: IUser;
  positionNav?: IPosition[];
}

export interface ISuccessor {
  id: number;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  nomineeUserId: string;
  note: string;
  rank: number;
  readiness: number;
  readinessLabel: string;
  status: number;
  statusLabel: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  nomineeHistoryNav?: INomineeHistory[];
  userNav?: IUser;
}

export interface ITimeAccountSnapshot {
  externalCode: string;
  accountType: string;
  approvedAbsenceBalance: number;
  approvedAbsenceBalanceAccrualSeparated: number;
  asOfAccountingPeriodEnd: boolean;
  asOfPayPeriodEnd: boolean;
  balance: number;
  balanceAccrualSeparated: number;
  balanceEffectiveDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  entityId: string;
  entityUUID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  outdated: boolean;
  unit: string;
  userId: string;
  accountTypeNav?: ITimeAccountType;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  unitNav?: IMDFEnumValue;
  userIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IForm360Rater {
  formContentId: number;
  formDataId: number;
  category: string;
  cellPhone: string;
  company: string;
  department: string;
  division: string;
  internalOrExternal: string;
  jobCode: string;
  jobTitle: string;
  mail: string;
  manager: string;
  participantID: string;
  participantName: string;
  participantRating: string;
  participantRatingStatus: string;
  competencySections?: IFormCompetencySection[];
  customSections?: IFormCustomSection[];
  objectiveSections?: IFormObjectiveSection[];
  participantUser?: IUser;
  summarySection?: IFormSummarySection;
}

export interface ITeamGoalOwner {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  objId: number;
  ownerType: number;
  userId: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IPaymentInformationDetailV3CZE {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  specificSymbol: number;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IPerGlobalInfoGBR {
  country: string;
  personIdExternal: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  genericDate1: Date;
  genericDate2: Date;
  genericDate3: Date;
  genericDate6: Date;
  genericNumber1: number;
  genericNumber2: number;
  genericNumber3: number;
  genericNumber4: number;
  genericNumber5: number;
  genericNumber6: number;
  genericNumber7: number;
  genericNumber8: number;
  genericString1: string;
  genericString10: string;
  genericString11: string;
  genericString12: string;
  genericString13: string;
  genericString14: string;
  genericString15: string;
  genericString17: string;
  genericString2: string;
  genericString20: string;
  genericString3: string;
  genericString4: string;
  genericString5: string;
  genericString6: string;
  genericString7: string;
  genericString8: string;
  genericString9: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  operation: string;
  countryNav?: ITerritory;
  genericNumber1Nav?: IPicklistOption;
  genericNumber2Nav?: IPicklistOption;
  genericNumber3Nav?: IPicklistOption;
  genericString1Nav?: IPicklistOption;
  genericString2Nav?: IPicklistOption;
  genericString3Nav?: IPicklistOption;
  personNav?: IPerPerson;
}

export interface IJobDescTemplate {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  footer_ar_SA: string;
  footer_da_DK: string;
  footer_de_DE: string;
  footer_defaultValue: string;
  footer_en_DEBUG: string;
  footer_en_GB: string;
  footer_en_US: string;
  footer_fr_FR: string;
  footer_localized: string;
  footer_nl_NL: string;
  footer_pl_PL: string;
  footer_sv_SE: string;
  header_ar_SA: string;
  header_da_DK: string;
  header_de_DE: string;
  header_defaultValue: string;
  header_en_DEBUG: string;
  header_en_GB: string;
  header_en_US: string;
  header_fr_FR: string;
  header_localized: string;
  header_nl_NL: string;
  header_pl_PL: string;
  header_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  status: string;
  subModule: string;
  title_ar_SA: string;
  title_da_DK: string;
  title_de_DE: string;
  title_defaultValue: string;
  title_en_DEBUG: string;
  title_en_GB: string;
  title_en_US: string;
  title_fr_FR: string;
  title_localized: string;
  title_nl_NL: string;
  title_pl_PL: string;
  title_sv_SE: string;
  createdByNav?: IUser;
  footerTranslationTextNav?: IMDFLocalizedValue[];
  headerTranslationTextNav?: IMDFLocalizedValue[];
  jdFamilyMappings?: IJDTemplateFamilyMapping[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  sections?: IJobDescSection[];
  statusNav?: IMDFEnumValue;
  titleTranslationTextNav?: IMDFLocalizedValue[];
  wfRequestNav?: IWfRequest[];
}

export interface IPaymentInformationDetailV3MMR {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountType: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IDevGoalPlanTemplate {
  id: number;
  defaultTemplate: boolean;
  description: string;
  displayOrder: number;
  dueDate: Date;
  fieldOrder: string;
  name: string;
  parentPlanId: number;
  startDate: Date;
  useTextForPrivacy: boolean;
  devgoals?: ISimpleDevGoal[];
  enums?: IDevGoalEnum[];
}

export interface IComplianceProcessTask {
  taskId: string;
  category: string;
  completedBy: string;
  createdBy?: string;
  createdDateTime: Date;
  dueDate: Date;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  process: string;
  startDate: Date;
  status: string;
  subjectUser: string;
  type: string;
  categoryNav?: IMDFEnumValue;
  completedByNav?: IUser;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  processNav?: IComplianceProcess;
  statusNav?: IMDFEnumValue;
  subjectUserNav?: IUser;
  typeNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface ICust_CC_ProfileComp {
  cust_CC_JobProfile_externalCode: number;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  cust_CompId: string;
  cust_EndDate: Date;
  cust_FuncCompId: string;
  cust_MinRating: string;
  cust_ProfileId: string;
  cust_Required: boolean;
  cust_StartDate: Date;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  cust_ToProfileTask?: ICust_CC_ProfileTask[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IAdvancesAccumulation {
  externalCode: string;
  accumulatedAmount: number;
  advanceType: string;
  createdBy?: string;
  createdDateTime: Date;
  currency: string;
  currencyGO: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  numberOfOccurances: number;
  periodEndDate: Date;
  periodStartDate: Date;
  remainingEligibleAmount: number;
  remainingNumberOfOccurances: number;
  userSysId: string;
  advanceTypeNav?: IFOPayComponent[];
  createdByNav?: IUser;
  currencyGONav?: ICurrency[];
  currencyNav?: IPickListValueV2[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  nonRecurringPayments?: INonRecurringPayment[];
  userSysIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IGoalPermission_5 {
  id: number;
  actualAchievement: number;
  category: number;
  create: boolean;
  delete: boolean;
  due: number;
  edit: boolean;
  flag: number;
  metric: number;
  metriclookup: number;
  name: number;
  privateAccess: boolean;
  rating: number;
  start: number;
  state: number;
  type: string;
  userId: string;
  view: boolean;
  weight: number;
  metriclookupPermissionNav?: IGoalMetricLookupPermission_5;
}

export interface IGoalPermission_6 {
  id: number;
  Purpose: number;
  category: number;
  create: boolean;
  delete: boolean;
  description: number;
  due: number;
  edit: boolean;
  flag: number;
  name: number;
  privateAccess: boolean;
  start: number;
  state: number;
  type: string;
  userId: string;
  view: boolean;
}

export interface IGoalPermission_3 {
  id: number;
  bizxActual: number;
  bizxPos: number;
  bizxStrategic: number;
  bizxTarget: number;
  category: number;
  create: boolean;
  delete: boolean;
  done: number;
  due: number;
  edit: boolean;
  flag: number;
  metric: number;
  milestones: number;
  name: number;
  privateAccess: boolean;
  start: number;
  state: number;
  tasks: number;
  type: string;
  userId: string;
  view: boolean;
  weight: number;
  milestonesPermissionNav?: IGoalMilestonePermission_3;
  tasksPermissionNav?: IGoalTaskPermission_3;
}

export interface IGoalPermission_4 {
  id: number;
  actualAchievement: number;
  category: number;
  create: boolean;
  delete: boolean;
  due: number;
  edit: boolean;
  flag: number;
  metric: number;
  metriclookup: number;
  name: number;
  privateAccess: boolean;
  rating: number;
  start: number;
  state: number;
  type: string;
  userId: string;
  view: boolean;
  weight: number;
  metriclookupPermissionNav?: IGoalMetricLookupPermission_4;
}

export interface IGoalPermission_1 {
  id: number;
  category: number;
  create: boolean;
  delete: boolean;
  due: number;
  edit: boolean;
  flag: number;
  name: number;
  privateAccess: boolean;
  start: number;
  state: number;
  type: string;
  userId: string;
  view: boolean;
}

export interface IFOFrequency {
  externalCode: string;
  annualizationFactor: number;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  description: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  name: string;
  descriptionTranslationNav?: IFoTranslation;
  nameTranslationNav?: IFoTranslation;
}

export interface ITimeAccountTypeAUS {
  TimeAccountType_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  entityUUID: string;
  includeInLeaveLoadingCalculations: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  priorServiceAccountDistinction: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  priorServiceAccountDistinctionNav?: IMDFEnumValue;
}

export interface IGoalPermission_2 {
  id: number;
  category: number;
  create: boolean;
  delete: boolean;
  done: number;
  due: number;
  edit: boolean;
  flag: number;
  metric: number;
  milestones: number;
  name: number;
  privateAccess: boolean;
  start: number;
  state: number;
  tasks: number;
  type: string;
  userId: string;
  view: boolean;
  weight: number;
  milestonesPermissionNav?: IGoalMilestonePermission_2;
  tasksPermissionNav?: IGoalTaskPermission_2;
}

export interface IEducationDegreeContent {
  JobProfile_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  entity: string;
  jobProfileId: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  order: number;
  sectionId: string;
  sectionType: string;
  status: string;
  subModule: string;
  createdByNav?: IUser;
  entityNav?: IEducationDegreeEntity;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
}

export interface IGoalPlanState {
  planId: number;
  stateId: string;
  userId: string;
  actionLabel: string;
  auditComments: string;
  currentState: boolean;
  defaultState: boolean;
  lastModified: Date;
  stateLabel: string;
  targetStates: string;
}

export interface IAvailableTimeType {
  TimeTypeProfile_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  enabledInEssScenario: boolean;
  entityUUID: string;
  favoriteTimeType: boolean;
  hideAccountBalance: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  timeType: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  timeTypeNav?: ITimeType;
}

export interface IJobClassificationZAF {
  JobClassificationCountry_country: string;
  JobClassification_effectiveStartDate: Date;
  JobClassification_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  occupationalLevel: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  occupationalLevelNav?: IPickListValueV2[];
}

export interface IExternalLearnerAddressInfo {
  itemId: number;
  address10Alt1: string;
  address10Alt2: string;
  address11Alt1: string;
  address11Alt2: string;
  address12Alt1: string;
  address12Alt2: string;
  address13Alt1: string;
  address13Alt2: string;
  address14Alt1: string;
  address14Alt2: string;
  address15Alt1: string;
  address15Alt2: string;
  address16Alt1: string;
  address16Alt2: string;
  address17Alt1: string;
  address17Alt2: string;
  address18Alt1: string;
  address18Alt2: string;
  address19Alt1: string;
  address19Alt2: string;
  address20Alt1: string;
  address20Alt2: string;
  address4Alt1: string;
  address4Alt2: string;
  address5Alt1: string;
  address5Alt2: string;
  address6Alt1: string;
  address6Alt2: string;
  address7Alt1: string;
  address7Alt2: string;
  address8Alt1: string;
  address8Alt2: string;
  address9Alt1: string;
  address9Alt2: string;
  addressType: string;
  customDate1Alt1: Date;
  customDate1Alt2: Date;
  customDouble1Alt1: string;
  customDouble1Alt2: string;
  customLong1Alt1: number;
  customLong1Alt2: number;
  customString1Alt1: string;
  customString1Alt2: string;
  is_deleted: boolean;
  lastModifiedDateTime: Date;
  provinceAlt1: string;
  provinceAlt2: string;
  script: string;
  scriptAlt1: string;
  scriptAlt2: string;
  addressTypeNav?: IPicklistOption;
}

export interface IDevGoalCompetency {
  id: number;
  category: string;
  library: string;
  name: string;
  objId: number;
  planId: number;
  userId: string;
}

export interface IAdvancesInstallments {
  Advance_externalCode: string;
  NonRecurringPayment_externalCode: string;
  externalCode: string;
  amortization: number;
  amortizationTotal: number;
  balanceRemaining: number;
  createdBy?: string;
  createdDateTime: Date;
  currency: string;
  currencyGO: string;
  installmentAmount: number;
  installmentStatus: string;
  interestAmount: number;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  paymentDate: Date;
  createdByNav?: IUser;
  currencyGONav?: ICurrency[];
  installmentStatusNav?: IMDFEnumValue;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface ICust_CC_Task {
  cust_CC_Competency_externalCode: number;
  cust_CC_FuncComp_externalCode: number;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  cust_Description: string;
  cust_DescriptionTranslations_ar_SA: string;
  cust_DescriptionTranslations_da_DK: string;
  cust_DescriptionTranslations_de_DE: string;
  cust_DescriptionTranslations_defaultValue: string;
  cust_DescriptionTranslations_en_DEBUG: string;
  cust_DescriptionTranslations_en_GB: string;
  cust_DescriptionTranslations_en_US: string;
  cust_DescriptionTranslations_fr_FR: string;
  cust_DescriptionTranslations_localized: string;
  cust_DescriptionTranslations_nl_NL: string;
  cust_DescriptionTranslations_pl_PL: string;
  cust_DescriptionTranslations_sv_SE: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  cust_DescriptionTranslationsTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IEmploymentConditionEntity {
  externalCode: string;
  condition_ar_SA: string;
  condition_da_DK: string;
  condition_de_DE: string;
  condition_defaultValue: string;
  condition_en_DEBUG: string;
  condition_en_GB: string;
  condition_en_US: string;
  condition_fr_FR: string;
  condition_localized: string;
  condition_nl_NL: string;
  condition_pl_PL: string;
  condition_sv_SE: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  status: string;
  subModule: string;
  conditionTranslationTextNav?: IMDFLocalizedValue[];
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  legalEntities?: IFOCompany[];
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IJobClassificationBRA {
  JobClassificationCountry_country: string;
  JobClassification_effectiveStartDate: Date;
  JobClassification_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  occupationalCode: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  occupationalCodeNav?: IPickListValueV2[];
}

export interface IPositionMatrixRelationship {
  Position_code: string;
  Position_effectiveStartDate: Date;
  matrixRelationshipType: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  relatedPosition: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  matrixRelationshipTypeNav?: IPickListValueV2[];
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  relatedPositionNav?: IPosition[];
}

export interface IFormReviewInfoSection {
  formContentId: number;
  formDataId: number;
  formDateFormat: string;
  formOriginator: string;
  isDueDateValidationDisabled: boolean;
  isReviewDatesEditable: boolean;
  reviewDueDate: string;
  reviewEndDate: string;
  reviewStartDate: string;
  sectionDescription: string;
  sectionIndex: number;
  sectionName: string;
}

export interface IBackground_Promotability {
  backgroundElementId: number;
  userId: string;
  bgOrderPos: number;
  function: string;
  lastModifiedDate: Date;
  level: string;
  timeframe: string;
  functionNav?: IPicklistOption;
  levelNav?: IPicklistOption;
  timeframeNav?: IPicklistOption;
  userIdNav?: IUser;
}

export interface IPerNationalId {
  cardType: string;
  country: string;
  personIdExternal: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  isPrimary: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  nationalId: string;
  notes: string;
  operation: string;
  countryNav?: ITerritory;
  personNav?: IPerPerson;
}

export interface IReplicationTargetSystem {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  isOrganizationalManagementIntegration: boolean;
  isPayrollIntegration: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  replicationTimeOffsetInMinutes: number;
  sapSystemConfiguration: string;
  createdByNav?: IUser;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  sapSystemConfigurationNav?: ISAPSystemConfiguration;
  wfRequestNav?: IWfRequest[];
}

export interface IFormObjectiveOtherDetailsItem {
  formContentId: number;
  formDataId: number;
  itemId: number;
  sectionIndex: number;
  type: number;
  title: string;
  cols?: IFormObjectiveOtherDetailsItemCol[];
  values?: IFormObjectiveOtherDetailsItemValueCell[];
}

export interface ITimeAccountPurchaseProfile {
  externalCode: string;
  allowDeductionStartDateSelection: boolean;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  deductionSchedule: string;
  deductionType: string;
  entityUUID: string;
  equivalentUnits: string;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  helpText_ar_SA: string;
  helpText_da_DK: string;
  helpText_de_DE: string;
  helpText_defaultValue: string;
  helpText_en_DEBUG: string;
  helpText_en_GB: string;
  helpText_en_US: string;
  helpText_fr_FR: string;
  helpText_localized: string;
  helpText_nl_NL: string;
  helpText_pl_PL: string;
  helpText_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  workflowConfiguration: string;
  countryNav?: ICountry[];
  createdByNav?: IUser;
  deductionPayComponents?: ITimeAccountPurchaseProfilePayComponentAssignment[];
  deductionScheduleNav?: IMDFEnumValue;
  deductionTypeNav?: IMDFEnumValue;
  equivalentUnitsNav?: IMDFEnumValue;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  helpTextTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
  workflowConfigurationNav?: IFOWfConfig;
}

export interface IPersonType {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  personType: string;
  personTypeName_ar_SA: string;
  personTypeName_da_DK: string;
  personTypeName_de_DE: string;
  personTypeName_defaultValue: string;
  personTypeName_en_DEBUG: string;
  personTypeName_en_GB: string;
  personTypeName_en_US: string;
  personTypeName_fr_FR: string;
  personTypeName_localized: string;
  personTypeName_nl_NL: string;
  personTypeName_pl_PL: string;
  personTypeName_sv_SE: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  personTypeNameTranslationTextNav?: IMDFLocalizedValue[];
  personTypeNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IDomainEventAlert {
  externalCode: string;
  alertId: string;
  alertTypeId: string;
  assigneeUserId: string;
  createdBy?: string;
  createdDateTime: Date;
  errorMessage: string;
  eventId: string;
  eventSubject: string;
  eventType: string;
  fullSubscriberName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  message: string;
  messageKey: string;
  messageParameter1: string;
  messageParameter2: string;
  messageParameter3: string;
  messageParameter4: string;
  messageParameter5: string;
  messageParameter6: string;
  serviceName: string;
  status: string;
  subscriberName: string;
  userSysId: string;
  assigneeUserIdNav?: IUser;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface ICust_CC_Competency {
  cust_CC_FuncComp_externalCode: number;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  cust_DelimitationDate: Date;
  cust_Description: string;
  cust_DescriptionTranslations_ar_SA: string;
  cust_DescriptionTranslations_da_DK: string;
  cust_DescriptionTranslations_de_DE: string;
  cust_DescriptionTranslations_defaultValue: string;
  cust_DescriptionTranslations_en_DEBUG: string;
  cust_DescriptionTranslations_en_GB: string;
  cust_DescriptionTranslations_en_US: string;
  cust_DescriptionTranslations_fr_FR: string;
  cust_DescriptionTranslations_localized: string;
  cust_DescriptionTranslations_nl_NL: string;
  cust_DescriptionTranslations_pl_PL: string;
  cust_DescriptionTranslations_sv_SE: string;
  cust_DocumentLinkage: boolean;
  cust_DocumentUpload: boolean;
  cust_EndDate: Date;
  cust_ExpiryNumber: number;
  cust_ExpiryType: string;
  cust_IsReferenceComp: boolean;
  cust_JPBType: string;
  cust_JPBTypeGUID: string;
  cust_Link: string;
  cust_RatingType: string;
  cust_ReferenceId: string;
  cust_StartDate: Date;
  cust_TimeForExpiryWarning: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  cust_DescriptionTranslationsTranslationTextNav?: IMDFLocalizedValue[];
  cust_ToTask?: ICust_CC_Task[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IRoleEntity {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  createdLocale: string;
  family: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  name_ar_SA: string;
  name_da_DK: string;
  name_de_DE: string;
  name_defaultValue: string;
  name_en_DEBUG: string;
  name_en_GB: string;
  name_en_US: string;
  name_fr_FR: string;
  name_localized: string;
  name_nl_NL: string;
  name_pl_PL: string;
  name_sv_SE: string;
  status: string;
  subModule: string;
  createdByNav?: IUser;
  familyNav?: IFamilyEntity;
  jobCodeMappings?: IJobCodeMappingEntity[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  nameTranslationTextNav?: IMDFLocalizedValue[];
  roleCompetencyBehaviorMappings?: IRoleCompetencyBehaviorMappingEntity[];
  roleCompetencyMappings?: IRoleCompetencyMappingEntity[];
  roleSkillMappings?: IRoleSkillMappingEntity[];
  roleTalentPoolMappings?: IRoleTalentPoolMappingEntity[];
  statusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface ICust_CC_Classification {
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  cust_ClassificationPicklistId: string;
  cust_IconId: string;
  cust_Key: string;
  cust_Level: number;
  cust_Name: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  cust_KeyNav?: IPickListValueV2[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IFormObjectiveDetails {
  formContentId: number;
  formDataId: number;
  itemId: number;
  sectionIndex: number;
  type: number;
  fieldDataType: string;
  fieldId: string;
  label: string;
  value: string;
}

export interface IJobDescSection {
  JobDescTemplate_externalCode: string;
  externalCode: string;
  bold: boolean;
  boldHeader: boolean;
  bulletType: string;
  contentType: string;
  createdBy?: string;
  createdDateTime: Date;
  externalPosting: boolean;
  fontSizeHeader: number;
  headerLevelValue: string;
  internalPosting: boolean;
  italic: boolean;
  italicHeader: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  multiContents: boolean;
  name_ar_SA: string;
  name_da_DK: string;
  name_de_DE: string;
  name_defaultValue: string;
  name_en_DEBUG: string;
  name_en_GB: string;
  name_en_US: string;
  name_fr_FR: string;
  name_localized: string;
  name_nl_NL: string;
  name_pl_PL: string;
  name_sv_SE: string;
  onlyAdmin: boolean;
  order: number;
  removable: boolean;
  required: boolean;
  showInJobReq: boolean;
  smallIcon: string;
  status: string;
  subModule: string;
  underline: boolean;
  underlineHeader: boolean;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  nameTranslationTextNav?: IMDFLocalizedValue[];
  statusNav?: IMDFEnumValue;
}

export interface IGoalMilestone_3 {
  id: number;
  description: string;
  due: Date;
  flag: number;
  index: number;
  lastModified: Date;
  modifier: string;
  objId: number;
  start: Date;
  permissionNav?: IGoalMilestonePermission_3;
}

export interface IFOJobClassLocalGBR {
  country: string;
  externalCode: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  mdfSystemRecordId: string;
  occupationalCode: number;
  status: string;
  countryNav?: ITerritory;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
}

export interface IPayrollConfigurationCategoryLink {
  PayrollConfigurationCategory_externalCode: string;
  PayrollSystemConfiguration_externalCode: string;
  externalCode: string;
  adminService: boolean;
  createdBy?: string;
  createdDateTime: Date;
  externalLinkName_ar_SA: string;
  externalLinkName_da_DK: string;
  externalLinkName_de_DE: string;
  externalLinkName_defaultValue: string;
  externalLinkName_en_DEBUG: string;
  externalLinkName_en_GB: string;
  externalLinkName_en_US: string;
  externalLinkName_fr_FR: string;
  externalLinkName_localized: string;
  externalLinkName_nl_NL: string;
  externalLinkName_pl_PL: string;
  externalLinkName_sv_SE: string;
  infotypeNumber: number;
  isOpenURLInBrowser: boolean;
  isRequiredForPayroll: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  selfService: boolean;
  service: string;
  typeOfUrl: string;
  url: string;
  createdByNav?: IUser;
  externalLinkNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  serviceNav?: IPickListValueV2[];
  typeOfUrlNav?: IPickListValueV2[];
}

export interface IGoalMilestone_2 {
  id: number;
  description: string;
  due: Date;
  flag: number;
  index: number;
  lastModified: Date;
  modifier: string;
  objId: number;
  start: Date;
  permissionNav?: IGoalMilestonePermission_2;
}

export interface IEmpWfRequest {
  empWfRequestId: number;
  actionType: string;
  effectiveDate: Date;
  entityType: string;
  eventReason: string;
  requestType: string;
  subjectId: string;
  wfConfig: string;
  wfRequestId: number;
  eventReasonNav?: IFOEventReason[];
  jobInfoNav?: IEmpJob[];
  wfConfigNav?: IFOWfConfig;
}

export interface IFormRatingScale {
  formContentId: number;
  formDataId: number;
  sectionIndex: number;
  localizedName: string;
  name: string;
  reverseScale: boolean;
  scaleId: string;
  scaleType: string;
  showValue: boolean;
  ratingScaleList?: IFormRatingScaleValue[];
}

export interface IWfRequest {
  wfRequestId: number;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  currentStepNum: number;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  module: string;
  parentWfRequestId: number;
  reminderSentDate: Date;
  status: string;
  totalSteps: number;
  url: string;
  empWfRequestNav?: IEmpWfRequest;
  parentWfRequestNav?: IWfRequest;
  wfRequestCommentsNav?: IWfRequestComments[];
  wfRequestParticipatorNav?: IWfRequestParticipator[];
  wfRequestStepNav?: IWfRequestStep[];
  wfRequestUINav?: IWfRequestUIData;
  workflowAllowedActionListNav?: IWorkflowAllowedActionList[];
}

export interface IComplianceProcess {
  processId: string;
  complianceMasterId: string;
  correctDataTriggered: boolean;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  onboardingProcess: string;
  processInitiatorId: string;
  processInitiatorType: string;
  processStatus: string;
  processType: string;
  startDate: Date;
  user: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  onboardingProcessNav?: IONB2Process;
  processInitiatorTypeNav?: IMDFEnumValue;
  processStatusNav?: IMDFEnumValue;
  processTasks?: IComplianceProcessTask[];
  processTypeNav?: IMDFEnumValue;
  toDocumentFlow?: IComplianceDocumentFlow;
  toFormData?: IComplianceFormData[];
  userNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IPerEmail {
  emailType: string;
  personIdExternal: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  emailAddress: string;
  includeAllRecords: boolean;
  isPrimary: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  operation: string;
  emailTypeNav?: IPicklistOption;
  personNav?: IPerPerson;
}

export interface IPerGlobalInfoIRL {
  country: string;
  personIdExternal: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  genericDate1: Date;
  genericDate2: Date;
  genericDate3: Date;
  genericDate6: Date;
  genericNumber1: number;
  genericNumber2: number;
  genericNumber3: number;
  genericNumber4: number;
  genericNumber5: number;
  genericNumber6: number;
  genericNumber7: number;
  genericNumber8: number;
  genericString1: string;
  genericString10: string;
  genericString11: string;
  genericString12: string;
  genericString13: string;
  genericString14: string;
  genericString15: string;
  genericString17: string;
  genericString2: string;
  genericString20: string;
  genericString3: string;
  genericString4: string;
  genericString5: string;
  genericString6: string;
  genericString7: string;
  genericString8: string;
  genericString9: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  operation: string;
  countryNav?: ITerritory;
  genericString2Nav?: IPicklistOption;
  genericString3Nav?: IPicklistOption;
  personNav?: IPerPerson;
}

export interface IPositionEntity {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  jobCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  position: string;
  status: string;
  subModule: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  positionCompetencyMappings?: IPositionCompetencyMappingEntity[];
  positionNav?: IPosition[];
  positionSkillMappings?: IPositionSkillMappingEntity[];
  statusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IJobApplicationSnapshot_OutsideWorkExperience {
  backgroundElementId: number;
  applicationId: number;
  bgOrderPos: number;
  businessType: string;
  employer: string;
  endDate: Date;
  lastModifiedDateTime: Date;
  startDate: Date;
  startTitle: string;
  application?: IJobApplication;
  businessTypeNav?: IPicklistOption;
}

export interface ICandidateBackground_Languages {
  backgroundElementId: number;
  bgOrderPos: number;
  candidateId: number;
  language: string;
  lastModifiedDateTime: Date;
  readingProf: string;
  speakingProf: string;
  writingProf: string;
  candidate?: ICandidate;
  languageNav?: IPicklistOption;
  readingProfNav?: IPicklistOption;
  speakingProfNav?: IPicklistOption;
  writingProfNav?: IPicklistOption;
}

export interface ICust_CC_UserTask {
  cust_CC_UserComp_externalCode: number;
  cust_CC_UserFuncComp_externalCode: number;
  cust_CC_User_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  cust_Completed: boolean;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IAutoDelegateDetail {
  AutoDelegateConfig_delegator: string;
  externalCode: string;
  alwaysOn: boolean;
  createdBy?: string;
  createdDateTime: Date;
  delegatee: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  status: string;
  createdByNav?: IUser;
  delegateeNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
}

export interface ICalibrationSession {
  sessionId: number;
  activationDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  sessionDate: Date;
  sessionLocation: string;
  sessionName: string;
  status: number;
  calTemplate?: ICalibrationTemplate;
  facilitatorList?: IUser[];
  ownerList?: IUser[];
  participantList?: IUser[];
  reviewerList?: ICalibrationSessionReviewer[];
  subjectList?: ICalibrationSessionSubject[];
}

export interface IForm360RaterSection {
  formContentId: number;
  formDataId: number;
  formRating: string;
  formStatus: number;
  formStatusDescription: string;
  form360Raters?: IForm360Rater[];
}

export interface IEmployeePayrollRunResultsItems {
  EmployeePayrollRunResults_externalCode: string;
  EmployeePayrollRunResults_mdfSystemEffectiveStartDate: Date;
  externalCode: string;
  amount: number;
  createdBy?: string;
  createdDateTime: Date;
  endDateWhenEarned: Date;
  externalName: string;
  groupingReason: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  payrollProviderGroupingReason: string;
  payrollProviderGroupingValue: string;
  payrollProviderUnitOfMeasurement: string;
  payrollProviderWageType: string;
  quantity: number;
  startDateWhenEarned: Date;
  unitOfMeasurement: string;
  wageType: string;
  createdByNav?: IUser;
  groupingReasonNav?: IPickListValueV2[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wageTypeNav?: IPickListValueV2[];
}

export interface ICountry {
  code: string;
  effectiveStartDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  currency: string;
  effectiveEndDate: Date;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  isDRMEnabled: boolean;
  isSetByMigrate: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemCreatedBy: string;
  mdfSystemCreatedDate: Date;
  mdfSystemEntityId: string;
  mdfSystemLastModifiedBy: string;
  mdfSystemLastModifiedDate: Date;
  mdfSystemLastModifiedDateWithTZ: Date;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  numericCountryCode: number;
  status: string;
  territoryId: number;
  twoCharCountryCode: string;
  createdByNav?: IUser;
  currencyNav?: ICurrency;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IEmployeeTimeGroup {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  entityUUID: string;
  itemsCategory: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  userId: string;
  createdByNav?: IUser;
  items?: IEmployeeTimeGroupItem[];
  itemsCategoryNav?: IMDFEnumValue;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  userIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IPayCalendar {
  payGroup: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  payGroupNav?: IFOPayGroup[];
  toPayPeriod?: IPayPeriod[];
  wfRequestNav?: IWfRequest[];
}

export interface IFormCustomElement {
  elementKey: string;
  formContentId: number;
  formDataId: number;
  itemId: number;
  sectionIndex: number;
  checked: boolean;
  dateFormat: string;
  editable: boolean;
  elementIndex: number;
  maximumValue: number;
  minimumValue: number;
  name: string;
  required: boolean;
  textMaximumLength: number;
  textSize: number;
  type: string;
  value: string;
  valueKey: string;
  writingAssistant: boolean;
  elementListValues?: IFormCustomElementListValue[];
}

export interface IJobClassificationCAN {
  JobClassificationCountry_country: string;
  JobClassification_effectiveStartDate: Date;
  JobClassification_externalCode: string;
  externalCode: number;
  classificationGroupCA: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  occupationalClassification: string;
  classificationGroupCANav?: IPickListValueV2[];
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IJobApplicationComments {
  commentId: number;
  applicationId: number;
  associatedCommentId: number;
  associatedId: string;
  commentator: string;
  content: string;
  hasAssociatedComment: string;
  migratedCommentatorUserName: string;
  refType: string;
  commentatorNav?: IUser;
  jobApplication?: IJobApplication;
}

export interface IFormObjectiveComment {
  formContentId: number;
  formDataId: number;
  itemId: number;
  sectionIndex: number;
  type: number;
  commentDate: string;
  commentText: string;
  fieldDataType: string;
  label: string;
  order: number;
  userFullName: string;
  userId: string;
}

export interface IFOLegalEntityLocalARG {
  country: string;
  externalCode: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  cuit: string;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  mdfSystemRecordId: string;
  status: string;
  countryNav?: ITerritory;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
}

export interface IExtPhoneInfo {
  phoneInfoId: number;
  areaCode: string;
  countryCode: string;
  extension: string;
  isPrimary: string;
  lastModifiedDateTime: Date;
  phoneNumber: string;
  phoneType: string;
  phoneTypeNav?: IPicklistOption;
}

export interface IFOJobClassLocalAUS {
  country: string;
  externalCode: string;
  startDate: Date;
  ascoCode: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  mdfSystemRecordId: string;
  status: string;
  countryNav?: ITerritory;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
}

export interface IPositionRightToReturn {
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  effectiveStatus: string;
  endDate: Date;
  gaEndJobInfoId: number;
  gaEventReason: string;
  gaStartJobInfoId: number;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  loaTimeType: string;
  mdfSystemRecordStatus: string;
  posTBHEndRowId: number;
  posTBHStartRowId: number;
  position: string;
  reason: string;
  rootObjectId: string;
  startDate: Date;
  userId: string;
  createdByNav?: IUser;
  effectiveStatusNav?: IMDFEnumValue;
  gaEventReasonNav?: IFOEventReason[];
  lastModifiedByNav?: IUser;
  loaTimeTypeNav?: ITimeType;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  positionNav?: IPosition[];
  reasonNav?: IMDFEnumValue;
  userIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IEmpCompensationCalculated {
  seqNumber: number;
  startDate: Date;
  userId: string;
  compaRatio: number;
  errorCode: string;
  errorMessage: string;
  rangePenetration: number;
}

export interface IPositionCompetencyMappingEntity {
  PositionEntity_externalCode: string;
  externalCode: string;
  competency: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  rating_ar_SA: string;
  rating_da_DK: string;
  rating_de_DE: string;
  rating_defaultValue: string;
  rating_en_DEBUG: string;
  rating_en_GB: string;
  rating_en_US: string;
  rating_fr_FR: string;
  rating_localized: string;
  rating_nl_NL: string;
  rating_pl_PL: string;
  rating_sv_SE: string;
  status: string;
  subModule: string;
  weight_ar_SA: string;
  weight_da_DK: string;
  weight_de_DE: string;
  weight_defaultValue: string;
  weight_en_DEBUG: string;
  weight_en_GB: string;
  weight_en_US: string;
  weight_fr_FR: string;
  weight_localized: string;
  weight_nl_NL: string;
  weight_pl_PL: string;
  weight_sv_SE: string;
  competencyNav?: ICompetencyEntity;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  ratingTranslationTextNav?: IMDFLocalizedValue[];
  statusNav?: IMDFEnumValue;
  weightTranslationTextNav?: IMDFLocalizedValue[];
}

export interface IBackground_Community {
  backgroundElementId: number;
  userId: string;
  bgOrderPos: number;
  endDate: Date;
  lastModifiedDate: Date;
  name: string;
  role: string;
  startDate: Date;
  userIdNav?: IUser;
}

export interface IPaymentInformationDetailV3FRA {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  checkDigit: string;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEffectiveStartDate: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
}

export interface IPaymentInformationDetailV3NAM {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountType: string;
  checkDigit: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface ICust_CC_VariantSearch {
  cust_CC_User_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  cust_Content: string;
  cust_IsDefault: boolean;
  cust_VariantType: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IComplianceFormDataFieldValue {
  id: string;
  value: string;
}

export interface IPaymentInformationDetailV3PER {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountType: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  paymentReference: string;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface ILegalEntityFRA {
  LegalEntity_effectiveStartDate: Date;
  LegalEntity_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  nafCode: number;
  nafCodePost2008: string;
  sirenCode: number;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IComplianceUserFormData {
  id: string;
  country: string;
  createdDate: Date;
  dataLastModifiedBy: string;
  dataLastModifiedDate: Date;
  documentFlowStatus: string;
  formId: string;
  formVersion: number;
  initiatorId: string;
  initiatorType: string;
  name: string;
  processId: string;
  processStatus: string;
  state: string;
  user: string;
  year: number;
  data?: IComplianceFormDataFieldValue[];
  userNav?: IUser;
}

export interface IFODynamicRole {
  dynamicRoleAssignmentId: number;
  baseObjectType: string;
  businessUnit: string;
  company: string;
  costCenter: string;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  department: string;
  description: string;
  division: string;
  dynamicGroup: string;
  eventReason: string;
  externalCode: string;
  jobCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  location: string;
  name: string;
  payGrade: string;
  payGroup: string;
  person: string;
  position: string;
  resolverType: string;
  businessUnitNav?: IFOBusinessUnit[];
  companyNav?: IFOCompany[];
  costCenterNav?: IFOCostCenter[];
  departmentNav?: IFODepartment[];
  descriptionTranslationNav?: IFoTranslation;
  divisionNav?: IFODivision[];
  dynamicGroupNav?: IDynamicGroup;
  eventReasonNav?: IFOEventReason[];
  jobCodeNav?: IFOJobCode[];
  locationNav?: IFOLocation[];
  nameTranslationNav?: IFoTranslation;
  payGradeNav?: IFOPayGrade[];
  payGroupNav?: IFOPayGroup[];
  personNav?: IUser;
  positionNav?: IPosition[];
}

export interface IONB2EquipmentActivity {
  activityId: string;
  activityStatus: string;
  activityStatusDate: Date;
  activityTitle: string;
  activityType: string;
  createdBy?: string;
  createdDateTime: Date;
  dueDate: Date;
  equipmentComment: string;
  equipmentStatus: string;
  equipmentType: string;
  equipmentValue: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastNudgedBy: string;
  lastNudgedDate: Date;
  mdfSystemRecordStatus: string;
  notNeededComment: string;
  optional: boolean;
  process: string;
  responsibleUsers: string;
  subjectUser: string;
  activityStatusNav?: IMDFEnumValue;
  activityTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  equipmentStatusNav?: IMDFEnumValue;
  equipmentTypeNav?: IONB2EquipmentType;
  equipmentValueNav?: IONB2EquipmentTypeValue;
  lastModifiedByNav?: IUser;
  lastNudgedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  processNav?: IONB2Process;
  subjectUserNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IEmployeeTimeAUS {
  EmployeeTime_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  entityUUID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  requestAdvanceLeavePayment: boolean;
  splitPaymentAcrossFinancialYear: boolean;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IFamilySkillMappingEntity {
  FamilyEntity_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  proLevel_ar_SA: string;
  proLevel_da_DK: string;
  proLevel_de_DE: string;
  proLevel_defaultValue: string;
  proLevel_en_DEBUG: string;
  proLevel_en_GB: string;
  proLevel_en_US: string;
  proLevel_fr_FR: string;
  proLevel_localized: string;
  proLevel_nl_NL: string;
  proLevel_pl_PL: string;
  proLevel_sv_SE: string;
  skill: string;
  status: string;
  subModule: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  proLevelTranslationTextNav?: IMDFLocalizedValue[];
  skillNav?: ISkillEntity;
  statusNav?: IMDFEnumValue;
}

export interface IPerPersonal {
  personIdExternal: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  firstName: string;
  gender: string;
  includeAllRecords: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  lastName: string;
  maritalStatus: string;
  middleName: string;
  nationality: string;
  nativePreferredLang: string;
  operation: string;
  preferredName: string;
  salutation: string;
  secondNationality: string;
  since: Date;
  title: string;
  localNavARE?: IPerGlobalInfoARE;
  localNavDEU?: IPerGlobalInfoDEU;
  localNavDNK?: IPerGlobalInfoDNK;
  localNavFIN?: IPerGlobalInfoFIN;
  localNavGBR?: IPerGlobalInfoGBR;
  localNavIRL?: IPerGlobalInfoIRL;
  localNavNLD?: IPerGlobalInfoNLD;
  localNavNOR?: IPerGlobalInfoNOR;
  localNavPRT?: IPerGlobalInfoPRT;
  localNavSAU?: IPerGlobalInfoSAU;
  localNavSWE?: IPerGlobalInfoSWE;
  maritalStatusNav?: IPicklistOption;
  nativePreferredLangNav?: IPicklistOption;
  personNav?: IPerPerson;
  salutationNav?: IPicklistOption;
  titleNav?: IPicklistOption;
  wfRequestNav?: IWfRequest;
}

export interface ICust_CC_SolutionRoleGroupConfig {
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  cust_FeatureId: string;
  cust_FeatureName: string;
  cust_Read: boolean;
  cust_RoleGroups: string;
  cust_Write: boolean;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IEmployeeTimeCalendar {
  EmployeeTime_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  date: Date;
  deductionQuantity: number;
  endTime: Date;
  entityUUID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  physicalEndDate: Date;
  physicalStartDate: Date;
  quantityInDays: number;
  quantityInHours: number;
  startTime: Date;
  workScheduleInternalId: number;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  timeAccountDetail?: ITimeAccountDetail[];
}

export interface IMessageDetail {
  code: string;
  message: string;
  severity: string;
  target: string;
}

export interface IJobReqQuestion {
  questionId: number;
  questionCategory: string;
  questionName: string;
  questionSource: string;
  questionType: string;
}

export interface IForm360ParticipantDetail {
  columnKey: string;
  formContentId: number;
  formDataId: number;
  participantId: string;
  columnValue: string;
  participantUser?: IUser;
}

export interface IDRTMPurgeFreeze {
  externalCode: number;
  candidateIdentity: string;
  comment: string;
  createdBy?: string;
  createdDateTime: Date;
  description: string;
  employmentIdentity: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  purgeFreezeTargetType: string;
  createdByNav?: IUser;
  employmentIdentityNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  purgeFreezeTargetTypeNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IBackground_LeadExperience {
  backgroundElementId: number;
  userId: string;
  bgOrderPos: number;
  comments: string;
  dollars: number;
  experience: string;
  lastModifiedDate: Date;
  people: number;
  years: number;
  experienceNav?: IPicklistOption;
  userIdNav?: IUser;
}

export interface IEmpCostDistribution {
  effectiveStartDate: Date;
  usersSysId: string;
  createdBy?: string;
  createdDateTime: Date;
  effectiveEndDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  items?: IEmpCostDistributionItem[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  usersSysIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface ISpotAwardEligibilityRule {
  SpotAwardProgram_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  groupId: number;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  rule: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IJobApplication {
  applicationId: number;
  address: string;
  agencyInfo: string;
  anonymizedDate: Date;
  anonymizedFlag: string;
  appLocale: string;
  appStatusSetItemId: number;
  applicationTemplateId: number;
  averageRating: number;
  candConversionProcessed: string;
  candTypeWhenHired: string;
  candidateId: number;
  cellPhone: string;
  city: string;
  contactEmail: string;
  country: string;
  countryCode: string;
  dataSource: string;
  duplicateProfile: string;
  exportedOn: Date;
  firstName: string;
  formerEmployee: boolean;
  hiredOn: Date;
  jobAppGuid: string;
  jobReqId: number;
  lastModifiedBy: string;
  lastModifiedByProxy: string;
  lastModifiedDateTime: Date;
  lastName: string;
  middleName: string;
  nonApplicantStatus: string;
  owner: string;
  ownershpDate: Date;
  profileUpdated: string;
  rating: string;
  reference: string;
  referenceComments: string;
  referralName: string;
  referredBy: string;
  resumeUploadDate: Date;
  snapShotDate: Date;
  source: string;
  sourceLabel: string;
  startDate: Date;
  state: string;
  status: string;
  statusComments: string;
  timeToHire: number;
  usersSysId: string;
  zip: string;
  assessmentAttachment?: IAttachment[];
  assessmentStatus?: IPicklistOption[];
  bkgrndChkAttachment?: IAttachment[];
  bkgrndChkStatus?: IPicklistOption[];
  candidate?: ICandidate;
  candidateSource?: IPicklistOption[];
  countryPicklist?: IPicklistOption[];
  coverLetter?: IAttachment;
  education?: IJobApplicationSnapshot_Education[];
  globalInfo?: IJobApplicationSnapshot_GlobalInfo[];
  insideWorkExperience?: IJobApplicationSnapshot_InsideWorkExperience[];
  jobAppPermissionsNav?: IJobApplicationFieldControls;
  jobAppStatus?: IJobApplicationStatus;
  jobApplicationAssessmentOrder?: IJobApplicationAssessmentOrder[];
  jobApplicationAudit?: IJobApplicationAudit[];
  jobApplicationComments?: IJobApplicationComments[];
  jobApplicationInterview?: IJobApplicationInterview[];
  jobApplicationOnboardingData?: IJobApplicationOnboardingData[];
  jobApplicationQuestionResponse?: IJobApplicationQuestionResponse[];
  jobApplicationStatusAuditTrail?: IJobApplicationStatusAuditTrail[];
  jobOffer?: IJobOffer[];
  jobRequisition?: IJobRequisition;
  languages?: IJobApplicationSnapshot_Languages[];
  mobility?: IJobApplicationSnapshot_Mobility[];
  offerLetter?: IOfferLetter[];
  outsideWorkExperience?: IJobApplicationSnapshot_OutsideWorkExperience[];
  referredByNav?: IUser;
  rejectReason?: IPicklistOption[];
  resume?: IAttachment;
  statusId?: IPicklistOption[];
  supportingDoc?: IAttachment[];
  userNav?: IUser;
}

export interface IJobApplicationSnapshot_InsideWorkExperience {
  backgroundElementId: number;
  applicationId: number;
  bgOrderPos: number;
  department: string;
  endDate: Date;
  lastModifiedDateTime: Date;
  startDate: Date;
  title: string;
  application?: IJobApplication;
}

export interface ITrendData_SysOverallObjective {
  id: number;
  description: string;
  endDate: Date;
  label: string;
  lastModified: Date;
  max: number;
  min: number;
  module: string;
  name: string;
  rating: number;
  source: string;
  startDate: Date;
  userId: string;
  userIdNav?: IUser;
}

export interface IDGFieldOperator {
  token: string;
  label: string;
}

export interface IGoalMetricLookupPermission_5 {
  id: number;
  achievementNumeric: number;
  createRow: boolean;
  deleteRow: boolean;
  description: number;
  moveRow: boolean;
  rating: number;
  type: string;
  userId: string;
}

export interface IPaymentInformationDetailV3ESP {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  checkDigit: string;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEffectiveStartDate: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
}

export interface IRelevantIndustryEntity {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  industry_ar_SA: string;
  industry_da_DK: string;
  industry_de_DE: string;
  industry_defaultValue: string;
  industry_en_DEBUG: string;
  industry_en_GB: string;
  industry_en_US: string;
  industry_fr_FR: string;
  industry_localized: string;
  industry_nl_NL: string;
  industry_pl_PL: string;
  industry_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  status: string;
  subModule: string;
  createdByNav?: IUser;
  industryTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  legalEntities?: IFOCompany[];
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IPaymentInformationDetailV3USA {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountType: string;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEffectiveStartDate: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
}

export interface IPicklist {
  picklistId: string;
  picklistOptions?: IPicklistOption[];
}

export interface IPaymentInformationDetailV3COL {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountType: string;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEffectiveStartDate: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  newAccountIdType: string;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
  newAccountIdTypeNav?: IMDFEnumValue;
}

export interface IGoalMetricLookupPermission_4 {
  id: number;
  achievementNumeric: number;
  createRow: boolean;
  deleteRow: boolean;
  description: number;
  moveRow: boolean;
  rating: number;
  type: string;
  userId: string;
}

export interface ITrendData_SysOverallCompetency {
  id: number;
  description: string;
  endDate: Date;
  label: string;
  lastModified: Date;
  max: number;
  min: number;
  module: string;
  name: string;
  rating: number;
  source: string;
  startDate: Date;
  userId: string;
  userIdNav?: IUser;
}

export interface INomineeHistory {
  id: number;
  changeType: number;
  changeTypeLabel: string;
  modifiedBy?: string;
  modifiedDateTime: Date;
  nomineeId: number;
  note: string;
  rank: number;
  readiness: number;
  readinessLabel: string;
  status: number;
  statusLabel: string;
  modifiedByNav?: IUser;
  nomineeUserNav?: IUser;
}

export interface IContinuousFeedback {
  feedbackId: number;
  achievementId: string;
  activityId: string;
  dateReceived: Date;
  feedbackMessage: string;
  feedbackRequestId: number;
  senderUserId: string;
  subjectUserId: string;
  visibleToManager: boolean;
  continuousFeedbackToContinuousFeedbackRequestNav?: IContinuousFeedbackRequest;
  continuousFeedbackToSenderUserNav?: IUser;
  continuousFeedbackToSubjectUserNav?: IUser;
}

export interface IPayScaleType {
  code: string;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  payScaleType: string;
  countryNav?: ICountry[];
  createdByNav?: IUser;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IBackground_Mobility {
  backgroundElementId: number;
  userId: string;
  bgOrderPos: number;
  comments: string;
  lastModifiedDate: Date;
  location: string;
  willingness: string;
  userIdNav?: IUser;
  willingnessNav?: IPicklistOption;
}

export interface ITimeTypeNLD {
  TimeType_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  entityUUID: string;
  illnessRecoveryTracking: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  illnessRecoveryTrackingNav?: IMDFEnumValue;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IGoal_1000 {
  id: number;
  category?: string;
  currentOwner: string;
  description: string;
  done: number;
  due?: Date;
  dueDateInUTC?: Date;
  flag?: number;
  guid: string;
  lastModified: Date;
  metric: string;
  modifier: string;
  name: string;
  numbering: string;
  planId: number;
  start?: Date;
  startDateInUTC?: Date;
  state: string;
  stateLabel: string;
  status: number;
  type: string;
  userId: string;
  weight: number;
  initiativesNal?: IInitiativeAlignmentBean[];
  permissionNav?: IGoalPermission_1000;
}

export interface ILegacyPositionEntity {
  positionId: number;
  createDate: Date;
  incumbent: string;
  positionCode: string;
  title: string;
  incumbentNav?: IUser;
  parentNav?: ILegacyPositionEntity;
  successorNav?: ISuccessor[];
}

export interface IAdvance {
  NonRecurringPayment_externalCode: string;
  externalCode: string;
  advanceEligibilityCode: string;
  advanceType: string;
  approvalStatus: string;
  approver: string;
  createdBy?: string;
  createdDateTime: Date;
  currencyCode: string;
  currencyGO: string;
  eligibileAmount: number;
  eligibilityAmount: number;
  eligibleAdvanceType: string;
  installmentAmount: number;
  installmentFrequency: string;
  interestRate: number;
  interestType: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  notesForApprover: string;
  numberOfInstallments: number;
  paymentMode: string;
  pendingAmount: number;
  periodEndDate: Date;
  periodStartDate: Date;
  recoveryMode: string;
  recoveryStatus: string;
  remainingRequests: number;
  requestDate: Date;
  requestedAmount: number;
  totalRepaymentAmount: number;
  advanceEligibilityCodeNav?: IAdvancesEligibility[];
  advanceTypeNav?: IFOPayComponent[];
  advancesInstallments?: IAdvancesInstallments[];
  approvalStatusNav?: IMDFEnumValue;
  approverNav?: IUser;
  attachmentNav?: IAttachment;
  createdByNav?: IUser;
  currencyGONav?: ICurrency[];
  installmentFrequencyNav?: IFOFrequency;
  interestTypeNav?: IMDFEnumValue;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  paymentModeNav?: IPickListValueV2[];
  recoveryModeNav?: IMDFEnumValue;
  recoveryStatusNav?: IMDFEnumValue;
}

export interface IEMEvent {
  id: number;
  eventDescription: string;
  eventDescriptionMsgKey: string;
  eventName: string;
  eventTime: Date;
  eventType: string;
  eventAttributes?: IEMEventAttribute[];
  eventPayload?: IEMEventPayload;
  process?: IEMMonitoredProcess;
}

export interface ICust_GEH_templateField {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  cust_ReqTemplateID: string;
  cust_behavior: string;
  cust_context: string;
  cust_dataType: string;
  cust_fieldLabel: string;
  cust_sequence: number;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IJobResponsibilityEntity {
  externalCode: string;
  category_ar_SA: string;
  category_da_DK: string;
  category_de_DE: string;
  category_defaultValue: string;
  category_en_DEBUG: string;
  category_en_GB: string;
  category_en_US: string;
  category_fr_FR: string;
  category_localized: string;
  category_nl_NL: string;
  category_pl_PL: string;
  category_sv_SE: string;
  createdBy?: string;
  createdDateTime: Date;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  duty_ar_SA: string;
  duty_da_DK: string;
  duty_de_DE: string;
  duty_defaultValue: string;
  duty_en_DEBUG: string;
  duty_en_GB: string;
  duty_en_US: string;
  duty_fr_FR: string;
  duty_localized: string;
  duty_nl_NL: string;
  duty_pl_PL: string;
  duty_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  libName_ar_SA: string;
  libName_da_DK: string;
  libName_de_DE: string;
  libName_defaultValue: string;
  libName_en_DEBUG: string;
  libName_en_GB: string;
  libName_en_US: string;
  libName_fr_FR: string;
  libName_localized: string;
  libName_nl_NL: string;
  libName_pl_PL: string;
  libName_sv_SE: string;
  mdfSystemRecordStatus: string;
  name_ar_SA: string;
  name_da_DK: string;
  name_de_DE: string;
  name_defaultValue: string;
  name_en_DEBUG: string;
  name_en_GB: string;
  name_en_US: string;
  name_fr_FR: string;
  name_localized: string;
  name_nl_NL: string;
  name_pl_PL: string;
  name_sv_SE: string;
  status: string;
  subModule: string;
  categoryTranslationTextNav?: IMDFLocalizedValue[];
  createdByNav?: IUser;
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  dutyTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  legalEntities?: IFOCompany[];
  libNameTranslationTextNav?: IMDFLocalizedValue[];
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  nameTranslationTextNav?: IMDFLocalizedValue[];
  statusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IPerGlobalInfoSAU {
  country: string;
  personIdExternal: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  genericDate1: Date;
  genericDate2: Date;
  genericDate3: Date;
  genericDate6: Date;
  genericNumber1: number;
  genericNumber2: number;
  genericNumber3: number;
  genericNumber4: number;
  genericNumber5: number;
  genericNumber6: number;
  genericNumber7: number;
  genericNumber8: number;
  genericString1: string;
  genericString10: string;
  genericString11: string;
  genericString12: string;
  genericString13: string;
  genericString14: string;
  genericString15: string;
  genericString17: string;
  genericString2: string;
  genericString20: string;
  genericString3: string;
  genericString4: string;
  genericString5: string;
  genericString6: string;
  genericString7: string;
  genericString8: string;
  genericString9: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  operation: string;
  countryNav?: ITerritory;
  genericNumber4Nav?: IPicklistOption;
  genericNumber5Nav?: IPicklistOption;
  genericString13Nav?: IPicklistOption;
  genericString14Nav?: IPicklistOption;
  genericString15Nav?: IPicklistOption;
  genericString1Nav?: IPicklistOption;
  genericString2Nav?: IPicklistOption;
  genericString5Nav?: IPicklistOption;
  genericString9Nav?: IPicklistOption;
  personNav?: IPerPerson;
}

export interface IBackground_VarPayEmpHistData_GPS {
  backgroundElementId: number;
  JobClassification: string;
  basis: number;
  businessUnit: string;
  division: string;
  endDate: Date;
  lastModifiedDate: Date;
  legalEntity: string;
  localCurrency: string;
  recordType: string;
  salary: number;
  startDate: Date;
  tgtPct: string;
  userId: string;
  varPayProgramName: number;
}

export interface IDataReplicationProxy {
  externalCode: string;
  allowReplicationInCorrectionPhase: boolean;
  confirmationDateTime: Date;
  createdBy?: string;
  createdDateTime: Date;
  dataReplicationProxyStatus: string;
  earliestReplicationDateTime: Date;
  effectiveStatus: string;
  employeeTime: string;
  employeeTimeWithAccountDetail: string;
  isSubsequentChange: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  legalEntity: string;
  mdfSystemRecordStatus: string;
  plannedWorkingTimeEndDate: Date;
  plannedWorkingTimeStartDate: Date;
  replicationContentType: string;
  replicationScenarioObject: string;
  replicationTargetSystem: string;
  sourceGenericObjectExternalCode: string;
  sourceGenericObjectInternalId: string;
  timeAccount: string;
  timeAccountPayout: string;
  timeAccountSnapshot: string;
  useCostCenterExternalObjectId: boolean;
  userId: string;
  createdByNav?: IUser;
  dataReplicationProxyStatusNav?: IMDFEnumValue;
  effectiveStatusNav?: IMDFEnumValue;
  employeeTimeNav?: IEmployeeTime;
  employeeTimeWithAccountDetailNav?: IEmployeeTime;
  lastModifiedByNav?: IUser;
  legalEntityNav?: IFOCompany[];
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  replicationContentTypeNav?: IMDFEnumValue;
  replicationScenarioObjectNav?: IMDFEnumValue;
  replicationTargetSystemNav?: IReplicationTargetSystem;
  timeAccountNav?: ITimeAccount;
  timeAccountSnapshotNav?: ITimeAccountSnapshot;
  userIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IExternalLearnerEmailInfo {
  itemId: number;
  emailAddress: string;
  emailType: string;
  isPrimary: boolean;
  is_deleted: boolean;
  lastModifiedDateTime: Date;
  emailTypeNav?: IPicklistOption;
}

export interface IJobReqGOPosition {
  jobReqMultiSelectId: number;
  fieldName: string;
  isPrimary: boolean;
  jobReqId: number;
  parentFieldValue: number;
  value?: IPosition;
}

export interface IComplianceFormData {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  documentAttachmentId: number;
  documentFlow: string;
  envelopeId: string;
  form: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  pdfId: string;
  pdfLocaleMetadata: string;
  process: string;
  sensitiveDataIncluded: boolean;
  subjectUser: string;
  createdByNav?: IUser;
  documentFlowNav?: IComplianceDocumentFlow;
  formSignatures?: IComplianceFormSignature[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  processNav?: IComplianceProcess;
  subjectUserNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IWorkScheduleDayModelAssignmentSegment {
  WorkScheduleDayModelAssignment_day: number;
  WorkSchedule_externalCode: string;
  externalCode: string;
  category: string;
  createdBy?: string;
  createdDateTime: Date;
  duration: number;
  endTime: Date;
  entityUUID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  startTime: Date;
  categoryNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IBackground_Memberships {
  backgroundElementId: number;
  userId: string;
  bgOrderPos: number;
  endDate: Date;
  lastModifiedDate: Date;
  organization: string;
  role: string;
  startDate: Date;
  userIdNav?: IUser;
}

export interface IJobApplicationSnapshot_Mobility {
  backgroundElementId: number;
  applicationId: number;
  bgOrderPos: number;
  lastModifiedDateTime: Date;
  location: string;
  willingness: string;
  application?: IJobApplication;
  willingnessNav?: IPicklistOption;
}

export interface IPaymentInformationDetailV3BLR {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountType: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IRightToReturn {
  Position_code: string;
  Position_effectiveStartDate: Date;
  code: string;
  createdBy?: string;
  createdDateTime: Date;
  gaEndJobInfoId: number;
  gaEventReason: string;
  gaStartJobInfoId: number;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  loaTimeType: string;
  mdfSystemRecordStatus: string;
  reason: string;
  codeNav?: IUser;
  createdByNav?: IUser;
  gaEventReasonNav?: IFOEventReason[];
  lastModifiedByNav?: IUser;
  loaTimeTypeNav?: ITimeType;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  reasonNav?: IMDFEnumValue;
}

export interface IJobClassificationCountry {
  JobClassification_effectiveStartDate: Date;
  JobClassification_externalCode: string;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  countryNav?: ICountry[];
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  toJobClassificationAUS?: IJobClassificationAUS;
  toJobClassificationBRA?: IJobClassificationBRA;
  toJobClassificationCAN?: IJobClassificationCAN;
  toJobClassificationFRA?: IJobClassificationFRA;
  toJobClassificationGBR?: IJobClassificationGBR;
  toJobClassificationITA?: IJobClassificationITA;
  toJobClassificationUSA?: IJobClassificationUSA;
  toJobClassificationZAF?: IJobClassificationZAF;
}

export interface ITalentRatings {
  feedbackId: number;
  employeeId: string;
  feedbackModule: number;
  feedbackName: string;
  feedbackRating: number;
  feedbackRatingLabel: string;
  feedbackScaleId: number;
  feedbackScaleMaximum: number;
  feedbackScaleMinimum: number;
  feedbackSource: number;
  feedbackType: number;
  feedbackWeight: number;
  formContentId: number;
  formDataId: number;
  calSession?: ICalibrationSession;
  employeeUser?: IUser;
}

export interface IUser {
  userId: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  assignmentUUID: string;
  benchStrength: string;
  bonusBudgetAmount: number;
  bonusTarget: number;
  businessPhone: string;
  businessSegment: string;
  cellPhone: string;
  citizenship: string;
  city: string;
  companyExitDate: Date;
  compensationBonusEligible: boolean;
  compensationEligible: boolean;
  compensationReadOnly: boolean;
  compensationSalaryEligible: boolean;
  compensationSalaryRateType: string;
  compensationSalaryRateUnits: number;
  compensationStockEligible: boolean;
  competency: number;
  country: string;
  criticalTalentComments: string;
  custom01: string;
  custom02: string;
  custom03: string;
  custom04: string;
  custom06: string;
  custom07: string;
  custom08: string;
  custom09: string;
  custom10: string;
  custom11: string;
  custom12: string;
  custom13: string;
  custom14: string;
  custom15: string;
  dateOfBirth: Date;
  dateOfCurrentPosition: Date;
  dateOfPosition: Date;
  defaultFullName: string;
  defaultLocale: string;
  department: string;
  displayName: string;
  division: string;
  email: string;
  empId: string;
  employeeClass: string;
  ethnicity: string;
  fax: string;
  finalJobCode: string;
  finalJobFamily: string;
  finalJobRole: string;
  firstName: string;
  futureLeader: boolean;
  gender: string;
  hireDate: Date;
  homePhone: string;
  impactOfLoss: string;
  impactOfLossComments: string;
  isPrimaryAssignment: boolean;
  issueComments: string;
  jobCode: string;
  jobFamily: string;
  jobLevel: string;
  jobRole: string;
  jobTitle: string;
  keyPosition: boolean;
  lastModified: Date;
  lastModifiedDateTime: Date;
  lastModifiedWithTZ: Date;
  lastName: string;
  lastReviewDate: string;
  level: string;
  localCurrencyCode: string;
  location: string;
  lumpsum2Target: number;
  lumpsumTarget: number;
  married: boolean;
  matrix1Label: string;
  matrix2Label: string;
  matrixManaged: boolean;
  meritEffectiveDate: Date;
  meritTarget: Date;
  mi: string;
  minority: boolean;
  nationality: string;
  newToPosition: boolean;
  nickname: string;
  objective: number;
  onboardingId: string;
  origHireDate: Date;
  password: string;
  payGrade: string;
  performance: number;
  potential: number;
  promotionAmount: number;
  raiseProrating: number;
  reasonForLeaving: string;
  reloComments: string;
  reloLocation: string;
  reloWilling: string;
  reviewFreq: string;
  riskOfLoss: string;
  salary: number;
  salaryBudgetExtra2Percentage: number;
  salaryBudgetExtraPercentage: number;
  salaryBudgetFinalSalaryPercentage: number;
  salaryBudgetLumpsumPercentage: number;
  salaryBudgetMeritPercentage: number;
  salaryBudgetPromotionPercentage: number;
  salaryBudgetTotalRaisePercentage: number;
  salaryLocal: number;
  salaryProrating: number;
  salutation: string;
  sciLastModified: Date;
  seatingChart: string;
  serviceDate: Date;
  ssn: string;
  state: string;
  status: string;
  stockBudgetOptionAmount: number;
  stockBudgetOther1Amount: number;
  stockBudgetOther2Amount: number;
  stockBudgetOther3Amount: number;
  stockBudgetStockAmount: number;
  stockBudgetUnitAmount: number;
  suffix: string;
  sysCostOfSource: number;
  sysSource: number;
  sysStartingSalary: number;
  talentPool: string;
  teamMembersSize: number;
  timeZone: string;
  title: string;
  totalTeamSize: number;
  username: string;
  veteranDisabled: boolean;
  veteranMedal: boolean;
  veteranProtected: boolean;
  veteranSeparated: boolean;
  zipCode: string;
  approverOfAdvanceNav?: IAdvance[];
  assigneeUserIdOfDomainEventAlertNav?: IDomainEventAlert[];
  atsUserIdOfONB2ProcessTriggerNav?: IONB2ProcessTrigger[];
  auditUserSysIdOfOneTimeDeductionNav?: IOneTimeDeduction[];
  benchStrengthNav?: IPicklistOption;
  buddyUserOfONB2BuddyActivityNav?: IONB2BuddyActivity[];
  budgetHolderIdOfSpotAwardNav?: ISpotAward[];
  codeOfRightToReturnNav?: IRightToReturn[];
  competencyRatingNav?: ICompetencyRating[];
  completedByOfComplianceProcessTaskNav?: IComplianceProcessTask[];
  completedByOfONB2ProcessTaskNav?: IONB2ProcessTask[];
  costCenterManagerOfFOCostCenterNav?: IFOCostCenter[];
  cust_HandledByOfcust_CC_UserCompNav?: ICust_CC_UserComp[];
  cust_LearnerOfcust_CC_ProfileAssignmentNav?: ICust_CC_ProfileAssignment[];
  cust_UserIdOfcust_CC_UserCompDocumentNav?: ICust_CC_UserCompDocument[];
  customManager?: IUser[];
  customReports?: IUser[];
  declinedByOfComplianceDocumentFlowNav?: IComplianceDocumentFlow[];
  delegateeOfAutoDelegateDetailNav?: IAutoDelegateDetail[];
  delegatorOfAutoDelegateConfigNav?: IAutoDelegateConfig[];
  directReports?: IUser[];
  empInfo?: IEmpEmployment;
  employmentIdentityOfDRTMPurgeFreezeNav?: IDRTMPurgeFreeze[];
  ethnicityNav?: IPicklistOption;
  externalCodeOfSkillProfileNav?: ISkillProfile[];
  externalCodeOfcust_PerformancedataNav?: ICust_Performancedata[];
  headOfUnitOfFOBusinessUnitNav?: IFOBusinessUnit[];
  headOfUnitOfFODepartmentNav?: IFODepartment[];
  headOfUnitOfFODivisionNav?: IFODivision[];
  hr?: IUser;
  hrReports?: IUser[];
  impactOfLossNav?: IPicklistOption;
  incumbentOfPositionNav?: IPosition[];
  initiatedByOfPayrollDataMaintenanceTaskNav?: IPayrollDataMaintenanceTask[];
  lastNudgedByOfONB2BuddyActivityNav?: IONB2BuddyActivity[];
  lastNudgedByOfONB2EquipmentActivityNav?: IONB2EquipmentActivity[];
  manager?: IUser;
  managerOfONB2ProcessNav?: IONB2Process[];
  matrixManager?: IUser[];
  matrixReports?: IUser[];
  menteeOfMentoringProgramMatchedParticipantNav?: IMentoringProgramMatchedParticipant[];
  mentorOfMentoringProgramMatchedParticipantNav?: IMentoringProgramMatchedParticipant[];
  nominationNav?: INominationTarget[];
  nominatorIdOfSpotAwardNav?: ISpotAward[];
  ownerOfTalentPoolNav?: ITalentPool[];
  passiveUserOfMentoringProgramMatchedParticipantNav?: IMentoringProgramMatchedParticipant[];
  personKeyNav?: IPersonKey;
  proxy?: IUser[];
  reasonForLeavingNav?: IPicklistOption;
  rehireUserOfONB2ProcessTriggerNav?: IONB2ProcessTrigger[];
  reloWillingNav?: IPicklistOption;
  responsibleUserOfAssignedComplianceFormNav?: IAssignedComplianceForm[];
  riskOfLossNav?: IPicklistOption;
  salutationNav?: IPicklistOption;
  secondManager?: IUser;
  secondReports?: IUser[];
  signatureUserOfComplianceFormSignatureNav?: IComplianceFormSignature[];
  subjectUserIdOfAchievementNav?: IAchievement[];
  subjectUserIdOfActivityNav?: IActivity[];
  subjectUserOfAssignedComplianceFormNav?: IAssignedComplianceForm[];
  subjectUserOfComplianceDocumentFlowNav?: IComplianceDocumentFlow[];
  subjectUserOfComplianceFormDataNav?: IComplianceFormData[];
  subjectUserOfComplianceProcessTaskNav?: IComplianceProcessTask[];
  subjectUserOfONB2BuddyActivityNav?: IONB2BuddyActivity[];
  subjectUserOfONB2DataCollectionUserConfigNav?: IONB2DataCollectionUserConfig[];
  subjectUserOfONB2EquipmentActivityNav?: IONB2EquipmentActivity[];
  sysSourceNav?: IPicklistOption;
  targetIdOfTimeManagementAlertNav?: ITimeManagementAlert[];
  userIdOfAccrualCalculationBaseNav?: IAccrualCalculationBase[];
  userIdOfBudgetGroupNav?: IBudgetGroup[];
  userIdOfDataReplicationProxyNav?: IDataReplicationProxy[];
  userIdOfEmployeePayrollRunResultsNav?: IEmployeePayrollRunResults[];
  userIdOfEmployeeTimeGroupNav?: IEmployeeTimeGroup[];
  userIdOfEmployeeTimeNav?: IEmployeeTime[];
  userIdOfHRISChangeLogDataReplicationNav?: IHRISChangeLogDataReplication[];
  userIdOfPayrollDataMaintenanceTaskNav?: IPayrollDataMaintenanceTask[];
  userIdOfPositionRightToReturnNav?: IPositionRightToReturn[];
  userIdOfSpotAwardBudgetNav?: ISpotAwardBudget[];
  userIdOfSpotAwardNav?: ISpotAward[];
  userIdOfSpotAwardRedemptionNav?: ISpotAwardRedemption[];
  userIdOfTemporaryTimeInformationNav?: ITemporaryTimeInformation[];
  userIdOfTimeAccountNav?: ITimeAccount[];
  userIdOfTimeAccountSnapshotNav?: ITimeAccountSnapshot[];
  userIdOfWorkScheduleNav?: IWorkSchedule[];
  userOfComplianceProcessNav?: IComplianceProcess[];
  userOfONB2ProcessNav?: IONB2Process[];
  userOfOnboardingInfoNav?: IOnboardingInfo[];
  userPermissionsNav?: IUserPermissions;
  userSysIdOfAdvancesAccumulationNav?: IAdvancesAccumulation[];
  userSysIdOfNonRecurringPaymentNav?: INonRecurringPayment[];
  userSysIdOfOneTimeDeductionNav?: IOneTimeDeduction[];
  userSysIdOfRecurringDeductionNav?: IRecurringDeduction[];
  userSysIdOfWorkOrderNav?: IWorkOrder[];
  usersSysIdOfEmpCostDistributionNav?: IEmpCostDistribution[];
  usersSysIdOfEmployeeDataReplicationConfirmationNav?: IEmployeeDataReplicationConfirmation[];
  usersSysIdOfEmployeeDataReplicationElementNav?: IEmployeeDataReplicationElement[];
  usersSysIdOfEmployeeDataReplicationNotificationNav?: IEmployeeDataReplicationNotification[];
  usersSysIdOfHireDateChangeNav?: IHireDateChange[];
  usersSysIdOfSecondaryAssignmentsItemNav?: ISecondaryAssignmentsItem[];
  workOrderOwnerIdOfWorkOrderNav?: IWorkOrder[];
  workerOfPaymentInformationV3Nav?: IPaymentInformationV3[];
}

export interface ICust_GERApplication {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  cust_GERBrands?: ICust_GERBrand[];
  cust_GERConfiguration?: ICust_GERConfig[];
  cust_GERFeatures?: ICust_GERFeature[];
  cust_GERTemplates?: ICust_GER_Template[];
  cust_PersonnelAreas?: ICust_GER_PersonnelArea[];
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IFOPayGroup {
  externalCode: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  description: string;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  endDate: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  mdfSystemRecordId: string;
  name: string;
  name_ar_SA: string;
  name_da_DK: string;
  name_de_DE: string;
  name_defaultValue: string;
  name_en_DEBUG: string;
  name_en_GB: string;
  name_en_US: string;
  name_fr_FR: string;
  name_localized: string;
  name_nl_NL: string;
  name_pl_PL: string;
  name_sv_SE: string;
  payFrequency: string;
  paymentFrequency: string;
  payrollVendorId: string;
  status: string;
  createdByNav?: IUser;
  descriptionTranslationNav?: IFoTranslation;
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  nameTranslationNav?: IFoTranslation;
  nameTranslationTextNav?: IMDFLocalizedValue[];
  payFrequencyNav?: IPicklistOption;
  paymentFrequencyNav?: IPickListValueV2;
  statusNav?: IMDFEnumValue;
}

export interface IJobClassificationGBR {
  JobClassificationCountry_country: string;
  JobClassification_effectiveStartDate: Date;
  JobClassification_externalCode: string;
  externalCode: number;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  occupationalCode: number;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IFormUserInformationSection {
  formContentId: number;
  formDataId: number;
  sectionDescription: string;
  sectionIndex: number;
  sectionName: string;
  userInformationElements?: IFormCustomElement[];
}

export interface IPaymentInformationDetailV3BOL {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountType: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface ITimeManagementAlert {
  externalCode: string;
  category: string;
  concatenatedMessage: string;
  createdBy?: string;
  createdDateTime: Date;
  date: Date;
  encodedUserId: string;
  entityUUID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  severity: string;
  severityName: string;
  status: string;
  targetId: string;
  targetType: string;
  categoryNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  severityNav?: IMDFEnumValue;
  statusNav?: IMDFEnumValue;
  targetIdNav?: IUser;
  targetTypeNav?: IMDFEnumValue;
  timeManagementAlertMessage?: ITimeManagementAlertMessage[];
  wfRequestNav?: IWfRequest[];
}

export interface IPerGlobalInfoFIN {
  country: string;
  personIdExternal: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  genericDate1: Date;
  genericDate2: Date;
  genericDate3: Date;
  genericDate6: Date;
  genericNumber1: number;
  genericNumber2: number;
  genericNumber3: number;
  genericNumber4: number;
  genericNumber5: number;
  genericNumber6: number;
  genericNumber7: number;
  genericNumber8: number;
  genericString1: string;
  genericString10: string;
  genericString11: string;
  genericString12: string;
  genericString13: string;
  genericString14: string;
  genericString15: string;
  genericString17: string;
  genericString2: string;
  genericString20: string;
  genericString3: string;
  genericString4: string;
  genericString5: string;
  genericString6: string;
  genericString7: string;
  genericString8: string;
  genericString9: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  operation: string;
  countryNav?: ITerritory;
  personNav?: IPerPerson;
}

export interface ITimeType {
  externalCode: string;
  absenceClass: string;
  absenceRetentionGroup: string;
  accrualRecalculationRelevance: string;
  activateCancellationWorkflow: boolean;
  adminWorkflow: string;
  allocationStrategy: string;
  allowedFractionsUnitDay: string;
  allowedFractionsUnitHour: string;
  allowedRequestingIncrement: number;
  balanceCalculationSetting: string;
  calculationMethod: string;
  category: string;
  collisionGrouping: string;
  countingMethod: string;
  country: string;
  createdBy?: string;
  createdDateTime: Date;
  entityUUID: string;
  externalName_ar_SA: string;
  externalName_da_DK: string;
  externalName_de_DE: string;
  externalName_defaultValue: string;
  externalName_en_DEBUG: string;
  externalName_en_GB: string;
  externalName_en_US: string;
  externalName_fr_FR: string;
  externalName_localized: string;
  externalName_nl_NL: string;
  externalName_pl_PL: string;
  externalName_sv_SE: string;
  flexibleRequestingAllowed: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  loaEndEventReason: string;
  loaStartEventReason: string;
  maximumDurationInMonths: number;
  mdfSystemRecordStatus: string;
  notToCountAsTimeInService: boolean;
  postingOrder: string;
  postingPriority: string;
  requestingOnNonWorkingDaysAllowed: boolean;
  undeterminedEndDateAllowed: boolean;
  unit: string;
  workflowConfiguration: string;
  absenceClassNav?: IMDFEnumValue;
  accrualRecalculationRelevanceNav?: IMDFEnumValue;
  adminWorkflowNav?: IFOWfConfig;
  allocationStrategyNav?: IMDFEnumValue;
  allowedFractionsUnitDayNav?: IMDFEnumValue;
  allowedFractionsUnitHourNav?: IMDFEnumValue;
  balanceCalculationSettingNav?: IMDFEnumValue;
  calculationMethodNav?: IMDFEnumValue;
  categoryNav?: IMDFEnumValue;
  countingMethodNav?: IAbsenceCountingMethod;
  countryExtensionAUS?: ITimeTypeAUS;
  countryExtensionCAN?: ITimeTypeCAN;
  countryExtensionDEU?: ITimeTypeDEU;
  countryExtensionNLD?: ITimeTypeNLD;
  countryExtensionUSA?: ITimeTypeUSA;
  countryNav?: ICountry[];
  createdByNav?: IUser;
  externalNameTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  loaEndEventReasonNav?: IFOEventReason[];
  loaStartEventReasonNav?: IFOEventReason[];
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  postingOrderNav?: IMDFEnumValue;
  postingPriorityNav?: IMDFEnumValue;
  timeAccountPostingRules?: ITimeAccountPostingRule[];
  unitNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
  workflowConfigurationNav?: IFOWfConfig;
}

export interface ICust_GERConfig {
  ID: number;
  cust_GERApplication_externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  cust_Description: string;
  cust_Domain: string;
  cust_Enabled: boolean;
  cust_SubDomain: string;
  cust_TenantID: string;
  cust_Value: string;
  cust_Visible: boolean;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface ICandidateComments {
  commentId: number;
  associatedCommentId: number;
  associatedId: number;
  candidateId: number;
  commentator: string;
  content: string;
  hasAssociatedComment: string;
  migratedCommentatorUserName: string;
  refType: string;
  candidate?: ICandidate;
}

export interface ITodoEntryV3 {
  todoEntryId: number;
  categoryId: string;
  categoryLabel: string;
  completedDateTime: Date;
  createdDate: Date;
  description: string;
  displayTitle: string;
  dueDate: Date;
  formDataId: number;
  lastModifiedDateTime: Date;
  linkUrl: string;
  mobileLinkUrl: string;
  priority: number;
  routingStepOrder: number;
  status: number;
  subjectId: string;
  todoEntryName: string;
  categoryNav?: ITodoCategory;
  userNav?: IUser;
}

export interface IFormSectionConfiguration {
  formContentId: number;
  formDataId: number;
  sectionIndex: number;
  addExistingObjEnabled: boolean;
  addItem: boolean;
  autoPopulateWeight: boolean;
  avoidSectionItemLevelPDFPageBreak: boolean;
  avoidSectionLevelPDFPageBreak: boolean;
  behaviorModeOption: number;
  competencyField: boolean;
  customLearningEnabled: boolean;
  enforcePlainTextCharacterLimit: boolean;
  enforceRTECharacterLimit: boolean;
  excludePrivateGoal: boolean;
  ezRaterEnabled: boolean;
  ezRaterExpandAll: boolean;
  hasItemComment: boolean;
  hasSectionComment: boolean;
  itemNoWeight: boolean;
  itemNonremovablePermission: string;
  learningAccessPermission: boolean;
  learningItemCreatePermission: boolean;
  learningItemDeletePermission: boolean;
  learningItemEditablePermission: boolean;
  learningTemplateId: string;
  noRate: boolean;
  objCategories: string;
  objCategoriesCount: number;
  overallRatingDisplayOrder: string;
  plateauEnabled: boolean;
  rateByBehavior: boolean;
  ratingOption: number;
  ratingScaleLabelLinkEnabled: boolean;
  sectionCommentRequired: boolean;
  sectionCommentsLabel: string;
  sectionWeightPermission: string;
  showBehaviorExpectedRating: boolean;
  showBehaviorsInSummary: boolean;
  showCompetencyExpectedRating: boolean;
  smartWizardEnabled: boolean;
  teamRaterEnabled: boolean;
  transcriptEnabled: boolean;
  waca: boolean;
  weightTotal: string;
  formBehaviorRatingScale?: IFormRatingScale;
  formRatingScale?: IFormRatingScale;
}

export interface ITodoEntryV2 {
  todoEntryId: number;
  categoryId: string;
  categoryLabel: string;
  completedDateTime: Date;
  createdDate: Date;
  dueDate: Date;
  formDataId: number;
  lastModifiedDateTime: Date;
  linkUrl: string;
  mobileLinkUrl: string;
  routingStepOrder: number;
  status: number;
  subjectId: string;
  todoEntryName: string;
  userId: string;
  formContentNav?: IFormContent[];
  recruitingJobOfferNav?: IJobOffer;
  userNav?: IUser;
  wfRequestNav?: IWfRequest;
}

export interface IJobReqTemplate_EZHireTemplate {
  templateId: number;
  id: string;
  status?: IPicklistOption;
}

export interface IPaymentInformationDetailV3NGA {
  PaymentInformationDetailV3_externalCode: number;
  PaymentInformationV3_effectiveStartDate: Date;
  PaymentInformationV3_worker: string;
  externalCode: number;
  accountType: string;
  createdBy?: string;
  createdDate: Date;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDate: Date;
  lastModifiedDateTime: Date;
  lastModifiedDateWithTZ: Date;
  mdfSystemEffectiveEndDate: Date;
  mdfSystemEffectiveStartDate: Date;
  mdfSystemEntityId: string;
  mdfSystemObjectType: string;
  mdfSystemRecordId: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  mdfSystemTransactionSequence: number;
  mdfSystemVersionId: number;
  accountTypeNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  mdfSystemStatusNav?: IMDFEnumValue;
}

export interface IRoleCompetencyMappingEntity {
  RoleEntity_externalCode: string;
  externalCode: string;
  competency: string;
  createdBy?: string;
  createdDateTime: Date;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  rating_ar_SA: string;
  rating_da_DK: string;
  rating_de_DE: string;
  rating_defaultValue: string;
  rating_en_DEBUG: string;
  rating_en_GB: string;
  rating_en_US: string;
  rating_fr_FR: string;
  rating_localized: string;
  rating_nl_NL: string;
  rating_pl_PL: string;
  rating_sv_SE: string;
  status: string;
  subModule: string;
  weight_ar_SA: string;
  weight_da_DK: string;
  weight_de_DE: string;
  weight_defaultValue: string;
  weight_en_DEBUG: string;
  weight_en_GB: string;
  weight_en_US: string;
  weight_fr_FR: string;
  weight_localized: string;
  weight_nl_NL: string;
  weight_pl_PL: string;
  weight_sv_SE: string;
  competencyNav?: ICompetencyEntity;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  ratingTranslationTextNav?: IMDFLocalizedValue[];
  statusNav?: IMDFEnumValue;
  weightTranslationTextNav?: IMDFLocalizedValue[];
}

export interface IFOJobFunction {
  externalCode: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  description: string;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  endDate: Date;
  jobFunctionType: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  mdfSystemRecordId: string;
  name: string;
  name_ar_SA: string;
  name_da_DK: string;
  name_de_DE: string;
  name_defaultValue: string;
  name_en_DEBUG: string;
  name_en_GB: string;
  name_en_US: string;
  name_fr_FR: string;
  name_localized: string;
  name_nl_NL: string;
  name_pl_PL: string;
  name_sv_SE: string;
  parentFunctionCode: string;
  status: string;
  type: string;
  createdByNav?: IUser;
  descriptionTranslationNav?: IFoTranslation;
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  jobFunctionTypeNav?: IPickListValueV2;
  lastModifiedByNav?: IUser;
  nameTranslationNav?: IFoTranslation;
  nameTranslationTextNav?: IMDFLocalizedValue[];
  parentFunctionCodeNav?: IFOJobFunction;
  statusNav?: IMDFEnumValue;
  typeNav?: IPicklistOption;
}

export interface ISpotAwardLevel {
  SpotAwardProgram_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  description_ar_SA: string;
  description_da_DK: string;
  description_de_DE: string;
  description_defaultValue: string;
  description_en_DEBUG: string;
  description_en_GB: string;
  description_en_US: string;
  description_fr_FR: string;
  description_localized: string;
  description_nl_NL: string;
  description_pl_PL: string;
  description_sv_SE: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  recordId: string;
  title_ar_SA: string;
  title_da_DK: string;
  title_de_DE: string;
  title_defaultValue: string;
  title_en_DEBUG: string;
  title_en_GB: string;
  title_en_US: string;
  title_fr_FR: string;
  title_localized: string;
  title_nl_NL: string;
  title_pl_PL: string;
  title_sv_SE: string;
  createdByNav?: IUser;
  descriptionTranslationTextNav?: IMDFLocalizedValue[];
  lastModifiedByNav?: IUser;
  levelImageNav?: IAttachment;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  titleTranslationTextNav?: IMDFLocalizedValue[];
}

export interface ITimeManagementAlertMessage {
  TimeManagementAlert_externalCode: string;
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  date: Date;
  defaultMessageText: string;
  employeeTime: string;
  entityUUID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  messageKey: string;
  messageParameter1: string;
  messageParameter2: string;
  messageParameter3: string;
  messageParameter4: string;
  timeAccount: string;
  timeAccountTypeAccrualTransfer: string;
  createdByNav?: IUser;
  employeeTimeNav?: IEmployeeTime;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  timeAccountNav?: ITimeAccount;
}

export interface IEmpCompensationGroupSumCalculated {
  seqNumber: number;
  startDate: Date;
  userId: string;
  amount: number;
  currencyCode: string;
  errorCode: string;
  errorMessage: string;
  payComponentGroupId: string;
}

export interface ICust_compensationEligibility {
  externalCode: string;
  createdBy?: string;
  createdDateTime: Date;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  wfRequestNav?: IWfRequest[];
}

export interface IJobAppTemplate_Candidate_Detail_Info_Template {
  templateId: number;
  address: string;
  averageRating: number;
  candidateName: string;
  cellPhone: string;
  city: string;
  comments: string;
  contactEmail: string;
  firstName: string;
  formerEmployee: boolean;
  interviewResult: string;
  lastName: string;
  middleName: string;
  overdueInterviews: string;
  questionResponse: string;
  referralName: string;
  startDate: Date;
  state: string;
  zip: string;
  assessmentAttachment?: IAttachment[];
  assessmentStatus?: IPicklistOption;
  bkgrndChkAttachment?: IAttachment[];
  bkgrndChkStatus?: IPicklistOption;
  candidateSource?: IPicklistOption;
  country?: IPicklistOption;
  coverLetter?: IAttachment;
  rejectReason?: IPicklistOption;
  resume?: IAttachment;
  statusId?: IPicklistOption;
  supportingDoc?: IAttachment[];
}

export interface ICandidateLight {
  candidateId: number;
  address: string;
  agreeToPrivacyStatement: string;
  anonymized: string;
  anonymizedDateTime: Date;
  candidateLocale: string;
  cellPhone: string;
  city: string;
  consentToMarketing: string;
  contactEmail: string;
  country: string;
  creationDateTime: Date;
  dataPrivacyId: number;
  dateofAvailability: Date;
  externalCandidate: boolean;
  firstName: string;
  lastLoginDateTime: Date;
  lastModifiedDateTime: Date;
  lastName: string;
  middleName: string;
  partnerMemberId: string;
  partnerSource: number;
  password: string;
  primaryEmail: string;
  privacyAcceptDateTime: Date;
  publicIntranet: boolean;
  sendCandWelcomeEmail: string;
  shareProfile: string;
  state: string;
  usersSysId: string;
  visibilityOption: boolean;
  zip: string;
  candidateProfileConversionInfo?: ICandidateProfileConversionInfo;
  candidateProfileExtension?: ICandidateProfileExtension;
  education?: ICandidateBackground_Education[];
  globalInfo?: ICandidateBackground_GlobalInfo[];
  insideWorkExperience?: ICandidateBackground_InsideWorkExperience[];
  jobReqFwdCandidates?: IJobReqFwdCandidates[];
  jobsApplied?: IJobApplication[];
  languages?: ICandidateBackground_Languages[];
  mobility?: ICandidateBackground_Mobility[];
  outsideWorkExperience?: ICandidateBackground_OutsideWorkExperience[];
  supportingDoc?: IAttachment[];
  tags?: ICandidateTags[];
}

export interface IGoalMetricLookup_4 {
  id: number;
  achievementNumeric: number;
  description: string;
  index: number;
  lastModified: Date;
  objId: number;
  rating: number;
  permissionNav?: IGoalMetricLookupPermission_4;
}

export interface IHRISChangeLogDataReplication {
  externalCode: number;
  changedEffectiveStartDate: Date;
  changedExternalCode: string;
  changedInternalId: number;
  changedObjectType: string;
  createdBy?: string;
  createdDateTime: Date;
  field2: string;
  field3: string;
  field4: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  performanceChangedExternalCode: string;
  userId: string;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
  userIdNav?: IUser;
  wfRequestNav?: IWfRequest[];
}

export interface IGoalMetricLookup_5 {
  id: number;
  achievementNumeric: number;
  description: string;
  index: number;
  lastModified: Date;
  objId: number;
  rating: number;
  permissionNav?: IGoalMetricLookupPermission_5;
}

export interface IWorkScheduleDayModelSegment {
  WorkScheduleDayModel_externalCode: string;
  externalCode: string;
  category: string;
  createdBy?: string;
  createdDateTime: Date;
  duration: number;
  endTime: Date;
  entityUUID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  startTime: Date;
  categoryNav?: IMDFEnumValue;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface IEMMonitoredProcess {
  processDefinitionId: string;
  processInstanceId: string;
  processType: string;
  coRelatorId: string;
  firstEventTime: Date;
  hasErrors: string;
  hasWarnings: string;
  lastEventTime: Date;
  moduleName: string;
  monitoredProcessId: number;
  processDefinitionName: string;
  processInstanceName: string;
  processState: string;
}

export interface IFormReviewFeedbackList {
  formDataId: number;
  formFeedbacks?: IFormReviewFeedback[];
}

export interface IPerGlobalInfoDEU {
  country: string;
  personIdExternal: string;
  startDate: Date;
  createdBy?: string;
  createdDateTime: Date;
  createdOn: Date;
  endDate: Date;
  genericDate1: Date;
  genericDate2: Date;
  genericDate3: Date;
  genericDate6: Date;
  genericNumber1: number;
  genericNumber2: number;
  genericNumber3: number;
  genericNumber4: number;
  genericNumber5: number;
  genericNumber6: number;
  genericNumber7: number;
  genericNumber8: number;
  genericString1: string;
  genericString10: string;
  genericString11: string;
  genericString12: string;
  genericString13: string;
  genericString14: string;
  genericString15: string;
  genericString17: string;
  genericString2: string;
  genericString20: string;
  genericString3: string;
  genericString4: string;
  genericString5: string;
  genericString6: string;
  genericString7: string;
  genericString8: string;
  genericString9: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  lastModifiedOn: Date;
  operation: string;
  countryNav?: ITerritory;
  personNav?: IPerPerson;
}

export interface ITimeTypeAUS {
  TimeType_externalCode: string;
  externalCode: number;
  advanceLeavePaymentAllowed: boolean;
  createdBy?: string;
  createdDateTime: Date;
  entityUUID: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Date;
  mdfSystemRecordStatus: string;
  splitPaymentAcrossFinancialYearAllowed: boolean;
  createdByNav?: IUser;
  lastModifiedByNav?: IUser;
  mdfSystemRecordStatusNav?: IMDFEnumValue;
}

export interface INominationTarget {
  nominationId: number;
  nominationType: number;
  positionNav?: IPosition;
  successorNav?: ISuccessor[];
  talentPoolNav?: ITalentPool;
}

export interface IMap_entry_string_string_ {
  key: string;
  value: string;
}

export interface ILocalstring {
  labels: IMap_entry_string_string_[];
  mimeType: string;
}

export interface IType {
  name: string;
  path: string;
}

export interface IMultiplicity {
  name: string;
  symbolString: string;
}

export interface IAssociation_end {
  multiplicity: IMultiplicity;
  path: string;
  role: string;
}

export interface IAssociation {
  deletable: boolean;
  end1: IAssociation_end;
  end2: IAssociation_end;
  insertable: boolean;
  name: string;
  path: string;
  updatable: boolean;
  upsertable: boolean;
}

export interface INavigation {
  aggregationRole: string;
  businessKey: boolean;
  defaultValue: string;
  displayFormat: string;
  elmStrength: string;
  fieldControl: string;
  filterable: boolean;
  fromRole: IAssociation_end;
  id: boolean;
  inlineRequired: boolean;
  insertable: boolean;
  insertablePath: string;
  label: ILocalstring;
  maxLength: number;
  name: string;
  navigateToPojo: boolean;
  path: string;
  picklistOptionId: string;
  precision: number;
  relationship: IAssociation;
  required: boolean;
  scale: number;
  semantics: string;
  sensitive: boolean;
  sortable: boolean;
  text: string;
  toRole: IAssociation_end;
  type: IType;
  updatable: boolean;
  upsertable: boolean;
  utcReady: boolean;
  viewable: boolean;
}

export interface IProperty {
  aggregationRole: string;
  businessKey: boolean;
  defaultValue: string;
  displayFormat: string;
  fieldControl: string;
  filterable: boolean;
  id: boolean;
  inlineRequired: boolean;
  insertable: boolean;
  insertablePath: string;
  label: ILocalstring;
  maxLength: number;
  name: string;
  path: string;
  picklistOptionId: string;
  precision: number;
  required: boolean;
  scale: number;
  semantics: string;
  sensitive: boolean;
  sortable: boolean;
  text: string;
  type: IType;
  updatable: boolean;
  upsertable: boolean;
  utcReady: boolean;
  viewable: boolean;
}

export interface IRuleFieldMappingBean {
  fieldName: string;
  fieldValue: string;
}

export interface IRuleFieldMappingBeanList {
  ruleFieldMappings: IRuleFieldMappingBean[];
}

export interface IThemeUrlsBean {
  baseUrl: string;
  configUrl: string;
  cssUrl: string;
  ui5BaseThemeRootUrl: string;
}

export interface IThemeFingerprintsBean {
  config: string;
  css: string;
  ui5BaseThemeRoot: string;
}

export interface IAccessibilityPreferences {
  blindnessSupport: boolean;
  colorVisionType: string;
  keyboardOnlyNavigation: boolean;
  lowVisionType: string;
}

export interface IThemeColor {
  value: string;
}

export interface IThemeURL {
  value: string;
}

export interface IThemeBackgroundConfig {
  baseColor: IThemeColor;
  imageHorizontalPosition: string;
  imageOption: string;
  imageRepeat: string;
  imageVerticalPosition: string;
  lighting: string;
  texture: string;
  url: IThemeURL;
}

export interface IThemeButtonConfig {
  bgColor: IThemeColor;
  borderColor: IThemeColor;
  borderWidth: string;
  disabledBgColor: IThemeColor;
  disabledBorderColor: IThemeColor;
  disabledTextColor: IThemeColor;
  hoverBgColor: IThemeColor;
  hoverBorderColor: IThemeColor;
  hoverTextColor: IThemeColor;
  textColor: IThemeColor;
}

export interface IThemeCardConfig {
  buttonBgColor: IThemeColor;
  buttonTextColor: IThemeColor;
  iconColor: IThemeColor;
  linkColor: IThemeColor;
}

export interface IThemeContentConfig {
  bgColor: IThemeColor;
  bgColorVariant: IThemeColor;
  iconScheme: string;
  linkTextColor: IThemeColor;
  textColor: IThemeColor;
  textColorVariant: IThemeColor;
}

export interface IThemeDiagramConfig {
  backgroundColor: IThemeColor;
  lineColor: IThemeColor;
  negativeThresholdColor: IThemeColor;
  neutralThresholdColor: IThemeColor;
  paletteColor10: IThemeColor;
  paletteColor2: IThemeColor;
  paletteColor3: IThemeColor;
  paletteColor4: IThemeColor;
  paletteColor5: IThemeColor;
  paletteColor6: IThemeColor;
  paletteColor7: IThemeColor;
  paletteColor8: IThemeColor;
  paletteColor9: IThemeColor;
  positiveThresholdColor: IThemeColor;
  primaryColor: IThemeColor;
  textColor: IThemeColor;
  titleColor: IThemeColor;
}

export interface IThemeExternalConfig {
  faviconOption: string;
  faviconUrl: IThemeURL;
  footerLogoOption: string;
  footerLogoUrl: IThemeURL;
}

export interface IThemeFooterConfig {
  logoScheme: string;
  textColor: IThemeColor;
}

export interface IThemeHeaderBackgroundConfig {
  baseColor: IThemeColor;
  bgOption: string;
  imageHorizontalPosition: string;
  imageRepeat: string;
  imageVerticalPosition: string;
  styleOption: string;
  url: IThemeURL;
}

export interface IThemeHighlightConfig {
  bgColor: IThemeColor;
  iconScheme: string;
  linkTextColor: IThemeColor;
  textColor: IThemeColor;
}

export interface IThemeHomepageConfig {
  customCardIconBgColor: IThemeColor;
  customCardIconColor: IThemeColor;
  greetingTextColor: IThemeColor;
  headerBgLandscapeUrl: IThemeURL;
  headerBgOption: string;
  quickActionBgColor: IThemeColor;
  quickActionTextColor: IThemeColor;
}

export interface IThemeLoginBackgroundConfig {
  backgroundType: string;
  baseColor: IThemeColor;
  imageHorizontalPosition: string;
  imageRepeat: string;
  imageVerticalPosition: string;
  option: string;
  overlayOpacity: number;
  overlayOption: string;
  url: IThemeURL;
}

export interface IThemeLoginLogoConfig {
  option: string;
  systemType: string;
  url: IThemeURL;
}

export interface IThemeLoginConfig {
  autofillBgColor: IThemeColor;
  background: IThemeLoginBackgroundConfig;
  footerScheme: string;
  logo: IThemeLoginLogoConfig;
  primaryButton: IThemeButtonConfig;
  primaryButtonOption: string;
}

export interface IThemeLogoConfig {
  backdropColor: IThemeColor;
  position: string;
  url: IThemeURL;
  useBackdrop: boolean;
  useUploadedLogo: boolean;
}

export interface IThemeMenuConfig {
  activeBgColor: IThemeColor;
  activeTextColor: IThemeColor;
  bgColor: IThemeColor;
  hoverBgColor: IThemeColor;
  hoverBgColorDisabled: IThemeColor;
  hoverTextColor: IThemeColor;
  textColor: IThemeColor;
  textColorDisabled: IThemeColor;
}

export interface IThemeModulePickerConfig {
  activeHeaderBgColor: IThemeColor;
  activeHeaderTextColor: IThemeColor;
  boxBorderColor: IThemeColor;
  deriveColors: boolean;
  headerTextColor: IThemeColor;
  hoverHeaderBgColor: IThemeColor;
  hoverHeaderTextColor: IThemeColor;
  iconTextColor: IThemeColor;
}

export interface IThemeNavigationConfig {
  activeTextColor: IThemeColor;
  allowCondensedView: boolean;
  hoverTextColor: IThemeColor;
  textColor: IThemeColor;
}

export interface IThemePlacematConfig {
  backgroundType: string;
  bgColor: IThemeColor;
  borderColor: IThemeColor;
  linkColor: IThemeColor;
  opacity: number;
  selectedTabColor: IThemeColor;
  useShadow: boolean;
}

export interface IThemePortletConfig {
  alertTextColor: IThemeColor;
  bodyBackgroundColor: IThemeColor;
  bodyLinkTextColor: IThemeColor;
  bodyTextColor: IThemeColor;
  calloutTextColor: IThemeColor;
  custom1TextColor: IThemeColor;
  custom2TextColor: IThemeColor;
  dimmedTextColor: IThemeColor;
  headerBgColor: IThemeColor;
  headerLinkTextColor: IThemeColor;
  headerTextColor: IThemeColor;
  sidebarColor: IThemeColor;
  sidebarLinkTextColor: IThemeColor;
  sidebarTextColor: IThemeColor;
}

export interface IThemeTableConfig {
  altRowBgColor: IThemeColor;
  disabledRowCellBgColor: IThemeColor;
  headerBgColor: IThemeColor;
  headerTextColor: IThemeColor;
  hoverRowBgColor: IThemeColor;
  linkColor: IThemeColor;
  rowBgColor: IThemeColor;
  selectedRowBgColor: IThemeColor;
  selectedSortedRowBgColor: IThemeColor;
  sortCellBgColor: IThemeColor;
  textColor: IThemeColor;
}

export interface IThemeTileConfig {
  accentBodyBGColor: IThemeColor;
  accentBodyIconScheme: string;
  accentBodyTextColor: IThemeColor;
  accentHeaderBGColor: IThemeColor;
  accentHeaderIconScheme: string;
  accentHeaderLinkColor: IThemeColor;
  accentHeaderTextColor: IThemeColor;
  accentLinkColor: IThemeColor;
  alertBadgeBGColor: IThemeColor;
  alertBadgeTextColor: IThemeColor;
  alertTextColor: IThemeColor;
  bodyBGColor: IThemeColor;
  bodyIconScheme: string;
  bodyTextColor: IThemeColor;
  headerBGColor: IThemeColor;
  headerIconScheme: string;
  headerLinkColor: IThemeColor;
  headerTextColor: IThemeColor;
  linkColor: IThemeColor;
}

export interface IThemeLandingPageConfig {
  themeId: string;
}

export interface IThemeLandingPageTileConfig {
  alertTextColor: IThemeColor;
  bgColor: IThemeColor;
  bodyTextColor: IThemeColor;
  borderColor: IThemeColor;
  headerTextColor: IThemeColor;
  iconColor: IThemeColor;
  neutralTextColor: IThemeColor;
}

export interface IGlobalThemeConfiguration {
  accentColorBase: IThemeColor;
  background: IThemeBackgroundConfig;
  card: IThemeCardConfig;
  containerShadowColor: IThemeColor;
  content: IThemeContentConfig;
  diagram: IThemeDiagramConfig;
  external: IThemeExternalConfig;
  footer: IThemeFooterConfig;
  headerBackground: IThemeHeaderBackgroundConfig;
  highlight: IThemeHighlightConfig;
  homepage: IThemeHomepageConfig;
  landingPage: IThemeLandingPageConfig;
  landingPageTile: IThemeLandingPageTileConfig;
  login: IThemeLoginConfig;
  logo: IThemeLogoConfig;
  menu: IThemeMenuConfig;
  modulePicker: IThemeModulePickerConfig;
  navigation: IThemeNavigationConfig;
  pageTitleColor: IThemeColor;
  placemat: IThemePlacematConfig;
  portlet: IThemePortletConfig;
  portletCloseIconScheme: string;
  primaryButton: IThemeButtonConfig;
  searchBackgroundScheme: string;
  secondaryButton: IThemeButtonConfig;
  table: IThemeTableConfig;
  tile: IThemeTileConfig;
  useContainerShadowColor: boolean;
  useDownloadableFonts: boolean;
  useModernStylesInLegacy: boolean;
  useTextShadow: boolean;
}

export interface IGetBizXActionResponse {
  actionId: string;
  actionLabel: string;
  deepLinkUrl: string;
  userId: string;
}

export interface IGenerateNextPersonIDResponse {
  personID: string;
}

export interface IWfRequestActionResponse {
  status: string;
  wfRequestId: number;
}

export interface IChangeDataBean {
  label: string;
  newValue: string;
  oldValue: string;
}

export interface IPendingDataAttributeBean {
  entityName: string;
  fieldId: string;
  fieldName: string;
  id: string;
  label: string;
  newValue: string;
  oldValue: string;
  payComponents: IChangeDataBean[];
  type: string;
}

export interface IEssMssWorkflowAttributeBean {
  changeSet: IPendingDataAttributeBean[];
  entityName: string;
  fieldId: string;
  fieldName: string;
  id: string;
  label: string;
  newValue: string;
  oldValue: string;
  payComponents: IChangeDataBean[];
  type: string;
}

export interface IEssMssWorkflowSubAttributeBean {
  changeSet: IEssMssWorkflowAttributeBean[];
  changeSetGroupSubTitle: string;
}

export interface IPendDataInlineGroupBean {
  changeSet: IEssMssWorkflowAttributeBean[];
  subChangeSetGroups: IEssMssWorkflowSubAttributeBean[];
  title: string;
}

export interface IPendDataGroupBean {
  changeSet: IEssMssWorkflowAttributeBean[];
  inlineGroups: IPendDataInlineGroupBean[];
  subChangeSetGroups: IEssMssWorkflowSubAttributeBean[];
  title: string;
}

export interface IEssMssWorkflowAttributeGroupBean {
  changeSet: IEssMssWorkflowAttributeBean[];
  groups: IPendDataGroupBean[];
  subChangeSetGroups: IEssMssWorkflowSubAttributeBean[];
  title: string;
}

export interface IWfRequestPendingDataResponse {
  wfRequestId: number;
  workflowAttributeGroups: IEssMssWorkflowAttributeGroupBean[];
}

export interface IMap_entry_string_ComplianceDataVO_ {
  key: string;
}

export interface IDocumentCategoryDetails {
  active: boolean;
  categoryCode: string;
  categoryName: string;
  entityName: string;
  entityTypeCode: string;
  systemDefined: boolean;
}

export interface IDocumentCategories {
  attachmemtCategories: IDocumentCategoryDetails[];
}

export interface ICOSocialAccountBean {
  domain: string;
  instantMessagingId: string;
  url: string;
}

export interface ICOUserInfoElementBean {
  id: string;
  label: string;
  type: string;
  value: string;
}

export interface IPeopleProfileHeaderResponse {
  aboutMeVideoDeleteUrl: string;
  aboutMeVideoEnabled: boolean;
  aboutMeVideoGetFileUrl: string;
  aboutMeVideoStatusUrl: string;
  aboutMeVideoToken: string;
  aboutMeVideoUploadId: string;
  aboutMeVideoUploadUrl: string;
  applicationId: string;
  businessPhone: string;
  cellPhone: string;
  customFields: ICOUserInfoElementBean[];
  dSTSavings: number;
  department: string;
  division: string;
  email: string;
  expressivePhotoMod: string;
  fullName: string;
  introduction: string;
  isAboutMeTextEnabled: boolean;
  isAllowUploadBGPhoto: boolean;
  isPercentCompleteEnabled: boolean;
  isShowAsOfDate: boolean;
  isShowEditLink: boolean;
  isTimeZoneInDaylightTime: boolean;
  liveProfileOriginalPhotoId: number;
  liveProfilePhotoId: number;
  liveProfilePhotoMod: string;
  localTimeEnabled: boolean;
  location: string;
  mediaServiceBaseUrl: string;
  myNameAudioDeleteUrl: string;
  myNameAudioGetFileUrl: string;
  myNameAudioStatusUrl: string;
  myNameAudioUploadUrl: string;
  myNameEnabled: boolean;
  myNameText: string;
  myNameToken: string;
  myNameUploadId: string;
  phoneNumbers: ICOUserInfoElementBean[];
  showLiveProfilePhoto: boolean;
  socialAccounts: ICOSocialAccountBean[];
  socialNetworks: ICOUserInfoElementBean[];
  targetUserId: string;
  timezone: string;
  title: string;
  userName: string;
  utcOffset: number;
}

export interface IEPCustomBackgroundPortletProperty {
  isPII: boolean;
  isPicklist: boolean;
  isUrlLink: boolean;
  label: string;
  parentFieldId: string;
  picklistId: string;
  propertyName: string;
  required: boolean;
}

export interface IInviteToApplyResponse {
  candidateId: string;
  message: string;
  status: string;
}

export interface IMap_entry_string_AgencyLocaleDetails_ {
  key: string;
}

export interface ICORouteFormStatusBean {
  redirectUrl: string;
  status: string;
}

export interface ICreatePerformanceReviewFormResponse {
  formDataId: number;
  status: string;
  statusCode: number;
}

export interface IToDoEntry {
  completedDate: Date;
  formDataId: number;
  status: number;
  statusLabel: string;
  subjectFullName: string;
  subjectId: string;
  url: string;
}

export interface IToDoBean {
  categoryId: string;
  completedDate: Date;
  dueDate: Date;
  dueDateOffSet: number;
  entries: IToDoEntry[];
  entryId: number;
  name: string;
  status: number;
  statusLabel: string;
  stepDescAlt: string;
  todoItemId: string;
  url: string;
}

export interface IGetMatchedGuideLineRuleInfoResponse {
  userIdToMatchedGuideLineMap: IMap_entry_string_string_[];
}

export interface IIsUserEligibleForSpotAwardProgramResponse {
  isUserEligible: boolean;
}

export interface IGetEligibleSpotAwardsProgramCodesResponse {
  eligibleProgramCodes: IMap_entry_string_string_[];
}

export interface IONB2RehireCheckParams {
  dateOfBirth: string;
  firstName: string;
  lastName: string;
  nationalIdDetails: IMap_entry_string_string_[];
}

export interface IONB2OnboardeeDetails {
  applicationId: string;
  email: string;
  isRehireOnOldEmployment: boolean;
  rehireCheckParams: IONB2RehireCheckParams;
  rehireUser: string;
  shouldCancelOnboarding: boolean;
  shouldCreateNewHire: boolean;
  userId: string;
  userLocale: string;
  userName: string;
}

export interface IONB2ExternalHRISHiringUpdate {
  assignmentIdExternal: string;
  personIdExternal: string;
  processId: string;
  sourceOfRecord: string;
  userName: string;
  userStatus: string;
}

export interface IMap_entry_string_HomepageTile_ {
  key: string;
}

export interface INominationApprovalWorkflowResponse {
  message: string;
  nomineeId: number;
  status: string;
}

export interface IMap_entry_string_bool_ {
  key: string;
  value: boolean;
}

export interface ISEFEventEntityKey {
  description: string;
  descriptionMessageKey: string;
  name: string;
  type: string;
}

export interface ISEFEventEntityParam {
  description: string;
  descriptionMessageKey: string;
  hasValueAlways: boolean;
  name: string;
  type: string;
}

export interface ISEFExtEventMetaData {
  description: string;
  effectiveDated: boolean;
  entity: string;
  entityKeys: ISEFEventEntityKey[];
  name: string;
  params: ISEFEventEntityParam[];
  publisher: string;
  topic: string;
  type: string;
}

export interface ISEFExtEventMetaDataList {
  data: ISEFExtEventMetaData[];
  status: string;
  statusMsg: string;
}

export interface IMap_entry_string_SEFSubscriberConfigurationPerCategory_ {
  key: string;
}

export interface IMap_entry_ISCRetryFlowMetaData_ISCRetryFlowStatusMetaData_ {}

export interface ISPMetadataGenerator {
  errorMessage: string;
  result: string;
  status: string;
}

export interface IDynamicGroupBean {
  groupId: number;
  groupName: string;
}

export interface IDynamicGroupUserBean {
  firstName: string;
  lastName: string;
  middleName: string;
  personGUID: string;
  userId: string;
  userName: string;
}

export interface IMap_entry_string_property_ {
  key: string;
  value: IProperty;
}

export interface IMap_entry_string_navigation_ {
  key: string;
  value: INavigation;
}

export enum FuncRefreshMetadata {
  name = "refreshMetadata",
}

export type FuncRefreshMetadataReturn = boolean;

export enum FuncGetPositionObjectData {
  name = "getPositionObjectData",
  paramPositionId = "positionId",
  paramUserId = "userId",
}

export interface IFuncGetPositionObjectDataParams {
  positionId: number;
  userId: string;
}

export type FuncGetPositionObjectDataReturn = IRuleFieldMappingBeanList;

export enum FuncGetNewEmploymentEnabledForContingentWorkforce {
  name = "getNewEmploymentEnabledForContingentWorkforce",
}

export type FuncGetNewEmploymentEnabledForContingentWorkforceReturn = boolean;

export enum FuncGetBizXAction {
  name = "GetBizXAction",
  paramActionSourceId = "actionSourceId",
  paramUserId = "userId",
}

export interface IFuncGetBizXActionParams {
  actionSourceId: string;
  userId: string;
}

export type FuncGetBizXActionReturn = IGetBizXActionResponse[];

export enum ActionGenerateNextPersonID {
  name = "generateNextPersonID",
}

export type ActionGenerateNextPersonIDReturn = IGenerateNextPersonIDResponse;

export enum ActionApproveWfRequest {
  name = "approveWfRequest",
  paramWfRequestId = "wfRequestId",
  paramComment = "comment",
}

export interface IActionApproveWfRequestParams {
  wfRequestId: number;
  comment: string;
}

export type ActionApproveWfRequestReturn = IWfRequestActionResponse[];

export enum ActionCommentWfRequest {
  name = "commentWfRequest",
  paramWfRequestId = "wfRequestId",
  paramComment = "comment",
}

export interface IActionCommentWfRequestParams {
  wfRequestId: number;
  comment: string;
}

export type ActionCommentWfRequestReturn = IWfRequestActionResponse[];

export enum ActionRejectWfRequest {
  name = "rejectWfRequest",
  paramWfRequestId = "wfRequestId",
  paramComment = "comment",
}

export interface IActionRejectWfRequestParams {
  wfRequestId: number;
  comment: string;
}

export type ActionRejectWfRequestReturn = IWfRequestActionResponse[];

export enum ActionSendbackWfRequest {
  name = "sendbackWfRequest",
  paramWfRequestId = "wfRequestId",
  paramComment = "comment",
}

export interface IActionSendbackWfRequestParams {
  wfRequestId: number;
  comment: string;
}

export type ActionSendbackWfRequestReturn = IWfRequestActionResponse[];

export enum ActionWithdrawWfRequest {
  name = "withdrawWfRequest",
  paramWfRequestId = "wfRequestId",
  paramComment = "comment",
}

export interface IActionWithdrawWfRequestParams {
  wfRequestId: number;
  comment: string;
}

export type ActionWithdrawWfRequestReturn = IWfRequestActionResponse[];

export enum ActionGetWorkflowPendingData {
  name = "getWorkflowPendingData",
  paramWfRequestId = "wfRequestId",
}

export interface IActionGetWorkflowPendingDataParams {
  wfRequestId: number;
}

export type ActionGetWorkflowPendingDataReturn =
  IWfRequestPendingDataResponse[];

export enum ActionChangeWfRequestApprover {
  name = "changeWfRequestApprover",
  paramWfRequestId = "wfRequestId",
  paramWfRequestStepId = "wfRequestStepId",
  paramUpdateToUserId = "updateToUserId",
  paramEditTransaction = "editTransaction",
}

export interface IActionChangeWfRequestApproverParams {
  wfRequestId: number;
  wfRequestStepId: number;
  updateToUserId: string;
  editTransaction: string;
}

export type ActionChangeWfRequestApproverReturn = IWfRequestActionResponse[];

export enum FuncGetUserNameFormat {
  name = "getUserNameFormat",
  paramLocale = "locale",
}

export interface IFuncGetUserNameFormatParams {
  locale: string;
}

export type FuncGetUserNameFormatReturn = string;

export enum FuncGetPasswordPolicy {
  name = "getPasswordPolicy",
  paramLocale = "locale",
}

export interface IFuncGetPasswordPolicyParams {
  locale: string;
}

export type FuncGetPasswordPolicyReturn = string;

export enum ActionUpsert {
  name = "upsert",
}

export type ActionUpsertReturn = IUpsertResult[];

export enum FuncLogout {
  name = "logout",
}

export type FuncLogoutReturn = boolean;

export enum FuncIsValidSession {
  name = "isValidSession",
}

export type FuncIsValidSessionReturn = boolean;

export enum FuncConvertAssignmentIdExternal {
  name = "convertAssignmentIdExternal",
  paramOldAssignmentIdExternal = "oldAssignmentIdExternal",
  paramNewAssignmentIdExternal = "newAssignmentIdExternal",
}

export interface IFuncConvertAssignmentIdExternalParams {
  oldAssignmentIdExternal: string;
  newAssignmentIdExternal: string;
}

export type FuncConvertAssignmentIdExternalReturn = string;

export enum FuncGetDocumentCategories {
  name = "getDocumentCategories",
  paramEntityType = "entityType",
  paramExcludeInactive = "excludeInactive",
  paramEnforcePerm = "enforcePerm",
}

export interface IFuncGetDocumentCategoriesParams {
  entityType: string;
  excludeInactive: boolean;
  enforcePerm: boolean;
}

export type FuncGetDocumentCategoriesReturn = IDocumentCategories;

export enum FuncGetOpenTextAttachmentId {
  name = "getOpenTextAttachmentId",
  paramDocument_id = "document_id",
}

export interface IFuncGetOpenTextAttachmentIdParams {
  document_id: string;
}

export type FuncGetOpenTextAttachmentIdReturn = number;

export enum ActionSyncCMISDocument {
  name = "syncCMISDocument",
  paramDocument_id = "document_id",
  paramAction = "action",
}

export interface IActionSyncCMISDocumentParams {
  document_id: string;
  action: string;
}

export type ActionSyncCMISDocumentReturn = boolean;

export enum FuncGetPeopleProfileHeader {
  name = "getPeopleProfileHeader",
  paramUserId = "userId",
}

export interface IFuncGetPeopleProfileHeaderParams {
  userId: string;
}

export type FuncGetPeopleProfileHeaderReturn = IPeopleProfileHeaderResponse[];

export enum FuncFwdCandidateToColleague {
  name = "fwdCandidateToColleague",
  paramCandidateId = "candidateId",
  paramReferredTo = "referredTo",
}

export interface IFuncFwdCandidateToColleagueParams {
  candidateId: number;
  referredTo: string;
}

export type FuncFwdCandidateToColleagueReturn = string;

export enum ActionSetSmsNotificationPreference {
  name = "setSmsNotificationPreference",
  paramOptIn = "optIn",
  paramCandidateId = "candidateId",
  paramIsoCountryCode = "isoCountryCode",
  paramCellPhone = "cellPhone",
}

export interface IActionSetSmsNotificationPreferenceParams {
  optIn: boolean;
  candidateId: number;
  isoCountryCode: string;
  cellPhone: string;
}

export type ActionSetSmsNotificationPreferenceReturn = string;

export enum FuncReassignJobReq {
  name = "reassignJobReq",
  paramJobReqId = "jobReqId",
  paramHiringManager = "hiringManager",
  paramRecruiter = "recruiter",
  paramCoordinator = "coordinator",
  paramVpOfStaffing = "vpOfStaffing",
  paramSecondRecruiter = "secondRecruiter",
  paramSourcer = "sourcer",
}

export interface IFuncReassignJobReqParams {
  jobReqId: number;
  hiringManager: string;
  recruiter: string;
  coordinator: string;
  vpOfStaffing: string;
  secondRecruiter: string;
  sourcer: string;
}

export type FuncReassignJobReqReturn = string;

export enum FuncInitiateOnboarding {
  name = "initiateOnboarding",
  paramApplicationId = "applicationId",
}

export interface IFuncInitiateOnboardingParams {
  applicationId: number;
}

export type FuncInitiateOnboardingReturn = string;

export enum FuncSendJobReqToPreviousStep {
  name = "sendJobReqToPreviousStep",
  paramJobReqId = "jobReqId",
  paramComment = "comment",
}

export interface IFuncSendJobReqToPreviousStepParams {
  jobReqId: number;
  comment: string;
}

export type FuncSendJobReqToPreviousStepReturn = string;

export enum ActionSendJobReqToNextStep {
  name = "sendJobReqToNextStep",
  paramJobReqId = "jobReqId",
  paramComment = "comment",
}

export interface IActionSendJobReqToNextStepParams {
  jobReqId: number;
  comment: string;
}

export type ActionSendJobReqToNextStepReturn = string;

export enum ActionSendJobReqFormToUser {
  name = "sendJobReqFormToUser",
  paramJobReqId = "jobReqId",
  paramUserId = "userId",
  paramComment = "comment",
}

export interface IActionSendJobReqFormToUserParams {
  jobReqId: number;
  userId: string;
  comment: string;
}

export type ActionSendJobReqFormToUserReturn = string;

export enum ActionApproveOrDeclineJobReqForm {
  name = "approveOrDeclineJobReqForm",
  paramJobReqId = "jobReqId",
  paramActionType = "actionType",
}

export interface IActionApproveOrDeclineJobReqFormParams {
  jobReqId: number;
  actionType: string;
}

export type ActionApproveOrDeclineJobReqFormReturn = string;

export enum FuncAddModifierToJobReq {
  name = "addModifierToJobReq",
  paramJobReqId = "jobReqId",
  paramModifier = "modifier",
}

export interface IFuncAddModifierToJobReqParams {
  jobReqId: number;
  modifier: string;
}

export type FuncAddModifierToJobReqReturn = string;

export enum FuncApproveOffer {
  name = "approveOffer",
  paramApplicationId = "applicationId",
  paramComment = "comment",
}

export interface IFuncApproveOfferParams {
  applicationId: number;
  comment: string;
}

export type FuncApproveOfferReturn = string;

export enum FuncDeclineOffer {
  name = "declineOffer",
  paramApplicationId = "applicationId",
  paramComment = "comment",
}

export interface IFuncDeclineOfferParams {
  applicationId: number;
  comment: string;
}

export type FuncDeclineOfferReturn = string;

export enum FuncSendOfferForApproval {
  name = "sendOfferForApproval",
  paramApplicationId = "applicationId",
}

export interface IFuncSendOfferForApprovalParams {
  applicationId: number;
}

export type FuncSendOfferForApprovalReturn = string;

export enum FuncSendMailOfferLetter {
  name = "sendMailOfferLetter",
  paramOfferLetterId = "offerLetterId",
  paramSendMode = "sendMode",
  paramBodyTemplateId = "bodyTemplateId",
  paramBodyLocale = "bodyLocale",
}

export interface IFuncSendMailOfferLetterParams {
  offerLetterId: number;
  sendMode: string;
  bodyTemplateId: number;
  bodyLocale: string;
}

export type FuncSendMailOfferLetterReturn = string;

export enum FuncGetRecruitingTemplate {
  name = "getRecruitingTemplate",
  paramTemplateName = "templateName",
  paramTemplateType = "templateType",
}

export interface IFuncGetRecruitingTemplateParams {
  templateName: string;
  templateType: string;
}

export type FuncGetRecruitingTemplateReturn = string;

export enum FuncGetOfferLetterTemplate {
  name = "getOfferLetterTemplate",
  paramTemplateName = "templateName",
  paramTemplateType = "templateType",
}

export interface IFuncGetOfferLetterTemplateParams {
  templateName: string;
  templateType: string;
}

export type FuncGetOfferLetterTemplateReturn = string;

export enum ActionRefreshInterviewAssessments {
  name = "refreshInterviewAssessments",
  paramJobReqIdParam = "jobReqIdParam",
}

export interface IActionRefreshInterviewAssessmentsParams {
  jobReqIdParam: number;
}

export type ActionRefreshInterviewAssessmentsReturn = string;

export enum ActionSendEmailToInterviewers {
  name = "sendEmailToInterviewers",
  paramApplicationId = "applicationId",
  paramInterviewers = "interviewers",
  paramAttachResume = "attachResume",
  paramAttachCoverLetter = "attachCoverLetter",
  paramAttachInterviewGuide = "attachInterviewGuide",
  paramHiringManagerNote = "hiringManagerNote",
}

export interface IActionSendEmailToInterviewersParams {
  applicationId: number;
  interviewers: string;
  attachResume: boolean;
  attachCoverLetter: boolean;
  attachInterviewGuide: boolean;
  hiringManagerNote: string;
}

export type ActionSendEmailToInterviewersReturn = string;

export enum ActionInviteToApply {
  name = "inviteToApply",
  paramJobReqId = "jobReqId",
  paramCandidateIds = "candidateIds",
}

export interface IActionInviteToApplyParams {
  jobReqId: number;
  candidateIds: string;
}

export type ActionInviteToApplyReturn = IInviteToApplyResponse[];

export enum FuncSignForm {
  name = "signForm",
  paramFormDataId = "formDataId",
  paramComment = "comment",
}

export interface IFuncSignFormParams {
  formDataId: number;
  comment: string;
}

export type FuncSignFormReturn = ICORouteFormStatusBean;

export enum FuncRejectForm {
  name = "rejectForm",
  paramFormDataId = "formDataId",
  paramComment = "comment",
}

export interface IFuncRejectFormParams {
  formDataId: number;
  comment: string;
}

export type FuncRejectFormReturn = ICORouteFormStatusBean;

export enum FuncSendToNextStep {
  name = "sendToNextStep",
  paramFormDataId = "formDataId",
  paramComment = "comment",
  paramInnerStepUserId = "innerStepUserId",
  paramNextIStepEntryUser = "nextIStepEntryUser",
}

export interface IFuncSendToNextStepParams {
  formDataId: number;
  comment: string;
  innerStepUserId: string;
  nextIStepEntryUser: string;
}

export type FuncSendToNextStepReturn = ICORouteFormStatusBean;

export enum FuncSendToPreviousStep {
  name = "sendToPreviousStep",
  paramFormDataId = "formDataId",
  paramComment = "comment",
  paramPreviousIStepEntryUser = "previousIStepEntryUser",
}

export interface IFuncSendToPreviousStepParams {
  formDataId: number;
  comment: string;
  previousIStepEntryUser: string;
}

export type FuncSendToPreviousStepReturn = ICORouteFormStatusBean;

export enum FuncCreatePerformanceReviewForm {
  name = "createPerformanceReviewForm",
  paramFormSubjectId = "formSubjectId",
  paramFormTemplateId = "formTemplateId",
  paramSendEmail = "sendEmail",
  paramEnRouteCopy = "enRouteCopy",
}

export interface IFuncCreatePerformanceReviewFormParams {
  formSubjectId: string;
  formTemplateId: number;
  sendEmail: boolean;
  enRouteCopy: boolean;
}

export type FuncCreatePerformanceReviewFormReturn =
  ICreatePerformanceReviewFormResponse;

export enum FuncComplete360 {
  name = "complete360",
  paramFormDataId = "formDataId",
  paramComment = "comment",
}

export interface IFuncComplete360Params {
  formDataId: number;
  comment: string;
}

export type FuncComplete360Return = ICORouteFormStatusBean;

export enum FuncGetDefaultGoalPlanTemplateId {
  name = "getDefaultGoalPlanTemplateId",
}

export type FuncGetDefaultGoalPlanTemplateIdReturn = number;

export enum FuncGetMatchedGuideLineRuleInfo {
  name = "getMatchedGuideLineRuleInfo",
  paramProgramId = "programId",
  paramUserIds = "userIds",
  paramCategory = "category",
  paramLevel = "level",
}

export interface IFuncGetMatchedGuideLineRuleInfoParams {
  programId: string;
  userIds: string;
  category: string;
  level: string;
}

export type FuncGetMatchedGuideLineRuleInfoReturn =
  IGetMatchedGuideLineRuleInfoResponse;

export enum FuncIsUserEligibleForSpotAwardProgram {
  name = "isUserEligibleForSpotAwardProgram",
  paramProgramId = "programId",
  paramUserId = "userId",
}

export interface IFuncIsUserEligibleForSpotAwardProgramParams {
  programId: string;
  userId: string;
}

export type FuncIsUserEligibleForSpotAwardProgramReturn =
  IIsUserEligibleForSpotAwardProgramResponse;

export enum FuncGetEligibleSpotAwardsProgramCodes {
  name = "getEligibleSpotAwardsProgramCodes",
  paramUserId = "userId",
}

export interface IFuncGetEligibleSpotAwardsProgramCodesParams {
  userId: string;
}

export type FuncGetEligibleSpotAwardsProgramCodesReturn =
  IGetEligibleSpotAwardsProgramCodesResponse;

export enum ActionInitiateOnboardingForUser {
  name = "initiateOnboardingForUser",
}

export type ActionInitiateOnboardingForUserReturn = string;

export enum ActionCreateOnboardee {
  name = "createOnboardee",
}

export type ActionCreateOnboardeeReturn = string;

export enum ActionOnb2UpdateFromExternalHris {
  name = "onb2UpdateFromExternalHris",
}

export type ActionOnb2UpdateFromExternalHrisReturn = string;

export enum ActionUpdateFromExternalHrisONB {
  name = "updateFromExternalHrisONB",
}

export type ActionUpdateFromExternalHrisONBReturn = string;

export enum FuncApproveSuccessors {
  name = "approveSuccessors",
  paramNomineeIds = "nomineeIds",
  paramComment = "comment",
}

export interface IFuncApproveSuccessorsParams {
  nomineeIds: string;
  comment: string;
}

export type FuncApproveSuccessorsReturn = INominationApprovalWorkflowResponse[];

export enum FuncRejectSuccessors {
  name = "rejectSuccessors",
  paramNomineeIds = "nomineeIds",
  paramComment = "comment",
}

export interface IFuncRejectSuccessorsParams {
  nomineeIds: string;
  comment: string;
}

export type FuncRejectSuccessorsReturn = INominationApprovalWorkflowResponse[];

export enum FuncGetExtEventMetaDataDefinition {
  name = "getExtEventMetaDataDefinition",
  paramEvent = "event",
  paramTopic = "topic",
}

export interface IFuncGetExtEventMetaDataDefinitionParams {
  event: string;
  topic: string;
}

export type FuncGetExtEventMetaDataDefinitionReturn = ISEFExtEventMetaDataList;

export enum FuncGetSPMetadata {
  name = "getSPMetadata",
  paramDcDomain = "dcDomain",
  paramCompanyId = "companyId",
}

export interface IFuncGetSPMetadataParams {
  dcDomain: string;
  companyId: string;
}

export type FuncGetSPMetadataReturn = ISPMetadataGenerator;

export enum FuncGetDefaultDevGoalPlanTemplateId {
  name = "getDefaultDevGoalPlanTemplateId",
}

export type FuncGetDefaultDevGoalPlanTemplateIdReturn = number;

export enum FuncCheckUserPermission {
  name = "checkUserPermission",
  paramAccessUserId = "accessUserId",
  paramPermType = "permType",
  paramPermStringValue = "permStringValue",
  paramPermLongValue = "permLongValue",
  paramTargetUserId = "targetUserId",
  paramIncludeInactiveUser = "includeInactiveUser",
  paramIncludeTBHUser = "includeTBHUser",
}

export interface IFuncCheckUserPermissionParams {
  accessUserId: string;
  permType: string;
  permStringValue: string;
  permLongValue: number;
  targetUserId: string;
  includeInactiveUser: boolean;
  includeTBHUser: boolean;
}

export type FuncCheckUserPermissionReturn = boolean;

export enum FuncUpdateStaticGroup {
  name = "updateStaticGroup",
  paramGroupId = "groupId",
  paramAction = "action",
  paramUserIds = "userIds",
}

export interface IFuncUpdateStaticGroupParams {
  groupId: number;
  action: string;
  userIds: string;
}

export type FuncUpdateStaticGroupReturn = number;

export enum FuncGetDynamicGroupsByUser {
  name = "getDynamicGroupsByUser",
  paramUserId = "userId",
  paramGroupSubType = "groupSubType",
}

export interface IFuncGetDynamicGroupsByUserParams {
  userId: string;
  groupSubType: string;
}

export type FuncGetDynamicGroupsByUserReturn = IDynamicGroupBean[];

export enum FuncGetUsersByDynamicGroup {
  name = "getUsersByDynamicGroup",
  paramGroupId = "groupId",
  paramActiveOnly = "activeOnly",
}

export interface IFuncGetUsersByDynamicGroupParams {
  groupId: number;
  activeOnly: boolean;
}

export type FuncGetUsersByDynamicGroupReturn = IDynamicGroupUserBean[];

export enum FuncGetUserRolesReport {
  name = "getUserRolesReport",
  paramUserIds = "userIds",
}

export interface IFuncGetUserRolesReportParams {
  userIds: string;
}

export type FuncGetUserRolesReportReturn = string;

export enum FuncGetPermissionMetadata {
  name = "getPermissionMetadata",
  paramLocale = "locale",
}

export interface IFuncGetPermissionMetadataParams {
  locale: string;
}

export type FuncGetPermissionMetadataReturn = string;

export enum FuncGetUsersPermissions {
  name = "getUsersPermissions",
  paramUserIds = "userIds",
  paramLocale = "locale",
}

export interface IFuncGetUsersPermissionsParams {
  userIds: string;
  locale: string;
}

export type FuncGetUsersPermissionsReturn = string;

export enum FuncGetRolesPermissions {
  name = "getRolesPermissions",
  paramRoleIds = "roleIds",
  paramLocale = "locale",
}

export interface IFuncGetRolesPermissionsParams {
  roleIds: string;
  locale: string;
}

export type FuncGetRolesPermissionsReturn = string;

export enum ActionCheckUserPermissions {
  name = "checkUserPermissions",
}

export type ActionCheckUserPermissionsReturn = string;

export enum FuncGetExpandedDynamicGroupById {
  name = "getExpandedDynamicGroupById",
  paramGroupId = "groupId",
}

export interface IFuncGetExpandedDynamicGroupByIdParams {
  groupId: number;
}

export type FuncGetExpandedDynamicGroupByIdReturn = IDynamicGroup;

export enum FuncGetExpandedDynamicGroupByName {
  name = "getExpandedDynamicGroupByName",
  paramGroupName = "groupName",
}

export interface IFuncGetExpandedDynamicGroupByNameParams {
  groupName: string;
}

export type FuncGetExpandedDynamicGroupByNameReturn = IDynamicGroup;

export enum FuncGetExpandedDynamicGroupByNameAndSubType {
  name = "getExpandedDynamicGroupByNameAndSubType",
  paramGroupName = "groupName",
  paramGroupType = "groupType",
}

export interface IFuncGetExpandedDynamicGroupByNameAndSubTypeParams {
  groupName: string;
  groupType: string;
}

export type FuncGetExpandedDynamicGroupByNameAndSubTypeReturn = IDynamicGroup;

export enum FuncGetUserRolesByUserId {
  name = "getUserRolesByUserId",
  paramUserId = "userId",
}

export interface IFuncGetUserRolesByUserIdParams {
  userId: string;
}

export type FuncGetUserRolesByUserIdReturn = IRBPRole[];

export enum Entity {
  Entity = "sf.Entity",
  JobReqTemplate_Hiring_Requisition_Manual = "sf.JobReqTemplate_Hiring_Requisition_Manual",
  PaymentInformationDetailV3MWI = "sf.PaymentInformationDetailV3MWI",
  TimeTypeCAN = "sf.TimeTypeCAN",
  Goal_101 = "sf.Goal_101",
  JobRequisitionPostingFieldControls = "sf.JobRequisitionPostingFieldControls",
  JobRequisitionLocale = "sf.JobRequisitionLocale",
  GoalPermission_101 = "sf.GoalPermission_101",
  FormRatingScaleValue = "sf.FormRatingScaleValue",
  EmpEmploymentTermination = "sf.EmpEmploymentTermination",
  InnerMessage = "sf.InnerMessage",
  JobApplicationStatusLabel = "sf.JobApplicationStatusLabel",
  Cust_CC_AppConfig = "sf.cust_CC_AppConfig",
  SelfReportSkillMapping = "sf.SelfReportSkillMapping",
  SpotAwardProgramAdvancedSettings = "sf.SpotAwardProgramAdvancedSettings",
  Cust_CC_Note = "sf.cust_CC_Note",
  Cust_CC_ProfileTask = "sf.cust_CC_ProfileTask",
  TodoAction = "sf.TodoAction",
  SpotAward = "sf.SpotAward",
  UpsertResult = "sf.UpsertResult",
  CompanyProvisioner = "sf.CompanyProvisioner",
  InterviewOverallAssessment = "sf.InterviewOverallAssessment",
  SimpleDevGoal = "sf.SimpleDevGoal",
  ExternalLearnerPhoneInfo = "sf.ExternalLearnerPhoneInfo",
  EmployeeProfileBlockLink = "sf.EmployeeProfileBlockLink",
  GoalDetail = "sf.GoalDetail",
  LegalEntityARG = "sf.LegalEntityARG",
  EmployeeProfileSectionConfig = "sf.EmployeeProfileSectionConfig",
  PayScalePayComponent = "sf.PayScalePayComponent",
  Background_InsideWorkExperience = "sf.Background_InsideWorkExperience",
  CalibrationSessionSubject = "sf.CalibrationSessionSubject",
  PicklistLabel = "sf.PicklistLabel",
  TimeZone = "sf.TimeZone",
  EmployeeProfileBlockContent = "sf.EmployeeProfileBlockContent",
  TrendData_SysOverallPotential = "sf.TrendData_SysOverallPotential",
  GoalEnum = "sf.GoalEnum",
  DevLearningCertifications = "sf.DevLearningCertifications",
  PaymentInformationDetailV3JPN = "sf.PaymentInformationDetailV3JPN",
  PhysicalReqContent = "sf.PhysicalReqContent",
  OneTimeDeduction = "sf.OneTimeDeduction",
  TimeAccountType = "sf.TimeAccountType",
  DevGoal_2006 = "sf.DevGoal_2006",
  Todo = "sf.Todo",
  CalibrationSessionReviewer = "sf.CalibrationSessionReviewer",
  FOWfConfigStepApprover = "sf.FOWfConfigStepApprover",
  ExtEmailInfo = "sf.ExtEmailInfo",
  Cust_GER_Template = "sf.cust_GER_Template",
  PayrollConfigurationCategory = "sf.PayrollConfigurationCategory",
  ExternalLearnerPersonalInfo = "sf.ExternalLearnerPersonalInfo",
  DevGoal_2007 = "sf.DevGoal_2007",
  JobRequisitionPosting = "sf.JobRequisitionPosting",
  Cust_CC_JobProfile = "sf.cust_CC_JobProfile",
  CompetencyContent = "sf.CompetencyContent",
  DevGoal_2002 = "sf.DevGoal_2002",
  Background_Fsaelection = "sf.Background_Fsaelection",
  CandidateProfileExtension = "sf.CandidateProfileExtension",
  TimeTypeDEU = "sf.TimeTypeDEU",
  EmployeeTimeMEX = "sf.EmployeeTimeMEX",
  CustomNav = "sf.CustomNav",
  PerEmergencyContacts = "sf.PerEmergencyContacts",
  RecurringDeduction = "sf.RecurringDeduction",
  FormRouteStep = "sf.FormRouteStep",
  EmpTimeAccountBalance = "sf.EmpTimeAccountBalance",
  PickListV2 = "sf.PickListV2",
  JobRequisitionAssessment = "sf.JobRequisitionAssessment",
  FOJobClassLocalCAN = "sf.FOJobClassLocalCAN",
  JobClassificationITA = "sf.JobClassificationITA",
  JDTemplateFamilyMapping = "sf.JDTemplateFamilyMapping",
  SuccessStoreContentBlob = "sf.SuccessStoreContentBlob",
  CandidateTags = "sf.CandidateTags",
  TimeAccountPayoutProfile = "sf.TimeAccountPayoutProfile",
  DGField = "sf.DGField",
  PaymentInformationDetailV3NZL = "sf.PaymentInformationDetailV3NZL",
  FormCompetencySection = "sf.FormCompetencySection",
  ThemeConfig = "sf.ThemeConfig",
  EmpCompensation = "sf.EmpCompensation",
  Holiday = "sf.Holiday",
  TeamGoal_1000 = "sf.TeamGoal_1000",
  SkillEntity = "sf.SkillEntity",
  ONB2Process = "sf.ONB2Process",
  WorkflowAllowedActionList = "sf.WorkflowAllowedActionList",
  JobAnalyzerReportingData = "sf.JobAnalyzerReportingData",
  EmployeeTime = "sf.EmployeeTime",
  CalibrationSessionParticipantsInfo = "sf.CalibrationSessionParticipantsInfo",
  EmpCostDistributionItem = "sf.EmpCostDistributionItem",
  FOLegalEntityLocalDEFLT = "sf.FOLegalEntityLocalDEFLT",
  TimeAccountPostingRule = "sf.TimeAccountPostingRule",
  MDFBlockConfig = "sf.MDFBlockConfig",
  Background_PreferredNextMove = "sf.Background_PreferredNextMove",
  Attachment = "sf.Attachment",
  RBPBasicPermission = "sf.RBPBasicPermission",
  ONB2DataCollectionUserConfig = "sf.ONB2DataCollectionUserConfig",
  GoalTaskPermission_3 = "sf.GoalTaskPermission_3",
  GoalTaskPermission_2 = "sf.GoalTaskPermission_2",
  FormRouteMap = "sf.FormRouteMap",
  PaymentInformationDetailV3ISR = "sf.PaymentInformationDetailV3ISR",
  CandidateBackground_Education = "sf.CandidateBackground_Education",
  EmployeeTimeGroupItem = "sf.EmployeeTimeGroupItem",
  Achievement = "sf.Achievement",
  Form360ParticipantSection = "sf.Form360ParticipantSection",
  InformationDataSubjectConfiguration = "sf.InformationDataSubjectConfiguration",
  EmpPayCompNonRecurring = "sf.EmpPayCompNonRecurring",
  Form360Participant = "sf.Form360Participant",
  Background_Benefitselection = "sf.Background_Benefitselection",
  EmploymentConditionContent = "sf.EmploymentConditionContent",
  Candidate = "sf.Candidate",
  FormCustomizedWeightedRatingSection = "sf.FormCustomizedWeightedRatingSection",
  CandidateBackground_OutsideWorkExperience = "sf.CandidateBackground_OutsideWorkExperience",
  JobApplicationOnboardingData = "sf.JobApplicationOnboardingData",
  FormSignatureSection = "sf.FormSignatureSection",
  FOJobClassLocalITA = "sf.FOJobClassLocalITA",
  PayPeriod = "sf.PayPeriod",
  FOPayRange = "sf.FOPayRange",
  Cust_CC_UserComp = "sf.cust_CC_UserComp",
  JobProfile = "sf.JobProfile",
  JobApplicationBackgroundCheckRequest = "sf.JobApplicationBackgroundCheckRequest",
  RoleTalentPoolMappingEntity = "sf.RoleTalentPoolMappingEntity",
  JobApplicationQuestionResponse = "sf.JobApplicationQuestionResponse",
  Cust_GERFeature = "sf.cust_GERFeature",
  Cust_GERTemplateVariables = "sf.cust_GERTemplateVariables",
  JobApplicationStatusAuditTrail = "sf.JobApplicationStatusAuditTrail",
  PaymentInformationDetailV3IRQ = "sf.PaymentInformationDetailV3IRQ",
  FOCostCenter = "sf.FOCostCenter",
  PicklistOption = "sf.PicklistOption",
  LocalizedData = "sf.LocalizedData",
  PerPerson = "sf.PerPerson",
  FormCompetency = "sf.FormCompetency",
  Cust_CC_AppProperties = "sf.cust_CC_AppProperties",
  Cust_CC_User = "sf.cust_CC_User",
  DevGoalPermission_2007 = "sf.DevGoalPermission_2007",
  UserRewardInfo = "sf.UserRewardInfo",
  ContinuousFeedbackRequest = "sf.ContinuousFeedbackRequest",
  DevGoalPermission_2006 = "sf.DevGoalPermission_2006",
  EmployeeProfilePageConfig = "sf.EmployeeProfilePageConfig",
  TemporaryTimeInformation = "sf.TemporaryTimeInformation",
  DGFilter = "sf.DGFilter",
  TimeTypeProfile = "sf.TimeTypeProfile",
  DevGoalPermission_2002 = "sf.DevGoalPermission_2002",
  WfRequestStep = "sf.WfRequestStep",
  PayScaleLevel = "sf.PayScaleLevel",
  HireDateChange = "sf.HireDateChange",
  FOPayComponentGroup = "sf.FOPayComponentGroup",
  MarketingBrand = "sf.MarketingBrand",
  PhysicalReqEntity = "sf.PhysicalReqEntity",
  Background_FuncExperience = "sf.Background_FuncExperience",
  InterviewQuestionEntity = "sf.InterviewQuestionEntity",
  FOCorporateAddressDEFLT = "sf.FOCorporateAddressDEFLT",
  BehaviorMappingEntity = "sf.BehaviorMappingEntity",
  WfRequestUIData = "sf.WfRequestUIData",
  FormBehaviorRatingComment = "sf.FormBehaviorRatingComment",
  CandidateBackground_Mobility = "sf.CandidateBackground_Mobility",
  PaymentInformationDetailV3ZWE = "sf.PaymentInformationDetailV3ZWE",
  EmployeeProfileHeaderConfig = "sf.EmployeeProfileHeaderConfig",
  Background_Certificates = "sf.Background_Certificates",
  EmployeeTimeNLD = "sf.EmployeeTimeNLD",
  PerGlobalInfoDNK = "sf.PerGlobalInfoDNK",
  CandidateProfileConversionInfo = "sf.CandidateProfileConversionInfo",
  PaymentInformationDetailV3ITA = "sf.PaymentInformationDetailV3ITA",
  FamilyEntity = "sf.FamilyEntity",
  EmpGlobalAssignment = "sf.EmpGlobalAssignment",
  EmployeeDataReplicationConfirmation = "sf.EmployeeDataReplicationConfirmation",
  PersonKey = "sf.PersonKey",
  EmployeeTimePOL = "sf.EmployeeTimePOL",
  Goal_999 = "sf.Goal_999",
  Goal_998 = "sf.Goal_998",
  Cust_GER_PersonnelSubArea = "sf.cust_GER_PersonnelSubArea",
  RCMAdminReassignOfferApprover = "sf.RCMAdminReassignOfferApprover",
  ContinuousPerformanceUserPermission = "sf.ContinuousPerformanceUserPermission",
  FOJobCode = "sf.FOJobCode",
  WorkSchedule = "sf.WorkSchedule",
  Background_Googledocs = "sf.Background_Googledocs",
  PaymentInformationDetailV3CHL = "sf.PaymentInformationDetailV3CHL",
  LegalEntityESP = "sf.LegalEntityESP",
  Cust_GEHTemplate = "sf.cust_GEHTemplate",
  LegalEntityUSA = "sf.LegalEntityUSA",
  PerSocialAccount = "sf.PerSocialAccount",
  Cust_Performancedata = "sf.cust_Performancedata",
  ONB2ProcessTask = "sf.ONB2ProcessTask",
  Background_SysScoreCardDevelopmentObjectivesPortlet = "sf.Background_SysScoreCardDevelopmentObjectivesPortlet",
  UserAccount = "sf.UserAccount",
  PayrollSystemConfiguration = "sf.PayrollSystemConfiguration",
  RoleSkillMappingEntity = "sf.RoleSkillMappingEntity",
  Cust_CC_UserFuncComp = "sf.cust_CC_UserFuncComp",
  FormObjectiveSection = "sf.FormObjectiveSection",
  DevGoalAchievementsList = "sf.DevGoalAchievementsList",
  PaymentInformationDetailV3GBR = "sf.PaymentInformationDetailV3GBR",
  EmployeeProfileSubSectionConfig = "sf.EmployeeProfileSubSectionConfig",
  FOLegalEntityLocalDEU = "sf.FOLegalEntityLocalDEU",
  HolidayAssignment = "sf.HolidayAssignment",
  CustomPayTypeAssignment = "sf.CustomPayTypeAssignment",
  Cust_GEHApplication = "sf.cust_GEHApplication",
  JobReqFwdCandidates = "sf.JobReqFwdCandidates",
  Cust_CC_FuncComp = "sf.cust_CC_FuncComp",
  FormReviewerInfoSection = "sf.FormReviewerInfoSection",
  DGExpression = "sf.DGExpression",
  WorkOrder = "sf.WorkOrder",
  FormIntroductionSection = "sf.FormIntroductionSection",
  PayScaleArea = "sf.PayScaleArea",
  SkillContent = "sf.SkillContent",
  FormObjective = "sf.FormObjective",
  FormObjectiveOtherDetails = "sf.FormObjectiveOtherDetails",
  Form360ParticipantColumn = "sf.Form360ParticipantColumn",
  JobApplicationSnapshot_Languages = "sf.JobApplicationSnapshot_Languages",
  EmpJobRelationships = "sf.EmpJobRelationships",
  AlertMessage = "sf.AlertMessage",
  FormPMReviewContentDetail = "sf.FormPMReviewContentDetail",
  ShiftClassification = "sf.ShiftClassification",
  DevLearning_4201 = "sf.DevLearning_4201",
  PaymentMethodV3 = "sf.PaymentMethodV3",
  Position = "sf.Position",
  FOLocationGroup = "sf.FOLocationGroup",
  FOJobClassLocalFRA = "sf.FOJobClassLocalFRA",
  JobApplicationAssessmentReport = "sf.JobApplicationAssessmentReport",
  TodoCategory = "sf.TodoCategory",
  HolidayCalendar = "sf.HolidayCalendar",
  SpotAwardCategory = "sf.SpotAwardCategory",
  CurrencyExchangeRate = "sf.CurrencyExchangeRate",
  PerGlobalInfoNLD = "sf.PerGlobalInfoNLD",
  Form360SummaryViewSection = "sf.Form360SummaryViewSection",
  GoalAchievements = "sf.GoalAchievements",
  JobReqTemplate_EZHire_Simplified = "sf.JobReqTemplate_EZHire_Simplified",
  Cust_LegalEntityBEL = "sf.cust_LegalEntityBEL",
  ComplianceDocumentFlow = "sf.ComplianceDocumentFlow",
  PerAddressDEFLT = "sf.PerAddressDEFLT",
  FormObjectiveOtherDetailsItemValueCell = "sf.FormObjectiveOtherDetailsItemValueCell",
  PerGlobalInfoARE = "sf.PerGlobalInfoARE",
  HolidayCategory = "sf.HolidayCategory",
  Form360ParticipantConfig = "sf.Form360ParticipantConfig",
  AdvancesEligibility = "sf.AdvancesEligibility",
  GoalPermission_999 = "sf.GoalPermission_999",
  RelevantIndustryContent = "sf.RelevantIndustryContent",
  PersonEmpTerminationInfo = "sf.PersonEmpTerminationInfo",
  ONB2ProcessTrigger = "sf.ONB2ProcessTrigger",
  GoalPermission_998 = "sf.GoalPermission_998",
  PerGlobalInfoSWE = "sf.PerGlobalInfoSWE",
  CandidateBackground_GlobalInfo = "sf.CandidateBackground_GlobalInfo",
  FormRouteSubStep = "sf.FormRouteSubStep",
  ActivityStatus = "sf.ActivityStatus",
  Background_VarPayEmpHistData = "sf.Background_VarPayEmpHistData",
  PerPersonRelationship = "sf.PerPersonRelationship",
  FormItemConfiguration = "sf.FormItemConfiguration",
  DeductionScreenId = "sf.DeductionScreenId",
  RcmCompetency = "sf.RcmCompetency",
  InitiativeAlignmentBean = "sf.InitiativeAlignmentBean",
  JobRequisition = "sf.JobRequisition",
  CandidateBackground_InsideWorkExperience = "sf.CandidateBackground_InsideWorkExperience",
  MentoringProgramParticipantInfo = "sf.MentoringProgramParticipantInfo",
  TalentPool = "sf.TalentPool",
  WorkScheduleDayModel = "sf.WorkScheduleDayModel",
  Goal_1 = "sf.Goal_1",
  Goal_3 = "sf.Goal_3",
  JobApplicationInterview = "sf.JobApplicationInterview",
  Goal_2 = "sf.Goal_2",
  Background_Documents = "sf.Background_Documents",
  Goal_5 = "sf.Goal_5",
  Goal_4 = "sf.Goal_4",
  Goal_6 = "sf.Goal_6",
  FormContent = "sf.FormContent",
  ExternalUser = "sf.ExternalUser",
  EMEventPayload = "sf.EMEventPayload",
  PaymentInformationDetailV3MOZ = "sf.PaymentInformationDetailV3MOZ",
  FOPayComponent = "sf.FOPayComponent",
  PaymentInformationV3 = "sf.PaymentInformationV3",
  GoalTask_2 = "sf.GoalTask_2",
  GoalTask_3 = "sf.GoalTask_3",
  EmployeeProfileFieldConfig = "sf.EmployeeProfileFieldConfig",
  OfferLetter = "sf.OfferLetter",
  FormJobRole = "sf.FormJobRole",
  SimpleGoal = "sf.SimpleGoal",
  JobApplicationAssessmentOrder = "sf.JobApplicationAssessmentOrder",
  JobClassificationUSA = "sf.JobClassificationUSA",
  PayrollDataMaintenanceTask = "sf.PayrollDataMaintenanceTask",
  JobReqScreeningQuestion = "sf.JobReqScreeningQuestion",
  Background_Awards = "sf.Background_Awards",
  AutoDelegateConfig = "sf.AutoDelegateConfig",
  SecondaryAssignments = "sf.SecondaryAssignments",
  ThemeInfo = "sf.ThemeInfo",
  JobRequisitionGroupOperator = "sf.JobRequisitionGroupOperator",
  DevGoalDetail = "sf.DevGoalDetail",
  FoTranslation = "sf.FoTranslation",
  CurrencyConversion = "sf.CurrencyConversion",
  JobReqFOLocation = "sf.JobReqFOLocation",
  TimeAccountPurchaseProfilePayComponentAssignment = "sf.TimeAccountPurchaseProfilePayComponentAssignment",
  RoleCompetencyBehaviorMappingEntity = "sf.RoleCompetencyBehaviorMappingEntity",
  FormReviewFeedback = "sf.FormReviewFeedback",
  JobApplicationBackgroundCheckResult = "sf.JobApplicationBackgroundCheckResult",
  SpotAwardBudget = "sf.SpotAwardBudget",
  FOJobClassLocalUSA = "sf.FOJobClassLocalUSA",
  WorkScheduleDayModelAssignment = "sf.WorkScheduleDayModelAssignment",
  JobApplicationAudit = "sf.JobApplicationAudit",
  Cust_CC_UserCompDocument = "sf.cust_CC_UserCompDocument",
  GoalPlanTemplate = "sf.GoalPlanTemplate",
  FormFolder = "sf.FormFolder",
  CPMNotificationConfig = "sf.CPMNotificationConfig",
  AssignedComplianceForm = "sf.AssignedComplianceForm",
  Cust_GER_PersonnelArea = "sf.cust_GER_PersonnelArea",
  WorkScheduleDay = "sf.WorkScheduleDay",
  MyPendingWorkflow = "sf.MyPendingWorkflow",
  CalibrationSubjectComment = "sf.CalibrationSubjectComment",
  TimeAccount = "sf.TimeAccount",
  ComplianceFormSignature = "sf.ComplianceFormSignature",
  EmployeeTimeCOL = "sf.EmployeeTimeCOL",
  RecurringDeductionItem = "sf.RecurringDeductionItem",
  EducationDegreeEntity = "sf.EducationDegreeEntity",
  EmployeeTimeESP = "sf.EmployeeTimeESP",
  Background_OutsideWorkExperience = "sf.Background_OutsideWorkExperience",
  AchievementDevGoalDetail = "sf.AchievementDevGoalDetail",
  SpotAwardGuidelinesRule = "sf.SpotAwardGuidelinesRule",
  EmployeeTimeUSA = "sf.EmployeeTimeUSA",
  Form360SummaryViewCategory = "sf.Form360SummaryViewCategory",
  MDFLocalizedValue = "sf.MDFLocalizedValue",
  FOLocation = "sf.FOLocation",
  FOWfConfig = "sf.FOWfConfig",
  Background_Courses = "sf.Background_Courses",
  MDFTenantPreferredTimeZone = "sf.MDFTenantPreferredTimeZone",
  DGPeoplePool = "sf.DGPeoplePool",
  PayrollDataMaintenanceTaskConfiguration = "sf.PayrollDataMaintenanceTaskConfiguration",
  RBPRule = "sf.RBPRule",
  SAPSystemConfiguration = "sf.SAPSystemConfiguration",
  JobReqTemplate_Hiring_Requisition_with_Position = "sf.JobReqTemplate_Hiring_Requisition_with_Position",
  JobResponsibilityContent = "sf.JobResponsibilityContent",
  FormTemplate = "sf.FormTemplate",
  Cust_GERReqTempl = "sf.cust_GERReqTempl",
  GoalMilestonePermission_3 = "sf.GoalMilestonePermission_3",
  CompetencyType = "sf.CompetencyType",
  JobOfferApprover = "sf.JobOfferApprover",
  ONB2BuddyActivity = "sf.ONB2BuddyActivity",
  BudgetGroup = "sf.BudgetGroup",
  RatedSkillMapping = "sf.RatedSkillMapping",
  ONB2EquipmentType = "sf.ONB2EquipmentType",
  UserPermissions = "sf.UserPermissions",
  JobApplicationFieldControls = "sf.JobApplicationFieldControls",
  LegalEntityRUS = "sf.LegalEntityRUS",
  Cust_GERReqTemplField = "sf.cust_GERReqTemplField",
  JobClassificationFRA = "sf.JobClassificationFRA",
  PaymentInformationDetailV3ECU = "sf.PaymentInformationDetailV3ECU",
  PaymentMethodAssignmentV3 = "sf.PaymentMethodAssignmentV3",
  GoalMilestonePermission_2 = "sf.GoalMilestonePermission_2",
  FormAuditTrail = "sf.FormAuditTrail",
  PaymentInformationDetailV3VEN = "sf.PaymentInformationDetailV3VEN",
  DevGoalEnum = "sf.DevGoalEnum",
  PaymentInformationDetailV3GHA = "sf.PaymentInformationDetailV3GHA",
  SpotAwardProgram = "sf.SpotAwardProgram",
  EmployeeDataReplicationNotification = "sf.EmployeeDataReplicationNotification",
  FOJobClassLocalDEFLT = "sf.FOJobClassLocalDEFLT",
  Background_Education = "sf.Background_Education",
  ThemeTemplate = "sf.ThemeTemplate",
  ExtAddressInfo = "sf.ExtAddressInfo",
  MentoringProgram = "sf.MentoringProgram",
  FormCompetencyBehavior = "sf.FormCompetencyBehavior",
  CalibrationTemplate = "sf.CalibrationTemplate",
  FOLegalEntityLocalFRA = "sf.FOLegalEntityLocalFRA",
  JobApplicationSnapshot_GlobalInfo = "sf.JobApplicationSnapshot_GlobalInfo",
  EmpJob = "sf.EmpJob",
  Activity = "sf.Activity",
  InterviewIndividualAssessment = "sf.InterviewIndividualAssessment",
  JobOfferTemplate_Offer_Detail_Template = "sf.JobOfferTemplate_Offer_Detail_Template",
  FOBusinessUnit = "sf.FOBusinessUnit",
  PickListValueV2 = "sf.PickListValueV2",
  JobClassificationAUS = "sf.JobClassificationAUS",
  GoalAchievementsList = "sf.GoalAchievementsList",
  DigitalSupportIncident = "sf.DigitalSupportIncident",
  JobOffer = "sf.JobOffer",
  Cust_CC_ProfileAssignment = "sf.cust_CC_ProfileAssignment",
  FOEventReason = "sf.FOEventReason",
  Currency = "sf.Currency",
  FormJobDescSection = "sf.FormJobDescSection",
  TimeAccountDetail = "sf.TimeAccountDetail",
  VendorInfo = "sf.VendorInfo",
  TalentGraphicOption = "sf.TalentGraphicOption",
  DevGoalAchievements = "sf.DevGoalAchievements",
  PaymentInformationDetailV3TUN = "sf.PaymentInformationDetailV3TUN",
  Cust_CC_RatingExplanation = "sf.cust_CC_RatingExplanation",
  FormObjectiveOtherDetailsItemCol = "sf.FormObjectiveOtherDetailsItemCol",
  AchievementGoalDetail = "sf.AchievementGoalDetail",
  Cust_GERReqTemplOperator = "sf.cust_GERReqTemplOperator",
  EmployeeDataReplicationConfirmationErrorMessage = "sf.EmployeeDataReplicationConfirmationErrorMessage",
  PaymentInformationDetailV3BRA = "sf.PaymentInformationDetailV3BRA",
  EPPublicProfile = "sf.EPPublicProfile",
  JobRequisitionOperator = "sf.JobRequisitionOperator",
  FOJobClassLocalBRA = "sf.FOJobClassLocalBRA",
  EducationMajorEntity = "sf.EducationMajorEntity",
  PerPhone = "sf.PerPhone",
  JobOfferFieldControls = "sf.JobOfferFieldControls",
  EmpPayCompRecurring = "sf.EmpPayCompRecurring",
  FormPerfPotSummarySection = "sf.FormPerfPotSummarySection",
  GoalPermission_1000 = "sf.GoalPermission_1000",
  PayrollDataMaintenanceTaskTypeConfiguration = "sf.PayrollDataMaintenanceTaskTypeConfiguration",
  EmployeeTimeDEU = "sf.EmployeeTimeDEU",
  PaymentInformationDetailV3MEX = "sf.PaymentInformationDetailV3MEX",
  EducationMajorContent = "sf.EducationMajorContent",
  ONB2EquipmentTypeValue = "sf.ONB2EquipmentTypeValue",
  Form360ReviewContentDetail = "sf.Form360ReviewContentDetail",
  DGFieldValue = "sf.DGFieldValue",
  ActivityFeedback = "sf.ActivityFeedback",
  ElectronicSicknessCertificateExclusionReasonDEU = "sf.ElectronicSicknessCertificateExclusionReasonDEU",
  GoalWeight = "sf.GoalWeight",
  EmpWorkPermit = "sf.EmpWorkPermit",
  FormHeader = "sf.FormHeader",
  FormCustomElementListValue = "sf.FormCustomElementListValue",
  FormCustomSection = "sf.FormCustomSection",
  Bank = "sf.Bank",
  MentoringProgramMatchedParticipant = "sf.MentoringProgramMatchedParticipant",
  Background_Languages = "sf.Background_Languages",
  InterviewQuestionContent = "sf.InterviewQuestionContent",
  FormSignature = "sf.FormSignature",
  CompetencyEntity = "sf.CompetencyEntity",
  JobApplicationInterviewFieldControls = "sf.JobApplicationInterviewFieldControls",
  EPCustomBackgroundPortlet = "sf.EPCustomBackgroundPortlet",
  FeedbackFlag = "sf.FeedbackFlag",
  FormUserRatingComment = "sf.FormUserRatingComment",
  PersonTypeUsage = "sf.PersonTypeUsage",
  RBPRole = "sf.RBPRole",
  FODivision = "sf.FODivision",
  CertificationEntity = "sf.CertificationEntity",
  PaymentInformationDetailV3SUR = "sf.PaymentInformationDetailV3SUR",
  DigitalSupportSystemInformation = "sf.DigitalSupportSystemInformation",
  WfRequestComments = "sf.WfRequestComments",
  EmployeeTimeCAN = "sf.EmployeeTimeCAN",
  EmployeePayrollRunResults = "sf.EmployeePayrollRunResults",
  CustomPayType = "sf.CustomPayType",
  FOCompany = "sf.FOCompany",
  EmployeeDataReplicationElement = "sf.EmployeeDataReplicationElement",
  PaymentInformationDetailV3ZAF = "sf.PaymentInformationDetailV3ZAF",
  LegalEntityDEU = "sf.LegalEntityDEU",
  JobApplicationAssessmentReportDetail = "sf.JobApplicationAssessmentReportDetail",
  Form360SummaryViewRater = "sf.Form360SummaryViewRater",
  EmpEmployment = "sf.EmpEmployment",
  CompetencyRating = "sf.CompetencyRating",
  JobApplicationStatus = "sf.JobApplicationStatus",
  InlineResult = "sf.InlineResult",
  PayScaleGroup = "sf.PayScaleGroup",
  ExtPersonalInfo = "sf.ExtPersonalInfo",
  FODepartment = "sf.FODepartment",
  FormSummarySection = "sf.FormSummarySection",
  FormRaterListSection = "sf.FormRaterListSection",
  Background_SpecialAssign = "sf.Background_SpecialAssign",
  JobApplicationOnboardingStatus = "sf.JobApplicationOnboardingStatus",
  SpotAwardRedemption = "sf.SpotAwardRedemption",
  DynamicGroup = "sf.DynamicGroup",
  SecondaryAssignmentsItem = "sf.SecondaryAssignmentsItem",
  Cust_CC_Group = "sf.cust_CC_Group",
  PayrollDataMaintenanceTaskTypeLinkConfiguration = "sf.PayrollDataMaintenanceTaskTypeLinkConfiguration",
  JobRequisitionFieldControls = "sf.JobRequisitionFieldControls",
  Photo = "sf.Photo",
  JobCodeMappingEntity = "sf.JobCodeMappingEntity",
  FOLegalEntityLocalUSA = "sf.FOLegalEntityLocalUSA",
  PaymentInformationDetailV3MKD = "sf.PaymentInformationDetailV3MKD",
  FOLegalEntityLocalESP = "sf.FOLegalEntityLocalESP",
  CalibrationSubjectRank = "sf.CalibrationSubjectRank",
  OnboardingInfo = "sf.OnboardingInfo",
  Cust_GERBrand = "sf.cust_GERBrand",
  PositionSkillMappingEntity = "sf.PositionSkillMappingEntity",
  JobRequisitionLocaleFieldControls = "sf.JobRequisitionLocaleFieldControls",
  PerGlobalInfoPRT = "sf.PerGlobalInfoPRT",
  FamilyCompetencyMappingEntity = "sf.FamilyCompetencyMappingEntity",
  JobApplicationSnapshot_Education = "sf.JobApplicationSnapshot_Education",
  FormObjCompSummarySection = "sf.FormObjCompSummarySection",
  FOPayGrade = "sf.FOPayGrade",
  JobProfileLocalizedData = "sf.JobProfileLocalizedData",
  PaymentInformationDetailV3ARG = "sf.PaymentInformationDetailV3ARG",
  AbsenceCountingMethod = "sf.AbsenceCountingMethod",
  PaymentInformationDetailV3KEN = "sf.PaymentInformationDetailV3KEN",
  Territory = "sf.Territory",
  ExternalLearner = "sf.ExternalLearner",
  CertificationContent = "sf.CertificationContent",
  PerGlobalInfoNOR = "sf.PerGlobalInfoNOR",
  EMEventAttribute = "sf.EMEventAttribute",
  Cust_GER_PersonnelUnit = "sf.cust_GER_PersonnelUnit",
  PaymentInformationDetailV3SVN = "sf.PaymentInformationDetailV3SVN",
  SpotAwardRedemptionProduct = "sf.SpotAwardRedemptionProduct",
  PaymentInformationDetailV3SVK = "sf.PaymentInformationDetailV3SVK",
  CandidateEmployeeReferral = "sf.CandidateEmployeeReferral",
  NonRecurringPayment = "sf.NonRecurringPayment",
  TrendData_SysOverallPerformance = "sf.TrendData_SysOverallPerformance",
  SuccessStoreContent = "sf.SuccessStoreContent",
  MDFEnumValue = "sf.MDFEnumValue",
  AccrualCalculationBase = "sf.AccrualCalculationBase",
  SpotAwardRedemptionOrder = "sf.SpotAwardRedemptionOrder",
  PaymentInformationDetailV3 = "sf.PaymentInformationDetailV3",
  TimeTypeUSA = "sf.TimeTypeUSA",
  PaymentInformationDetailV3PRY = "sf.PaymentInformationDetailV3PRY",
  Background_Compensation = "sf.Background_Compensation",
  JobAppTemplate_EZHire_Simplified_Candidate_Detail_Info_Template = "sf.JobAppTemplate_EZHire_Simplified_Candidate_Detail_Info_Template",
  FOGeozone = "sf.FOGeozone",
  Form360ParticipantCategory = "sf.Form360ParticipantCategory",
  JobReqScreeningQuestionChoice = "sf.JobReqScreeningQuestionChoice",
  SkillProfile = "sf.SkillProfile",
  WfRequestParticipator = "sf.WfRequestParticipator",
  Successor = "sf.Successor",
  TimeAccountSnapshot = "sf.TimeAccountSnapshot",
  Form360Rater = "sf.Form360Rater",
  TeamGoalOwner = "sf.TeamGoalOwner",
  PaymentInformationDetailV3CZE = "sf.PaymentInformationDetailV3CZE",
  PerGlobalInfoGBR = "sf.PerGlobalInfoGBR",
  JobDescTemplate = "sf.JobDescTemplate",
  PaymentInformationDetailV3MMR = "sf.PaymentInformationDetailV3MMR",
  DevGoalPlanTemplate = "sf.DevGoalPlanTemplate",
  ComplianceProcessTask = "sf.ComplianceProcessTask",
  Cust_CC_ProfileComp = "sf.cust_CC_ProfileComp",
  AdvancesAccumulation = "sf.AdvancesAccumulation",
  GoalPermission_5 = "sf.GoalPermission_5",
  GoalPermission_6 = "sf.GoalPermission_6",
  GoalPermission_3 = "sf.GoalPermission_3",
  GoalPermission_4 = "sf.GoalPermission_4",
  GoalPermission_1 = "sf.GoalPermission_1",
  FOFrequency = "sf.FOFrequency",
  TimeAccountTypeAUS = "sf.TimeAccountTypeAUS",
  GoalPermission_2 = "sf.GoalPermission_2",
  EducationDegreeContent = "sf.EducationDegreeContent",
  GoalPlanState = "sf.GoalPlanState",
  AvailableTimeType = "sf.AvailableTimeType",
  JobClassificationZAF = "sf.JobClassificationZAF",
  ExternalLearnerAddressInfo = "sf.ExternalLearnerAddressInfo",
  DevGoalCompetency = "sf.DevGoalCompetency",
  AdvancesInstallments = "sf.AdvancesInstallments",
  Cust_CC_Task = "sf.cust_CC_Task",
  EmploymentConditionEntity = "sf.EmploymentConditionEntity",
  JobClassificationBRA = "sf.JobClassificationBRA",
  PositionMatrixRelationship = "sf.PositionMatrixRelationship",
  FormReviewInfoSection = "sf.FormReviewInfoSection",
  Background_Promotability = "sf.Background_Promotability",
  PerNationalId = "sf.PerNationalId",
  ReplicationTargetSystem = "sf.ReplicationTargetSystem",
  FormObjectiveOtherDetailsItem = "sf.FormObjectiveOtherDetailsItem",
  TimeAccountPurchaseProfile = "sf.TimeAccountPurchaseProfile",
  PersonType = "sf.PersonType",
  DomainEventAlert = "sf.DomainEventAlert",
  Cust_CC_Competency = "sf.cust_CC_Competency",
  RoleEntity = "sf.RoleEntity",
  Cust_CC_Classification = "sf.cust_CC_Classification",
  FormObjectiveDetails = "sf.FormObjectiveDetails",
  JobDescSection = "sf.JobDescSection",
  GoalMilestone_3 = "sf.GoalMilestone_3",
  FOJobClassLocalGBR = "sf.FOJobClassLocalGBR",
  PayrollConfigurationCategoryLink = "sf.PayrollConfigurationCategoryLink",
  GoalMilestone_2 = "sf.GoalMilestone_2",
  EmpWfRequest = "sf.EmpWfRequest",
  FormRatingScale = "sf.FormRatingScale",
  WfRequest = "sf.WfRequest",
  ComplianceProcess = "sf.ComplianceProcess",
  PerEmail = "sf.PerEmail",
  PerGlobalInfoIRL = "sf.PerGlobalInfoIRL",
  PositionEntity = "sf.PositionEntity",
  JobApplicationSnapshot_OutsideWorkExperience = "sf.JobApplicationSnapshot_OutsideWorkExperience",
  CandidateBackground_Languages = "sf.CandidateBackground_Languages",
  Cust_CC_UserTask = "sf.cust_CC_UserTask",
  AutoDelegateDetail = "sf.AutoDelegateDetail",
  CalibrationSession = "sf.CalibrationSession",
  Form360RaterSection = "sf.Form360RaterSection",
  EmployeePayrollRunResultsItems = "sf.EmployeePayrollRunResultsItems",
  Country = "sf.Country",
  EmployeeTimeGroup = "sf.EmployeeTimeGroup",
  PayCalendar = "sf.PayCalendar",
  FormCustomElement = "sf.FormCustomElement",
  JobClassificationCAN = "sf.JobClassificationCAN",
  JobApplicationComments = "sf.JobApplicationComments",
  FormObjectiveComment = "sf.FormObjectiveComment",
  FOLegalEntityLocalARG = "sf.FOLegalEntityLocalARG",
  ExtPhoneInfo = "sf.ExtPhoneInfo",
  FOJobClassLocalAUS = "sf.FOJobClassLocalAUS",
  PositionRightToReturn = "sf.PositionRightToReturn",
  EmpCompensationCalculated = "sf.EmpCompensationCalculated",
  PositionCompetencyMappingEntity = "sf.PositionCompetencyMappingEntity",
  Background_Community = "sf.Background_Community",
  PaymentInformationDetailV3FRA = "sf.PaymentInformationDetailV3FRA",
  PaymentInformationDetailV3NAM = "sf.PaymentInformationDetailV3NAM",
  Cust_CC_VariantSearch = "sf.cust_CC_VariantSearch",
  ComplianceFormDataFieldValue = "sf.ComplianceFormDataFieldValue",
  PaymentInformationDetailV3PER = "sf.PaymentInformationDetailV3PER",
  LegalEntityFRA = "sf.LegalEntityFRA",
  ComplianceUserFormData = "sf.ComplianceUserFormData",
  FODynamicRole = "sf.FODynamicRole",
  ONB2EquipmentActivity = "sf.ONB2EquipmentActivity",
  EmployeeTimeAUS = "sf.EmployeeTimeAUS",
  FamilySkillMappingEntity = "sf.FamilySkillMappingEntity",
  PerPersonal = "sf.PerPersonal",
  Cust_CC_SolutionRoleGroupConfig = "sf.cust_CC_SolutionRoleGroupConfig",
  EmployeeTimeCalendar = "sf.EmployeeTimeCalendar",
  MessageDetail = "sf.MessageDetail",
  JobReqQuestion = "sf.JobReqQuestion",
  Form360ParticipantDetail = "sf.Form360ParticipantDetail",
  DRTMPurgeFreeze = "sf.DRTMPurgeFreeze",
  Background_LeadExperience = "sf.Background_LeadExperience",
  EmpCostDistribution = "sf.EmpCostDistribution",
  SpotAwardEligibilityRule = "sf.SpotAwardEligibilityRule",
  JobApplication = "sf.JobApplication",
  JobApplicationSnapshot_InsideWorkExperience = "sf.JobApplicationSnapshot_InsideWorkExperience",
  TrendData_SysOverallObjective = "sf.TrendData_SysOverallObjective",
  DGFieldOperator = "sf.DGFieldOperator",
  GoalMetricLookupPermission_5 = "sf.GoalMetricLookupPermission_5",
  PaymentInformationDetailV3ESP = "sf.PaymentInformationDetailV3ESP",
  RelevantIndustryEntity = "sf.RelevantIndustryEntity",
  PaymentInformationDetailV3USA = "sf.PaymentInformationDetailV3USA",
  Picklist = "sf.Picklist",
  PaymentInformationDetailV3COL = "sf.PaymentInformationDetailV3COL",
  GoalMetricLookupPermission_4 = "sf.GoalMetricLookupPermission_4",
  TrendData_SysOverallCompetency = "sf.TrendData_SysOverallCompetency",
  NomineeHistory = "sf.NomineeHistory",
  ContinuousFeedback = "sf.ContinuousFeedback",
  PayScaleType = "sf.PayScaleType",
  Background_Mobility = "sf.Background_Mobility",
  TimeTypeNLD = "sf.TimeTypeNLD",
  Goal_1000 = "sf.Goal_1000",
  LegacyPositionEntity = "sf.LegacyPositionEntity",
  Advance = "sf.Advance",
  EMEvent = "sf.EMEvent",
  Cust_GEH_templateField = "sf.cust_GEH_templateField",
  JobResponsibilityEntity = "sf.JobResponsibilityEntity",
  PerGlobalInfoSAU = "sf.PerGlobalInfoSAU",
  Background_VarPayEmpHistData_GPS = "sf.Background_VarPayEmpHistData_GPS",
  DataReplicationProxy = "sf.DataReplicationProxy",
  ExternalLearnerEmailInfo = "sf.ExternalLearnerEmailInfo",
  JobReqGOPosition = "sf.JobReqGOPosition",
  ComplianceFormData = "sf.ComplianceFormData",
  WorkScheduleDayModelAssignmentSegment = "sf.WorkScheduleDayModelAssignmentSegment",
  Background_Memberships = "sf.Background_Memberships",
  JobApplicationSnapshot_Mobility = "sf.JobApplicationSnapshot_Mobility",
  PaymentInformationDetailV3BLR = "sf.PaymentInformationDetailV3BLR",
  RightToReturn = "sf.RightToReturn",
  JobClassificationCountry = "sf.JobClassificationCountry",
  TalentRatings = "sf.TalentRatings",
  User = "sf.User",
  Cust_GERApplication = "sf.cust_GERApplication",
  FOPayGroup = "sf.FOPayGroup",
  JobClassificationGBR = "sf.JobClassificationGBR",
  FormUserInformationSection = "sf.FormUserInformationSection",
  PaymentInformationDetailV3BOL = "sf.PaymentInformationDetailV3BOL",
  TimeManagementAlert = "sf.TimeManagementAlert",
  PerGlobalInfoFIN = "sf.PerGlobalInfoFIN",
  TimeType = "sf.TimeType",
  Cust_GERConfig = "sf.cust_GERConfig",
  CandidateComments = "sf.CandidateComments",
  TodoEntryV3 = "sf.TodoEntryV3",
  FormSectionConfiguration = "sf.FormSectionConfiguration",
  TodoEntryV2 = "sf.TodoEntryV2",
  JobReqTemplate_EZHireTemplate = "sf.JobReqTemplate_EZHireTemplate",
  PaymentInformationDetailV3NGA = "sf.PaymentInformationDetailV3NGA",
  RoleCompetencyMappingEntity = "sf.RoleCompetencyMappingEntity",
  FOJobFunction = "sf.FOJobFunction",
  SpotAwardLevel = "sf.SpotAwardLevel",
  TimeManagementAlertMessage = "sf.TimeManagementAlertMessage",
  EmpCompensationGroupSumCalculated = "sf.EmpCompensationGroupSumCalculated",
  Cust_compensationEligibility = "sf.cust_compensationEligibility",
  JobAppTemplate_Candidate_Detail_Info_Template = "sf.JobAppTemplate_Candidate_Detail_Info_Template",
  CandidateLight = "sf.CandidateLight",
  GoalMetricLookup_4 = "sf.GoalMetricLookup_4",
  HRISChangeLogDataReplication = "sf.HRISChangeLogDataReplication",
  GoalMetricLookup_5 = "sf.GoalMetricLookup_5",
  WorkScheduleDayModelSegment = "sf.WorkScheduleDayModelSegment",
  EMMonitoredProcess = "sf.EMMonitoredProcess",
  FormReviewFeedbackList = "sf.FormReviewFeedbackList",
  PerGlobalInfoDEU = "sf.PerGlobalInfoDEU",
  TimeTypeAUS = "sf.TimeTypeAUS",
  NominationTarget = "sf.NominationTarget",
  Map_entry_string_string_ = "sf.map_entry_string_string_",
  Localstring = "sf.localstring",
  Type = "sf.Type",
  Multiplicity = "sf.multiplicity",
  Association_end = "sf.association_end",
  Association = "sf.association",
  Navigation = "sf.navigation",
  Property = "sf.property",
  RuleFieldMappingBean = "sf.RuleFieldMappingBean",
  RuleFieldMappingBeanList = "sf.RuleFieldMappingBeanList",
  ThemeUrlsBean = "sf.ThemeUrlsBean",
  ThemeFingerprintsBean = "sf.ThemeFingerprintsBean",
  AccessibilityPreferences = "sf.AccessibilityPreferences",
  ThemeColor = "sf.ThemeColor",
  ThemeURL = "sf.ThemeURL",
  ThemeBackgroundConfig = "sf.ThemeBackgroundConfig",
  ThemeButtonConfig = "sf.ThemeButtonConfig",
  ThemeCardConfig = "sf.ThemeCardConfig",
  ThemeContentConfig = "sf.ThemeContentConfig",
  ThemeDiagramConfig = "sf.ThemeDiagramConfig",
  ThemeExternalConfig = "sf.ThemeExternalConfig",
  ThemeFooterConfig = "sf.ThemeFooterConfig",
  ThemeHeaderBackgroundConfig = "sf.ThemeHeaderBackgroundConfig",
  ThemeHighlightConfig = "sf.ThemeHighlightConfig",
  ThemeHomepageConfig = "sf.ThemeHomepageConfig",
  ThemeLoginBackgroundConfig = "sf.ThemeLoginBackgroundConfig",
  ThemeLoginLogoConfig = "sf.ThemeLoginLogoConfig",
  ThemeLoginConfig = "sf.ThemeLoginConfig",
  ThemeLogoConfig = "sf.ThemeLogoConfig",
  ThemeMenuConfig = "sf.ThemeMenuConfig",
  ThemeModulePickerConfig = "sf.ThemeModulePickerConfig",
  ThemeNavigationConfig = "sf.ThemeNavigationConfig",
  ThemePlacematConfig = "sf.ThemePlacematConfig",
  ThemePortletConfig = "sf.ThemePortletConfig",
  ThemeTableConfig = "sf.ThemeTableConfig",
  ThemeTileConfig = "sf.ThemeTileConfig",
  ThemeLandingPageConfig = "sf.ThemeLandingPageConfig",
  ThemeLandingPageTileConfig = "sf.ThemeLandingPageTileConfig",
  GlobalThemeConfiguration = "sf.GlobalThemeConfiguration",
  GetBizXActionResponse = "sf.GetBizXActionResponse",
  GenerateNextPersonIDResponse = "sf.GenerateNextPersonIDResponse",
  WfRequestActionResponse = "sf.WfRequestActionResponse",
  ChangeDataBean = "sf.ChangeDataBean",
  PendingDataAttributeBean = "sf.PendingDataAttributeBean",
  EssMssWorkflowAttributeBean = "sf.EssMssWorkflowAttributeBean",
  EssMssWorkflowSubAttributeBean = "sf.EssMssWorkflowSubAttributeBean",
  PendDataInlineGroupBean = "sf.PendDataInlineGroupBean",
  PendDataGroupBean = "sf.PendDataGroupBean",
  EssMssWorkflowAttributeGroupBean = "sf.EssMssWorkflowAttributeGroupBean",
  WfRequestPendingDataResponse = "sf.WfRequestPendingDataResponse",
  Map_entry_string_ComplianceDataVO_ = "sf.map_entry_string_ComplianceDataVO_",
  DocumentCategoryDetails = "sf.DocumentCategoryDetails",
  DocumentCategories = "sf.DocumentCategories",
  COSocialAccountBean = "sf.COSocialAccountBean",
  COUserInfoElementBean = "sf.COUserInfoElementBean",
  PeopleProfileHeaderResponse = "sf.PeopleProfileHeaderResponse",
  EPCustomBackgroundPortletProperty = "sf.EPCustomBackgroundPortletProperty",
  InviteToApplyResponse = "sf.InviteToApplyResponse",
  Map_entry_string_AgencyLocaleDetails_ = "sf.map_entry_string_AgencyLocaleDetails_",
  CORouteFormStatusBean = "sf.CORouteFormStatusBean",
  CreatePerformanceReviewFormResponse = "sf.CreatePerformanceReviewFormResponse",
  ToDoEntry = "sf.ToDoEntry",
  ToDoBean = "sf.ToDoBean",
  GetMatchedGuideLineRuleInfoResponse = "sf.GetMatchedGuideLineRuleInfoResponse",
  IsUserEligibleForSpotAwardProgramResponse = "sf.IsUserEligibleForSpotAwardProgramResponse",
  GetEligibleSpotAwardsProgramCodesResponse = "sf.GetEligibleSpotAwardsProgramCodesResponse",
  ONB2RehireCheckParams = "sf.ONB2RehireCheckParams",
  ONB2OnboardeeDetails = "sf.ONB2OnboardeeDetails",
  ONB2ExternalHRISHiringUpdate = "sf.ONB2ExternalHRISHiringUpdate",
  Map_entry_string_HomepageTile_ = "sf.map_entry_string_HomepageTile_",
  NominationApprovalWorkflowResponse = "sf.NominationApprovalWorkflowResponse",
  Map_entry_string_bool_ = "sf.map_entry_string_bool_",
  SEFEventEntityKey = "sf.SEFEventEntityKey",
  SEFEventEntityParam = "sf.SEFEventEntityParam",
  SEFExtEventMetaData = "sf.SEFExtEventMetaData",
  SEFExtEventMetaDataList = "sf.SEFExtEventMetaDataList",
  Map_entry_string_SEFSubscriberConfigurationPerCategory_ = "sf.map_entry_string_SEFSubscriberConfigurationPerCategory_",
  Map_entry_ISCRetryFlowMetaData_ISCRetryFlowStatusMetaData_ = "sf.map_entry_ISCRetryFlowMetaData_ISCRetryFlowStatusMetaData_",
  SPMetadataGenerator = "sf.SPMetadataGenerator",
  DynamicGroupBean = "sf.DynamicGroupBean",
  DynamicGroupUserBean = "sf.DynamicGroupUserBean",
  Map_entry_string_property_ = "sf.map_entry_string_property_",
  Map_entry_string_navigation_ = "sf.map_entry_string_navigation_",
}

export enum SanitizedEntity {
  Entity = "Entity",
  JobReqTemplate_Hiring_Requisition_Manual = "JobReqTemplate_Hiring_Requisition_Manual",
  PaymentInformationDetailV3MWI = "PaymentInformationDetailV3MWI",
  TimeTypeCAN = "TimeTypeCAN",
  Goal_101 = "Goal_101",
  JobRequisitionPostingFieldControls = "JobRequisitionPostingFieldControls",
  JobRequisitionLocale = "JobRequisitionLocale",
  GoalPermission_101 = "GoalPermission_101",
  FormRatingScaleValue = "FormRatingScaleValue",
  EmpEmploymentTermination = "EmpEmploymentTermination",
  InnerMessage = "InnerMessage",
  JobApplicationStatusLabel = "JobApplicationStatusLabel",
  Cust_CC_AppConfig = "Cust_CC_AppConfig",
  SelfReportSkillMapping = "SelfReportSkillMapping",
  SpotAwardProgramAdvancedSettings = "SpotAwardProgramAdvancedSettings",
  Cust_CC_Note = "Cust_CC_Note",
  Cust_CC_ProfileTask = "Cust_CC_ProfileTask",
  TodoAction = "TodoAction",
  SpotAward = "SpotAward",
  UpsertResult = "UpsertResult",
  CompanyProvisioner = "CompanyProvisioner",
  InterviewOverallAssessment = "InterviewOverallAssessment",
  SimpleDevGoal = "SimpleDevGoal",
  ExternalLearnerPhoneInfo = "ExternalLearnerPhoneInfo",
  EmployeeProfileBlockLink = "EmployeeProfileBlockLink",
  GoalDetail = "GoalDetail",
  LegalEntityARG = "LegalEntityARG",
  EmployeeProfileSectionConfig = "EmployeeProfileSectionConfig",
  PayScalePayComponent = "PayScalePayComponent",
  Background_InsideWorkExperience = "Background_InsideWorkExperience",
  CalibrationSessionSubject = "CalibrationSessionSubject",
  PicklistLabel = "PicklistLabel",
  TimeZone = "TimeZone",
  EmployeeProfileBlockContent = "EmployeeProfileBlockContent",
  TrendData_SysOverallPotential = "TrendData_SysOverallPotential",
  GoalEnum = "GoalEnum",
  DevLearningCertifications = "DevLearningCertifications",
  PaymentInformationDetailV3JPN = "PaymentInformationDetailV3JPN",
  PhysicalReqContent = "PhysicalReqContent",
  OneTimeDeduction = "OneTimeDeduction",
  TimeAccountType = "TimeAccountType",
  DevGoal_2006 = "DevGoal_2006",
  Todo = "Todo",
  CalibrationSessionReviewer = "CalibrationSessionReviewer",
  FOWfConfigStepApprover = "FOWfConfigStepApprover",
  ExtEmailInfo = "ExtEmailInfo",
  Cust_GER_Template = "Cust_GER_Template",
  PayrollConfigurationCategory = "PayrollConfigurationCategory",
  ExternalLearnerPersonalInfo = "ExternalLearnerPersonalInfo",
  DevGoal_2007 = "DevGoal_2007",
  JobRequisitionPosting = "JobRequisitionPosting",
  Cust_CC_JobProfile = "Cust_CC_JobProfile",
  CompetencyContent = "CompetencyContent",
  DevGoal_2002 = "DevGoal_2002",
  Background_Fsaelection = "Background_Fsaelection",
  CandidateProfileExtension = "CandidateProfileExtension",
  TimeTypeDEU = "TimeTypeDEU",
  EmployeeTimeMEX = "EmployeeTimeMEX",
  CustomNav = "CustomNav",
  PerEmergencyContacts = "PerEmergencyContacts",
  RecurringDeduction = "RecurringDeduction",
  FormRouteStep = "FormRouteStep",
  EmpTimeAccountBalance = "EmpTimeAccountBalance",
  PickListV2 = "PickListV2",
  JobRequisitionAssessment = "JobRequisitionAssessment",
  FOJobClassLocalCAN = "FOJobClassLocalCAN",
  JobClassificationITA = "JobClassificationITA",
  JDTemplateFamilyMapping = "JDTemplateFamilyMapping",
  SuccessStoreContentBlob = "SuccessStoreContentBlob",
  CandidateTags = "CandidateTags",
  TimeAccountPayoutProfile = "TimeAccountPayoutProfile",
  DGField = "DGField",
  PaymentInformationDetailV3NZL = "PaymentInformationDetailV3NZL",
  FormCompetencySection = "FormCompetencySection",
  ThemeConfig = "ThemeConfig",
  EmpCompensation = "EmpCompensation",
  Holiday = "Holiday",
  TeamGoal_1000 = "TeamGoal_1000",
  SkillEntity = "SkillEntity",
  ONB2Process = "ONB2Process",
  WorkflowAllowedActionList = "WorkflowAllowedActionList",
  JobAnalyzerReportingData = "JobAnalyzerReportingData",
  EmployeeTime = "EmployeeTime",
  CalibrationSessionParticipantsInfo = "CalibrationSessionParticipantsInfo",
  EmpCostDistributionItem = "EmpCostDistributionItem",
  FOLegalEntityLocalDEFLT = "FOLegalEntityLocalDEFLT",
  TimeAccountPostingRule = "TimeAccountPostingRule",
  MDFBlockConfig = "MDFBlockConfig",
  Background_PreferredNextMove = "Background_PreferredNextMove",
  Attachment = "Attachment",
  RBPBasicPermission = "RBPBasicPermission",
  ONB2DataCollectionUserConfig = "ONB2DataCollectionUserConfig",
  GoalTaskPermission_3 = "GoalTaskPermission_3",
  GoalTaskPermission_2 = "GoalTaskPermission_2",
  FormRouteMap = "FormRouteMap",
  PaymentInformationDetailV3ISR = "PaymentInformationDetailV3ISR",
  CandidateBackground_Education = "CandidateBackground_Education",
  EmployeeTimeGroupItem = "EmployeeTimeGroupItem",
  Achievement = "Achievement",
  Form360ParticipantSection = "Form360ParticipantSection",
  InformationDataSubjectConfiguration = "InformationDataSubjectConfiguration",
  EmpPayCompNonRecurring = "EmpPayCompNonRecurring",
  Form360Participant = "Form360Participant",
  Background_Benefitselection = "Background_Benefitselection",
  EmploymentConditionContent = "EmploymentConditionContent",
  Candidate = "Candidate",
  FormCustomizedWeightedRatingSection = "FormCustomizedWeightedRatingSection",
  CandidateBackground_OutsideWorkExperience = "CandidateBackground_OutsideWorkExperience",
  JobApplicationOnboardingData = "JobApplicationOnboardingData",
  FormSignatureSection = "FormSignatureSection",
  FOJobClassLocalITA = "FOJobClassLocalITA",
  PayPeriod = "PayPeriod",
  FOPayRange = "FOPayRange",
  Cust_CC_UserComp = "Cust_CC_UserComp",
  JobProfile = "JobProfile",
  JobApplicationBackgroundCheckRequest = "JobApplicationBackgroundCheckRequest",
  RoleTalentPoolMappingEntity = "RoleTalentPoolMappingEntity",
  JobApplicationQuestionResponse = "JobApplicationQuestionResponse",
  Cust_GERFeature = "Cust_GERFeature",
  Cust_GERTemplateVariables = "Cust_GERTemplateVariables",
  JobApplicationStatusAuditTrail = "JobApplicationStatusAuditTrail",
  PaymentInformationDetailV3IRQ = "PaymentInformationDetailV3IRQ",
  FOCostCenter = "FOCostCenter",
  PicklistOption = "PicklistOption",
  LocalizedData = "LocalizedData",
  PerPerson = "PerPerson",
  FormCompetency = "FormCompetency",
  Cust_CC_AppProperties = "Cust_CC_AppProperties",
  Cust_CC_User = "Cust_CC_User",
  DevGoalPermission_2007 = "DevGoalPermission_2007",
  UserRewardInfo = "UserRewardInfo",
  ContinuousFeedbackRequest = "ContinuousFeedbackRequest",
  DevGoalPermission_2006 = "DevGoalPermission_2006",
  EmployeeProfilePageConfig = "EmployeeProfilePageConfig",
  TemporaryTimeInformation = "TemporaryTimeInformation",
  DGFilter = "DGFilter",
  TimeTypeProfile = "TimeTypeProfile",
  DevGoalPermission_2002 = "DevGoalPermission_2002",
  WfRequestStep = "WfRequestStep",
  PayScaleLevel = "PayScaleLevel",
  HireDateChange = "HireDateChange",
  FOPayComponentGroup = "FOPayComponentGroup",
  MarketingBrand = "MarketingBrand",
  PhysicalReqEntity = "PhysicalReqEntity",
  Background_FuncExperience = "Background_FuncExperience",
  InterviewQuestionEntity = "InterviewQuestionEntity",
  FOCorporateAddressDEFLT = "FOCorporateAddressDEFLT",
  BehaviorMappingEntity = "BehaviorMappingEntity",
  WfRequestUIData = "WfRequestUIData",
  FormBehaviorRatingComment = "FormBehaviorRatingComment",
  CandidateBackground_Mobility = "CandidateBackground_Mobility",
  PaymentInformationDetailV3ZWE = "PaymentInformationDetailV3ZWE",
  EmployeeProfileHeaderConfig = "EmployeeProfileHeaderConfig",
  Background_Certificates = "Background_Certificates",
  EmployeeTimeNLD = "EmployeeTimeNLD",
  PerGlobalInfoDNK = "PerGlobalInfoDNK",
  CandidateProfileConversionInfo = "CandidateProfileConversionInfo",
  PaymentInformationDetailV3ITA = "PaymentInformationDetailV3ITA",
  FamilyEntity = "FamilyEntity",
  EmpGlobalAssignment = "EmpGlobalAssignment",
  EmployeeDataReplicationConfirmation = "EmployeeDataReplicationConfirmation",
  PersonKey = "PersonKey",
  EmployeeTimePOL = "EmployeeTimePOL",
  Goal_999 = "Goal_999",
  Goal_998 = "Goal_998",
  Cust_GER_PersonnelSubArea = "Cust_GER_PersonnelSubArea",
  RCMAdminReassignOfferApprover = "RCMAdminReassignOfferApprover",
  ContinuousPerformanceUserPermission = "ContinuousPerformanceUserPermission",
  FOJobCode = "FOJobCode",
  WorkSchedule = "WorkSchedule",
  Background_Googledocs = "Background_Googledocs",
  PaymentInformationDetailV3CHL = "PaymentInformationDetailV3CHL",
  LegalEntityESP = "LegalEntityESP",
  Cust_GEHTemplate = "Cust_GEHTemplate",
  LegalEntityUSA = "LegalEntityUSA",
  PerSocialAccount = "PerSocialAccount",
  Cust_Performancedata = "Cust_Performancedata",
  ONB2ProcessTask = "ONB2ProcessTask",
  Background_SysScoreCardDevelopmentObjectivesPortlet = "Background_SysScoreCardDevelopmentObjectivesPortlet",
  UserAccount = "UserAccount",
  PayrollSystemConfiguration = "PayrollSystemConfiguration",
  RoleSkillMappingEntity = "RoleSkillMappingEntity",
  Cust_CC_UserFuncComp = "Cust_CC_UserFuncComp",
  FormObjectiveSection = "FormObjectiveSection",
  DevGoalAchievementsList = "DevGoalAchievementsList",
  PaymentInformationDetailV3GBR = "PaymentInformationDetailV3GBR",
  EmployeeProfileSubSectionConfig = "EmployeeProfileSubSectionConfig",
  FOLegalEntityLocalDEU = "FOLegalEntityLocalDEU",
  HolidayAssignment = "HolidayAssignment",
  CustomPayTypeAssignment = "CustomPayTypeAssignment",
  Cust_GEHApplication = "Cust_GEHApplication",
  JobReqFwdCandidates = "JobReqFwdCandidates",
  Cust_CC_FuncComp = "Cust_CC_FuncComp",
  FormReviewerInfoSection = "FormReviewerInfoSection",
  DGExpression = "DGExpression",
  WorkOrder = "WorkOrder",
  FormIntroductionSection = "FormIntroductionSection",
  PayScaleArea = "PayScaleArea",
  SkillContent = "SkillContent",
  FormObjective = "FormObjective",
  FormObjectiveOtherDetails = "FormObjectiveOtherDetails",
  Form360ParticipantColumn = "Form360ParticipantColumn",
  JobApplicationSnapshot_Languages = "JobApplicationSnapshot_Languages",
  EmpJobRelationships = "EmpJobRelationships",
  AlertMessage = "AlertMessage",
  FormPMReviewContentDetail = "FormPMReviewContentDetail",
  ShiftClassification = "ShiftClassification",
  DevLearning_4201 = "DevLearning_4201",
  PaymentMethodV3 = "PaymentMethodV3",
  Position = "Position",
  FOLocationGroup = "FOLocationGroup",
  FOJobClassLocalFRA = "FOJobClassLocalFRA",
  JobApplicationAssessmentReport = "JobApplicationAssessmentReport",
  TodoCategory = "TodoCategory",
  HolidayCalendar = "HolidayCalendar",
  SpotAwardCategory = "SpotAwardCategory",
  CurrencyExchangeRate = "CurrencyExchangeRate",
  PerGlobalInfoNLD = "PerGlobalInfoNLD",
  Form360SummaryViewSection = "Form360SummaryViewSection",
  GoalAchievements = "GoalAchievements",
  JobReqTemplate_EZHire_Simplified = "JobReqTemplate_EZHire_Simplified",
  Cust_LegalEntityBEL = "Cust_LegalEntityBEL",
  ComplianceDocumentFlow = "ComplianceDocumentFlow",
  PerAddressDEFLT = "PerAddressDEFLT",
  FormObjectiveOtherDetailsItemValueCell = "FormObjectiveOtherDetailsItemValueCell",
  PerGlobalInfoARE = "PerGlobalInfoARE",
  HolidayCategory = "HolidayCategory",
  Form360ParticipantConfig = "Form360ParticipantConfig",
  AdvancesEligibility = "AdvancesEligibility",
  GoalPermission_999 = "GoalPermission_999",
  RelevantIndustryContent = "RelevantIndustryContent",
  PersonEmpTerminationInfo = "PersonEmpTerminationInfo",
  ONB2ProcessTrigger = "ONB2ProcessTrigger",
  GoalPermission_998 = "GoalPermission_998",
  PerGlobalInfoSWE = "PerGlobalInfoSWE",
  CandidateBackground_GlobalInfo = "CandidateBackground_GlobalInfo",
  FormRouteSubStep = "FormRouteSubStep",
  ActivityStatus = "ActivityStatus",
  Background_VarPayEmpHistData = "Background_VarPayEmpHistData",
  PerPersonRelationship = "PerPersonRelationship",
  FormItemConfiguration = "FormItemConfiguration",
  DeductionScreenId = "DeductionScreenId",
  RcmCompetency = "RcmCompetency",
  InitiativeAlignmentBean = "InitiativeAlignmentBean",
  JobRequisition = "JobRequisition",
  CandidateBackground_InsideWorkExperience = "CandidateBackground_InsideWorkExperience",
  MentoringProgramParticipantInfo = "MentoringProgramParticipantInfo",
  TalentPool = "TalentPool",
  WorkScheduleDayModel = "WorkScheduleDayModel",
  Goal_1 = "Goal_1",
  Goal_3 = "Goal_3",
  JobApplicationInterview = "JobApplicationInterview",
  Goal_2 = "Goal_2",
  Background_Documents = "Background_Documents",
  Goal_5 = "Goal_5",
  Goal_4 = "Goal_4",
  Goal_6 = "Goal_6",
  FormContent = "FormContent",
  ExternalUser = "ExternalUser",
  EMEventPayload = "EMEventPayload",
  PaymentInformationDetailV3MOZ = "PaymentInformationDetailV3MOZ",
  FOPayComponent = "FOPayComponent",
  PaymentInformationV3 = "PaymentInformationV3",
  GoalTask_2 = "GoalTask_2",
  GoalTask_3 = "GoalTask_3",
  EmployeeProfileFieldConfig = "EmployeeProfileFieldConfig",
  OfferLetter = "OfferLetter",
  FormJobRole = "FormJobRole",
  SimpleGoal = "SimpleGoal",
  JobApplicationAssessmentOrder = "JobApplicationAssessmentOrder",
  JobClassificationUSA = "JobClassificationUSA",
  PayrollDataMaintenanceTask = "PayrollDataMaintenanceTask",
  JobReqScreeningQuestion = "JobReqScreeningQuestion",
  Background_Awards = "Background_Awards",
  AutoDelegateConfig = "AutoDelegateConfig",
  SecondaryAssignments = "SecondaryAssignments",
  ThemeInfo = "ThemeInfo",
  JobRequisitionGroupOperator = "JobRequisitionGroupOperator",
  DevGoalDetail = "DevGoalDetail",
  FoTranslation = "FoTranslation",
  CurrencyConversion = "CurrencyConversion",
  JobReqFOLocation = "JobReqFOLocation",
  TimeAccountPurchaseProfilePayComponentAssignment = "TimeAccountPurchaseProfilePayComponentAssignment",
  RoleCompetencyBehaviorMappingEntity = "RoleCompetencyBehaviorMappingEntity",
  FormReviewFeedback = "FormReviewFeedback",
  JobApplicationBackgroundCheckResult = "JobApplicationBackgroundCheckResult",
  SpotAwardBudget = "SpotAwardBudget",
  FOJobClassLocalUSA = "FOJobClassLocalUSA",
  WorkScheduleDayModelAssignment = "WorkScheduleDayModelAssignment",
  JobApplicationAudit = "JobApplicationAudit",
  Cust_CC_UserCompDocument = "Cust_CC_UserCompDocument",
  GoalPlanTemplate = "GoalPlanTemplate",
  FormFolder = "FormFolder",
  CPMNotificationConfig = "CPMNotificationConfig",
  AssignedComplianceForm = "AssignedComplianceForm",
  Cust_GER_PersonnelArea = "Cust_GER_PersonnelArea",
  WorkScheduleDay = "WorkScheduleDay",
  MyPendingWorkflow = "MyPendingWorkflow",
  CalibrationSubjectComment = "CalibrationSubjectComment",
  TimeAccount = "TimeAccount",
  ComplianceFormSignature = "ComplianceFormSignature",
  EmployeeTimeCOL = "EmployeeTimeCOL",
  RecurringDeductionItem = "RecurringDeductionItem",
  EducationDegreeEntity = "EducationDegreeEntity",
  EmployeeTimeESP = "EmployeeTimeESP",
  Background_OutsideWorkExperience = "Background_OutsideWorkExperience",
  AchievementDevGoalDetail = "AchievementDevGoalDetail",
  SpotAwardGuidelinesRule = "SpotAwardGuidelinesRule",
  EmployeeTimeUSA = "EmployeeTimeUSA",
  Form360SummaryViewCategory = "Form360SummaryViewCategory",
  MDFLocalizedValue = "MDFLocalizedValue",
  FOLocation = "FOLocation",
  FOWfConfig = "FOWfConfig",
  Background_Courses = "Background_Courses",
  MDFTenantPreferredTimeZone = "MDFTenantPreferredTimeZone",
  DGPeoplePool = "DGPeoplePool",
  PayrollDataMaintenanceTaskConfiguration = "PayrollDataMaintenanceTaskConfiguration",
  RBPRule = "RBPRule",
  SAPSystemConfiguration = "SAPSystemConfiguration",
  JobReqTemplate_Hiring_Requisition_with_Position = "JobReqTemplate_Hiring_Requisition_with_Position",
  JobResponsibilityContent = "JobResponsibilityContent",
  FormTemplate = "FormTemplate",
  Cust_GERReqTempl = "Cust_GERReqTempl",
  GoalMilestonePermission_3 = "GoalMilestonePermission_3",
  CompetencyType = "CompetencyType",
  JobOfferApprover = "JobOfferApprover",
  ONB2BuddyActivity = "ONB2BuddyActivity",
  BudgetGroup = "BudgetGroup",
  RatedSkillMapping = "RatedSkillMapping",
  ONB2EquipmentType = "ONB2EquipmentType",
  UserPermissions = "UserPermissions",
  JobApplicationFieldControls = "JobApplicationFieldControls",
  LegalEntityRUS = "LegalEntityRUS",
  Cust_GERReqTemplField = "Cust_GERReqTemplField",
  JobClassificationFRA = "JobClassificationFRA",
  PaymentInformationDetailV3ECU = "PaymentInformationDetailV3ECU",
  PaymentMethodAssignmentV3 = "PaymentMethodAssignmentV3",
  GoalMilestonePermission_2 = "GoalMilestonePermission_2",
  FormAuditTrail = "FormAuditTrail",
  PaymentInformationDetailV3VEN = "PaymentInformationDetailV3VEN",
  DevGoalEnum = "DevGoalEnum",
  PaymentInformationDetailV3GHA = "PaymentInformationDetailV3GHA",
  SpotAwardProgram = "SpotAwardProgram",
  EmployeeDataReplicationNotification = "EmployeeDataReplicationNotification",
  FOJobClassLocalDEFLT = "FOJobClassLocalDEFLT",
  Background_Education = "Background_Education",
  ThemeTemplate = "ThemeTemplate",
  ExtAddressInfo = "ExtAddressInfo",
  MentoringProgram = "MentoringProgram",
  FormCompetencyBehavior = "FormCompetencyBehavior",
  CalibrationTemplate = "CalibrationTemplate",
  FOLegalEntityLocalFRA = "FOLegalEntityLocalFRA",
  JobApplicationSnapshot_GlobalInfo = "JobApplicationSnapshot_GlobalInfo",
  EmpJob = "EmpJob",
  Activity = "Activity",
  InterviewIndividualAssessment = "InterviewIndividualAssessment",
  JobOfferTemplate_Offer_Detail_Template = "JobOfferTemplate_Offer_Detail_Template",
  FOBusinessUnit = "FOBusinessUnit",
  PickListValueV2 = "PickListValueV2",
  JobClassificationAUS = "JobClassificationAUS",
  GoalAchievementsList = "GoalAchievementsList",
  DigitalSupportIncident = "DigitalSupportIncident",
  JobOffer = "JobOffer",
  Cust_CC_ProfileAssignment = "Cust_CC_ProfileAssignment",
  FOEventReason = "FOEventReason",
  Currency = "Currency",
  FormJobDescSection = "FormJobDescSection",
  TimeAccountDetail = "TimeAccountDetail",
  VendorInfo = "VendorInfo",
  TalentGraphicOption = "TalentGraphicOption",
  DevGoalAchievements = "DevGoalAchievements",
  PaymentInformationDetailV3TUN = "PaymentInformationDetailV3TUN",
  Cust_CC_RatingExplanation = "Cust_CC_RatingExplanation",
  FormObjectiveOtherDetailsItemCol = "FormObjectiveOtherDetailsItemCol",
  AchievementGoalDetail = "AchievementGoalDetail",
  Cust_GERReqTemplOperator = "Cust_GERReqTemplOperator",
  EmployeeDataReplicationConfirmationErrorMessage = "EmployeeDataReplicationConfirmationErrorMessage",
  PaymentInformationDetailV3BRA = "PaymentInformationDetailV3BRA",
  EPPublicProfile = "EPPublicProfile",
  JobRequisitionOperator = "JobRequisitionOperator",
  FOJobClassLocalBRA = "FOJobClassLocalBRA",
  EducationMajorEntity = "EducationMajorEntity",
  PerPhone = "PerPhone",
  JobOfferFieldControls = "JobOfferFieldControls",
  EmpPayCompRecurring = "EmpPayCompRecurring",
  FormPerfPotSummarySection = "FormPerfPotSummarySection",
  GoalPermission_1000 = "GoalPermission_1000",
  PayrollDataMaintenanceTaskTypeConfiguration = "PayrollDataMaintenanceTaskTypeConfiguration",
  EmployeeTimeDEU = "EmployeeTimeDEU",
  PaymentInformationDetailV3MEX = "PaymentInformationDetailV3MEX",
  EducationMajorContent = "EducationMajorContent",
  ONB2EquipmentTypeValue = "ONB2EquipmentTypeValue",
  Form360ReviewContentDetail = "Form360ReviewContentDetail",
  DGFieldValue = "DGFieldValue",
  ActivityFeedback = "ActivityFeedback",
  ElectronicSicknessCertificateExclusionReasonDEU = "ElectronicSicknessCertificateExclusionReasonDEU",
  GoalWeight = "GoalWeight",
  EmpWorkPermit = "EmpWorkPermit",
  FormHeader = "FormHeader",
  FormCustomElementListValue = "FormCustomElementListValue",
  FormCustomSection = "FormCustomSection",
  Bank = "Bank",
  MentoringProgramMatchedParticipant = "MentoringProgramMatchedParticipant",
  Background_Languages = "Background_Languages",
  InterviewQuestionContent = "InterviewQuestionContent",
  FormSignature = "FormSignature",
  CompetencyEntity = "CompetencyEntity",
  JobApplicationInterviewFieldControls = "JobApplicationInterviewFieldControls",
  EPCustomBackgroundPortlet = "EPCustomBackgroundPortlet",
  FeedbackFlag = "FeedbackFlag",
  FormUserRatingComment = "FormUserRatingComment",
  PersonTypeUsage = "PersonTypeUsage",
  RBPRole = "RBPRole",
  FODivision = "FODivision",
  CertificationEntity = "CertificationEntity",
  PaymentInformationDetailV3SUR = "PaymentInformationDetailV3SUR",
  DigitalSupportSystemInformation = "DigitalSupportSystemInformation",
  WfRequestComments = "WfRequestComments",
  EmployeeTimeCAN = "EmployeeTimeCAN",
  EmployeePayrollRunResults = "EmployeePayrollRunResults",
  CustomPayType = "CustomPayType",
  FOCompany = "FOCompany",
  EmployeeDataReplicationElement = "EmployeeDataReplicationElement",
  PaymentInformationDetailV3ZAF = "PaymentInformationDetailV3ZAF",
  LegalEntityDEU = "LegalEntityDEU",
  JobApplicationAssessmentReportDetail = "JobApplicationAssessmentReportDetail",
  Form360SummaryViewRater = "Form360SummaryViewRater",
  EmpEmployment = "EmpEmployment",
  CompetencyRating = "CompetencyRating",
  JobApplicationStatus = "JobApplicationStatus",
  InlineResult = "InlineResult",
  PayScaleGroup = "PayScaleGroup",
  ExtPersonalInfo = "ExtPersonalInfo",
  FODepartment = "FODepartment",
  FormSummarySection = "FormSummarySection",
  FormRaterListSection = "FormRaterListSection",
  Background_SpecialAssign = "Background_SpecialAssign",
  JobApplicationOnboardingStatus = "JobApplicationOnboardingStatus",
  SpotAwardRedemption = "SpotAwardRedemption",
  DynamicGroup = "DynamicGroup",
  SecondaryAssignmentsItem = "SecondaryAssignmentsItem",
  Cust_CC_Group = "Cust_CC_Group",
  PayrollDataMaintenanceTaskTypeLinkConfiguration = "PayrollDataMaintenanceTaskTypeLinkConfiguration",
  JobRequisitionFieldControls = "JobRequisitionFieldControls",
  Photo = "Photo",
  JobCodeMappingEntity = "JobCodeMappingEntity",
  FOLegalEntityLocalUSA = "FOLegalEntityLocalUSA",
  PaymentInformationDetailV3MKD = "PaymentInformationDetailV3MKD",
  FOLegalEntityLocalESP = "FOLegalEntityLocalESP",
  CalibrationSubjectRank = "CalibrationSubjectRank",
  OnboardingInfo = "OnboardingInfo",
  Cust_GERBrand = "Cust_GERBrand",
  PositionSkillMappingEntity = "PositionSkillMappingEntity",
  JobRequisitionLocaleFieldControls = "JobRequisitionLocaleFieldControls",
  PerGlobalInfoPRT = "PerGlobalInfoPRT",
  FamilyCompetencyMappingEntity = "FamilyCompetencyMappingEntity",
  JobApplicationSnapshot_Education = "JobApplicationSnapshot_Education",
  FormObjCompSummarySection = "FormObjCompSummarySection",
  FOPayGrade = "FOPayGrade",
  JobProfileLocalizedData = "JobProfileLocalizedData",
  PaymentInformationDetailV3ARG = "PaymentInformationDetailV3ARG",
  AbsenceCountingMethod = "AbsenceCountingMethod",
  PaymentInformationDetailV3KEN = "PaymentInformationDetailV3KEN",
  Territory = "Territory",
  ExternalLearner = "ExternalLearner",
  CertificationContent = "CertificationContent",
  PerGlobalInfoNOR = "PerGlobalInfoNOR",
  EMEventAttribute = "EMEventAttribute",
  Cust_GER_PersonnelUnit = "Cust_GER_PersonnelUnit",
  PaymentInformationDetailV3SVN = "PaymentInformationDetailV3SVN",
  SpotAwardRedemptionProduct = "SpotAwardRedemptionProduct",
  PaymentInformationDetailV3SVK = "PaymentInformationDetailV3SVK",
  CandidateEmployeeReferral = "CandidateEmployeeReferral",
  NonRecurringPayment = "NonRecurringPayment",
  TrendData_SysOverallPerformance = "TrendData_SysOverallPerformance",
  SuccessStoreContent = "SuccessStoreContent",
  MDFEnumValue = "MDFEnumValue",
  AccrualCalculationBase = "AccrualCalculationBase",
  SpotAwardRedemptionOrder = "SpotAwardRedemptionOrder",
  PaymentInformationDetailV3 = "PaymentInformationDetailV3",
  TimeTypeUSA = "TimeTypeUSA",
  PaymentInformationDetailV3PRY = "PaymentInformationDetailV3PRY",
  Background_Compensation = "Background_Compensation",
  JobAppTemplate_EZHire_Simplified_Candidate_Detail_Info_Template = "JobAppTemplate_EZHire_Simplified_Candidate_Detail_Info_Template",
  FOGeozone = "FOGeozone",
  Form360ParticipantCategory = "Form360ParticipantCategory",
  JobReqScreeningQuestionChoice = "JobReqScreeningQuestionChoice",
  SkillProfile = "SkillProfile",
  WfRequestParticipator = "WfRequestParticipator",
  Successor = "Successor",
  TimeAccountSnapshot = "TimeAccountSnapshot",
  Form360Rater = "Form360Rater",
  TeamGoalOwner = "TeamGoalOwner",
  PaymentInformationDetailV3CZE = "PaymentInformationDetailV3CZE",
  PerGlobalInfoGBR = "PerGlobalInfoGBR",
  JobDescTemplate = "JobDescTemplate",
  PaymentInformationDetailV3MMR = "PaymentInformationDetailV3MMR",
  DevGoalPlanTemplate = "DevGoalPlanTemplate",
  ComplianceProcessTask = "ComplianceProcessTask",
  Cust_CC_ProfileComp = "Cust_CC_ProfileComp",
  AdvancesAccumulation = "AdvancesAccumulation",
  GoalPermission_5 = "GoalPermission_5",
  GoalPermission_6 = "GoalPermission_6",
  GoalPermission_3 = "GoalPermission_3",
  GoalPermission_4 = "GoalPermission_4",
  GoalPermission_1 = "GoalPermission_1",
  FOFrequency = "FOFrequency",
  TimeAccountTypeAUS = "TimeAccountTypeAUS",
  GoalPermission_2 = "GoalPermission_2",
  EducationDegreeContent = "EducationDegreeContent",
  GoalPlanState = "GoalPlanState",
  AvailableTimeType = "AvailableTimeType",
  JobClassificationZAF = "JobClassificationZAF",
  ExternalLearnerAddressInfo = "ExternalLearnerAddressInfo",
  DevGoalCompetency = "DevGoalCompetency",
  AdvancesInstallments = "AdvancesInstallments",
  Cust_CC_Task = "Cust_CC_Task",
  EmploymentConditionEntity = "EmploymentConditionEntity",
  JobClassificationBRA = "JobClassificationBRA",
  PositionMatrixRelationship = "PositionMatrixRelationship",
  FormReviewInfoSection = "FormReviewInfoSection",
  Background_Promotability = "Background_Promotability",
  PerNationalId = "PerNationalId",
  ReplicationTargetSystem = "ReplicationTargetSystem",
  FormObjectiveOtherDetailsItem = "FormObjectiveOtherDetailsItem",
  TimeAccountPurchaseProfile = "TimeAccountPurchaseProfile",
  PersonType = "PersonType",
  DomainEventAlert = "DomainEventAlert",
  Cust_CC_Competency = "Cust_CC_Competency",
  RoleEntity = "RoleEntity",
  Cust_CC_Classification = "Cust_CC_Classification",
  FormObjectiveDetails = "FormObjectiveDetails",
  JobDescSection = "JobDescSection",
  GoalMilestone_3 = "GoalMilestone_3",
  FOJobClassLocalGBR = "FOJobClassLocalGBR",
  PayrollConfigurationCategoryLink = "PayrollConfigurationCategoryLink",
  GoalMilestone_2 = "GoalMilestone_2",
  EmpWfRequest = "EmpWfRequest",
  FormRatingScale = "FormRatingScale",
  WfRequest = "WfRequest",
  ComplianceProcess = "ComplianceProcess",
  PerEmail = "PerEmail",
  PerGlobalInfoIRL = "PerGlobalInfoIRL",
  PositionEntity = "PositionEntity",
  JobApplicationSnapshot_OutsideWorkExperience = "JobApplicationSnapshot_OutsideWorkExperience",
  CandidateBackground_Languages = "CandidateBackground_Languages",
  Cust_CC_UserTask = "Cust_CC_UserTask",
  AutoDelegateDetail = "AutoDelegateDetail",
  CalibrationSession = "CalibrationSession",
  Form360RaterSection = "Form360RaterSection",
  EmployeePayrollRunResultsItems = "EmployeePayrollRunResultsItems",
  Country = "Country",
  EmployeeTimeGroup = "EmployeeTimeGroup",
  PayCalendar = "PayCalendar",
  FormCustomElement = "FormCustomElement",
  JobClassificationCAN = "JobClassificationCAN",
  JobApplicationComments = "JobApplicationComments",
  FormObjectiveComment = "FormObjectiveComment",
  FOLegalEntityLocalARG = "FOLegalEntityLocalARG",
  ExtPhoneInfo = "ExtPhoneInfo",
  FOJobClassLocalAUS = "FOJobClassLocalAUS",
  PositionRightToReturn = "PositionRightToReturn",
  EmpCompensationCalculated = "EmpCompensationCalculated",
  PositionCompetencyMappingEntity = "PositionCompetencyMappingEntity",
  Background_Community = "Background_Community",
  PaymentInformationDetailV3FRA = "PaymentInformationDetailV3FRA",
  PaymentInformationDetailV3NAM = "PaymentInformationDetailV3NAM",
  Cust_CC_VariantSearch = "Cust_CC_VariantSearch",
  ComplianceFormDataFieldValue = "ComplianceFormDataFieldValue",
  PaymentInformationDetailV3PER = "PaymentInformationDetailV3PER",
  LegalEntityFRA = "LegalEntityFRA",
  ComplianceUserFormData = "ComplianceUserFormData",
  FODynamicRole = "FODynamicRole",
  ONB2EquipmentActivity = "ONB2EquipmentActivity",
  EmployeeTimeAUS = "EmployeeTimeAUS",
  FamilySkillMappingEntity = "FamilySkillMappingEntity",
  PerPersonal = "PerPersonal",
  Cust_CC_SolutionRoleGroupConfig = "Cust_CC_SolutionRoleGroupConfig",
  EmployeeTimeCalendar = "EmployeeTimeCalendar",
  MessageDetail = "MessageDetail",
  JobReqQuestion = "JobReqQuestion",
  Form360ParticipantDetail = "Form360ParticipantDetail",
  DRTMPurgeFreeze = "DRTMPurgeFreeze",
  Background_LeadExperience = "Background_LeadExperience",
  EmpCostDistribution = "EmpCostDistribution",
  SpotAwardEligibilityRule = "SpotAwardEligibilityRule",
  JobApplication = "JobApplication",
  JobApplicationSnapshot_InsideWorkExperience = "JobApplicationSnapshot_InsideWorkExperience",
  TrendData_SysOverallObjective = "TrendData_SysOverallObjective",
  DGFieldOperator = "DGFieldOperator",
  GoalMetricLookupPermission_5 = "GoalMetricLookupPermission_5",
  PaymentInformationDetailV3ESP = "PaymentInformationDetailV3ESP",
  RelevantIndustryEntity = "RelevantIndustryEntity",
  PaymentInformationDetailV3USA = "PaymentInformationDetailV3USA",
  Picklist = "Picklist",
  PaymentInformationDetailV3COL = "PaymentInformationDetailV3COL",
  GoalMetricLookupPermission_4 = "GoalMetricLookupPermission_4",
  TrendData_SysOverallCompetency = "TrendData_SysOverallCompetency",
  NomineeHistory = "NomineeHistory",
  ContinuousFeedback = "ContinuousFeedback",
  PayScaleType = "PayScaleType",
  Background_Mobility = "Background_Mobility",
  TimeTypeNLD = "TimeTypeNLD",
  Goal_1000 = "Goal_1000",
  LegacyPositionEntity = "LegacyPositionEntity",
  Advance = "Advance",
  EMEvent = "EMEvent",
  Cust_GEH_templateField = "Cust_GEH_templateField",
  JobResponsibilityEntity = "JobResponsibilityEntity",
  PerGlobalInfoSAU = "PerGlobalInfoSAU",
  Background_VarPayEmpHistData_GPS = "Background_VarPayEmpHistData_GPS",
  DataReplicationProxy = "DataReplicationProxy",
  ExternalLearnerEmailInfo = "ExternalLearnerEmailInfo",
  JobReqGOPosition = "JobReqGOPosition",
  ComplianceFormData = "ComplianceFormData",
  WorkScheduleDayModelAssignmentSegment = "WorkScheduleDayModelAssignmentSegment",
  Background_Memberships = "Background_Memberships",
  JobApplicationSnapshot_Mobility = "JobApplicationSnapshot_Mobility",
  PaymentInformationDetailV3BLR = "PaymentInformationDetailV3BLR",
  RightToReturn = "RightToReturn",
  JobClassificationCountry = "JobClassificationCountry",
  TalentRatings = "TalentRatings",
  User = "User",
  Cust_GERApplication = "Cust_GERApplication",
  FOPayGroup = "FOPayGroup",
  JobClassificationGBR = "JobClassificationGBR",
  FormUserInformationSection = "FormUserInformationSection",
  PaymentInformationDetailV3BOL = "PaymentInformationDetailV3BOL",
  TimeManagementAlert = "TimeManagementAlert",
  PerGlobalInfoFIN = "PerGlobalInfoFIN",
  TimeType = "TimeType",
  Cust_GERConfig = "Cust_GERConfig",
  CandidateComments = "CandidateComments",
  TodoEntryV3 = "TodoEntryV3",
  FormSectionConfiguration = "FormSectionConfiguration",
  TodoEntryV2 = "TodoEntryV2",
  JobReqTemplate_EZHireTemplate = "JobReqTemplate_EZHireTemplate",
  PaymentInformationDetailV3NGA = "PaymentInformationDetailV3NGA",
  RoleCompetencyMappingEntity = "RoleCompetencyMappingEntity",
  FOJobFunction = "FOJobFunction",
  SpotAwardLevel = "SpotAwardLevel",
  TimeManagementAlertMessage = "TimeManagementAlertMessage",
  EmpCompensationGroupSumCalculated = "EmpCompensationGroupSumCalculated",
  Cust_compensationEligibility = "Cust_compensationEligibility",
  JobAppTemplate_Candidate_Detail_Info_Template = "JobAppTemplate_Candidate_Detail_Info_Template",
  CandidateLight = "CandidateLight",
  GoalMetricLookup_4 = "GoalMetricLookup_4",
  HRISChangeLogDataReplication = "HRISChangeLogDataReplication",
  GoalMetricLookup_5 = "GoalMetricLookup_5",
  WorkScheduleDayModelSegment = "WorkScheduleDayModelSegment",
  EMMonitoredProcess = "EMMonitoredProcess",
  FormReviewFeedbackList = "FormReviewFeedbackList",
  PerGlobalInfoDEU = "PerGlobalInfoDEU",
  TimeTypeAUS = "TimeTypeAUS",
  NominationTarget = "NominationTarget",
  Map_entry_string_string_ = "Map_entry_string_string_",
  Localstring = "Localstring",
  Type = "Type",
  Multiplicity = "Multiplicity",
  Association_end = "Association_end",
  Association = "Association",
  Navigation = "Navigation",
  Property = "Property",
  RuleFieldMappingBean = "RuleFieldMappingBean",
  RuleFieldMappingBeanList = "RuleFieldMappingBeanList",
  ThemeUrlsBean = "ThemeUrlsBean",
  ThemeFingerprintsBean = "ThemeFingerprintsBean",
  AccessibilityPreferences = "AccessibilityPreferences",
  ThemeColor = "ThemeColor",
  ThemeURL = "ThemeURL",
  ThemeBackgroundConfig = "ThemeBackgroundConfig",
  ThemeButtonConfig = "ThemeButtonConfig",
  ThemeCardConfig = "ThemeCardConfig",
  ThemeContentConfig = "ThemeContentConfig",
  ThemeDiagramConfig = "ThemeDiagramConfig",
  ThemeExternalConfig = "ThemeExternalConfig",
  ThemeFooterConfig = "ThemeFooterConfig",
  ThemeHeaderBackgroundConfig = "ThemeHeaderBackgroundConfig",
  ThemeHighlightConfig = "ThemeHighlightConfig",
  ThemeHomepageConfig = "ThemeHomepageConfig",
  ThemeLoginBackgroundConfig = "ThemeLoginBackgroundConfig",
  ThemeLoginLogoConfig = "ThemeLoginLogoConfig",
  ThemeLoginConfig = "ThemeLoginConfig",
  ThemeLogoConfig = "ThemeLogoConfig",
  ThemeMenuConfig = "ThemeMenuConfig",
  ThemeModulePickerConfig = "ThemeModulePickerConfig",
  ThemeNavigationConfig = "ThemeNavigationConfig",
  ThemePlacematConfig = "ThemePlacematConfig",
  ThemePortletConfig = "ThemePortletConfig",
  ThemeTableConfig = "ThemeTableConfig",
  ThemeTileConfig = "ThemeTileConfig",
  ThemeLandingPageConfig = "ThemeLandingPageConfig",
  ThemeLandingPageTileConfig = "ThemeLandingPageTileConfig",
  GlobalThemeConfiguration = "GlobalThemeConfiguration",
  GetBizXActionResponse = "GetBizXActionResponse",
  GenerateNextPersonIDResponse = "GenerateNextPersonIDResponse",
  WfRequestActionResponse = "WfRequestActionResponse",
  ChangeDataBean = "ChangeDataBean",
  PendingDataAttributeBean = "PendingDataAttributeBean",
  EssMssWorkflowAttributeBean = "EssMssWorkflowAttributeBean",
  EssMssWorkflowSubAttributeBean = "EssMssWorkflowSubAttributeBean",
  PendDataInlineGroupBean = "PendDataInlineGroupBean",
  PendDataGroupBean = "PendDataGroupBean",
  EssMssWorkflowAttributeGroupBean = "EssMssWorkflowAttributeGroupBean",
  WfRequestPendingDataResponse = "WfRequestPendingDataResponse",
  Map_entry_string_ComplianceDataVO_ = "Map_entry_string_ComplianceDataVO_",
  DocumentCategoryDetails = "DocumentCategoryDetails",
  DocumentCategories = "DocumentCategories",
  COSocialAccountBean = "COSocialAccountBean",
  COUserInfoElementBean = "COUserInfoElementBean",
  PeopleProfileHeaderResponse = "PeopleProfileHeaderResponse",
  EPCustomBackgroundPortletProperty = "EPCustomBackgroundPortletProperty",
  InviteToApplyResponse = "InviteToApplyResponse",
  Map_entry_string_AgencyLocaleDetails_ = "Map_entry_string_AgencyLocaleDetails_",
  CORouteFormStatusBean = "CORouteFormStatusBean",
  CreatePerformanceReviewFormResponse = "CreatePerformanceReviewFormResponse",
  ToDoEntry = "ToDoEntry",
  ToDoBean = "ToDoBean",
  GetMatchedGuideLineRuleInfoResponse = "GetMatchedGuideLineRuleInfoResponse",
  IsUserEligibleForSpotAwardProgramResponse = "IsUserEligibleForSpotAwardProgramResponse",
  GetEligibleSpotAwardsProgramCodesResponse = "GetEligibleSpotAwardsProgramCodesResponse",
  ONB2RehireCheckParams = "ONB2RehireCheckParams",
  ONB2OnboardeeDetails = "ONB2OnboardeeDetails",
  ONB2ExternalHRISHiringUpdate = "ONB2ExternalHRISHiringUpdate",
  Map_entry_string_HomepageTile_ = "Map_entry_string_HomepageTile_",
  NominationApprovalWorkflowResponse = "NominationApprovalWorkflowResponse",
  Map_entry_string_bool_ = "Map_entry_string_bool_",
  SEFEventEntityKey = "SEFEventEntityKey",
  SEFEventEntityParam = "SEFEventEntityParam",
  SEFExtEventMetaData = "SEFExtEventMetaData",
  SEFExtEventMetaDataList = "SEFExtEventMetaDataList",
  Map_entry_string_SEFSubscriberConfigurationPerCategory_ = "Map_entry_string_SEFSubscriberConfigurationPerCategory_",
  Map_entry_ISCRetryFlowMetaData_ISCRetryFlowStatusMetaData_ = "Map_entry_ISCRetryFlowMetaData_ISCRetryFlowStatusMetaData_",
  SPMetadataGenerator = "SPMetadataGenerator",
  DynamicGroupBean = "DynamicGroupBean",
  DynamicGroupUserBean = "DynamicGroupUserBean",
  Map_entry_string_property_ = "Map_entry_string_property_",
  Map_entry_string_navigation_ = "Map_entry_string_navigation_",
}
