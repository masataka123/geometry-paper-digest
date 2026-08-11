---
layout: paper
title: "Pseudo-hyperbolicity of Horikawa surfaces"
title_ja: "Horikawa曲面の擬双曲性"
authors: "Anibal Aravena, Jaime Negrete, Wern Yeong"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
arxiv_id: "2608.08276v1"
arxiv_url: "https://arxiv.org/abs/2608.08276"
arxiv_submitted: "2026-08-08"
arxiv_updated: "2026-08-08"
summary: >-
  Chern勾配が最小の一般型曲面であるHorikawa曲面について、非常に一般の点では有理曲線・楕円曲線が有限個しかないことを示す。分岐二重被覆を対数対の双曲性へ移し、例外曲線を明示的に特徴づけて数える。
abstract_en: ""
summary_en: >-
  The authors examine Horikawa surfaces, which occupy the minimal-slope edge of the geography of general-type surfaces. They prove that a very general such surface with geometric genus at least five has only finitely many rational or elliptic curves, with an analogous result for first-kind surfaces of geometric genus three or four. The argument uses Horikawa's double-cover classification and refined logarithmic hyperbolicity estimates on the rational base. In nearly all moduli strata considered, it also identifies and counts the exceptional low-genus curves.
abstract_ja: >-
  最小Chern勾配を持つ一般型のHorikawa曲面を対象に、幾何種数 $p_g\ge5$ の非常に一般の曲面は有理曲線または楕円曲線を有限個しか含まないことを証明する。第一種では $p_g=3,4$ にも同じ結論が及ぶ。さらに多くのモジュライ層で、これら低種数曲線を明示的に特徴づけ、その個数を計算する。
abstract_source_url: "https://arxiv.org/abs/2608.08276"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.08276v1](https://arxiv.org/abs/2608.08276)
- **著者:** Anibal Aravena, Jaime Negrete, Wern Yeong
- **初回投稿日・最終更新日:** 2026年8月8日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Green–Griffiths–Lang予想は、一般型射影多様体の整曲線が真の代数部分集合に閉じ込められると予想する。曲面でも未解決例が多く、とりわけChern数の既知の十分条件から遠いHorikawa曲面は難しい試験対象である。

Horikawa曲面は第一種なら $c_1^2=2p_g-4$、第二種なら $c_1^2=2p_g-3$ を満たす最小一般型曲面であり、同値に

$$
c_2=5c_1^2+36\quad\text{または}\quad c_2=5c_1^2+30
$$

となる。本論文は、$p_g\ge5$ の非常に一般のHorikawa曲面、および $p_g\in\{3,4\}$ の非常に一般の第一種Horikawa曲面が、有理曲線・楕円曲線を有限個しか含まないことを示す。

結論は単なる有限性にとどまらない。ほぼ全ての対象層で例外曲線を特徴づけて数え、例えば一般の8次平面曲線で分岐する $\mathbb P^2$ の二重被覆には有理曲線がなく、bitangentから生じる楕円曲線が1320本あるとする。

## 背景と問題設定

一般型曲面について $c_1^2>c_2$ なら擬Brody双曲性が知られる一方、Horikawa曲面のChern勾配は約 $1/5$ である。これらはNoether不等式の境界上または近傍に位置し、従来の $c_1^2>3c_2/5$ という緩和された範囲にも入らない。

論文では、有理曲線または楕円曲線が有限個しかないことを「pseudo-Lang algebraically hyperbolic」と呼ぶ。これはDemailly代数的双曲性やBrody双曲性そのものより弱く、Introductionは対象曲面の多くについてpseudo-Demailly代数的双曲性がなお未解決だと明記する。

## 主結果

### 非常に一般のHorikawa曲面の擬双曲性（Theorem 1.3）

非常に一般のHorikawa曲面で $p_g\ge5$ なら、有理曲線および楕円曲線は合わせて有限個しか存在しない。同じ結論は第一種Horikawa曲面の $p_g=3,4$ にも成立する。「非常に一般」は各Giesekerモジュライ空間の既約成分で可算個の真のZariski閉集合を除くという意味である。

### 例外曲線の明示的計数

Introductionでは代表例として、一般8次曲線で分岐する $\mathbb P^2$ の二重被覆で1320本、一般の型 $(6,6)$ 曲線で分岐する $\mathbb P^1\times\mathbb P^1$ の二重被覆で120本の楕円曲線を数える。いずれも有理曲線はなく、楕円曲線はそれぞれbitangentまたは分岐曲線に接するファイバーから生じる。

## 証明の見取り図

Horikawaの分類により対象を $\mathbb P^2$、Hirzebruch曲面、またはその少数点の爆発上の分岐二重被覆として表す。被覆上の曲線は基底のorbifold対 $(W,\frac12D)$ への曲線を誘導するので、問題を対数代数的双曲性の種数・次数評価へ移す。

新しい点は、固定成分に沿う対数接束の正値性と、可動部分に対するsection-dominatingな直線束族を組み合わせ、従来より精密な不等式を得ることである。等号や例外の場合にはkernel bundleの切断が存在することから曲線の位置を特定し、有限性だけでなく列挙へつなげる。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.08276](https://arxiv.org/abs/2608.08276)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理:** Theorem 1.3
- **論文構成の説明:** “Proof ideas” and “Outline”, p. 4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
