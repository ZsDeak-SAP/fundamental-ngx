import { FdLanguage } from '../models/lang';

/**
 * Default set of translations of Fundamental UI libarary for Turkish language
 */
export const FD_LANGUAGE_TURKISH: FdLanguage = {
    coreMultiComboBox: {
        selectAllLabel: 'Hepsini seç ({{selectedItems}}/{{totalItems}})'
    },
    coreCarousel: {
        leftNavigationBtnLabel: 'Önceki öğeye git',
        rightNavigationBtnLabel: 'Sonraki öğeye git'
    },
    coreDatePicker: {
        dateInputLabel: 'Tarih girişi',
        dateRangeInputLabel: 'Tarih aralığı girişi',
        displayCalendarToggleLabel: 'Seçiciyi aç',
        valueStateSuccessMessage: 'Değer durumu Başarılı',
        valueStateInformationMessage: 'Değer durumu Bilgisi',
        valueStateWarningMessage: 'Değer durumu Uyarısı',
        valueStateErrorMessage: 'Değer durumu Hatası'
    },
    coreDatetimePicker: {
        datetimeInputLabel: 'Datetime girişi',
        displayDatetimeToggleLabel: 'Takvim geçişini görüntüle',
        displayTypeDateLabel: 'Tarih',
        displayTypeTimeLabel: 'Zaman',
        datetimeOkLabel: 'Tamam',
        datetimeCancelLabel: 'İptal'
    },
    coreFeedListItem: {
        moreLabel: 'Daha fazla',
        lessLabel: 'Daha az'
    },
    coreGridList: {
        filterBarCancelButtonTitle: 'Vazgeç',
        listItemStatusAriaLabel: 'Eşyayı statü var. Statü: {{ status }}.',
        listItemCounterAriaLabel: 'Eşyayı {{ count }} alt eşyası var.',
        listItemButtonDetailsTitle: 'Detaylar',
        listItemButtonDeleteTitle: 'Sil',
        listItemStatusContainsErrors: 'Hata içerir',
        listItemStatusLocked: 'Kilitli',
        listItemStatusDraft: 'Taslak'
    },
    coreMessageStrip: {
        dismissLabel: 'Azletmek'
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
        linkItemAriaLabel: 'Ağaç Öğesi {{ itemDetails }}, {{ index }} / {{ total }}{{ selectedDescription }}'
    },
    coreOverflowLayout: {
        moreItemsButton: '{{ count }} ürün daha'
    },
    corePagination: {
        pageLabel: 'Sayfa {{ pageNumber }}',
        currentPageAriaLabel: 'Sayfa {{ pageNumber }} geçerli sayfadır',
        labelBeforeInputMobile: 'Sayfa:',
        labelAfterInputMobile: 'of {{ totalCount }}',
        inputAriaLabel: 'Sayfa girişi, Geçerli sayfa, Sayfa {{ pageNumber }} / {{ totalCount }}',
        itemsPerPageLabel: 'Sayfa Başına Sonuçlar:',
        firstLabel: 'İlk',
        previousLabel: 'Önceki',
        nextLabel: 'Sonraki',
        lastLabel: 'Son',
        ariaLabel: 'Sayfalandırma',
        totalResultsLabel: '{{ totalCount }} Sonuçlar'
    },
    coreProductSwitch: {
        ariaLabel: 'Ürün Anahtarı'
    },
    coreShellbar: {
        collapsedItemMenuLabel: 'Daraltılmış Öğe Menüsü',
        cancel: 'Cancel',
        search: 'Search'
    },
    coreSlider: {
        singleMinMaxDetails: ' Kaydırıcının {{ min }} minimum değeri, {{ max }} maksimum değeri',
        singleValueminDetails: 'Değer {{ value }}',
        singleValuemaxDetails: 'Değer {{ value }}',
        singleValueNowDetails: 'Geçerli değer {{ value }}',
        multipleHandle1MinMaxDetails: ' Aralığı kaydırma  {{ min }} minimum değeri, {{ max }} maksimum değeri',
        multipleHandle1ValueminDetails: 'Değer {{ value }}',
        multipleHandle1ValuemaxDetails: 'Değer {{ value }}',
        multipleHandle1ValueNowDetails: 'Geçerli değer {{ value }}',
        multipleHandle2MinMaxDetails: ' Aralığı kaydırma  {{ min }} minimum değeri, {{ max }} maksimum değeri',
        multipleHandle2ValueminDetails: 'Değer {{ value }}',
        multipleHandle2ValuemaxDetails: 'Değer {{ value }}',
        multipleHandle2ValueNowDetails: 'Geçerli değer  {{ value }}'
    },
    coreSplitButton: {
        expandButtonAriaLabel: 'Daha fazla hareket',
        arialLabel: 'Böl düğmesi'
    },
    coreSplitter: {
        paginationItemAriaLabel: 'Bölüm'
    },
    coreStepInput: {
        incrementButtonTitle: 'Artış',
        decrementButtonTitle: 'Azaltma',
        ariaRoleDescription: 'Adım Girişi'
    },
    coreSwitch: {
        semanticAcceptLabel: 'Kabul et',
        semanticDeclineLabel: 'Reddet'
    },
    coreTabs: {
        tabListExpandButtonText: 'Daha'
    },
    coreText: {
        moreLabel: 'Daha',
        lessLabel: 'Az'
    },
    coreTime: {
        componentAriaName: 'Zaman seçici',
        increaseHoursLabel: 'Saatleri artır',
        hoursLabel: 'Saat',
        decreaseHoursLabel: 'Saatleri azalt',
        increaseMinutesLabel: 'Dakikaları artır',
        minutesLabel: 'Min',
        decreaseMinutesLabel: 'Dakikaları azalt',
        increaseSecondsLabel: 'Saniyeyi artır',
        secondsLabel: 'Sn',
        decreaseSecondsLabel: 'Saniyeyi azalt',
        increasePeriodLabel: 'Periyodu artırma',
        periodLabel: 'Dönem',
        decreasePeriodLabel: 'Düşüş periyodu',
        navigationInstruction:
            'Bu listedeki öğeler arasında hareket etmek için üst oka veya alt oka basın. Listeler arasında geçiş yapmak için sol ok veya sağ ok tuşuna basın.'
    },
    coreTimePicker: {
        timePickerInputLabel: 'Zaman seçici girişi',
        timePickerButtonLabel: 'Seçiciyi aç'
    },
    coreToken: {
        deleteButtonLabel: 'Silinebilir',
        ariaRoleDescription: 'jeton'
    },
    coreTokenizer: {
        moreLabel: '{{ count }} ürün daha'
    },
    coreUploadCollection: {
        menuOkText: 'Tamam',
        menuCancelText: 'İptal',
        menuEditAriaLabel: 'Düzenle',
        menuDeleteAriaLabel: 'Sil',
        menuOkAriaLabel: 'Düzenle',
        menuCancelAriaLabel: 'İptal',
        formItemPlaceholder: 'Dosya adı'
    },
    coreWizard: {
        ariaLabel: 'Sihirbaz'
    },
    coreBreadcrumb: {
        overflowTitleMore: 'Daha'
    },
    platformActionBar: {
        backButtonLabel: 'Geri dön'
    },
    platformApprovalFlow: {
        defaultWatchersLabel: 'Gözlemciler',
        defaultTitle: 'Onay süreci',
        nextButtonAriaLabel: 'Sonraki slayta git',
        prevButtonAriaLabel: 'Önceki slayta git',
        editModeSaveButtonLabel: 'Kaydet',
        editModeExitButtonLabel: 'Çıkış',
        emptyTitle: 'Onaylayanlar ve Gözlemciler eklemeye başla',
        emptyHint:
            'Onaylayanları eklemek için "Adım ekle"yi tıklayın. Gözlemciler eklemek için Gözlemciler alanını tıklayın..',
        addNodeDialogHeaderAddApprovers: 'Onaylayanları ekle',
        addNodeDialogHeaderEditApprover: 'Onaylayanı düzenle',
        addNodeDialogHeaderAddApproverTeam: 'Kullanıcı/Takım',
        addNodeDialogHeaderDetail: 'Detay',
        addNodeDialogNodeType: 'Paralel veya seri',
        addNodeDialogNodeTypeSerial: 'Seri',
        addNodeDialogNodeTypeParallel: 'Paralel',
        addNodeDialogApproverType: 'Onaylayan türü',
        addNodeDialogApproverTypeUser: 'Bir kullanıcı',
        addNodeDialogApproverTypeTeamAnyone: 'Takımdaki herhangi biri',
        addNodeDialogApproverTypeTeamEveryone: 'Takımdaki herkes',
        addNodeDialogUserOrTeam: 'Kullanıcı/Takım',
        addNodeDialogAddToNext: 'Sonraki seri düğüme ekle',
        addNodeDialogDueDate: 'Bitiş tarihi',
        addNodeSearchPlaceholder: 'Ara',
        addNodeAddActionBtnLabel: 'Ekle',
        addNodeCancelActionBtnLabel: 'Vazgeç',
        addNodeSelectApproverActionBtnLabel: 'Seçme',
        addNodeCancelApproverSelectionActionBtnLabel: 'Vazgeç',
        addNodeApproverOrTeamDetailsCloseActionBtnLabel: 'Kapat',
        userDetailsHeader: 'Detay',
        userDetailsSendReminderBtnLabel: 'Hatırlatma gönder',
        userDetailsCancelBtnLabel: 'Vazgeç',
        messagesApproverAddedSuccess: '1 onaylayıcı eklendi',
        messagesTeamAddedSuccess: '1 takım eklendi',
        messagesNodeEdited: '1 onaylayıcı düzenlendi',
        messagesNodeRemovedSingular: '1 onaylayıcı çıkarıldı',
        messagesNodeRemovedPlural: 'Onaylayanlar kaldırıldı',
        messagesTeamRemoved: '1 takım kaldırıldı',
        messagesErrorBuildGraph: 'Grafik oluşturulurken bir hata oluştu. İlk verileri kontrol edi.',
        messagesUndoAction: 'Geri almak',
        nodeMembersCount: '{{ count }} üyeler',
        nodeVariousTeams: 'Çeşitli takımlar',
        nodeStatusDueToday: 'Bugün teslim tarihi',
        nodeStatusDueInXDays: ' {{ count }} gün içinde vadesi doluyor',
        nodeStatusXDaysOverdue: '{{ count }} gecikmiş gün',
        nodeActionAddApproversBefore: 'Daha önce onaylayanlar ekleme',
        nodeActionAddApproversAfter: 'Onaylayanları afte ekler',
        nodeActionAddApproversParallel: 'Paralel onaylayanlar ekleme',
        nodeActionEditApprover: 'Onaylayanı düzenle',
        nodeActionRemove: 'Kaldır',
        selectTypeDialogMoveApproverAs: 'Onaylayanı şu şekilde taşı:',
        selectTypeDialogParallelOrSerial: 'Paralel veya seri',
        selectTypeDialogNodeTypeParallel: 'Paralel onaylayan',
        selectTypeDialogNodeTypeSerial: 'Seri onaylayan',
        selectTypeDialogConfirmButton: 'Onayla',
        selectTypeDialogCancelButton: 'Vazgeç',
        toolbarAddStepButton: 'Bir adım ekle',
        toolbarEditButton: 'Düzenle ',
        toolbarAddApproversBefore: 'Daha önce onaylayanlar ekleme',
        toolbarAddApproversAfter: 'Onaylayanları afte ekle',
        toolbarAddApproversParallel: 'Paralel onaylayanlar ekleme',
        toolbarRemove: 'Kaldır',
        toolbarEditApprover: 'Onaylayanı düzenle',
        watchersInputPlaceholder: 'Burada ara..',
        userListSelectedItemsCountSingular: '1 eşyayı seçildi',
        userListSelectedItemsCountPlural: '{{ count }} eşyayılar seçildi',
        statusApproved: 'approved',
        statusRejected: 'rejected',
        statusInProgress: 'in progress',
        statusNotStarted: 'not started'
    },
    platformFeedInput: {
        userTitle: 'kullanıcı'
    },
    platformVHD: {
        selectionBarLabel: 'Seçilmiş ve koşullu eşyayılar',
        selectedAndConditionLabel: 'Seçilen Eşyayılar ve Koşullar',
        footerClearSelectedTitle: 'seçili eşyayı temizle',
        footerClearSelectedAriaLabel: 'seçili eşyayılar temile',
        searchButtonLabel: 'Git',
        successButtonLabel: 'OK',
        cancelButtonLabel: 'Vazgeç',
        selectedEmptyLabel: 'Hiçbir eşyayı veya Koşul Seçilmedi',
        searchPlaceholder: 'Ara',
        searchAdvancedSearchLabel: 'Filtreler',
        searchShowAdvancedSearchLabel: 'Filtreleri göster',
        searchHideAdvancedSearchLabel: 'Filtreleri gizles',
        searchShowAllAdvancedSearchLabel: 'Tüm filtreleri göster',
        searchHideAllAdvancedSearchLabel: 'Tüm filtreleri gizle',
        selectTabDisplayCountLabel: 'Eşyayı ({{ count }})',
        selectTabMoreBtnLabel: 'Daha',
        selectTabCountHiddenA11yLabel: '{{ rowCount }} satır ve {{ colCount }} sütun içerir',
        selectMobileTabBackBtnTitle: 'Geri',
        selectMobileTabBtnOpenDialogLabel: 'İletişim kutusunu aç',
        selectMobileTabTitle: '{{ title }} sekmesi',
        selectMobileConditionEmpty: 'Boş',
        defineConditionTitle: 'Ürün',
        defineConditionSelectedValueHiddenA11yLabel: ' {{ value }} seçilen değer',
        defineConditionConditionsGroupHeaderInclude: 'Dahil et',
        defineConditionConditionsGroupHeaderExclude: 'Dışla',
        defineConditionFromPlaceholder: 'dan',
        defineConditionToPlaceholder: 'ile',
        defineConditionValuePlaceholder: 'değer',
        defineConditionRemoveConditionButtonTitle: 'Koşul Kaldır',
        defineConditionAddConditionButtonLabel: 'Ekle',
        defineConditionAddConditionButtonTitle: 'Koşul Ekle',
        defineConditionConditionStrategyLabelContains: 'içer',
        defineConditionConditionStrategyLabelEqualTo: 'eşit',
        defineConditionConditionStrategyLabelBetween: 'arasında',
        defineConditionConditionStrategyLabelStartsWith: 'ile başlar',
        defineConditionConditionStrategyLabelEndsWith: 'ile biter',
        defineConditionConditionStrategyLabelLessThan: 'daha az',
        defineConditionConditionStrategyLabelLessThanEqual: 'eşitten daha az',
        defineConditionConditionStrategyLabelGreaterThan: 'daha büyük',
        defineConditionConditionStrategyLabelGreaterThanEqual: 'eşitten büyük',
        defineConditionConditionStrategyLabelEmpty: 'boş',
        defineConditionConditionStrategyLabelNotEqualTo: 'eşit değil',
        defineConditionConditionStrategyLabelNotEmpty: 'boş değil',
        defineConditionMaxCountError: '{{ count }} karakterden fazla olmayan bir değer gir',
        selectTabTitle: 'Listeden seç',
        searchTableEmptyMessage: 'Sonuçları almak için aramayı kullanın',
        defineTabTitle: 'Koşulları Tanımla'
    },
    platformCombobox: {
        countListResultsSingular: '1 sonuç listesi eşyayı',
        countListResultsPlural: '{{ count }} sonuç listesi eşyayılar'
    },
    platformMultiCombobox: {
        inputGlyphAriaLabel: "Seçenekler'i seçin",
        inputIconTitle: "Seçenekler'i seçin",
        mobileShowAllItemsButton: 'Tüm eşyayılar göster',
        mobileShowSelectedItemsButton: 'Seçili eşyayılar göster'
    },
    platformTextarea: {
        counterMessageCharactersOverTheLimitSingular: '1 karakter sınırın üzerinde',
        counterMessageCharactersOverTheLimitPlural: '{{ count }}  karakter sınırı aşıyor',
        counterMessageCharactersRemainingSingular: '1 karakter kaldı',
        counterMessageCharactersRemainingPlural: '{{ count }}  karakterler kaldı'
    },
    platformLink: {
        roleDescriptionWithMedia: 'Medya: {{ media }}'
    },
    platformList: {
        loadingAriaLabel: 'yükleniyor'
    },
    platformObjectListItem: {
        detailsActionAriaLabel: 'detay',
        deleteActionAriaLabel: 'sil'
    },
    platformStandardListItem: {
        detailsActionAriaLabel: 'detay',
        deleteActionAriaLabel: 'sil'
    },
    platformSearchField: {
        clearButtonTitle: 'Temiz',
        submitButtonTitle: 'Ara',
        searchInputLabel: 'Ara',
        synchronizeButtonTitle: 'Senkronize',
        searchSuggestionMessage: '{{ count }} öneri bulundu.',
        searchSuggestionNavigateMessage: 'gezinmek için yukarı ve aşağı okları kullanın'
    },
    platformSmartFilterBar: {
        searchPlaceholder: 'Ara',
        submitButtonLabel: 'Git',
        filtersButtonLabel: 'Filtreler ({{ filtersCount }})',
        showFiltersButtonLabel: 'Filtreleri göster',
        hideFiltersButtonLabel: 'Filtreleri gizle',
        defineConditionsRemoveConditionButtonTitle: 'Koşullu kaldır',
        defineConditionsAddConditionButtonLabel: 'Koşul ekle',
        defineConditionsSubmitButtonLabel: 'Git',
        defineConditionsCancelButton: 'Vazgeç',
        selectFiltersHeader: 'Filtreler',
        selectFiltersAvailableFiltersText: 'Kullanılabilir filtreler',
        selectFiltersFilterColumnLabel: 'Filtre',
        selectFiltersActiveColumnLabel: 'Aktif',
        selectFiltersSubmitButtonLabel: 'Git',
        selectFiltersCancelButton: 'Vazgeç',
        filterConditionContains: 'içerir',
        filterConditionEqualTo: 'eşittir',
        filterConditionBetween: 'arasında',
        filterConditionBeginsWith: 'ile başlar',
        filterConditionEndsWith: 'ile biter',
        filterConditionLessThan: 'küçüktür',
        filterConditionLessThanOrEqualTo: 'küçük veya eşittir',
        filterConditionGreaterThan: 'büyüktür',
        filterConditionGreaterThanOrEqualTo: 'büyüktür veya eşittir',
        filterConditionAfter: 'sonra',
        filterConditionOnOrAfter: 'on veya after',
        filterConditionBefore: 'önce',
        filterConditionBeforeOrOn: 'önce veya açık',
        filterConditionValuePlaceholder: 'değer',
        filterConditionValueFromPlaceholder: 'from',
        filterConditionValueToPlaceholder: 'to',
        settingsCategoryAll: 'Tümü',
        settingsCategoryVisible: 'Görünür',
        settingsCategoryActive: 'Etkin',
        settingsCategoryVisibleAndActive: 'Görünür ve aktif',
        settingsCategoryMandatory: 'Zorunlu',
        manageFieldConditions: 'Manage field conditions',
        refreshButtonAriaLabel: 'Refresh'
    },
    platformTable: {
        headerMenuSortAsc: 'Artan Sıralama',
        headerMenuSortDesc: 'Azalan Sıralama',
        headerMenuGroup: 'Grup',
        headerMenuFreeze: 'Donma',
        headerMenuEndFreeze: 'Freeze to End',
        headerMenuUnfreeze: 'HeaderMenuUnfreeze',
        headerMenuFilter: 'Filtre',
        defaultEmptyMessage: 'Hiçbir veri bulunamadı',
        emptyCell: 'Boş',
        noVisibleColumnsMessage:
            'Right now, there are no visible columns in the table. Please select the columns you need in the table settings.',
        resetChangesButtonLabel: 'Sıfırla',
        editableCellNumberPlaceholder: 'Değer gir',
        editableCellDatePlaceholder: 'Değer gir',
        editableCellStringPlaceholder: 'Değer gir',
        P13ColumnsDialogHeader: 'Kolonlar',
        P13ColumnsDialogSearchPlaceholder: 'Ara',
        P13ColumnsDialogsShowSelected: 'Seçilenleri Göster',
        P13ColumnsDialogShowAll: 'Hepsini Göster',
        P13ColumnsDialogSelectAll: 'Hepsini ({{ selectedColumnsCount }}/{{ selectableColumnsCount }}) seç',
        P13ColumnsDialogConfirmationBtnLabel: 'OK',
        P13ColumnsDialogCancelBtnLabel: 'Vazgeç',
        P13ColumnsDialogMoveToTopBtn: 'Yukarı Taşı',
        P13ColumnsDialogMoveUpBtn: 'Yukarı Taşı',
        P13ColumnsDialogMoveDownBtn: 'Aşağı Taşı',
        P13ColumnsDialogMoveToBottomBtn: 'Aşağıya Taşı',
        P13FilterStrategyLabelBetween: 'arasında',
        P13FilterStrategyLabelContains: 'içerir',
        P13FilterStrategyLabelBeginsWith: 'İle baş',
        P13FilterStrategyLabelEndsWith: 'ile bit',
        P13FilterStrategyLabelEqualTo: 'eşit',
        P13FilterStrategyLabelGreaterThan: 'daha büyük',
        P13FilterStrategyLabelGreaterThanOrEqualTo: 'büyük veya eşit',
        P13FilterStrategyLabelLessThan: 'daha az',
        P13FilterStrategyLabelLessThanOrEqualTo: 'daha az veya eşittir',
        P13FilterStrategyLabelAfter: 'sonrasında',
        P13FilterStrategyLabelOnOrAfter: 'Üzerinde veya sonrasında',
        P13FilterStrategyLabelBefore: 'önceki',
        P13FilterStrategyLabelBeforeOrOn: 'önce veya üzerinde',
        P13FilterStrategyLabelNotDefined: 'Tanımlanmamış',
        P13FilterBooleanOptionNotDefined: ' ',
        P13FilterBooleanOptionTrue: 'Evet',
        P13FilterBooleanOptionFalse: 'Hayır',
        P13FilterDialogHeader: 'Tarafından filtre',
        P13FilterDialogIncludePanelTitleWithCount: 'Include ({{ count }})',
        P13FilterDialogIncludePanelTitleWithoutCount: 'Include',
        P13FilterDialogExcludePanelTitleWithCount: 'Exclude ({{ count }})',
        P13FilterDialogExcludePanelTitleWithoutCount: 'Exclude',
        P13FilterDialogRemoveFilterBtnTitle: 'Filtre kaldır',
        P13FilterDialoAddFilterBtnTitle: 'Filtre ekle',
        P13FilterDialogConfirmationBtnLabel: 'OK',
        P13FilterDialogCancelBtnLabel: 'Vazgeç',
        P13GroupDialogHeader: 'Grup',
        P13GroupDialogNoneSelectedColumnSelectPlaceholder: '(yok)',
        P13GroupDialogShowFieldAsColumnCheckboxLabel: 'Show Field as Column',
        P13GroupDialogRemoveGroupBtnTitle: 'Kaldır',
        P13GroupDialogAddNewGroupBtnTitle: 'Yeni ekle',
        P13GroupDialogConfirmationBtnLabel: 'OK',
        P13GroupDialogCancelBtnLabel: 'Vazgeç',
        P13SortDialogHeader: ' Sıralama',
        P13SortDialogNoneSelectedColumn: '(yok)',
        P13SortDialogNoneSelectedSorting: '(yok)',
        P13SortDialogSortOrderSelectOptionAsc: 'Artan',
        P13SortDialogSortOrderSelectOptionDesc: 'Azalan',
        P13SortDialogRemoveSortBtnTitle: 'Kaldır',
        P13SortDialogAddNewSortBtnTitle: 'Yeni ekle',
        P13SortDialogConfirmationBtnLabel: 'OK',
        P13SortDialogCancelBtnLabel: 'Vazgeç',
        toolbarSearchPlaceholder: 'Ara',
        toolbarActionCreateButtonLabel: 'Oluşturma',
        toolbarActionSaveButtonLabel: ' Kaydet',
        toolbarActionCancelButtonLabel: 'Vazgeç',
        toolbarActionSortButtonTitle: ' Sıralama',
        toolbarActionFilterButtonTitle: 'Filtre',
        toolbarActionGroupButtonTitle: 'Grup',
        toolbarActionColumnsButtonTitle: 'Kolonlar',
        toolbarActionExpandAllButtonTitle: 'Expand all',
        toolbarActionCollapseAllButtonTitle: 'Collapse all',
        filterDialogNotFilteredLabel: '(Filtrelenmemiş)',
        filterDialogFilterByLabel: 'Filtreleme ölçütü: {{ filterLabel }}',
        filterDialogFilterTitle: 'Filtre',
        filterDialogFilterBy: 'Filtreleme ölçütü',
        filterDialogConfirmBtnLabel: 'OK',
        filterDialogCancelBtnLabel: 'Vazgeç',
        groupDialogHeader: 'Grup',
        groupDialogGroupOrderHeader: 'Group Order',
        groupDialogGroupOrderAsc: 'Artan',
        groupDialogGroupOrderDesc: 'Azalan',
        groupDialogGroupByHeader: 'Gruplandırma Ölçütü',
        groupDialogNotGroupedLabel: '(Gruplandırılmamış)',
        groupDialogConfirmBtnLabel: 'OK',
        groupDialogCancelBtnLabel: 'Vazgeç',
        sortDialogHeader: ' Sıralama',
        sortDialogSortOrderHeader: 'Sıralama düzeni',
        sortDialogSortOrderAsc: 'Artan',
        sortDialogSortOrderDesc: 'Azalan',
        sortDialogSortByHeader: 'Sıralama Ölçütü',
        sortDialogNotSortedLabel: '(Sıralanmadı)',
        sortDialogConfirmBtnLabel: 'OK',
        sortDialogCancelBtnLabel: 'Vazgeç',
        selectAllCheckboxLabel: 'Select all',
        deselectAllCheckboxLabel: 'Deselect all',
        deselectSingleRow: 'To deselect row, press SPACEBAR',
        selectSingleRow: 'To select row, press SPACEBAR',
        deselectSingleRowTitle: 'Click to deselect',
        selectSingleRowTitle: 'Click to select'
    },
    platformThumbnail: {
        detailsGotoPreviousButtonTitle: 'Öncekine Git',
        detailsGotoNextButtonTitle: 'Sonrakine Git',
        detailsDialogCloseBtnLabel: 'Kapat',
        roleDescription: 'resim'
    },
    platformUploadCollection: {
        moveToTitle: 'Taşınma',
        moveToTitleFolder: 'Dizin',
        moveToNewFolderBtnLabel: 'Yeni Dizin',
        moveToAllFilesSubHeaderLabel: 'Tüm dosyalar',
        moveToConfirmBtn: 'Move',
        moveToCloseBtn: 'Vazgeç',
        newFolderTitle: 'Yeni Dizinr',
        newFolderAtRootInputLabel: 'Yeni Dizin adı',
        newFolderAtFolderInputLabel: '{{ folderName }} içindeki yeni dizin adı',
        newFolderInputPlaceholder: 'Buraya yaz..',
        newFolderInputErrorLabel: 'Maksimum {{ count }} karaktere izin verilir',
        newFolderDialogCreateBtnLabel: 'Oluşturma',
        newFolderDialogCancelBtnLabel: 'Vazgeç',
        breadcrumbLabelAllFiles: 'Tüm dosyalar',
        breadcrumbLabelAllFilesWithTotal: 'Tüm dosyalar ({{ total }})',
        searchPlaceholder: 'Ara',
        addBtnLabel: 'Ekle',
        newFolderBtnLabel: 'Yeni Dizin',
        moveToBtnLabel: 'Taşınma',
        downloadBtnLabel: 'İndir',
        updateVersionBtnLabel: 'Sürümü güncelle',
        removeBtnLabel: 'Kaldır',
        folderIconTitle: 'Dizin ikonu',
        fileIconTitle: 'Dosya ikonu',
        editFileNameInputPlaceholder: 'İsim girin',
        editFileNameFileAlreadyExistsError: 'Bu adda dosya zaten var',
        editFileNameFolderAlreadyExistsError: 'Bu adda dizin zaten var',
        itemStatusSuccessful: 'Başarılı',
        itemStatusUnsuccessful: 'Başarısız',
        uploadNewFileAfterFailAction: 'Çalıştır',
        cancelUploadNewFileAction: 'Vazgeç',
        itemMenuBtnTitle: 'Daha',
        dragDropAreaText: 'Yüklenecek dosyaları sürükleyin',
        noDataText: 'Dosya bulunamadı',
        noDataDescription: 'Yüklenecek dosyaları bırakın veya “Ekle” düğmesini kullanın.',
        paginationTotal: '{{ total }}/{{ from }}-{{ to }} arasında gösteriliyor',
        resultsPerPage: 'Sayfa başına sonuç',
        messageCreateFailed: '{{ folderName }} oluşturulamadı.',
        messageCreateSuccess: '{{ folderName }} oluşturuladı.',
        messageUpdateVersionFailed: '{{ folderName }} sürümü güncellenemedi.',
        messageUpdateVersionSuccess: '{{ folderName }} sürümü güncellendi.',
        messageFileRenameFailed: '"{{ from }}" olarak yeniden adlandırılamadı "{{ to }}"',
        messageFileRenameSuccess: '"{{ from }}", "{{ to }}" olarak yeniden adlandırıldı.',
        messageRemoveFoldersAndFilesFailed: '{{ foldersCount }} dizin ve {{ filesCout }} dosya kaldırılamadı.',
        messageRemoveFoldersAndFilesSuccess: '{{ foldersCount }} dizinleri ve {{ filesCount }} dosyaları kaldırıldı.',
        messageRemoveFoldersFailed: '{{ foldersCount }} dizinleri kaldırılamadı',
        messageRemoveFoldersSuccess: '{{ foldersCount }} dizinleri kaldırıladı.',
        messageRemoveFilesFailed: '{{ filesCount }} dosyaları kaldırılamadı.',
        messageRemoveFilesSuccess: '{{ filesCount }}  dosyaları kaldırıldı.',
        messageRemoveFileOrFolderFailed: ' {{ name }} kaldırılamadı.',
        messageRemoveFileOrFolderSuccess: '{{ name }} kaldırıldı.',
        messageMoveFoldersAndFilesFailed:
            '{{ foldersCount }} dizini ve {{ filesCount }} dosyası, {{ to }}  taşınamadı.',
        messageMoveFoldersAndFilesSuccess: '{{ foldersCount }} dizini ve {{ filesCount }} dosyası, {{ to }}  taşınadı.',
        messageMoveFoldersFailed: '{{ foldersCount }} dizini, {{ to }}  taşınamadı.',
        messageMoveFoldersSuccess: '{{ foldersCount }} dizini, {{ to }}  taşınadı.',
        messageMoveFilesFailed: '{{ filesCount }} dosyası, {{ to }}  taşınamadı.',
        messageMoveFilesSuccess: '{{ filesCount }} dosyası, {{ to }}  taşınadı.',
        messageMoveFileOrFolderFailed: '{{ name }}, {{ to }} taşınamadı.',
        messageMoveFileOrFolderSuccess: '{{ name }}, {{ to }} taşınadı.',
        messageMoveRootFoldersAndFilesFailed:
            '{{ foldersCount }} dizinleri ve {{ filesCount }} dosyaları tüm dosyalara taşınamadı.',
        messageMoveRootFoldersAndFilesSuccess:
            '{{ foldersCount }} dizinleri ve {{ filesCount }} dosyaları tüm dosyalara taşınadı.',
        messageMoveRootFoldersFailed: '{{ foldersCount }} dizini tüm dosyalara taşınamadı.',
        messageMoveRootFoldersSuccess: '{{ foldersCount }} dizinler tüm dosyalara taşındı.',
        messageMoveRootFilesFailed: '{{ filesCount }} dosyası tüm dosyalara taşınamadı.',
        messageMoveRootFilesSuccess: '{{ filesCount }} dizinler tüm dosyalara taşındı.',
        messageMoveRootFileOrFolderFailed: '{{ name }} tüm dosyalara taşınamadı.',
        messageMoveRootFileOrFolderSuccess: '{{ name }} tüm dosyalara taşındı.',
        messageFileTypeMismatchPlural:
            '{{ filesCount }} dosyalarının türü yanlış. İzin verilen türler: {{ allowedTypes }}.',
        messageFileTypeMismatchSingular:
            '"{{ fileName }}" dosyasının türü yanlış. İzin verilen türler: {{ allowedTypes }}.',
        messageFileSizeExceededPlural:
            '{{ filesCount }} dosya maksimum dosya boyutunu aştı. İzin verilen maksimum dosya boyutu: {{ maxFileSize }}.',
        messageFileSizeExceededSingular:
            '"{{ fileName }}" dosyası maksimum dosya boyutunu aştı. İzin verilen maksimum dosya boyutu: {{ maxFileSize }}.',
        messageFileNameLengthExceededPlural:
            '{{ filesCount }} dosya maksimum dosya adı uzunluğunu aştı. İzin verilen dosya adı uzunluğu: {{ maxFilenameLength }} karakter.',
        messageFileNameLengthExceededSingular:
            '"{{ fileName }}", maksimum dosya adı uzunluğunu aştı. İzin verilen dosya adı uzunluğu: {{ maxFilenameLength }} karakter.'
    },
    platformWizardGenerator: {
        summarySectionEditStep: 'Düzenle'
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
        selectOptionLabel: 'Bir seçenek seçin'
    },
    fnSlider: {
        minMaxDetails: 'Kaydırıcının {{ min }} minimum değeri, {{ max }} maksimum değeri',
        valueminDetails: 'Değer {{ value }}',
        valuemaxDetails: 'Değer {{ value }}',
        valueNowDetails: 'Geçerli değer  {{ value }}'
    },
    fnSwitch: {
        semanticAcceptLabel: 'Kabul et',
        semanticDeclineLabel: 'Reddet'
    },
    coreTree: {
        expand: 'Expand node',
        collapse: 'Collapse node',
        noData: 'No data'
    }
};
