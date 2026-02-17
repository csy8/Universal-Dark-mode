# 🌙 Universal Dark Mode Script

> **English** | [한국어](#-한국어-버전-korean-version)

A versatile Tampermonkey script that brings "Universal Dark Mode" to any website by intelligently darkening backgrounds and lightening text.

---

## 🚀 English Version

### 🛠 Installation
1. **Install Tampermonkey:** First, install the [Tampermonkey](https://www.tampermonkey.net/) extension for your browser.
2. **Register the Script:** - Open the `Universal Dark Mode Toggle Button.user.js` file and click the **Raw** button to trigger the installation.
   - Or, copy the content of `dark_mode_script.js`, paste it into your Tampermonkey editor, and press `Ctrl + S` to save.
3. **Run:** Refresh the page and press the hotkey to enjoy dark mode.

### ⌨️ Usage & Recommendations
* **Primary Hotkey:** `Alt + Q` (or `Ctrl + Q`)
  * *Tip: Firefox users should use `Alt + Q` to avoid conflicts with the 'Close Browser' shortcut.*
* **Persistence:** Your dark mode status is saved in the browser and remains active even after page navigation.
* **Best For:** Sites without native dark mode (e.g., Amazon).
* **Caution:** For sites with official dark mode (e.g., YouTube, GitHub), use their native settings for better accuracy.

### 🔍 How It Works & Troubleshooting
* **Mechanism:** Uses **Global CSS Override** to force backgrounds to `#1e1e1e` and text to `#d4d4d4`.
* **Troubleshooting:** If it fails to run, press `F12` and check the **Console** for the `[Universal Dark Mode]` message.
* **Input Conflicts:** If a site intercepts keys, manually run the script via the Tampermonkey toolbar menu.

### ⚠️ Known issues
| Issue | Description |
| :--- | :--- |
| **Iframe Sync** | Frames like ads/comments may need a manual refresh to sync styles. |
| **Visual Loss** | Charts, graphs, and maps may lose their distinct colors. |
| **Shadow DOM** | Modern components (e.g., Chrome internal pages) might remain white. |
| **Layout Distortion** | Some buttons or transparent UIs may appear as solid colors. |

---

## 🇰🇷 한국어 버전 (Korean Version)

### 🛠 설치 방법
1. **Tampermonkey 설치**
   - 브라우저에 맞는 [Tampermonkey](https://www.tampermonkey.net/) 확장 프로그램을 먼저 설치하세요.

2. **스크립트 등록**
   - `Universal Dark Mode Toggle Button.user.js` 파일을 열고 **Raw** 버튼을 클릭하여 설치 창을 띄웁니다.
   - 또는, 에디터의 기존 내용을 삭제한 뒤 `dark_mode_script.js`의 내용을 복사하여 붙여넣고 `Ctrl + S`로 저장하세요.

3. **실행**
   - 사이트 새로고침 후 단축키를 눌러 다크 모드를 활성화하세요.


### ⌨️ 사용 방법 및 권장 사항
* **주요 단축키:** `Alt + Q` (또는 `Ctrl + Q`)
  * *팁: 파이어폭스 사용자는 브라우저 종료 충돌 방지를 위해 `Alt + Q`를 권장합니다.*
* **상태 유지:** 다크 모드 활성화 상태는 브라우저에 저장되어 페이지 이동 시에도 유지됩니다.
* **추천 사이트:** 네이버, 아마존 등 공식 다크 모드가 없는 사이트.
* **주의 사항:** 유튜브, 깃허브 등 자체 다크 모드를 지원하는 곳은 공식 설정을 권장합니다.

### 🔍 동작 원리 및 문제 해결
* **원리:** **Global CSS Override** 방식을 사용하여 배경색은 `#1e1e1e`, 글자색은 `#d4d4d4`로 강제 지정합니다.
* **작동 확인:** 실행이 안 될 경우 `F12` 콘솔 탭에서 `[Universal Dark Mode]` 메시지를 확인하세요.
* **입력 가로채기:** 특정 사이트가 키 입력을 우선 처리하여 단축키가 안 먹힐 경우, 템퍼몽키 툴바에서 수동 실행하세요.

### ⚠️ 알려진 문제
강제 다크 모드 구현 방식의 특성상 아래와 같은 현상이 발생할 수 있습니다.
| 항목 | 상세 내용 |
| :--- | :--- |
| **Iframe 비동기화** | 내부 프레임(광고 등)의 상태 동기화를 위해 새로고침이 필요할 수 있습니다. |
| **시각 정보 손실** | 차트, 그래프, 지도 등 색상 구분이 중요한 요소가 단색으로 변하거나 식별이 어려울 수 있습니다. |
| **Shadow DOM** | 최신 웹 기술이 적용된 일부 영역(크롬 설정 등)은 스타일이 미적용될 수 있습니다. |
| **레이아웃 변형** | 배경 이미지나 투명도가 포함된 버튼 디자인이 다소 왜곡될 수 있습니다. |

---

## 📄 License
This project is licensed under the MIT License.
