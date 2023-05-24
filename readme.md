-> index.ts bezposrednio do src

-foldery! folder components : 1 plik ts i 1 scss

folder services / logic: pliki ktore odpowiadaja za funkcjonalnosc tych elementow czyli np. folder "api" gdzie wszystkie pliki beda dotyczyly zapytan do API, folder game gdzie znajdzie sie logika gry, folder "ranking" gdzie bedzie logika dla rankingu

czyli np navigatiob - createNavEl, create logo itd

folder "utils" albo "helpers" gdzie takie funkcje jak "createEl" moglyby isc czyli tak zwane funkcje pomocnicze ktore wykorzystujesz w roznych miejscach swojej aplikacji

pozamieniac na 1 rodzaj funkcji!

export let gameMode: Mode = defaultGameMode;
export function setMode(mode: Mode) {
gameMode = mode;
}

dla tej czesci mozesz sobie spokojnie utworzyc folder state i w tym plik np. modeState.ts i tam zawrzec tylko te funkcje poniewaz ona odpowiada za tzw stan Twojej aplikacji i dzieki temu bedzie oddzielona od reszty i latwa do znalezienia

tutaj gdy klikam w guziki z people/vehicles/starships to zasady i pytanie sie nie zmienia i z tego co widze funkcja (gameDescriptionText) sie nie wywoluje, ona musi sie wywolywac rowniez w chooseNavMode

////////////
jak juz bedzie zrobione to dopracować:
w builderze do naszej templatki createEl dodać jeśli jest img setattribute ALT
