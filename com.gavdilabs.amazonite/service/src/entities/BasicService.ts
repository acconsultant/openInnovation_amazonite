import { ITUSerRoleRaw } from "./schema";
import { IAdvance, IDomainEventAlert, IONB2ProcessTrigger, IOneTimeDeduction, IPicklistOption, IONB2BuddyActivity, ISpotAward, IRightToReturn, ICompetencyRating, IComplianceProcessTask, IONB2ProcessTask, IFOCostCenter, ICust_CC_UserComp, ICust_CC_ProfileAssignment, ICust_CC_UserCompDocument, IComplianceDocumentFlow, IAutoDelegateDetail, IAutoDelegateConfig, IEmpEmployment, IDRTMPurgeFreeze, ISkillProfile, ICust_Performancedata, IFOBusinessUnit, IFODepartment, IFODivision, IPosition, IPayrollDataMaintenanceTask, IONB2EquipmentActivity, IONB2Process, IMentoringProgramMatchedParticipant, INominationTarget, ITalentPool, IPersonKey, IAssignedComplianceForm, IComplianceFormSignature, IAchievement, IActivity, IComplianceFormData, IONB2DataCollectionUserConfig, ITimeManagementAlert, IAccrualCalculationBase, IBudgetGroup, IDataReplicationProxy, IEmployeePayrollRunResults, IEmployeeTimeGroup, IEmployeeTime, IHRISChangeLogDataReplication, IPositionRightToReturn, ISpotAwardBudget, ISpotAwardRedemption, ITemporaryTimeInformation, ITimeAccount, ITimeAccountSnapshot, IWorkSchedule, IComplianceProcess, IOnboardingInfo, IUserPermissions, IAdvancesAccumulation, INonRecurringPayment, IRecurringDeduction, IWorkOrder, IEmpCostDistribution, IEmployeeDataReplicationConfirmation, IEmployeeDataReplicationElement, IEmployeeDataReplicationNotification, IHireDateChange, ISecondaryAssignmentsItem, IPaymentInformationV3 } from "./sf";

export interface IUser {
  ID: string;
  createdAt?: Date;
  createdBy?: string;
  modifiedAt?: Date;
  modifiedBy?: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
}

export interface ITest {
  ID: string;
  test: string;
}

export interface IRoles {
  ID: string;
  roleName: string;
  userName: string;
}

export interface ISFUser {
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
  customManager?: ISFUser[];
  customReports?: ISFUser[];
  declinedByOfComplianceDocumentFlowNav?: IComplianceDocumentFlow[];
  delegateeOfAutoDelegateDetailNav?: IAutoDelegateDetail[];
  delegatorOfAutoDelegateConfigNav?: IAutoDelegateConfig[];
  directReports?: ISFUser[];
  empInfo?: IEmpEmployment;
  employmentIdentityOfDRTMPurgeFreezeNav?: IDRTMPurgeFreeze[];
  ethnicityNav?: IPicklistOption;
  externalCodeOfSkillProfileNav?: ISkillProfile[];
  externalCodeOfcust_PerformancedataNav?: ICust_Performancedata[];
  headOfUnitOfFOBusinessUnitNav?: IFOBusinessUnit[];
  headOfUnitOfFODepartmentNav?: IFODepartment[];
  headOfUnitOfFODivisionNav?: IFODivision[];
  hr?: ISFUser;
  hrReports?: ISFUser[];
  impactOfLossNav?: IPicklistOption;
  incumbentOfPositionNav?: IPosition[];
  initiatedByOfPayrollDataMaintenanceTaskNav?: IPayrollDataMaintenanceTask[];
  lastNudgedByOfONB2BuddyActivityNav?: IONB2BuddyActivity[];
  lastNudgedByOfONB2EquipmentActivityNav?: IONB2EquipmentActivity[];
  manager?: ISFUser;
  managerOfONB2ProcessNav?: IONB2Process[];
  matrixManager?: ISFUser[];
  matrixReports?: ISFUser[];
  menteeOfMentoringProgramMatchedParticipantNav?: IMentoringProgramMatchedParticipant[];
  mentorOfMentoringProgramMatchedParticipantNav?: IMentoringProgramMatchedParticipant[];
  nominationNav?: INominationTarget[];
  nominatorIdOfSpotAwardNav?: ISpotAward[];
  ownerOfTalentPoolNav?: ITalentPool[];
  passiveUserOfMentoringProgramMatchedParticipantNav?: IMentoringProgramMatchedParticipant[];
  personKeyNav?: IPersonKey;
  proxy?: ISFUser[];
  reasonForLeavingNav?: IPicklistOption;
  rehireUserOfONB2ProcessTriggerNav?: IONB2ProcessTrigger[];
  reloWillingNav?: IPicklistOption;
  responsibleUserOfAssignedComplianceFormNav?: IAssignedComplianceForm[];
  riskOfLossNav?: IPicklistOption;
  salutationNav?: IPicklistOption;
  secondManager?: ISFUser;
  secondReports?: ISFUser[];
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

export enum FuncSFUserRoles {
  name = "SFUserRoles",
  paramUserId = "userId",
}

export interface IFuncSFUserRolesParams {
  userId: string;
}

export type FuncSFUserRolesReturn = ITUSerRoleRaw;

export enum Entity {
  User = "BasicService.User",
  Test = "BasicService.Test",
  Roles = "BasicService.Roles",
  SFUser = "BasicService.SFUser",
}

export enum SanitizedEntity {
  User = "User",
  Test = "Test",
  Roles = "Roles",
  SFUser = "SFUser",
}
