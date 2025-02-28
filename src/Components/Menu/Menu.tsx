import { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { EN_LOCALE, EL_LOCALE } from '@/constants';
import useLocale from '@/Hooks/useLocale';
import usePrintStatus from '@/Hooks/usePrintStatus';
import useMediaQuery from '@/Hooks/useMediaQuery';
import useExpandedView from '@/Hooks/useExpandedView';
import useDarkMode from '@/Hooks/useDarkMode';
import { MENU_ICONS, getOppositeLocaleIconKey } from '@/Utils/iconsLibrary';

import '@/Components/Menu/Menu.css';

// Define type for localized strings
type LocalizedStringsType = {
  [key: string]: {
    print: string;
    downloadPdfsWrapper: string;
    downloadPdf: string;
    downloadGrayscalePdf: string;
    toggleLocale: string;
    toggleExpandedView: string;
    toggleDarkMode: string;
    bio: string;
  };
};

function Menu() {
  const navigate = useNavigate();
  const { appLocale, setLocale } = useLocale();
  const { expandedView, toggleExpandedView } = useExpandedView();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const isPrinting = usePrintStatus();
  const isMobile = useMediaQuery(`only screen and (max-width: 767.99px)`);

  const [showPdfButtons, setShowPdfButtons] = useState<boolean>(false);

  const languageIconKey = getOppositeLocaleIconKey(appLocale);
  const expandedViewIconKey = expandedView ? 'less_details' : 'more_details';
  const darkModeIconKey = darkMode ? 'sun' : 'moon';

  // Define dictionary for localized strings
  const localizedStrings = useMemo<LocalizedStringsType>(
    () => ({
      [EN_LOCALE]: {
        print: 'Print resume',
        downloadPdfsWrapper:
          'Download resume in PDF format (colored or grayscale)',
        downloadPdf: 'Download colored resume in PDF format',
        downloadGrayscalePdf: 'Download grayscaled resume in PDF format',
        toggleLocale: `Toggle locale to ${EL_LOCALE}`,
        toggleExpandedView: `Toggle expanded view ${expandedView ? 'Off' : 'On'}`,
        toggleDarkMode: `Toggle dark mode ${darkMode ? 'Off' : 'On'}`,
        bio: 'CV',
      },
      [EL_LOCALE]: {
        print: 'Tulosta ansioluettelo',
        downloadPdfsWrapper:
          'Lataa ansioluettelo PDF-muodossa (värillisenä tai harmaasävyisenä)',
        downloadPdf: 'Lataa värillinen ansioluettelo PDF-muodossa',
        downloadGrayscalePdf:
          'Lataa ansioluettelo PDF-muodossa harmaasävyisenä',
        toggleLocale: `Vaihda kieli kielelle ${EN_LOCALE}`,
        toggleExpandedView: `${
          expandedView ? 'Poista käytöstä' : 'Ota käyttöön'
        } laajennettu näkymä`,
        toggleDarkMode: `${
          darkMode ? 'Poista käytöstä' : 'Ota käyttöön'
        } tumma teema`,
        bio: 'Ansioluettelo',
      },
    }),
    [expandedView, darkMode]
  );

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.menu-pdfs-resume') && showPdfButtons) {
        setShowPdfButtons(false);
      }
    },
    [showPdfButtons]
  );

  // Hide PDF buttons when clicking outside
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  const handlePrintButtonClick = () => {
    /**
     * On mobile the window.print() is printing the mobile version
     * which is not print friendly. Thus we trigger the print PDF.
     */
    if (isMobile) {
      const printPdfButton = document.querySelector(
        '.menu-item.menu-grayscale-pdf-resume'
      ) as HTMLButtonElement;
      if (printPdfButton) {
        printPdfButton.click();
      } else {
        console.error('Print PDF button not found.');
      }
    } else {
      if (expandedView) {
        toggleExpandedView(); // Toggle expanded view off
        setTimeout(() => {
          window.print(); // Delay to ensure the state update propagates
        }, 100); // Small delay (100ms) for state propagation
      } else {
        window.print(); // Directly trigger print if not expanded
      }
    }
  };

  const toggleLocale = useCallback(() => {
    const newLocale = appLocale === EL_LOCALE ? EN_LOCALE : EL_LOCALE;
    if (newLocale !== appLocale) {
      setLocale(newLocale);
      navigate(newLocale === EN_LOCALE ? `/en` : `/`);
    }
  }, [appLocale, setLocale, navigate]);

  return (
    <div
      id="menu"
      className={`menu ${isPrinting ? 'printing' : ''}`}
      data-rs-id="rs-menu"
    >
      <button
        className="menu-item menu-print-resume"
        type="button"
        title={localizedStrings[appLocale].print}
        data-rs-id="rs-menu-print"
        onClick={handlePrintButtonClick}
      >
        {MENU_ICONS.print}
      </button>

      <button
        className="menu-item menu-locale-toggler"
        type="button"
        title={localizedStrings[appLocale].toggleLocale}
        data-rs-id="rs-menu-toggle-locale"
        onClick={toggleLocale}
      >
        {MENU_ICONS[languageIconKey as keyof typeof MENU_ICONS]}
      </button>

      <button
        className={`menu-item menu-expanded-view-toggler menu-ev-${expandedViewIconKey}`}
        type="button"
        title={localizedStrings[appLocale].toggleExpandedView}
        data-rs-id="rs-menu-toggle-expanded-view"
        onClick={toggleExpandedView}
      >
        {/* More details */}
        {MENU_ICONS[expandedViewIconKey as keyof typeof MENU_ICONS]}
      </button>

      <button
        className={`menu-item menu-dark-mode-toggler menu-dm-${darkModeIconKey}`}
        type="button"
        title={localizedStrings[appLocale].toggleDarkMode}
        data-rs-id="rs-menu-toggle-dark-mode"
        onClick={toggleDarkMode}
      >
        {MENU_ICONS[darkModeIconKey as keyof typeof MENU_ICONS]}
      </button>
    </div>
  );
}

export default Menu;
