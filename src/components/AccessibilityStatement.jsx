import React from 'react';
import { useTranslation } from 'react-i18next';
import './AccessibilityStatement.css';

export default function AccessibilityStatement() {
  const { i18n } = useTranslation();
  const lang = i18n.resolvedLanguage; // 'he', 'ru' или 'en'

  // Содержимое заявления на трёх языках
  const statements = {
    he: (
      <>
        <h2>הצהרת נגישות</h2>
        <p>​מבוא:</p>
        <p>
          מתן שירות לאנשים עם מוגבלויות הוא בחשיבות עליונה מבחינתנו, ואנו עושים
          ככל שמתאפשר לנו על מנת להעניק שירות לאנשים עם מוגבלויות.
        </p>
        <p><strong>רמת הנגישות באתר האינטרנט</strong></p>
        <p>
          עשינו כמיטב יכולתנו על מנת שהאתר יעמוד בתקנות שוויון זכויות לאנשים עם
          מוגבלות.
        </p>
        <p>להלן הקווים המנחים והתאמות הנגישות שביצענו:</p>
        <ul>
          <li>האתר מותאם לצפייה בדפדפנים הפופולריים.</li>
          <li>ניווט פשוט, ידידותי וברור.</li>
          <li>תכני האתר כתובים בצורה מסודרת וברורה.</li>
          <li>האתר רספונסיבי ומתאים למבחר גדלי מסכים.</li>
          <li>מבנה הדפים פשוט וידידותי למשתמש.</li>
          <li>לתמונות יש טקסט חלופי (Alt Text) — ייתכן שלא תמיד במלואו על פי התקן.</li>
          <li>ניתן לשנות גודל טקסט בעזרת Ctrl + גלילת עכבר.</li>
          <li>אין באתר אלמנטים לא ברורים או שאינם נתמכים.</li>
          <li>צבעי האתר בעלי ניגודיות גבוהה וברורה.</li>
        </ul>
        <p>
          למרות המאמצים, ייתכנו אלמנטים שלא הונגשו במלואם. אם נתקלתם בבעיה,
          אנא צרו קשר במייל המופיע באתר.
        </p>
        <p>
          אנו ממשיכים לשפר את הנגישות ככל הניתן, כולל תכנים של צד ג'.
          אם נדרשת עזרה נוספת, אנו כאן בשבילכם.
        </p>
        <p>
          ניתן לפנות לרכז/ת הנגישות בארגון במייל או בטלפון המפורסמים באתר.
        </p>
        <p><strong>שימוש בתוסף הנגישות:</strong></p>
        <p>
          באתר מוטמע תוסף הנגישות enable שמסייע בהנגשת האתר לבעלי מוגבלויות.
        </p>
        <p><strong>הוראות שימוש בתפריט הנגישות:</strong></p>
        <ul>
          <li>כפתור להתאמת האתר ותגיות עבור מכשירי עזר וטכנולוגיות נגישות.</li>
          <li>כפתור לאפשר ניווט עם מקשי המקלדת בין הקישורים.</li>
          <li>כפתור לכיבוי הבהובים ו/או אלמנטים נעים.</li>
          <li>כפתור למצב מונוכרום (שחור-לבן) לעיוורי צבעים.</li>
          <li>כפתור לספיה (גוון חום).</li>
          <li>כפתור לניגודיות גבוהה.</li>
          <li>כפתור לשחור-צהוב.</li>
          <li>כפתור להיפוך צבעים.</li>
          <li>כפתור להדגשת כל תווי הכותרות באתר.</li>
          <li>כפתור להדגשת כל הקישורים באתר.</li>
          <li>כפתור להצגת טקסט חלופי של תמונות במעבר עכבר.</li>
          <li>כפתור להצגת תיאורים קבועים של התמונות.</li>
          <li>כפתור לביטול גופנים לא קריאים.</li>
          <li>כפתור להגדלת גודל הגופנים באתר.</li>
          <li>כפתור להקטנת גודל הגופנים באתר.</li>
          <li>כפתור להגדלת התצוגה ל־200%.</li>
          <li>כפתור להקטנת התצוגה ל־70%.</li>
          <li>כפתור להגדלת סמן העכבר.</li>
          <li>כפתור להגדלת סמן העכבר ושינוי צבעו לשחור.</li>
          <li>כפתור למצב קריאת האתר (מסך קריאה).</li>
          <li>כפתור להצגת הצהרת הנגישות.</li>
          <li>כפתור לאיפוס כל הגדרות הנגישות.</li>
          <li>כפתור לשליחת משוב נגישות.</li>
          <li>כפתור לשינוי שפת הסרגל והצהרת הנגישות בהתאם.</li>
        </ul>
        <p>
          בסרגל הנגישות קיימים שני סוגי הגדלות, אך ניתן להשתמש גם בקיצורי
          מקלדת:
        </p>
        <ul>
          <li>Esc – פותח/סוגר את סרגל הנגישות.</li>
          <li>Ctrl + “+” – מגדיל טקסט באתר.</li>
          <li>Ctrl + “–” – מקטין טקסט באתר.</li>
          <li>Ctrl + “0” – מחזיר טקסט לגודל המקורי.</li>
          <li>Space – גלילה מטה.</li>
          <li>F11 – הצגת מסך מלא (לחיצה נוספת מחזירה).</li>
        </ul>
        <p><strong>למען הסר ספק:</strong></p>
        <p>
          אתר זה נועד לשימוש על ידי כלל האוכלוסייה, כולל בעלי מוגבלויות. אנו
          מחויבים לשפר ולהגיע לנגישות מקסימלית, ככל שניתן. אם נתקלים בקושי,
          נשמח לשמוע משוב.
        </p>
        <p><strong>מוסמך נגישות:</strong></p>
        <p>פבל רודנוק</p>
        <p>paval333@gmail.com</p>
        <p>052-8055197</p>
        <p><em>תקף מתאריך: 01.06.2024</em></p>
      </>
    ),
    ru: (
      <>
        <h2>Заявление о доступности</h2>
        <p><strong>Введение:</strong></p>
        <p>
          Предоставление услуг для людей с ограниченными возможностями является
          для нас приоритетом, и мы делаем всё возможное, чтобы сайт был доступен
          каждому.
        </p>
        <p><strong>Уровень доступности на сайте</strong></p>
        <p>
          Мы сделали всё возможное, чтобы сайт соответствовал нормам равных прав
          для людей с ограниченными возможностями.
        </p>
        <p>Ниже приведены рекомендации и изменения, которые мы внедрили:</p>
        <ul>
          <li>Сайт оптимизирован для популярных браузеров.</li>
          <li>Навигация простая, понятная и дружелюбная.</li>
          <li>Контент написан упорядоченно и понятно.</li>
          <li>Сайт адаптивен для разных размеров экранов.</li>
          <li>Страницы имеют простую и понятную структуру.</li>
          <li>Изображения снабжены альтернативным текстом (Alt Text), возможно, не во
            всех случаях в полном соответствии со стандартом.</li>
          <li>Можно менять масштаб текста с помощью Ctrl + колесико мыши.</li>
          <li>На сайте нет непонятных элементов.</li>
          <li>Цвета сайта обладают высоким контрастом.</li>
        </ul>
        <p>
          Несмотря на наши усилия, некоторые элементы могут быть не полностью
          доступны. Если вы обнаружили проблему, напишите нам по электронной почте,
          указанной на сайте.
        </p>
        <p>
          Мы продолжаем работать над улучшением доступности, включая сторонний
          контент. Если нужна помощь, мы всегда готовы помочь.
        </p>
        <p><strong>Использование компонента доступности:</strong></p>
        <p>
          На сайте установлен плагин доступности enable, который помогает
          сделать сайт удобным для людей с ограниченными возможностями.
        </p>
        <p><strong>Руководство пользователя панели доступности:</strong></p>
        <ul>
          <li>Кнопка настройки сайта и тегов для вспомогательных устройств.</li>
          <li>Кнопка навигации с помощью клавиатурных клавиш между ссылками.</li>
          <li>Кнопка отключения мерцаний и/или движущихся элементов.</li>
          <li>Кнопка черно-белого (монохромного) режима для людей с нарушением
            цветового зрения.</li>
          <li>Кнопка сепии (коричневый оттенок).</li>
          <li>Кнопка высокой контрастности.</li>
          <li>Кнопка черно-желтого режима.</li>
          <li>Кнопка инверсии цветов.</li>
          <li>Кнопка выделения всех заголовков на сайте.</li>
          <li>Кнопка выделения всех ссылок на сайте.</li>
          <li>Кнопка показа альтернативного описания изображений при наведении.</li>
          <li>Кнопка показа постоянного описания изображений.</li>
          <li>Кнопка отмены нестандартных шрифтов.</li>
          <li>Кнопка увеличения размера шрифта.</li>
          <li>Кнопка уменьшения размера шрифта.</li>
          <li>Кнопка увеличения страницы до 200%.</li>
          <li>Кнопка уменьшения страницы до 70%.</li>
          <li>Кнопка увеличения курсора мыши.</li>
          <li>Кнопка увеличения курсора мыши и смены цвета на черный.</li>
          <li>Кнопка режима чтения сайта (Reader Mode).</li>
          <li>Кнопка показа заявления о доступности.</li>
          <li>Кнопка сброса всех настроек доступности.</li>
          <li>Кнопка отправки отзыва о доступности.</li>
          <li>Кнопка смены языка панели и заявления о доступности.</li>
        </ul>
        <p>
          На панели доступны два уровня масштабирования, но вы также можете 
          использовать эти клавиши:
        </p>
        <ul>
          <li>Esc — открыть/закрыть панель доступности.</li>
          <li>Ctrl + “+” — увеличить текст.</li>
          <li>Ctrl + “–” — уменьшить текст.</li>
          <li>Ctrl + “0” — сбросить текст к исходному размеру.</li>
          <li>Пробел — прокрутить страницу вниз.</li>
          <li>F11 — полноэкранный режим (повторно — выйти из него).</li>
        </ul>
        <p><strong>Мы стремимся сделать сайт доступным для всех:</strong></p>
        <p>
          Данный сайт предназначен для широкой аудитории, включая людей с
          инвалидностью. Если вы столкнулись с трудностями, сообщите нам, и мы
          сделаем всё возможное для устранения проблем с доступностью.
        </p>
        <p><strong>Ответственный за доступность:</strong></p>
        <p>Павел Руденок</p>
        <p>paval333@gmail.com</p>
        <p>052-8055197</p>
        <p><em>Заявление действительно с: 01.06.2024</em></p>
      </>
    ),
    en: (
      <>
        <h2>Accessibility Statement</h2>
        <p><strong>Introduction:</strong></p>
        <p>
          Providing services to people with disabilities is of utmost importance to us, and
          we do our best to make this website accessible.
        </p>
        <p><strong>Accessibility Level on the Website</strong></p>
        <p>
          We have done our utmost to ensure this site complies with equal rights
          regulations for persons with disabilities.
        </p>
        <p>Below are guiding principles and accessibility adjustments we have implemented:</p>
        <ul>
          <li>The site is optimized for viewing in popular browsers.</li>
          <li>Navigation is simple, user-friendly, and clear.</li>
          <li>Content is written in an orderly and clear manner.</li>
          <li>The site is responsive and adapts to various screen sizes.</li>
          <li>Pages have a straightforward, user-friendly structure.</li>
          <li>Images include alternative text (Alt Text) — sometimes partially compliant.</li>
          <li>Text can be zoomed using Ctrl + mouse wheel.</li>
          <li>There are no unclear or unsupported elements.</li>
          <li>Colors have high contrast.</li>
        </ul>
        <p>
          Despite our efforts, some elements may not be fully accessible or yet adapted. If
          you encounter such issues, please contact us via the email on our site.
        </p>
        <p>
          We continue improving accessibility, including third-party content. If you need more
          assistance, we are here to help.
        </p>
        <p>You can reach our accessibility coordinator via email or phone listed on the site.</p>
        <p><strong>Using the Accessibility Plugin:</strong></p>
        <p>
          This site integrates an accessibility plugin that helps make the website usable for
          persons with disabilities.
        </p>
        <p><strong>Accessibility Menu Guide:</strong></p>
        <ul>
          <li>Toggle site adjustments and ARIA tags for assistive technologies.</li>
          <li>Enable keyboard navigation between links.</li>
          <li>Disable flashing or moving elements.</li>
          <li>Enable black-and-white (monochrome) mode for colorblind users.</li>
          <li>Sepia (brown tone).</li>
          <li>High contrast mode.</li>
          <li>Black-yellow mode.</li>
          <li>Invert colors.</li>
          <li>Highlight all heading tags on the site.</li>
          <li>Highlight all links on the site.</li>
          <li>Show alternative image descriptions on hover.</li>
          <li>Show permanent image descriptions.</li>
          <li>Disable non-readable fonts.</li>
          <li>Increase font size on the site.</li>
          <li>Decrease font size on the site.</li>
          <li>Zoom entire display to 200%.</li>
          <li>Zoom entire display to 70%.</li>
          <li>Increase mouse cursor size.</li>
          <li>Increase mouse cursor size and change color to black.</li>
          <li>Enable reading mode.</li>
          <li>Show accessibility statement.</li>
          <li>Reset all accessibility settings.</li>
          <li>Send accessibility feedback.</li>
          <li>Switch toolbar and statement language accordingly.</li>
        </ul>
        <p>
          The toolbar offers two zoom levels, but you can also use keyboard shortcuts:
        </p>
        <ul>
          <li>Esc – toggle accessibility toolbar.</li>
          <li>Ctrl + “+” – increase text size.</li>
          <li>Ctrl + “–” – decrease text size.</li>
          <li>Ctrl + “0” – reset text size.</li>
          <li>Space – scroll down the page.</li>
          <li>F11 – toggle fullscreen mode (press again to exit).</li>
        </ul>
        <p><strong>For clarity:</strong></p>
        <p>
          We strive to make our site accessible to all, including persons with disabilities. If you
          encounter any difficulties, please let us know, and we will do our best to improve accessibility.
        </p>
        <p><strong>Accessibility Coordinator:</strong></p>
        <p>Pavel Rudenok</p>
        <p>paval333@gmail.com</p>
        <p>052-8055197</p>
        <p><em>Effective from: 01.06.2024</em></p>
      </>
    )
  };

  // Устанавливаем атрибут dir (rtl/ltr) в зависимости от языка
  const dir = lang === 'he' ? 'rtl' : 'ltr';

  return (
    <section className="accessibility-statement" dir={dir}>
      {statements[lang] || statements.en}
    </section>
  );
}
