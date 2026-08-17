---
layout: paper
title: "Nef but Non-Semi-positive Line Bundles on Hopf Manifolds"
title_ja: "Hopf多様体上のnefだが半正でない直線束"
authors: "Xiaojun Wu"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.AG
topic: several-complex-variables
tags:
  - positivity
  - curvature
arxiv_id: "2608.09114v1"
arxiv_url: "https://arxiv.org/abs/2608.09114"
arxiv_submitted: "2026-08-10"
arxiv_updated: "2026-08-10"
summary: >-
  Hopf多様体上で、直線束の数値的非負性と半正曲率計量の存在がどこまで一致するかを調べる。Bott–Chern類とUeda類を用いて正値性錐を分類し、非対角Hopf曲面の不変楕円曲線や任意次元でnefだが半正でない例を与える。
abstract_en: ""
summary_en: >-
  The paper determines the nef, effective, pseudo-effective, and semipositive line bundles on Hopf manifolds. Bott–Chern first Chern classes reduce much of the classification to the modulus of the character defining a flat bundle. On non-diagonal Hopf surfaces, an explicit Ueda-class computation shows that the invariant elliptic curve is nef but does not admit a smooth semipositive metric. The analysis also produces such line bundles in every dimension and contrasts diagonal with non-diagonal cases.
abstract_ja: >-
  Hopf多様体上のnef錐、有効錐、擬有効錐、半正錐を明示的に記述する研究である。非対角Hopf曲面では不変楕円曲線のUeda類を計算し、その対応する直線束がnefでありながら滑らかな半正曲率計量を持たないことを示す。さらにBott–Chernコホモロジーを通じて、任意次元のHopf多様体上にも新しい反例を構成する。
abstract_source_url: "https://arxiv.org/abs/2608.09114"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.09114v1](https://arxiv.org/abs/2608.09114)
- **著者:** Xiaojun Wu
- **初回投稿日:** 2026年8月10日
- **最終更新日:** 2026年8月10日
- **主分類・副分類:** math.CV（主分類）, math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

直線束がnefであることは交点論的な非負性であり、滑らかなHermite計量のChern曲率が半正であることは解析的な正値性である。Fujitaの問いに由来する「nefなら半正か」という期待には既に反例があるが、本論文は非KählerなHopf多様体上で両者のずれを系統的に分類する。

Hopf多様体上の任意の正則直線束が平坦であるというMallの定理を出発点に、文字 $delta\in\mathbb C^*$ に対応する平坦直線束を $L_\delta$ と書く。Introductionで示される中心関係式は

$$
\log|\delta_2|\,c_1(L_{\delta_1})=\log|\delta_1|\,c_1(L_{\delta_2})
$$

であり、ここで $c_1$ はBott–Chern第一Chern類である。したがって類は文字の絶対値だけで決まり、この計算からnef・有効・擬有効な直線束を具体的に記述できる。

半正性には対角型と非対角型の差が現れる。対角Hopf曲面では全てのnef直線束が半正であるのに対し、非対角Hopf曲面では非自明なnef直線束は半正でない。特に不変楕円曲線 $D$ に対する $\mathcal O_X(D)$ が明示的な反例となり、高次元のprimary Hopf多様体にも同種の例が拡張される。

## 背景と問題設定

Ueda理論は、位相的に自明な法束を持つコンパクト複素部分多様体の近傍が解析的に線形化できない障害をコホモロジー類で測る。非対角Hopf曲面 $X$ の不変楕円曲線 $D$ について、IntroductionはNeemanがUeda類を証明なしに提示していたことを指摘する。本論文はその類を明示計算し、Koikeの半正性判定に接続する。

またHopf曲面の標準形では、非対角の場合に反標準因子が $-K_X=(m+1)D$ と書ける。この幾何とBott–Chernコホモロジーを組み合わせることで、一つの反例を作るだけでなく正値性錐全体を比較する問題へ進む。

## 主結果

### Bott–Chern類と正値性錐（Proposition 2.7, Theorem 2.9）

平坦束 $L_\delta$ のBott–Chern第一Chern類は $|\delta|$ のみにより決まり、上の対数関係式を満たす。この式と既知のBott–Chernコホモロジー計算から、Hopf多様体上のnef・有効・擬有効錐、およびそれぞれに属する直線束が明示的に特徴づけられる。

### 半正錐の対角型・非対角型での相違

対角Hopf曲面ではnef錐と半正錐が一致する。これに対して非対角Hopf曲面では半正錐は自明であり、全ての非自明なnef直線束が半正性を失う。とりわけ不変楕円曲線 $D$ のUeda類の非消滅から、$\mathcal O_X(D)$ はnefだが半正でないと結論される。

### 高次元Hopf多様体への拡張（Proposition 3.3）

Introductionでは概略として次のように述べられている。Hopf部分多様体の自然な旗とBott–Chernコホモロジーを用い、任意次元のprimary Hopf多様体について四つの錐を完全に記述する。Păunの結果を用いる別証明はsecondary Hopf多様体の分類にも及ぶ。

## 証明の見取り図

非対角Hopf曲面では、まず不変楕円曲線の近傍における遷移関数を形式的に線形化し、ČechコホモロジーでUeda障害類を直接計算する。その非消滅をKoikeの判定へ入力し、$\mathcal O_X(D)$ の非半正性を得る。

一方、全体の分類では直線束を文字で表される平坦束へ還元し、Bott–Chern第一Chern類の比例関係を確立する。曲面の場合は既知の半正計量の構成とUeda理論を対比し、高次元ではHopf部分多様体の旗への制限によって非半正性を検出する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.09114](https://arxiv.org/abs/2608.09114)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Proposition 2.7, Theorem 2.9, Proposition 3.3
- **論文構成の説明:** Introduction, pp. 2–3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
