# Source notes

This frontend MVP was built from the supplied PNC team archive, the seven portrait images already provided in the conversation, and the supplied technology intro MP4.

## Profile data rules used

- Professional information was taken from the supplied CVs and the team roles confirmed by the user.
- Exact street addresses, birth dates, marital status and reference-person contact details are intentionally not surfaced in the website UI.
- Original CV PDFs are included as downloadable files for the members whose dedicated CVs were present in the archive.
- The file named `Kin Doung-CV.pdf` contains **Leader Din's** CV content. It is therefore mapped to Leader Din and is **not** offered as Kin Doung's CV.
- A dedicated Kin Doung CV was not present in the supplied archive. Kin's page uses the user-confirmed role plus limited cross-referenced team information and clearly marks the missing dedicated CV.

## Member/photo mapping

1. Chhea Chhouy
2. Kin Doung
3. Sokchea Boy
4. Bunyoung Hean
5. Darin Hoy
6. Leader Din
7. Seang Meng Chheun

## Design rules

- Material UI is the primary UI system.
- No linear/radial gradients or gradient text.
- Primary buttons use a single solid brand blue.
- Technology logos may keep official brand colors inside neutral tiles.
- Framer Motion is used for restrained reveal/page/card motion.
- Intro MP4 is shown full screen on home-page mount with a visible Skip Intro action and a hard fallback timeout.
