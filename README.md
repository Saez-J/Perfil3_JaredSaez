# Perfil3_JaredSaez

- **Nombre del estudiante:** Jared Moshe Saez Cruz
- **Carnet:** 20210067
- **Sección y grupo:** 3ro 2B
- **Enlace del video demostrativo:** _(pega aquí el link público)_
- **Enlace para descargar el APK:** _(pega aquí el link de descarga)_

## Descripción
App React Native (Expo) con React Navigation. Pantalla 1: datos del estudiante.
Pantalla 2: planetas de https://dragonball-api.com/api/planets.

## Estructura
- `src/components`: Card, Loader, AppButton, InfoRow (reutilizables)
- `src/hooks`: useFetchData (fetch genérico), usePlanets, useStudentInfo
- `src/screens`: StudentScreen, PlanetsScreen (solo UI)

## Ejecutar
```bash
npm install
npx expo install --fix
npx expo start
```

## Generar APK
```bash
npm install -g eas-cli
eas login
eas build:configure   # si lo pide
eas build -p android --profile preview
```
Al terminar, EAS te da un link para descargar el `.apk`.
