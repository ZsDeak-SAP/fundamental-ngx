import { FdLanguage } from '../models/lang';

/**
 * Default set of translations of Fundamental UI library for Georgian language
 */
export const FD_LANGUAGE_GEORGIAN: FdLanguage = {
    coreMultiComboBox: {
        selectAllLabel: 'ყველას არჩევა ({{selectedItems}} {{totalItems}}-დან)'
    },
    coreCarousel: {
        leftNavigationBtnLabel: 'წინა ელემენტზე გადასვლა',
        rightNavigationBtnLabel: 'მომდევნო ელემენტზე გადასვლა'
    },
    coreDatePicker: {
        dateInputLabel: 'თარიღის ველი',
        dateRangeInputLabel: 'თარიღის დიაპაზონის ველი',
        displayCalendarToggleLabel: 'ასარჩევის გახსნა',
        valueStateSuccessMessage: 'მნიშვნელობა სწორია',
        valueStateInformationMessage: 'მნიშვნელობა ინფორმატიულია',
        valueStateWarningMessage: 'მნიშვნელობა ითხოვს ყურადღებას',
        valueStateErrorMessage: 'მნიშვნელობა არასწორია'
    },
    coreDatetimePicker: {
        datetimeInputLabel: 'თარიღის და დროის შესაყვანი ველი',
        displayDatetimeToggleLabel: 'კალენდრის გახსნა/დახურვა',
        displayTypeDateLabel: 'თარიღი',
        displayTypeTimeLabel: 'დრო',
        datetimeOkLabel: 'კარგი',
        datetimeCancelLabel: 'გაუქმება'
    },
    coreFeedListItem: {
        moreLabel: 'მეტი',
        lessLabel: 'ნაკლები'
    },
    coreGridList: {
        filterBarCancelButtonTitle: 'გაუქმება',
        listItemStatusAriaLabel: 'ელემენტის სტატუსია: {{ status }}.',
        listItemCounterAriaLabel: 'ელემენტს აქვს {{ count }} შვილი.',
        listItemButtonDetailsTitle: 'დეტალები',
        listItemButtonDeleteTitle: 'წაშლა',
        listItemStatusContainsErrors: 'შეიცავს შეცდომებს',
        listItemStatusLocked: 'დაბლოკილი',
        listItemStatusDraft: 'დაუსრულებელი'
    },
    coreMessageStrip: {
        dismissLabel: 'გაუქმება'
    },
    coreMultiInput: {
        multiInputAriaLabel: 'Multi Value Input',
        tokensCountText: ({ length }) => `Contains ${length || 'no'} token${length === 1 ? '' : 's'}.`
    },
    coreNavigation: {
        mainNavigation: 'მთავარი ნავიგაცია',
        navigationPath: 'ნავიგაციის გზა'
    },
    coreNestedList: {
        linkItemAriaLabel:
            'სიის ელემენტი {{ itemDetails }}, ინდექსით {{ index }} {{ total }}-დან {{ selectedDescription }}'
    },
    coreOverflowLayout: {
        moreItemsButton: 'დანარჩენი {{ count }}'
    },
    corePagination: {
        pageLabel: 'გვერდი {{ pageNumber }}',
        currentPageAriaLabel: 'მიმდინარე გვერდია {{ pageNumber }}',
        labelBeforeInputMobile: 'გვერდი:',
        labelAfterInputMobile: '{{ totalCount }}-დან',
        inputAriaLabel: 'გვერდის ველი, მიმდინარე გვერდი, გვერდი {{ pageNumber }} {{ totalCount }}-დან',
        itemsPerPageLabel: 'შედეგები გვერდზე:',
        firstLabel: 'პირველი',
        previousLabel: 'წინა',
        nextLabel: 'შემდეგი',
        lastLabel: 'ბოლო',
        ariaLabel: 'გვერდები',
        totalResultsLabel: 'სულ {{ totalCount }} შედეგი'
    },
    coreProductSwitch: {
        ariaLabel: 'გადამრთველი'
    },
    coreShellbar: {
        collapsedItemMenuLabel: 'დამალული ელემენტი',
        cancel: 'Cancel',
        search: 'Search'
    },
    coreSlider: {
        singleMinMaxDetails: 'სლაიდერის მინიმალური მნიშვნელობაა {{ min }}, მაქსიმუმი - {{ max }}',
        singleValueminDetails: 'მნიშვნელობაა {{ value }}',
        singleValuemaxDetails: 'მნიშვნელობაა {{ value }}',
        singleValueNowDetails: 'მიმდინარე მნიშვნელობაა {{ value }}',
        multipleHandle1MinMaxDetails: 'სლაიდერის მინიმალური მნიშვნელობაა {{ min }}, მაქსიმუმი - {{ max }}',
        multipleHandle1ValueminDetails: 'მნიშვნელობაა {{ value }}',
        multipleHandle1ValuemaxDetails: 'მნიშვნელობაა {{ value }}',
        multipleHandle1ValueNowDetails: 'მიმდინარე მნიშვნელობაა {{ value }}',
        multipleHandle2MinMaxDetails: 'სლაიდერის მინიმალური მნიშვნელობაა {{ min }}, მაქსიმუმი - {{ max }}',
        multipleHandle2ValueminDetails: 'მნიშვნელობაა {{ value }}',
        multipleHandle2ValuemaxDetails: 'მნიშვნელობაა {{ value }}',
        multipleHandle2ValueNowDetails: 'მიმდინარე მნიშვნელობაა {{ value }}'
    },
    coreSplitButton: {
        expandButtonAriaLabel: 'მეტი ქმედებები',
        arialLabel: 'გამოყოფილი ღილაკები'
    },
    coreSplitter: {
        paginationItemAriaLabel: 'სექცია'
    },
    coreStepInput: {
        incrementButtonTitle: 'მომატება',
        decrementButtonTitle: 'დაკლება',
        ariaRoleDescription: 'ნაბიჯის შეყვანა'
    },
    coreSwitch: {
        semanticAcceptLabel: 'მიღება',
        semanticDeclineLabel: 'უარყოფა'
    },
    coreTabs: {
        tabListExpandButtonText: 'მაჩვენე მეტი'
    },
    coreText: {
        moreLabel: 'მეტი',
        lessLabel: 'ნაკლები'
    },
    coreTime: {
        componentAriaName: 'დროის ველი',
        increaseHoursLabel: 'საათის გაზრდა',
        hoursLabel: 'სთ',
        decreaseHoursLabel: 'საათის შემცირება',
        increaseMinutesLabel: 'წუთის გაზრდა',
        minutesLabel: 'წთ',
        decreaseMinutesLabel: 'წუთის შემცირება',
        increaseSecondsLabel: 'წამის გაზრდა',
        secondsLabel: 'წმ',
        decreaseSecondsLabel: 'წამის შემცირება',
        increasePeriodLabel: 'პერიოდის გაზრდა',
        periodLabel: 'პერიოდი',
        decreasePeriodLabel: 'პერიოდის შემცირება',
        navigationInstruction:
            'სიაში სამოძრაოდ დააჭირეთ ზედა და ქვედა ღილაკებს. სიებს შორის სამოძრაოდ - მარჯვენა და მარცხენა ღილაკებს.'
    },
    coreTimePicker: {
        timePickerInputLabel: 'დროის შესაყვანი ველი',
        timePickerButtonLabel: 'ასარჩევის გახსნა'
    },
    coreToken: {
        deleteButtonLabel: 'წაშლადი',
        ariaRoleDescription: 'ტოკენი'
    },
    coreTokenizer: {
        moreLabel: '{{count}} სხვა'
    },
    coreUploadCollection: {
        menuOkText: 'კარგი',
        menuCancelText: 'გაუქმება',
        menuEditAriaLabel: 'შესწორება',
        menuDeleteAriaLabel: 'წაშლა',
        menuOkAriaLabel: 'კარგი',
        menuCancelAriaLabel: 'გაუქმება',
        formItemPlaceholder: 'ფაილი'
    },
    coreWizard: {
        ariaLabel: 'ოსტატი'
    },
    coreBreadcrumb: {
        overflowTitleMore: 'მეტი'
    },
    platformActionBar: {
        backButtonLabel: 'უკან დაბრუნება'
    },
    platformApprovalFlow: {
        defaultWatchersLabel: 'დამკვირვებლები',
        defaultTitle: 'დადასტურების პროცესი',
        nextButtonAriaLabel: 'შემდეგ სლაიდზე გადასვლა',
        prevButtonAriaLabel: 'წინა სლაიდზე დაბრუნება',
        editModeSaveButtonLabel: 'შენახვა',
        editModeExitButtonLabel: 'გასვკა',
        emptyTitle: 'დაიწყე დამდასტურებლების და დამკვირვებლების დამატება',
        emptyHint:
            'დამდასტურებლის დასამატებლად დააჭირეთ "ეტაპის დამატებას". დამკვირვებლის დასამატებლად დააჭირეთ დამკვირვებლების ველს.',
        addNodeDialogHeaderAddApprovers: 'დამდასტურებლის დამატება',
        addNodeDialogHeaderEditApprover: 'დამდასტურებლის შესწორება',
        addNodeDialogHeaderAddApproverTeam: 'მომხმარებელი/გუნდი',
        addNodeDialogHeaderDetail: 'დეტალური ინფორმაცია',
        addNodeDialogNodeType: 'პარალელური ან თანმიმდევრული',
        addNodeDialogNodeTypeSerial: 'თანმიმდევრული',
        addNodeDialogNodeTypeParallel: 'პარალელური',
        addNodeDialogApproverType: 'დამდასტურებლის ტიპი',
        addNodeDialogApproverTypeUser: 'მომხმარებელი',
        addNodeDialogApproverTypeTeamAnyone: 'ნებისმიერი გუნდში',
        addNodeDialogApproverTypeTeamEveryone: 'ყველა გუნდში',
        addNodeDialogUserOrTeam: 'მომხმარებელი/გუნდი',
        addNodeDialogAddToNext: 'დაამატე შემდეგ თანმიმდევრობაში',
        addNodeDialogDueDate: 'ვადა',
        addNodeSearchPlaceholder: 'ძებნა',
        addNodeAddActionBtnLabel: 'დამატება',
        addNodeCancelActionBtnLabel: 'გაუქმება',
        addNodeSelectApproverActionBtnLabel: 'არჩევა',
        addNodeCancelApproverSelectionActionBtnLabel: 'გაუქმება',
        addNodeApproverOrTeamDetailsCloseActionBtnLabel: 'დახურვა',
        userDetailsHeader: 'დეტალურად',
        userDetailsSendReminderBtnLabel: 'შეხსენების გაგზავნა',
        userDetailsCancelBtnLabel: 'გაუქმება',
        messagesApproverAddedSuccess: 'დამდასტურებელი დაემატა',
        messagesTeamAddedSuccess: 'გუნდი დაემატა',
        messagesNodeEdited: 'დამდასტურებელი შესწორდა',
        messagesNodeRemovedSingular: 'დამდასტურებელი წაიშალა',
        messagesNodeRemovedPlural: 'დამდასტურებლები წაიშალა',
        messagesTeamRemoved: 'გუნდი წაიშალა',
        messagesErrorBuildGraph: 'გრაფის დამუშავებისას წარმოიშვა შეცდომა. შეამოწმეთ საწყისი მონაცემები.',
        messagesUndoAction: 'უკან დაბრუნება',
        nodeMembersCount: '{{ count }} წევრი',
        nodeVariousTeams: 'სხვადასხვა გუნდი',
        nodeStatusDueToday: 'ვადა იწურება დღეს',
        nodeStatusDueInXDays: ' ვადა იწურება {{ count }} დღეში',
        nodeStatusXDaysOverdue: 'ვადას გადაცდა {{ count }} დღე',
        nodeActionAddApproversBefore: 'დაამატე დამდასტურებელი წინ',
        nodeActionAddApproversAfter: 'დაამატე დამდასტურებელი შემდეგ',
        nodeActionAddApproversParallel: 'დაამატე პარალელური დამდასტურებელი',
        nodeActionEditApprover: 'შეასწორე დამდასტურებელი',
        nodeActionRemove: 'ამოღება',
        selectTypeDialogMoveApproverAs: 'აქციე დამდასტურებელი როგორც',
        selectTypeDialogParallelOrSerial: 'პარალელური ან თანმიმდევრული',
        selectTypeDialogNodeTypeParallel: 'პარალელური დამდასტურებელი',
        selectTypeDialogNodeTypeSerial: 'თანმიმდევრული დამდასტურებელი',
        selectTypeDialogConfirmButton: 'დადასტურება',
        selectTypeDialogCancelButton: 'გაუქმება',
        toolbarAddStepButton: 'ნაბიჯის დამატება',
        toolbarEditButton: 'შესწორება',
        toolbarAddApproversBefore: 'დაამატე დამდასტურებელი წინ',
        toolbarAddApproversAfter: 'დაამატე დამდასტურებელი შემდეგ',
        toolbarAddApproversParallel: 'დაამატე პარალელური დამდასტურებელი',
        toolbarRemove: 'ამოღება',
        toolbarEditApprover: 'შეასწორე დამდასტურებელი',
        watchersInputPlaceholder: 'ძებნა...',
        userListSelectedItemsCountSingular: '1 ელემენტი არჩეულია',
        userListSelectedItemsCountPlural: '{{ count }} ელემენტი არჩეულია',
        statusApproved: 'დადასტურებული',
        statusRejected: 'უარყოფილი',
        statusInProgress: 'მიმდინარე',
        statusNotStarted: 'არ დაწყებულა'
    },
    platformFeedInput: {
        userTitle: 'მომხმარებელი'
    },
    platformVHD: {
        selectionBarLabel: 'არჩეული ელემენტები',
        selectedAndConditionLabel: 'არჩეული ელემენტები',
        footerClearSelectedTitle: 'არჩეული ელემენტების გასუფთავება',
        footerClearSelectedAriaLabel: 'არჩეული ელემენტების გასუფთავება',
        searchButtonLabel: 'წინ',
        successButtonLabel: 'კარგი',
        cancelButtonLabel: 'გაუქმება',
        selectedEmptyLabel: 'ელემენტები არ არის არჩეული',
        searchPlaceholder: 'ძებნა',
        searchAdvancedSearchLabel: 'ფილტრები',
        searchShowAdvancedSearchLabel: 'მაჩვენე ფილტრები',
        searchHideAdvancedSearchLabel: 'დამალე ფილტრები',
        searchShowAllAdvancedSearchLabel: 'მაჩვენე ყველა ფილტრი',
        searchHideAllAdvancedSearchLabel: 'დამალე ყველა ფილტრი',
        selectTabDisplayCountLabel: 'ელემენტები ({{ count }})',
        selectTabMoreBtnLabel: 'მეტი',
        selectTabCountHiddenA11yLabel: 'შეიცავს {{ rowCount }} სტრიქონს და {{ colCount }} სვეტს',
        selectMobileTabBackBtnTitle: 'უკან',
        selectMobileTabBtnOpenDialogLabel: 'დიალოგური ფანჯრის გახსნა',
        selectMobileTabTitle: '{{ title }} ტაბი',
        selectMobileConditionEmpty: 'ცარიელი',
        defineConditionTitle: 'სახელი',
        defineConditionSelectedValueHiddenA11yLabel: 'არჩეული მნიშვნელობა {{ value }}',
        defineConditionConditionsGroupHeaderInclude: 'მოცვა',
        defineConditionConditionsGroupHeaderExclude: 'გამოყოფა',
        defineConditionFromPlaceholder: 'საიდან',
        defineConditionToPlaceholder: 'სადამდე',
        defineConditionValuePlaceholder: 'მნიშვნელობა',
        defineConditionRemoveConditionButtonTitle: 'პირობის ამოღება',
        defineConditionAddConditionButtonLabel: 'დამატება',
        defineConditionAddConditionButtonTitle: 'პირობის დამატება',
        defineConditionConditionStrategyLabelContains: 'შეიცავს',
        defineConditionConditionStrategyLabelEqualTo: 'უდრის',
        defineConditionConditionStrategyLabelBetween: 'შორის',
        defineConditionConditionStrategyLabelStartsWith: 'იწყება',
        defineConditionConditionStrategyLabelEndsWith: 'მთავრდება',
        defineConditionConditionStrategyLabelLessThan: 'ნაკლებია',
        defineConditionConditionStrategyLabelLessThanEqual: 'ნაკლებია ან ტოლია',
        defineConditionConditionStrategyLabelGreaterThan: 'მეტია',
        defineConditionConditionStrategyLabelGreaterThanEqual: 'მეტია ან ტოლია',
        defineConditionConditionStrategyLabelEmpty: 'ცარიელი',
        defineConditionConditionStrategyLabelNotEqualTo: 'არ უდრის',
        defineConditionConditionStrategyLabelNotEmpty: 'არ არის ცარიელი',
        defineConditionMaxCountError: 'შეიყვანეთ მნიშვნელობა, არანაკლებ {{ count }} სიმბოლო',
        selectTabTitle: 'სიიდან არჩევა',
        searchTableEmptyMessage: 'გამოიყენეთ ძებნა შედეგების მისაღებად',
        defineTabTitle: 'პირობის განსაზღვრა'
    },
    platformCombobox: {
        countListResultsSingular: '1 რეზულტატი',
        countListResultsPlural: '{{ count }} რეზულტატი'
    },
    platformMultiCombobox: {
        inputGlyphAriaLabel: 'აირჩიეთ ოფციები',
        inputIconTitle: 'აირჩიეთ ოფციები',
        mobileShowAllItemsButton: 'მაჩვენე ყველა',
        mobileShowSelectedItemsButton: 'მაჩვენე არჩეული'
    },
    platformTextarea: {
        counterMessageCharactersOverTheLimitSingular: '1 სიმბოლო აღემატება ლიმიტს',
        counterMessageCharactersOverTheLimitPlural: '{{ count }} სიმბოლო აღემატება ლიმიტს',
        counterMessageCharactersRemainingSingular: 'დარჩა 1 სიმბოლო',
        counterMessageCharactersRemainingPlural: 'დარჩა {{ count }} სიმბოლო'
    },
    platformLink: {
        roleDescriptionWithMedia: 'მედია: {{ media }}'
    },
    platformList: {
        loadingAriaLabel: 'იტვირთება'
    },
    platformObjectListItem: {
        detailsActionAriaLabel: 'დეტალები',
        deleteActionAriaLabel: 'წაშლა'
    },
    platformStandardListItem: {
        detailsActionAriaLabel: 'დეტალები',
        deleteActionAriaLabel: 'წაშლა'
    },
    platformSearchField: {
        clearButtonTitle: 'გასუფთავება',
        submitButtonTitle: 'ძებნა',
        searchInputLabel: 'ძებნა',
        synchronizeButtonTitle: 'სინქრონიზაცია',
        searchSuggestionMessage: 'ნაპოვნია {{ count }} შემოთავაზება.',
        searchSuggestionNavigateMessage: 'ნავიგაციისთვის გამოიყენეთ ზედა და ქვედა ღილაკები'
    },
    platformSmartFilterBar: {
        searchPlaceholder: 'ძებნა',
        submitButtonLabel: 'წინ',
        filtersButtonLabel: 'ფილტრები ({{ filtersCount }})',
        showFiltersButtonLabel: 'მაჩვენე ფილტრები',
        hideFiltersButtonLabel: 'დამალე ფილტრები',
        defineConditionsRemoveConditionButtonTitle: 'პირობის ამოღება',
        defineConditionsAddConditionButtonLabel: 'პირობის დამატება',
        defineConditionsSubmitButtonLabel: 'წინ',
        defineConditionsCancelButton: 'გაუქმება',
        selectFiltersHeader: 'ფილტრები',
        selectFiltersAvailableFiltersText: 'ხელმისაწვდომი ფილტრები',
        selectFiltersFilterColumnLabel: 'ფილტრი',
        selectFiltersActiveColumnLabel: 'აქტიური',
        selectFiltersSubmitButtonLabel: 'წინ',
        selectFiltersCancelButton: 'გაუქმება',
        filterConditionContains: 'შეიცავს',
        filterConditionEqualTo: 'უდრის',
        filterConditionBetween: 'შორის',
        filterConditionBeginsWith: 'იწყება',
        filterConditionEndsWith: 'მთავრდება',
        filterConditionLessThan: 'ნაკლებია',
        filterConditionLessThanOrEqualTo: 'ნაკლებია ან ტოლი',
        filterConditionGreaterThan: 'მეტია',
        filterConditionGreaterThanOrEqualTo: 'მეტია ან ტოლი',
        filterConditionAfter: 'შემდეგ',
        filterConditionOnOrAfter: 'თარიღი ტოლია ან მეტი',
        filterConditionBefore: 'ადრე',
        filterConditionBeforeOrOn: 'ადრე ან თარიღში',
        filterConditionValuePlaceholder: 'მნიშვნელობა',
        filterConditionValueFromPlaceholder: 'დან',
        filterConditionValueToPlaceholder: 'მდე',
        settingsCategoryAll: 'ყველა',
        settingsCategoryVisible: 'ხილვადი',
        settingsCategoryActive: 'აქტიური',
        settingsCategoryVisibleAndActive: 'ხილვადი და აქტიური',
        settingsCategoryMandatory: 'სავალდებულო',
        manageFieldConditions: 'Manage field conditions',
        refreshButtonAriaLabel: 'Refresh'
    },
    platformTable: {
        headerMenuSortAsc: 'ზრდადობით დალაგება',
        headerMenuSortDesc: 'კლებადობით დალაგება',
        headerMenuGroup: 'ჯგუფი',
        headerMenuFreeze: 'გაყინვა',
        headerMenuEndFreeze: 'Freeze to End',
        headerMenuUnfreeze: 'მენიუს განბლოკვა',
        headerMenuFilter: 'ფილტრი',
        defaultEmptyMessage: 'მონაცემები ვერ მოიძებნა',
        emptyCell: 'ცარიელი',
        noVisibleColumnsMessage:
            'ამჟამად, ცხრილში არ არის ხილული სვეტები. გთხოვთ, აირჩიოთ თქვენთვის საჭირო სვეტები ცხრილის პარამეტრებში.',
        resetChangesButtonLabel: 'გააუქმეთ ცვლილებები',
        editableCellNumberPlaceholder: 'შეიყვანეთ რიცხვი',
        editableCellDatePlaceholder: 'შეიყვანეთ თარიღი',
        editableCellStringPlaceholder: 'შეიყვანეთ მნიშვნელობა',
        P13ColumnsDialogHeader: 'სვეტები',
        P13ColumnsDialogSearchPlaceholder: 'ძებნა',
        P13ColumnsDialogsShowSelected: 'მაჩვენე არჩეული',
        P13ColumnsDialogShowAll: 'მაჩვენე ყველა',
        P13ColumnsDialogSelectAll: 'აირჩიე ყველა ({{ selectedColumnsCount }}/{{ selectableColumnsCount }})',
        P13ColumnsDialogConfirmationBtnLabel: 'კარგი',
        P13ColumnsDialogCancelBtnLabel: 'გაუქმება',
        P13ColumnsDialogMoveToTopBtn: 'ზემოთ ატანა',
        P13ColumnsDialogMoveUpBtn: 'ზემოთ ატანა',
        P13ColumnsDialogMoveDownBtn: 'ქვემოთ ჩატანა',
        P13ColumnsDialogMoveToBottomBtn: 'ქვემოთ ჩატანა',
        P13FilterStrategyLabelBetween: 'შორის',
        P13FilterStrategyLabelContains: 'შეიცავს',
        P13FilterStrategyLabelBeginsWith: 'იწყება',
        P13FilterStrategyLabelEndsWith: 'მთავრდება',
        P13FilterStrategyLabelEqualTo: 'უდრის',
        P13FilterStrategyLabelGreaterThan: 'მეტია',
        P13FilterStrategyLabelGreaterThanOrEqualTo: 'მეტია ან ტოლი',
        P13FilterStrategyLabelLessThan: 'ნაკლებია',
        P13FilterStrategyLabelLessThanOrEqualTo: 'ნაკლებია ან ტოლი',
        P13FilterStrategyLabelAfter: 'შემდეგ',
        P13FilterStrategyLabelOnOrAfter: 'თარიღი ტოლია ან მეტი',
        P13FilterStrategyLabelBefore: 'ადრე',
        P13FilterStrategyLabelBeforeOrOn: 'ადრე ან თარიღში',
        P13FilterStrategyLabelNotDefined: 'არაარის განსაზღვრული',
        P13FilterBooleanOptionNotDefined: ' ',
        P13FilterBooleanOptionTrue: 'დიახ',
        P13FilterBooleanOptionFalse: 'არა',
        P13FilterDialogHeader: 'ფილტრი',
        P13FilterDialogIncludePanelTitleWithCount: 'ჩართე ({{ count }})',
        P13FilterDialogIncludePanelTitleWithoutCount: 'ჩართე',
        P13FilterDialogExcludePanelTitleWithCount: 'გამოტოვე ({{ count }})',
        P13FilterDialogExcludePanelTitleWithoutCount: 'გამოტოვე',
        P13FilterDialogRemoveFilterBtnTitle: 'ფილტრის მოხსნა',
        P13FilterDialoAddFilterBtnTitle: 'ფილტრის დამატება',
        P13FilterDialogConfirmationBtnLabel: 'კარგი',
        P13FilterDialogCancelBtnLabel: 'გაუქმება',
        P13GroupDialogHeader: 'ჯგუფი',
        P13GroupDialogNoneSelectedColumnSelectPlaceholder: '(ცარიელი)',
        P13GroupDialogShowFieldAsColumnCheckboxLabel: 'მაჩვენე ველი როგორც სვეტი',
        P13GroupDialogRemoveGroupBtnTitle: 'ამოღება',
        P13GroupDialogAddNewGroupBtnTitle: 'ახლის დამატება',
        P13GroupDialogConfirmationBtnLabel: 'კარგი',
        P13GroupDialogCancelBtnLabel: 'გაუქმება',
        P13SortDialogHeader: 'დალაგება',
        P13SortDialogNoneSelectedColumn: '(ცარიელი)',
        P13SortDialogNoneSelectedSorting: '(ცარიელი)',
        P13SortDialogSortOrderSelectOptionAsc: 'ზრდადი',
        P13SortDialogSortOrderSelectOptionDesc: 'კლებადი',
        P13SortDialogRemoveSortBtnTitle: 'ამოღება',
        P13SortDialogAddNewSortBtnTitle: 'ახლის დამატება',
        P13SortDialogConfirmationBtnLabel: 'კარგი',
        P13SortDialogCancelBtnLabel: 'გაუქმება',
        toolbarSearchPlaceholder: 'ძებნა',
        toolbarActionCreateButtonLabel: 'შექმნა',
        toolbarActionSaveButtonLabel: 'შენახვა',
        toolbarActionCancelButtonLabel: 'გაუქმება',
        toolbarActionSortButtonTitle: 'დალაგება',
        toolbarActionFilterButtonTitle: 'ფილტრაცია',
        toolbarActionGroupButtonTitle: 'დაჯგუფება',
        toolbarActionColumnsButtonTitle: 'სვეტები',
        toolbarActionExpandAllButtonTitle: 'Expand all',
        toolbarActionCollapseAllButtonTitle: 'Collapse all',
        filterDialogNotFilteredLabel: '(გაუფილტრავი)',
        filterDialogFilterByLabel: 'გაფილტრე: {{ filterLabel }}',
        filterDialogFilterTitle: 'ფილტრი',
        filterDialogFilterBy: 'გაფილტრე',
        filterDialogConfirmBtnLabel: 'კარგი',
        filterDialogCancelBtnLabel: 'გაუქმება',
        groupDialogHeader: 'ჯგუფი',
        groupDialogGroupOrderHeader: 'ჯგუფის დალაგება',
        groupDialogGroupOrderAsc: 'ზრდადი',
        groupDialogGroupOrderDesc: 'კლებადი',
        groupDialogGroupByHeader: 'დაჯგუფებულია',
        groupDialogNotGroupedLabel: '(დაუჯგუფებელია)',
        groupDialogConfirmBtnLabel: 'კარგი',
        groupDialogCancelBtnLabel: 'გაუქმება',
        sortDialogHeader: 'დალაგება',
        sortDialogSortOrderHeader: 'დალაგების წესი',
        sortDialogSortOrderAsc: 'ზრდადი',
        sortDialogSortOrderDesc: 'კლებადი',
        sortDialogSortByHeader: 'დალაგებულია',
        sortDialogNotSortedLabel: '(დაულაგებელია)',
        sortDialogConfirmBtnLabel: 'კარგი',
        sortDialogCancelBtnLabel: 'გაუქმება',
        selectAllCheckboxLabel: 'Select all',
        deselectAllCheckboxLabel: 'Deselect all',
        deselectSingleRow: 'To deselect row, press SPACEBAR',
        selectSingleRow: 'To select row, press SPACEBAR',
        deselectSingleRowTitle: 'Click to deselect',
        selectSingleRowTitle: 'Click to select'
    },
    platformThumbnail: {
        detailsGotoPreviousButtonTitle: 'წინაზე გადასვლა',
        detailsGotoNextButtonTitle: 'მომდევნოზე გადასვლა',
        detailsDialogCloseBtnLabel: 'დახურვა',
        roleDescription: 'სურათი'
    },
    platformUploadCollection: {
        moveToTitle: 'გადატანა',
        moveToTitleFolder: 'საქაღალდე',
        moveToNewFolderBtnLabel: 'ახალი საქაღალდე',
        moveToAllFilesSubHeaderLabel: 'ყველა ფაილი',
        moveToConfirmBtn: 'გადატანა',
        moveToCloseBtn: 'გაუქმება',
        newFolderTitle: 'ახალი საქაღალდე',
        newFolderAtRootInputLabel: 'ახალი საქაღალდის სახელი',
        newFolderAtFolderInputLabel: '{{ folderName }}-ში ახალი საქაღალდის სახელი',
        newFolderInputPlaceholder: 'აკრიფეთ აქ...',
        newFolderInputErrorLabel: 'ნებადართულია მაქსიმუმ {{ count }} სიმბოლო',
        newFolderDialogCreateBtnLabel: 'შექმნა',
        newFolderDialogCancelBtnLabel: 'გაუქმება',
        breadcrumbLabelAllFiles: 'ყველა ფაილი',
        breadcrumbLabelAllFilesWithTotal: 'ყველა ფაილი ({{ total }})',
        searchPlaceholder: 'ძებნა',
        addBtnLabel: 'დამატება',
        newFolderBtnLabel: 'ახალი საქაღალდე',
        moveToBtnLabel: 'გადატანა',
        downloadBtnLabel: 'ჩამოტვირთვა',
        updateVersionBtnLabel: 'ვერსიის განახლება',
        removeBtnLabel: 'ამოღება',
        folderIconTitle: 'საქაღალდის სურათი',
        fileIconTitle: 'ფაილის სურათი',
        editFileNameInputPlaceholder: 'შეიყვანეთ სახელი',
        editFileNameFileAlreadyExistsError: 'ამ სახელით ფაილი უკვე არსებობს',
        editFileNameFolderAlreadyExistsError: 'ამ სახელით საქაღალდე უკვე არსებობს',
        itemStatusSuccessful: 'წარმატებული',
        itemStatusUnsuccessful: 'წარუმატებელი',
        uploadNewFileAfterFailAction: 'გაშვება',
        cancelUploadNewFileAction: 'გაუქმება',
        itemMenuBtnTitle: 'მეტი',
        dragDropAreaText: 'ჩააგდეთ ფაილი ასატვირთად',
        noDataText: 'ფაილები არ მოიძებნა',
        noDataDescription: 'ჩააგდეთ ფაილი ასატვირთად, ან დააჭირეთ "დამატებას"',
        paginationTotal: 'ნაჩვენებია {{ from }}-{{ to }} {{ total }}-დან',
        resultsPerPage: 'რეზულტატი გვერდზე',
        messageCreateFailed: '{{ folderName }} ვერ შეიქმნა.',
        messageCreateSuccess: '{{ folderName }} შეიქმნა.',
        messageUpdateVersionFailed: '{{ folderName }}-ის ვერსიის განახლება ვერ მოხერხდა.',
        messageUpdateVersionSuccess: '{{ folderName }}-ის ვერსია განახლდა.',
        messageFileRenameFailed: 'სახელის გადარქმევა "{{ from }}"-დან "{{ to }}"-ზე ვერ მოხერხდა.',
        messageFileRenameSuccess: '"{{ from }}"-ს დაერქვა "{{ to }}".',
        messageRemoveFoldersAndFilesFailed:
            '{{ foldersCount }} საქაღალდის და {{ filesCount }} ფაილის წაშლა ვერ მოხერხდა.',
        messageRemoveFoldersAndFilesSuccess: '{{ foldersCount }} საქაღალდე და {{ filesCount }} ფაილი წაიშალა.',
        messageRemoveFoldersFailed: '{{ foldersCount }} საქაღალდე ვერ წაიშალა.',
        messageRemoveFoldersSuccess: '{{ foldersCount }} საქაღალდე წაიშალა.',
        messageRemoveFilesFailed: '{{ filesCount }} ფაილი ვერ წაიშალა.',
        messageRemoveFilesSuccess: '{{ filesCount }} ფაილი წაიშალა.',
        messageRemoveFileOrFolderFailed: '{{ name }} ვერ წაიშალა.',
        messageRemoveFileOrFolderSuccess: '{{ name }} წაიშალა.',
        messageMoveFoldersAndFilesFailed:
            '{{ foldersCount }} საქაღალდის და {{ filesCount }} ფაილის გადატანა ვერ მოხერხდა {{ to }}-ში.',
        messageMoveFoldersAndFilesSuccess:
            '{{ foldersCount }} საქაღალდე და {{ filesCount }} ფაილი გადატანილია {{ to }}-ში.',
        messageMoveFoldersFailed: '{{ foldersCount }} საქაღალდის გადატანა ვერ მოხერხდა {{ to }}-ში.',
        messageMoveFoldersSuccess: '{{ foldersCount }} საქაღალდე გადატანილია {{ to }}-ში.',
        messageMoveFilesFailed: '{{ filesCount }} ფაილის გადატანა ვერ მოხერხდა {{ to }}-ში.',
        messageMoveFilesSuccess: '{{ filesCount }} ფაილი გადატანილია {{ to }}-ში.',
        messageMoveFileOrFolderFailed: '{{ name }}-ის გადატანა ვერ მოხდა {{ to }}-ში.',
        messageMoveFileOrFolderSuccess: '{{ name }} გადატანილია {{ to }}-ში.',
        messageMoveRootFoldersAndFilesFailed:
            '{{ foldersCount }} საქაღალდის და {{ filesCount }} ფაილის გადატანა ვერ მოხერხდა.',
        messageMoveRootFoldersAndFilesSuccess: '{{ foldersCount }} საქაღალდე და {{ filesCount }} ფაილი გადატანილია.',
        messageMoveRootFoldersFailed: '{{ foldersCount }} საქაღალდის გადატანა ვერ მოხერხდა.',
        messageMoveRootFoldersSuccess: '{{ foldersCount }} საქაღალდე გადატანილია.',
        messageMoveRootFilesFailed: '{{ filesCount }} ფაილის გადატანა ვერ მოხერხდა.',
        messageMoveRootFilesSuccess: '{{ filesCount }} ფაილი გადატანილია.',
        messageMoveRootFileOrFolderFailed: '{{ name }}-ის გადატანა ვერ მოხერხდა.',
        messageMoveRootFileOrFolderSuccess: '{{ name }} გადატანილია.',
        messageFileTypeMismatchPlural:
            '{{ filesCount }} ფაილს აქვს აკრძალული გაფართოება. ნებადართული გაფართოებებია: {{ allowedTypes }}.',
        messageFileTypeMismatchSingular:
            'ფაილს "{{ fileName }}" აქვს აკრძალული გაფართოება. ნებადართული გაფართოებებია: {{ allowedTypes }}.',
        messageFileSizeExceededPlural:
            '{{ filesCount }} ფაილი აჭარბებს მაქსიმალურ მოცულობას. ნებადართული მაქსიმალური ზომაა: {{ maxFileSize }}.',
        messageFileSizeExceededSingular:
            'ფაილი "{{ fileName }}" აჭარბებს მაქსიმალურ მოცულობას. ნებადართული მაქსიმალური ზომაა: {{ maxFileSize }}.',
        messageFileNameLengthExceededPlural:
            '{{ filesCount }} ფაილი აჭარბებს მაქსიმალურ სახელის სიგრძეს. მაქსიმალური სიგრძეა: {{ maxFilenameLength }} characters.',
        messageFileNameLengthExceededSingular:
            'ფაილი "{{ fileName }}" აჭარბებს მაქსიმალურ სახელის სიგრძეს. მაქსიმალური სიგრძეა: {{ maxFilenameLength }} characters.'
    },
    platformWizardGenerator: {
        summarySectionEditStep: 'შესწორება'
    },
    platformMessagePopover: {
        allErrors: 'ყველა',
        defaultErrors: {
            email: 'ელ-ფოსტა არასწორია',
            max: 'ველის მნიშვნელობა აღემატება დაშვებულ მაქსიმუმს',
            maxLength: 'ველის მოცულობა აღემატება დაშვებულ მაქსიმუმს',
            min: 'ველის მნიშვნელობა აუცილებელ მინიმუმზე ნაკლებია',
            minLength: 'ველის მოცულობა აუცილებელ მინიმუმზე ნაკლებია',
            pattern: 'ველის მნიშვნელობა არასწორია',
            required: 'ველი სავალდებულოა',
            requiredTrue: 'ველის შეყვანა სავალდებულოა'
        }
    },
    platformVariantManagement: {
        manage: 'მართვა',
        saveAs: 'შენახვა როგორც',
        saveView: 'ვარიანტის შენახვა',
        save: 'შენახვა',
        myViews: 'ჩემი ვარიანტები',
        view: 'ვარიანტი',
        setAsDefault: 'ნაგულისხმევად გამოყენება',
        public: 'საჯარო',
        applyAutomatically: 'ავტომატურად გამოყენება',
        requiredFieldError: 'ეს ველი სავალდებულოა.',
        nameTakenFieldError: 'ვარიანტი ამ სახელით უკვე არსებობს. გთხოვთ, გამოიყენოთ სხვა სახელი.',
        cancel: 'გაუქმება',
        manageViews: 'ვარიანტების მართვა',
        markAsFavourite: 'ფავორიტად მონიშვნა',
        sharing: 'ხილვადობა',
        default: 'ნაგულისხმევი',
        createdBy: 'შემქმნელი',
        removeVariant: 'ვარიანტის წაშლა',
        search: 'ძებნა',
        access: {
            public: 'საჯარო',
            private: 'პირადი'
        }
    },
    platformSelect: {
        selectOptionLabel: 'აირჩიეთ ვარიანტი'
    },
    fnSlider: {
        minMaxDetails: 'სლაიდერის მინიმალური მნიშვნელობაა {{ min }}, მაქსიმალური - {{ max }}',
        valueminDetails: 'მნიშვნელობა არის {{ value }}',
        valuemaxDetails: 'მნიშვნელობა არის {{ value }}',
        valueNowDetails: 'მიმდინარე მნიშვნელობა {{ value }}'
    },
    fnSwitch: {
        semanticAcceptLabel: 'დათანხმება',
        semanticDeclineLabel: 'უარყოფა'
    },
    coreTree: {
        expand: 'Expand node',
        collapse: 'Collapse node',
        noData: 'No data'
    }
};
