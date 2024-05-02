import { create } from "zustand";

const appStore = create((set, get) => ({
  nav: false,
  setNav: (data) => set({ nav: data }),

  resultFileText: null,
  setResultFileText: (data) => set({ resultFileText: data }),

  resultFileBraille: null,
  setResultFileBraille: (data) => set({ resultFileBraille: data }),

  resultTextDownload: null,
  setResultTextDownload: (data) => set({ resultTextDownload: data }),

  message: null,
  setMessage: (data) => set({ message: data }),

  showSnackbar: false,
  setShowSnackbar: (data) => set({ showSnackbar: data }),

  onClose: () => {
    set((state) => ({ showSnackbar: state.setShowSnackbar(true) }));
  },

  resultBrailleTranslate: null,
  setResultBrailleTranslate: (data) => set({ resultBrailleTranslate: data }),

  handleSubmiteBraille: () => {
    set((state) => ({
      resultBrailleTranslate: state.setResultBrailleTranslate(data),
    }));
  },

  switchText: false,
  setSwitchText: (data) => set({ switchText: data }),

  symbolText: null,
  setSymbolText: (data) => set({ symbolText: data }),

  inputText: "",
  setInputText: (data) => set({ inputText: data }),

  inputBraille: "",
  setInputBraille: (data) => set({ inputBraille: data }),

  resultTextAndBraille: "",
  setResultTextAndBraille: (data) => set({ resultTextAndBraille: data }),

  switchLang: false,
  setSwitchLang: (data) => set({ switchLang: data }),

  selectedOption: "សញ្ញាកាត់ក្នុងគណិតវិទ្យា",
  setSelectedOption: (data) => set({ selectedOption: data }),

  dropdownOpen: false,
  setDropdownOpen: (data) => set({ dropdownOpen: data }),

  dropdownOpenMath: false,
  setDropdownOpenMath: (data) => set({ dropdownOpenMath: data }),

  isPopupOpen: false,
  setIsPopupOpen: (data) => set({ isPopupOpen: data }),

  isVisible: false,
  setIsVisile: (data) => set({ isVisible: data }),

  isSmallScreen: window.innerWidth < 768,
  setIsSmallScreen: (data) => set({isSmallScreen: data})
}));

export default appStore;
