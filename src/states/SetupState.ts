export type SetupInitState = {
    percentileValue1?: number | '';
    percentileValue2?: number | '';
    percentileValue3?: number | '';
    questionContentValue?: string | '';
}

export const initialSetupState: SetupInitState = {
    percentileValue1: '',
    percentileValue2: '',
    percentileValue3: '',
    questionContentValue: "",
}
