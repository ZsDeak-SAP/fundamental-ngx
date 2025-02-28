import { FdLanguage } from '../models/lang';

/**
 * Default set of translations of Fundamental UI library for Hindi language
 */
export const FD_LANGUAGE_HINDI: FdLanguage = {
    coreMultiComboBox: {
        selectAllLabel: 'सबका चयन करें'
    },
    coreCarousel: {
        leftNavigationBtnLabel: 'पिछले वस्तु पर जाएं',
        rightNavigationBtnLabel: 'अगले वस्तु पर जाएं'
    },
    coreDatePicker: {
        dateInputLabel: 'दिनांक इनपुट',
        dateRangeInputLabel: 'दिनांक सीमा इनपुट',
        displayCalendarToggleLabel: 'पिकर खोलें',
        valueStateSuccessMessage: 'मूल्य स्थिति सफल',
        valueStateInformationMessage: 'मूल्य स्थिति सूचना',
        valueStateWarningMessage: 'मूल्य स्थिति चेतावनी',
        valueStateErrorMessage: 'मूल्य स्थिति गलती'
    },
    coreDatetimePicker: {
        datetimeInputLabel: 'दिनांक और समय इनपुट',
        displayDatetimeToggleLabel: 'कैलेंडर टॉगल दिखाएं',
        displayTypeDateLabel: 'दिनांक',
        displayTypeTimeLabel: 'समय',
        datetimeOkLabel: 'ठीक है',
        datetimeCancelLabel: 'रद्द करें'
    },
    coreFeedListItem: {
        moreLabel: 'अधिक',
        lessLabel: 'कम'
    },
    coreGridList: {
        filterBarCancelButtonTitle: 'रद्द करें',
        listItemStatusAriaLabel: 'वस्तु की स्थिति है। स्थिति: {{ status }}',
        listItemCounterAriaLabel: 'वस्तु के {{ count }} उपसूची है।',
        listItemButtonDetailsTitle: 'विवरण',
        listItemButtonDeleteTitle: 'मिटायें',
        listItemStatusContainsErrors: 'इसमें गलतियां हैं',
        listItemStatusLocked: 'बंद',
        listItemStatusDraft: 'प्रालेख'
    },
    coreMessageStrip: {
        dismissLabel: 'खारिज करें'
    },
    coreMultiInput: {
        multiInputAriaLabel: 'Multi Value Input',
        tokensCountText: ({ length }) => `Contains ${length || 'no'} token${length === 1 ? '' : 's'}.`
    },
    coreNavigation: {
        mainNavigation: 'Main Navigation',
        navigationPath: 'Navigation Path'
    },
    coreNestedList: {
        linkItemAriaLabel: 'ट्री वस्तु {{ itemDetails }}, {{ index }} का {{ total }}{{ selectedDescription }}'
    },
    coreOverflowLayout: {
        moreItemsButton: '{{ count }} अधिक'
    },
    corePagination: {
        pageLabel: 'पृष्ठ {{ pageNumber }}',
        currentPageAriaLabel: 'पृष्ठ {{ pageNumber }} वर्तमान पृष्ठ है',
        labelBeforeInputMobile: 'पृष्ठ :',
        labelAfterInputMobile: 'का {{ totalCount }}',
        inputAriaLabel: 'पेज इनपुट, वर्तमान पृष्ठ, पृष्ठ {{ pageNumber }} का {{ totalCount }}',
        itemsPerPageLabel: 'प्रति पृष्ठ परिणाम :',
        firstLabel: 'पहला',
        previousLabel: 'पिछला',
        nextLabel: 'अगला',
        lastLabel: 'अंतिम',
        ariaLabel: 'पृष्ठ अंकन',
        totalResultsLabel: '{{ totalCount }} परिणाम'
    },
    coreProductSwitch: {
        ariaLabel: 'उत्पाद स्विच'
    },
    coreShellbar: {
        collapsedItemMenuLabel: 'छोटा किया गया आइटम मेनू',
        cancel: 'Cancel',
        search: 'Search'
    },
    coreSlider: {
        singleMinMaxDetails: 'स्लाइडर न्यूनतम मूल्य है {{ min }}, अधिकतम मूल्य है {{ max }}',
        singleValueminDetails: 'मूल्य है {{ value }}',
        singleValuemaxDetails: 'मूल्य है {{ value }}',
        singleValueNowDetails: 'वर्तमान मूल्य है {{ value }}',
        multipleHandle1MinMaxDetails: 'रेंज स्लाइडर न्यूनतम मूल्य है {{ min }}, अधिकतम मूल्य है {{ max }}',
        multipleHandle1ValueminDetails: 'मूल्य है {{ value }}',
        multipleHandle1ValuemaxDetails: 'मूल्य है {{ value }}',
        multipleHandle1ValueNowDetails: 'वर्तमान मूल्य है {{ value }}',
        multipleHandle2MinMaxDetails: 'रेंज स्लाइडर न्यूनतम मूल्य है {{ min }}, अधिकतम मूल्य है {{ max }}',
        multipleHandle2ValueminDetails: 'मूल्य है {{ value }}',
        multipleHandle2ValuemaxDetails: 'मूल्य है {{ value }}',
        multipleHandle2ValueNowDetails: 'वर्तमान मूल्य है {{ value }}'
    },
    coreSplitButton: {
        expandButtonAriaLabel: 'अधिक क्रियाएं',
        arialLabel: 'बाँटा हुआ बटन'
    },
    coreSplitter: {
        paginationItemAriaLabel: 'भाग'
    },
    coreStepInput: {
        incrementButtonTitle: 'इसे बढ़ाएँ',
        decrementButtonTitle: 'इसे घटाएं',
        ariaRoleDescription: 'स्टेप इनपुट'
    },
    coreSwitch: {
        semanticAcceptLabel: 'स्वीकार करें',
        semanticDeclineLabel: 'अस्वीकार करें'
    },
    coreTabs: {
        tabListExpandButtonText: 'अधिक'
    },
    coreText: {
        moreLabel: 'अधिक',
        lessLabel: 'कम'
    },
    coreTime: {
        componentAriaName: 'समय चुनने वाला',
        increaseHoursLabel: 'घंटे बढ़ाएँ',
        hoursLabel: 'घंटे',
        decreaseHoursLabel: 'घंटे घटाएं',
        increaseMinutesLabel: 'मिनट बढ़ाएँ',
        minutesLabel: 'मिनट',
        decreaseMinutesLabel: 'मिनट घटाएं',
        increaseSecondsLabel: 'सेकंड बढ़ाएँ',
        secondsLabel: 'सेकंड',
        decreaseSecondsLabel: 'सेकंड घटाएं',
        increasePeriodLabel: 'अवधि बढ़ाएँ',
        periodLabel: 'अवधि',
        decreasePeriodLabel: 'अवधि घटाएं',
        navigationInstruction:
            'इस सूची में वस्तुओं के बीच जाने के लिए, ऊपर तीर या निचला तीर दबाएं। सूचियों के बीच स्विच करने के लिए बायाँ तीर या दायाँ तीर दबाएँ।'
    },
    coreTimePicker: {
        timePickerInputLabel: 'समय चुनने वाला इनपुट',
        timePickerButtonLabel: 'चुनने वाला खोलें'
    },
    coreToken: {
        deleteButtonLabel: 'हटाने-योग्य',
        ariaRoleDescription: 'टोकन'
    },
    coreTokenizer: {
        moreLabel: '{{ count }} अधिक'
    },
    coreUploadCollection: {
        menuOkText: 'ठीक है',
        menuCancelText: 'रद्द करें',
        menuEditAriaLabel: 'संपादित करें',
        menuDeleteAriaLabel: 'मिटाऐं',
        menuOkAriaLabel: 'संपादित करें',
        menuCancelAriaLabel: 'रद्द करें',
        formItemPlaceholder: 'फ़ाइल का नाम'
    },
    coreWizard: {
        ariaLabel: 'विज़ार्ड'
    },
    coreBreadcrumb: {
        overflowTitleMore: 'और'
    },
    platformActionBar: {
        backButtonLabel: 'वापस जाएं'
    },
    platformApprovalFlow: {
        defaultWatchersLabel: 'नजर रखने वाले',
        defaultTitle: 'अनुमोदन प्रक्रिया',
        nextButtonAriaLabel: 'आगे की स्लाइड पर जाएं',
        prevButtonAriaLabel: 'पिछली स्लाइड पर जाएं',
        editModeSaveButtonLabel: 'सहेजें',
        editModeExitButtonLabel: 'बाहर निकलें',
        emptyTitle: 'अनुमोदक और देखने वालों को जोड़ना शुरू करें',
        emptyHint:
            'अनुमोदक को जोड़ने के लिए "एक चरण जोड़ें" पर क्लिक करें। देखने वालों को जोड़ने के लिए, नजर रखने वाले फ़ील्ड पर क्लिक करें।',
        addNodeDialogHeaderAddApprovers: 'अनुमोदक जोड़ें',
        addNodeDialogHeaderEditApprover: 'अनुमोदक संपादित करें',
        addNodeDialogHeaderAddApproverTeam: 'उपयोगकर्ता/समूह',
        addNodeDialogHeaderDetail: 'विवरण',
        addNodeDialogNodeType: 'समानांतर या क्रमिक',
        addNodeDialogNodeTypeSerial: 'क्रमिक',
        addNodeDialogNodeTypeParallel: 'समानांतर',
        addNodeDialogApproverType: 'अनुमोदक के प्रकार',
        addNodeDialogApproverTypeUser: 'एक उपयोगकर्ता',
        addNodeDialogApproverTypeTeamAnyone: 'समूह में कोई भी',
        addNodeDialogApproverTypeTeamEveryone: 'समूह में सभी',
        addNodeDialogUserOrTeam: 'उपयोगकर्ता/समूह',
        addNodeDialogAddToNext: 'अगले क्रमिक नोड में जोड़ें',
        addNodeDialogDueDate: 'नियत तिथि',
        addNodeSearchPlaceholder: 'खोजें',
        addNodeAddActionBtnLabel: 'जोड़ें',
        addNodeCancelActionBtnLabel: 'रद्द करें',
        addNodeSelectApproverActionBtnLabel: 'चुने',
        addNodeCancelApproverSelectionActionBtnLabel: 'रद्द करें',
        addNodeApproverOrTeamDetailsCloseActionBtnLabel: 'बंद करें',
        userDetailsHeader: 'विवरण',
        userDetailsSendReminderBtnLabel: 'याद दिलाये',
        userDetailsCancelBtnLabel: 'रद्द करें',
        messagesApproverAddedSuccess: '1 अनुमोदक जोड़ा गया है',
        messagesTeamAddedSuccess: '1 समूह जोड़ा गया है',
        messagesNodeEdited: '1 अनुमोदनकर्ता संपादित किया गया है',
        messagesNodeRemovedSingular: '1 अनुमोदनकर्ता को हटा दिया गया है',
        messagesNodeRemovedPlural: 'सभी अनुमोदनकर्ता को हटा दिया गया है',
        messagesTeamRemoved: '1 समूह को हटा दिया गया है',
        messagesErrorBuildGraph: 'ग्राफ़ बनाने का प्रयास करते समय एक गलति हुई| प्रारंभिक डेटा की जाँच करें।',
        messagesUndoAction: 'पूर्ववत करें',
        nodeMembersCount: '{{ count }} सदस्य',
        nodeVariousTeams: 'विविध समूह',
        nodeStatusDueToday: 'नियत तिथि',
        nodeStatusDueInXDays: '{{ count }} दिनों में देय है',
        nodeStatusXDaysOverdue: '{{ count }} दिन अतिदेय',
        nodeActionAddApproversBefore: 'पहले अनुमोदक जोड़ें',
        nodeActionAddApproversAfter: 'बाद में अनुमोदक जोड़ें',
        nodeActionAddApproversParallel: 'समानांतर अनुमोदक जोड़ें',
        nodeActionEditApprover: 'अनुमोदक संपादित करें',
        nodeActionRemove: 'हटाएं',
        selectTypeDialogMoveApproverAs: 'अनुमोदक को इस रूप में ले जाएँ',
        selectTypeDialogParallelOrSerial: 'समानांतर या क्रमिक',
        selectTypeDialogNodeTypeParallel: 'समानांतर अनुमोदक',
        selectTypeDialogNodeTypeSerial: 'क्रमिक समानांतर अनुमोदक',
        selectTypeDialogConfirmButton: 'पुष्टि करें',
        selectTypeDialogCancelButton: 'रद्द करें',
        toolbarAddStepButton: 'एक चरण जोड़ें',
        toolbarEditButton: 'संपादित करें',
        toolbarAddApproversBefore: 'पहले अनुमोदक जोड़ें',
        toolbarAddApproversAfter: 'बाद में अनुमोदक जोड़ें',
        toolbarAddApproversParallel: 'समानांतर अनुमोदक जोड़ें',
        toolbarRemove: 'हटाएं',
        toolbarEditApprover: 'अनुमोदक संपादित करें',
        watchersInputPlaceholder: 'यहां खोजें..',
        userListSelectedItemsCountSingular: '1 आइटम चुना गया',
        userListSelectedItemsCountPlural: '{{ count }} आइटम चुने गए',
        statusApproved: 'approved',
        statusRejected: 'rejected',
        statusInProgress: 'in progress',
        statusNotStarted: 'not started'
    },
    platformFeedInput: {
        userTitle: 'उपयोगकर्ता'
    },
    platformVHD: {
        selectionBarLabel: 'निर्वाचित और शर्त आइटम',
        selectedAndConditionLabel: 'चयनित आइटम और शर्तें',
        footerClearSelectedTitle: 'चयनित आइटम साफ़ करें',
        footerClearSelectedAriaLabel: 'चयनित आइटम साफ़ करें',
        searchButtonLabel: 'जाएँ',
        successButtonLabel: 'ठीक है',
        cancelButtonLabel: 'रद्द करें',
        selectedEmptyLabel: 'कोई आइटम या शर्तें चयनित नहीं हैं',
        searchPlaceholder: 'खोजें',
        searchAdvancedSearchLabel: 'फिल्टर',
        searchShowAdvancedSearchLabel: 'फ़िल्टर दिखाएं',
        searchHideAdvancedSearchLabel: 'फ़िल्टर छुपाएं',
        searchShowAllAdvancedSearchLabel: 'सभी फ़िल्टर दिखाएं',
        searchHideAllAdvancedSearchLabel: 'सभी फ़िल्टर छुपाएं',
        selectTabDisplayCountLabel: '({{ count }}) वस्तुएं',
        selectTabMoreBtnLabel: 'और',
        selectTabCountHiddenA11yLabel: 'इसमें {{ rowCount }} पंक्तियाँ और {{ colCount }} कॉलम हैं',
        selectMobileTabBackBtnTitle: 'वापस',
        selectMobileTabBtnOpenDialogLabel: 'डायलॉग खोलें',
        selectMobileTabTitle: '{{ title }} टैब',
        selectMobileConditionEmpty: 'खाली',
        defineConditionTitle: 'उत्पाद',
        defineConditionSelectedValueHiddenA11yLabel: 'चयनित मूल्य {{ value }}',
        defineConditionConditionsGroupHeaderInclude: 'शामिल करें',
        defineConditionConditionsGroupHeaderExclude: 'बहिष्कृत करें',
        defineConditionFromPlaceholder: 'से',
        defineConditionToPlaceholder: 'तक',
        defineConditionValuePlaceholder: 'मूल्य',
        defineConditionRemoveConditionButtonTitle: 'शर्त हटाएं',
        defineConditionAddConditionButtonLabel: 'जोड़ें',
        defineConditionAddConditionButtonTitle: 'शर्त जोड़ें',
        defineConditionConditionStrategyLabelContains: 'शामिल काम करता हैं',
        defineConditionConditionStrategyLabelEqualTo: 'के बराबर',
        defineConditionConditionStrategyLabelBetween: 'के बीच में',
        defineConditionConditionStrategyLabelStartsWith: 'से शुरू होता है',
        defineConditionConditionStrategyLabelEndsWith: 'के साथ समाप्त होता है',
        defineConditionConditionStrategyLabelLessThan: 'से कम',
        defineConditionConditionStrategyLabelLessThanEqual: 'बराबर से कम',
        defineConditionConditionStrategyLabelGreaterThan: 'से अधिक',
        defineConditionConditionStrategyLabelGreaterThanEqual: 'बराबर से अधिक',
        defineConditionConditionStrategyLabelEmpty: 'खाली',
        defineConditionConditionStrategyLabelNotEqualTo: 'के बराबर नहीं',
        defineConditionConditionStrategyLabelNotEmpty: 'खाली नही',
        defineConditionMaxCountError: '{{ count }} से अधिक अक्षरो वाला कोई मूल्य दर्ज करें',
        selectTabTitle: 'सूची में से चयन करें',
        searchTableEmptyMessage: 'परिणाम प्राप्त करने के लिए खोज का प्रयोग करें',
        defineTabTitle: 'शर्तों को परिभाषित करें'
    },
    platformCombobox: {
        countListResultsSingular: '1 परिणाम सूची आइटम',
        countListResultsPlural: '{{ count }} परिणाम सूची आइटम'
    },
    platformMultiCombobox: {
        inputGlyphAriaLabel: 'विकल्प चुनें',
        inputIconTitle: 'विकल्प चुनें',
        mobileShowAllItemsButton: 'सभी आइटम दिखाएं',
        mobileShowSelectedItemsButton: 'सभी आइटम दिखाएं'
    },
    platformTextarea: {
        counterMessageCharactersOverTheLimitSingular: '1 सीमा से अधिक चरित्र',
        counterMessageCharactersOverTheLimitPlural: '{{ count }} सीमा से अधिक वर्ण',
        counterMessageCharactersRemainingSingular: '1 चरित्र शेष',
        counterMessageCharactersRemainingPlural: '{{ count }} शेष वर्ण'
    },
    platformLink: {
        roleDescriptionWithMedia: 'मीडिया: {{ media }}'
    },
    platformList: {
        loadingAriaLabel: 'लोड हो रहा है'
    },
    platformObjectListItem: {
        detailsActionAriaLabel: 'विवरण',
        deleteActionAriaLabel: 'हटाएं'
    },
    platformStandardListItem: {
        detailsActionAriaLabel: 'विवरण',
        deleteActionAriaLabel: 'हटाएं'
    },
    platformSearchField: {
        clearButtonTitle: 'साफ़ करें',
        submitButtonTitle: 'खोज करें',
        searchInputLabel: 'खोज करें',
        synchronizeButtonTitle: 'सिंक्रनाइज़ करें',
        searchSuggestionMessage: '{{ count }} सुझाव मिले',
        searchSuggestionNavigateMessage: 'नेविगेट करने के लिए ऊपर और नीचे तीरों का उपयोग करें'
    },
    platformSmartFilterBar: {
        searchPlaceholder: 'खोज करें',
        submitButtonLabel: 'जाओ',
        filtersButtonLabel: 'फिल्टर ({{ filtersCount }})',
        showFiltersButtonLabel: 'फ़िल्टर दिखाएं',
        hideFiltersButtonLabel: 'फ़िल्टर छुपाएं',
        defineConditionsRemoveConditionButtonTitle: 'शर्त हटाएं',
        defineConditionsAddConditionButtonLabel: 'शर्त जोड़ें',
        defineConditionsSubmitButtonLabel: 'जाओ',
        defineConditionsCancelButton: 'रद्द करें',
        selectFiltersHeader: 'फिल्टर',
        selectFiltersAvailableFiltersText: 'उपलब्ध फिल्टर',
        selectFiltersFilterColumnLabel: 'फिल्टर',
        selectFiltersActiveColumnLabel: 'सक्रिय',
        selectFiltersSubmitButtonLabel: 'जाओ',
        selectFiltersCancelButton: 'रद्द करें',
        filterConditionContains: 'रोकना',
        filterConditionEqualTo: 'के बराबर',
        filterConditionBetween: 'के बीच',
        filterConditionBeginsWith: 'आरंभ है',
        filterConditionEndsWith: 'समाप्त है',
        filterConditionLessThan: 'से कम',
        filterConditionLessThanOrEqualTo: 'कम या बराबर',
        filterConditionGreaterThan: 'अधिक',
        filterConditionGreaterThanOrEqualTo: 'बड़ा या इसके बराबर',
        filterConditionAfter: 'बाद में',
        filterConditionOnOrAfter: 'पर या बाद में',
        filterConditionBefore: 'इससे पहले',
        filterConditionBeforeOrOn: 'पहले या आगे',
        filterConditionValuePlaceholder: 'मूल्य',
        filterConditionValueFromPlaceholder: 'से',
        filterConditionValueToPlaceholder: 'प्रति',
        settingsCategoryAll: 'सभी',
        settingsCategoryVisible: 'दृश्यमान',
        settingsCategoryActive: 'सक्रिय',
        settingsCategoryVisibleAndActive: 'दृश्यमान और सक्रिय',
        settingsCategoryMandatory: 'अनिवार्य',
        manageFieldConditions: 'Manage field conditions',
        refreshButtonAriaLabel: 'Refresh'
    },
    platformTable: {
        headerMenuSortAsc: 'छोटे से बड़े क्रम में क्रमबद्ध करें',
        headerMenuSortDesc: 'घटते क्रम',
        headerMenuGroup: 'समूह',
        headerMenuFreeze: 'फ्रीज करें',
        headerMenuEndFreeze: 'Freeze to End',
        headerMenuUnfreeze: 'हैडर मेनू अनफ्रीज',
        headerMenuFilter: 'फिल्टर',
        defaultEmptyMessage: 'डाटा प्राप्त नहीं हुआ',
        emptyCell: 'खाली',
        noVisibleColumnsMessage:
            'Right now, there are no visible columns in the table. Please select the columns you need in the table settings.',
        resetChangesButtonLabel: 'रीसेट करें',
        editableCellNumberPlaceholder: 'मूल्य दर्ज करें',
        editableCellDatePlaceholder: 'मूल्य दर्ज करें',
        editableCellStringPlaceholder: 'मूल्य दर्ज करें',
        P13ColumnsDialogHeader: 'कॉलम',
        P13ColumnsDialogSearchPlaceholder: 'खोज',
        P13ColumnsDialogsShowSelected: 'चयनित दिखाएँ',
        P13ColumnsDialogShowAll: 'सब दिखाएं',
        P13ColumnsDialogSelectAll: 'सभी का चयन करे ({{ selectedColumnsCount }}/{{ selectableColumnsCount }})',
        P13ColumnsDialogConfirmationBtnLabel: 'ठीक है',
        P13ColumnsDialogCancelBtnLabel: 'रद्द करो',
        P13ColumnsDialogMoveToTopBtn: 'शीर्ष पर जाएं',
        P13ColumnsDialogMoveUpBtn: 'बढ़ाना',
        P13ColumnsDialogMoveDownBtn: 'नीचे की ओर',
        P13ColumnsDialogMoveToBottomBtn: 'नीचे ले जाएँ',
        P13FilterStrategyLabelBetween: 'के बीच',
        P13FilterStrategyLabelContains: 'रोकना',
        P13FilterStrategyLabelBeginsWith: 'साथ शुरू होता है',
        P13FilterStrategyLabelEndsWith: 'इसी के साथ समाप्त होता है',
        P13FilterStrategyLabelEqualTo: 'के बराबर',
        P13FilterStrategyLabelGreaterThan: 'से अधिक',
        P13FilterStrategyLabelGreaterThanOrEqualTo: 'इससे बड़ा या इसके बराबर',
        P13FilterStrategyLabelLessThan: 'से कम',
        P13FilterStrategyLabelLessThanOrEqualTo: 'से कम या बराबर',
        P13FilterStrategyLabelAfter: 'बाद में',
        P13FilterStrategyLabelOnOrAfter: 'पर या बाद में',
        P13FilterStrategyLabelBefore: 'इससे पहले',
        P13FilterStrategyLabelBeforeOrOn: 'पहले या आगे',
        P13FilterStrategyLabelNotDefined: 'परिभाषित नहीं',
        P13FilterBooleanOptionNotDefined: ' ',
        P13FilterBooleanOptionTrue: 'हां',
        P13FilterBooleanOptionFalse: 'नहीं',
        P13FilterDialogHeader: 'के द्वारा छनित',
        P13FilterDialogIncludePanelTitleWithCount: 'शामिल ({{ count }})',
        P13FilterDialogIncludePanelTitleWithoutCount: 'शामिल',
        P13FilterDialogExcludePanelTitleWithCount: 'निकालना ({{ count }})',
        P13FilterDialogExcludePanelTitleWithoutCount: 'निकालना',
        P13FilterDialogRemoveFilterBtnTitle: 'फ़िल्टर हटाएं',
        P13FilterDialoAddFilterBtnTitle: 'फ़िल्टर जोड़ें',
        P13FilterDialogConfirmationBtnLabel: 'ठीक है',
        P13FilterDialogCancelBtnLabel: 'रद्द करें',
        P13GroupDialogHeader: 'समूह',
        P13GroupDialogNoneSelectedColumnSelectPlaceholder: '(कोई भी नहीं)',
        P13GroupDialogShowFieldAsColumnCheckboxLabel: 'फ़ील्ड को कॉलम के रूप में दिखाएं',
        P13GroupDialogRemoveGroupBtnTitle: 'हटाना',
        P13GroupDialogAddNewGroupBtnTitle: 'नया जोड़ें',
        P13GroupDialogConfirmationBtnLabel: 'ठीक है',
        P13GroupDialogCancelBtnLabel: 'रद्द करें',
        P13SortDialogHeader: 'क्रम से लगाना',
        P13SortDialogNoneSelectedColumn: '(कोई भी नहीं)',
        P13SortDialogNoneSelectedSorting: '(कोई भी नहीं)',
        P13SortDialogSortOrderSelectOptionAsc: 'बढ़ते क्रम',
        P13SortDialogSortOrderSelectOptionDesc: 'घटते क्रम',
        P13SortDialogRemoveSortBtnTitle: 'हटाना',
        P13SortDialogAddNewSortBtnTitle: 'नया जोड़ें',
        P13SortDialogConfirmationBtnLabel: 'ठीक है',
        P13SortDialogCancelBtnLabel: 'रद्द करें',
        toolbarSearchPlaceholder: 'तलाश',
        toolbarActionCreateButtonLabel: 'सृजन करें',
        toolbarActionSaveButtonLabel: 'बचाना',
        toolbarActionCancelButtonLabel: 'रद्द करें',
        toolbarActionSortButtonTitle: 'क्रम से लगाना',
        toolbarActionFilterButtonTitle: 'फ़िल्टर',
        toolbarActionGroupButtonTitle: 'समूह',
        toolbarActionColumnsButtonTitle: 'कॉलम',
        toolbarActionExpandAllButtonTitle: 'Expand all',
        toolbarActionCollapseAllButtonTitle: 'Collapse all',
        filterDialogNotFilteredLabel: '(फ़िल्टर नहीं किया गया)',
        filterDialogFilterByLabel: 'के द्वारा छनित: {{ filterLabel }}',
        filterDialogFilterTitle: 'फ़िल्टर',
        filterDialogFilterBy: 'के द्वारा छनित',
        filterDialogConfirmBtnLabel: 'अनुमोदन',
        filterDialogCancelBtnLabel: 'रद्द करें',
        groupDialogHeader: 'समूह',
        groupDialogGroupOrderHeader: 'समूह आदेश',
        groupDialogGroupOrderAsc: 'बढ़ते क्रम',
        groupDialogGroupOrderDesc: 'घटते क्रम',
        groupDialogGroupByHeader: 'समूह द्वारा',
        groupDialogNotGroupedLabel: '(समूहीकृत नहीं)',
        groupDialogConfirmBtnLabel: 'अनुमोदन',
        groupDialogCancelBtnLabel: 'रद्द करें',
        sortDialogHeader: 'क्रम से लगाना',
        sortDialogSortOrderHeader: 'क्रमबद्ध करें',
        sortDialogSortOrderAsc: 'बढ़ते क्रम',
        sortDialogSortOrderDesc: 'घटते क्रम',
        sortDialogSortByHeader: 'आधार पर छाँटे',
        sortDialogNotSortedLabel: '(क्रमबद्ध नहीं)',
        sortDialogConfirmBtnLabel: 'अनुमोदन',
        sortDialogCancelBtnLabel: 'रद्द करें',
        selectAllCheckboxLabel: 'Select all',
        deselectAllCheckboxLabel: 'Deselect all',
        deselectSingleRow: 'To deselect row, press SPACEBAR',
        selectSingleRow: 'To select row, press SPACEBAR',
        deselectSingleRowTitle: 'Click to deselect',
        selectSingleRowTitle: 'Click to select'
    },
    platformThumbnail: {
        detailsGotoPreviousButtonTitle: 'पिछले पर जाएं',
        detailsGotoNextButtonTitle: 'अगले पर जाएं',
        detailsDialogCloseBtnLabel: 'बंद करें',
        roleDescription: 'छवि'
    },
    platformUploadCollection: {
        moveToTitle: 'करने के लिए कदम',
        moveToTitleFolder: 'फ़ोल्डर',
        moveToNewFolderBtnLabel: 'नया फोल्डर',
        moveToAllFilesSubHeaderLabel: 'सभी फाइलें',
        moveToConfirmBtn: 'कदम',
        moveToCloseBtn: 'रद्द करें',
        newFolderTitle: 'नया फोल्डर',
        newFolderAtRootInputLabel: 'नए फोल्डर का नाम',
        newFolderAtFolderInputLabel: 'नए फोल्डर का नाम {{ folderName }}',
        newFolderInputPlaceholder: 'यहा लिखें..',
        newFolderInputErrorLabel: 'अधिकतम {{ count }} पात्र अनुमत',
        newFolderDialogCreateBtnLabel: 'सृजन करें',
        newFolderDialogCancelBtnLabel: 'रद्द करें',
        breadcrumbLabelAllFiles: 'सभी फाइलें',
        breadcrumbLabelAllFilesWithTotal: 'सभी फाइलें ({{ total }})',
        searchPlaceholder: 'तलाश करें',
        addBtnLabel: 'जोड़ें',
        newFolderBtnLabel: 'नया फोल्डर',
        moveToBtnLabel: 'यहाँ ले जाएँ',
        downloadBtnLabel: 'डाउनलोड करें',
        updateVersionBtnLabel: 'नया संस्करण',
        removeBtnLabel: 'हटाएं',
        folderIconTitle: 'फ़ोल्डर आइकन',
        fileIconTitle: 'फ़ाइल आइकन',
        editFileNameInputPlaceholder: 'नाम डालें',
        editFileNameFileAlreadyExistsError: 'इस नाम की फ़ाइल पहले से मौजूद है',
        editFileNameFolderAlreadyExistsError: 'इस नाम का फोल्डर पहले से मौजूद है',
        itemStatusSuccessful: 'सफल',
        itemStatusUnsuccessful: 'असफल',
        uploadNewFileAfterFailAction: 'चलाएं',
        cancelUploadNewFileAction: 'रद्द करें',
        itemMenuBtnTitle: 'अधिक',
        dragDropAreaText: 'अपलोड करने के लिए फ़ाइलें खींचें',
        noDataText: 'कोई फाइल नहीं मिली',
        noDataDescription: 'अपलोड करने के लिए फ़ाइलें छोड़ें, या "जोड़ें" बटन का उपयोग करें।',
        paginationTotal: '{{ from }}-{{ to }} of {{ total }} दिखा रहा है',
        resultsPerPage: 'प्रति पेज नतीजे',
        messageCreateFailed: '{{ folderName }} बनाने में विफल।',
        messageCreateSuccess: '{{ folderName }} बनाया गया है।',
        messageUpdateVersionFailed: '{{ folderName }}का संस्करण अपडेट करने में विफल।',
        messageUpdateVersionSuccess: '{{ folderName }} संस्करण अद्यतन किया गया है।',
        messageFileRenameFailed: '"{{ from }}" तक "{{ to }}" नाम बदलने में विफल।',
        messageFileRenameSuccess: '"{{ from }}" का नाम बदलकर कर "{{ to }}" दिया गया है।',
        messageRemoveFoldersAndFilesFailed: '{{ foldersCount }} फ़ोल्डर्स और {{ filesCount }} फ़ाइलें हटाने में विफल।',
        messageRemoveFoldersAndFilesSuccess: '{{ foldersCount }} फ़ोल्डर्स और {{ filesCount }} फ़ाइलें हटा दी गई हैं।',
        messageRemoveFoldersFailed: '{{ foldersCount }} फ़ोल्डर्स हटाने में विफल ।',
        messageRemoveFoldersSuccess: '{{ foldersCount }} फ़ोल्डर हटा दिए गए हैं।',
        messageRemoveFilesFailed: '{{ filesCount }} फ़ाइलें हटाने में विफल ।',
        messageRemoveFilesSuccess: '{{ filesCount }} फ़ाइलें हटा दी गई हैं।',
        messageRemoveFileOrFolderFailed: '{{ name }} हटाने में विफल ।',
        messageRemoveFileOrFolderSuccess: '{{ name }} निकाल दिया गया है।',
        messageMoveFoldersAndFilesFailed:
            '{{ to }} तक {{ foldersCount }} फ़ोल्डर्स और {{ filesCount }} फ़ाइलें स्थानांतरित करने में विफल।',
        messageMoveFoldersAndFilesSuccess:
            '{{ foldersCount }} फ़ोल्डर्स और {{ filesCount }} फ़ाइलें स्थानांतरित कर दी गई हैं {{ to }}।',
        messageMoveFoldersFailed: '{{ to }} तक {{ foldersCount }} फ़ोल्डर्स स्थानांतरित करने में विफल।',
        messageMoveFoldersSuccess: '{{ foldersCount }} फ़ोल्डर्स को स्थानांतरित कर दिया गया है {{ to }}।',
        messageMoveFilesFailed: '{{ to }} तक {{ filesCount }} फ़ाइलें स्थानांतरित करने में विफल।',
        messageMoveFilesSuccess: '{{ filesCount }} फ़ाइलें स्थानांतरित कर दी गई हैं {{ to }}।',
        messageMoveFileOrFolderFailed: 'स्थानांतरित करने में विफल {{ name }} प्रति {{ to }}।',
        messageMoveFileOrFolderSuccess: '{{ name }} में ले जाया गया है {{ to }}।',
        messageMoveRootFoldersAndFilesFailed:
            'स्थानांतरित करने में विफल {{ foldersCount }} फ़ोल्डर्स और {{ filesCount }} सभी फाइलों के लिए फ़ाइलें।',
        messageMoveRootFoldersAndFilesSuccess:
            '{{ foldersCount }} फ़ोल्डर्स और {{ filesCount }} फ़ाइलें सभी फ़ाइलों में ले जाया गया है।',
        messageMoveRootFoldersFailed: 'स्थानांतरित करने में विफल {{ foldersCount }} सभी फाइलों के लिए फ़ोल्डर।',
        messageMoveRootFoldersSuccess: '{{ foldersCount }} फ़ोल्डर्स को सभी फाइलों में ले जाया गया है।',
        messageMoveRootFilesFailed: 'स्थानांतरित करने में विफल {{ filesCount }} सभी फाइलों के लिए फ़ाइलें।',
        messageMoveRootFilesSuccess: '{{ filesCount }} फ़ाइलें सभी फ़ाइलों में ले जाया गया है।',
        messageMoveRootFileOrFolderFailed: 'स्थानांतरित करने में विफल {{ name }} सभी फाइलों के लिए।',
        messageMoveRootFileOrFolderSuccess: '{{ name }} सभी फाइलों में ले जाया गया है।',
        messageFileTypeMismatchPlural: '{{ filesCount }} फाइलों का प्रकार गलत है। अनुमत प्रकार: {{ allowedTypes }}।',
        messageFileTypeMismatchSingular: 'फ़ाइल "{{ fileName }}" गलत प्रकार है। अनुमत प्रकार: {{ allowedTypes }}।',
        messageFileSizeExceededPlural:
            '{{ filesCount }} फ़ाइलें अधिकतम फ़ाइल आकार से अधिक हो गईं। अनुमत अधिकतम फ़ाइल आकार: {{ maxFileSize }}।',
        messageFileSizeExceededSingular:
            'फ़ाइल "{{ fileName }}" अधिकतम फ़ाइल आकार को पार कर गया। अनुमत अधिकतम फ़ाइल आकार: {{ maxFileSize }}।',
        messageFileNameLengthExceededPlural:
            '{{ filesCount }} फ़ाइलें फ़ाइल नाम की अधिकतम लंबाई को पार कर गई हैं। अनुमत फ़ाइल नाम लंबाई: {{ maxFilenameLength }} पात्र।',
        messageFileNameLengthExceededSingular:
            'नाम "{{ fileName }}" फ़ाइल नाम की अधिकतम लंबाई को पार कर गया। अनुमत फ़ाइल नाम लंबाई: {{ maxFilenameLength }} पात्र।'
    },
    platformWizardGenerator: {
        summarySectionEditStep: 'संपादित करें'
    },
    platformMessagePopover: {
        allErrors: 'All',
        defaultErrors: {
            email: 'Email is invalid',
            max: 'The field exceeds maximum value',
            maxLength: 'The field exceeds maximum length',
            min: 'The field value is less than allowed',
            minLength: 'The field length is less than allowed',
            pattern: 'The field value is invalid',
            required: 'The field is mandatory',
            requiredTrue: 'The field is mandatory'
        }
    },
    platformVariantManagement: {
        manage: 'Manage',
        saveAs: 'Save as',
        saveView: 'Save View',
        save: 'Save',
        myViews: 'My Views',
        view: 'View',
        setAsDefault: 'Set as Default',
        public: 'Public',
        applyAutomatically: 'Apply Automatically',
        requiredFieldError: 'This field is required.',
        nameTakenFieldError: 'Variant with such name already exists. Please chose a different name.',
        cancel: 'Cancel',
        manageViews: 'Manage Views',
        markAsFavourite: 'Mark as Favourite',
        sharing: 'Sharing',
        default: 'Default',
        createdBy: 'Created By',
        removeVariant: 'Remove View',
        search: 'Search',
        access: {
            public: 'Public',
            private: 'Private'
        }
    },
    platformSelect: {
        selectOptionLabel: 'एक विकल्प चुनें'
    },
    fnSlider: {
        minMaxDetails: 'स्लाइडर न्यूनतम मूल्य {{ min }}, अधिकतम मूल्य {{ max }}',
        valueminDetails: 'मूल्य {{ value }}',
        valuemaxDetails: 'मूल्य {{ value }}',
        valueNowDetails: 'वर्तमान मूल्य {{ value }}'
    },
    fnSwitch: {
        semanticAcceptLabel: 'स्वीकार करें',
        semanticDeclineLabel: 'अस्वीकार करें'
    },
    coreTree: {
        expand: 'Expand node',
        collapse: 'Collapse node',
        noData: 'No data'
    }
};
