# Tłumacz 🇵🇱 🇩🇪 🇬🇧

Prywatna aplikacja na iPhone'a do tłumaczenia tekstów, która przy okazji odpowiada na pytania z tekstu.

- **Polski → Niemiecki** lub **Polski → Angielski** (wybierasz jednym dotknięciem)
- **Niemiecki → Polski** i **Angielski → Polski** (automatycznie)
- Język tekstu jest rozpoznawany sam
- Jeżeli w tekście są pytania lub zadania, aplikacja na nie odpowiada: krótko, pełnym zdaniem, w obu językach
- Motyw: **Jasny / Ciemny / Auto**
- Drugi ekran **Notatki**: biblioteka z folderami, ulubionymi, wyszukiwarką i przyciskiem „Zapisz”
- Historia tłumaczeń, kopiowanie, udostępnianie, odsłuchiwanie wymowy
- Wszystko jest **za darmo**: GitHub Pages + darmowy klucz Google Gemini (i opcjonalnie darmowy zapasowy klucz Groq)
- Notatki i klucze są zapisane tylko na Twoim telefonie

---

## Instalacja na iPhonie (bez Maca, za darmo)

### 1. Włącz GitHub Pages
1. Otwórz w Safari to repozytorium na github.com (zaloguj się).
2. Wejdź w **Settings** (jeśli nie widać zakładki, przewiń pasek zakładek w prawo albo w menu „Aa” w Safari wybierz „Poproś o witrynę na komputery”).
3. Z lewej (lub z listy) wybierz **Pages**.
4. W **Build and deployment → Source** wybierz **Deploy from a branch**.
5. W **Branch** wybierz **main** i folder **/ (root)**, a potem **Save**.
6. Odczekaj 1–2 minuty i odśwież stronę. Na górze pojawi się adres:
   `https://TWOJA-NAZWA.github.io/tlumacz/`

### 2. Dodaj aplikację do ekranu początkowego
1. Otwórz ten adres w **Safari** (koniecznie w Safari).
2. Stuknij **Udostępnij** (kwadrat ze strzałką w górę).
3. Wybierz **Do ekranu początkowego** → **Dodaj**.
4. Na ekranie iPhone'a pojawi się ikona **Tłumacz**. Otwieraj aplikację zawsze z tej ikony.

### 3. Zdobądź darmowy klucz Gemini (jednorazowo)
1. W aplikacji stuknij **Otwórz Google AI Studio** (albo wejdź na https://aistudio.google.com/apikey).
2. Zaloguj się kontem Google i zaakceptuj warunki.
3. Stuknij **Create API key** i skopiuj klucz (zaczyna się zwykle od `AIza`).
4. Wróć do aplikacji, stuknij **Wklej** i **Zapisz klucz**. Zobaczysz komunikat „✓ Klucz działa!”.

Gotowe. Klucz nie wymaga karty kredytowej.

### 4. (Opcjonalnie) Zapasowy darmowy klucz Groq
Darmowy plan Gemini ma dzienne limity. Gdy się wyczerpią, aplikacja sama przełącza się na słabszy model Gemini, a jeśli dodasz klucz Groq, także na Groq.
1. Wejdź na https://console.groq.com/keys i zaloguj się (np. kontem Google).
2. **Create API Key** → skopiuj klucz (`gsk_…`).
3. W aplikacji: **Ustawienia (⚙️) → Zapasowy dostawca – Groq → Wklej → Zapisz i sprawdź**.

---

## Jak używać
- **Tłumacz**: wklej tekst (przycisk **Wklej** od razu tłumaczy). Gdy tekst jest po polsku, wybierz **Niemiecki** albo **Angielski**. Zmiana języka po tłumaczeniu od razu tłumaczy ponownie.
- Stuknij pole **Z** (język tekstu), żeby ręcznie wybrać język, jeśli wykrycie się pomyli.
- Pod tłumaczeniem są odpowiedzi na pytania: w języku pytania i w języku tłumaczenia, każda z przyciskiem kopiowania.
- **Do notatek** zapisuje tłumaczenie z odpowiedziami w bibliotece (folder „Tłumaczenia”).
- **Notatki**: przycisk **+** dodaje notatkę. Masz tytuł, folder, gwiazdkę, przycisk **Zapisz**, wyszukiwanie i sortowanie.
- **Ustawienia (⚙️)**: motyw, klucze, model, kopia zapasowa notatek (eksport/import pliku).

## Wskazówki
- **Rób czasem kopię notatek** (Ustawienia → Eksportuj notatki → Zapisz w Plikach). Notatki są tylko na telefonie, więc jeśli usuniesz aplikację z ekranu, znikną.
- Darmowe limity Google odnawiają się codziennie ok. 9:00 rano czasu polskiego.
- W darmowym planie Google może wykorzystywać wysyłane teksty do ulepszania swoich usług, więc nie wklejaj haseł ani danych wrażliwych.
- Aplikacja aktualizuje się sama po zmianie plików w tym repozytorium.

## Pliki
| Plik | Co robi |
|---|---|
| `index.html` | wygląd ekranów |
| `style.css` | kolory, motywy jasny/ciemny |
| `app.js` | cała logika: wykrywanie języka, tłumaczenie, odpowiedzi, notatki |
| `sw.js` | działanie offline (notatki działają bez internetu) |
| `manifest.webmanifest`, `icon-*.png` | ikona i nazwa na ekranie iPhone'a |
