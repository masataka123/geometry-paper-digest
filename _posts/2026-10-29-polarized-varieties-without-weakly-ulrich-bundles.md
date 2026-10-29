---
layout: paper
title: On the existence of polarized varieties without weakly Ulrich bundles
title_ja: 弱Ulrich束を持たない偏極多様体の構成
authors: Ozhan Genc, Angelo Felice Lopez
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We give an obstruction to the existence of bundles $\mathcal E$ on a smooth $n$-dimensional polarized variety such that $\mathcal E$ is $a$-regular and ${\mathcal E}^*(K_X+(n+1)H)$ is $b$-regular. In particular, this gives an obstruction to the existence of weakly Ulrich bundles. Using the latter and some recent examples of [A1] in dimension $2$, we prove that for any $n \ge 2$ there exist many smooth $n$-dimensional varieties $X$ with a very ample line bundle $H$, such that there is no weakly Ulrich bundle for $(X,H)$.
topic: algebraic-geometry
tags:
- vector-bundles-sheaves
- chern-classes
arxiv_id: 2610.36231v1
arxiv_url: https://arxiv.org/abs/2610.36231
arxiv_submitted: '2026-10-26'
arxiv_updated: '2026-10-26'
summary: ベクトル束とその捩った双対の正則度から、偏極の次数とChern数の間に必要不等式を導く。弱Ulrich束に特殊化して存在障害を得るとともに、任意の次元2以上で弱Ulrich束を持たない滑らかな複素射影多様体を構成する。
abstract_en: ''
summary_en: Weakly Ulrich bundles impose fewer cohomological vanishings than Ulrich bundles, so nonexistence requires a stronger obstruction. The authors relate two regularity conditions to a numerical constraint involving the polarization and Chern classes. They then apply this constraint to surfaces from Hirzebruch-Kummer covers and to higher-dimensional constructions. Their results concern specified polarizations and leave the question for sufficiently ample polarizations open in characteristic zero.
abstract_ja: 滑らかな偏極多様体上の束と、その双対を標準因子などで捩った束の正則度に着目し、束の存在に必要なChern数の不等式を示す。両方が1-regularとなる弱Ulrich束の場合には明示的な非存在条件が得られる。Hesse配置に由来する曲面を出発点に、積や滑らかな切断を用いて任意の次元2以上に非存在例を構成する。
abstract_source_url: https://arxiv.org/abs/2610.36231
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.36231v1](https://arxiv.org/abs/2610.36231)
- **著者:** Ozhan Genc, Angelo Felice Lopez
- **初回投稿日:** 2026-10-26
- **最終更新日:** 2026-10-26
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Ulrich束や弱Ulrich束は射影多様体のChow形式を簡潔に記述するために有用な束である。近年Ulrich束が存在しない複素多様体が構成されたが、より弱いコホモロジー消滅しか要求しない弱Ulrich束にも非存在例があるかは別の問題であった。

著者らは、束$E$とその捩った双対のCastelnuovo–Mumford正則度を同時に抑えると、多様体のChern数に制限が生じることを示す。弱Ulrich性を両方の1-regular性で特徴づけることで、明示的な非存在条件へつなぐ。

さらに曲面の既知の構成にこの障害を適用し、任意の次元2以上で弱Ulrich束を持たない偏極多様体を得る。十分に豊富な別の偏極へ取り替えた場合の存在問題は、Introductionで残る問題として区別されている。

## 背景と問題設定

$X\subset\mathbb P^N$を滑らかな$n$次元射影多様体、$H$を超平面因子とする。弱Ulrich束の条件は、$E$と$E^\vee(K\_X+(n+1)H)$がともに1-regularであることと同値である。通常のUlrich束より許されるコホモロジー表が広いため、従来の非存在不等式をそのまま使うだけでは足りない。

## 主結果

### 二つの正則度からの数値的障害（Theorem 1）

$E$が$a$-regularで、$E^\vee(K\_X+(n+1)H)$が$b$-regularなら$a+b\geq0$となる。Introductionに掲げられた主要な数値的制約は、Chern数が現れる$n\geq2$では

$$
\bigl(n-2+3(2a+2b+1)^2\bigr)H^n\geq (K\_X^2-2c\_2(X))\cdot H^{n-2}
$$

である。束自身のChern類を残すのでなく、多様体と偏極の数値だけで束の存在を阻む点が重要である。

### 弱Ulrich束の非存在（Corollary 1）

滑らかな複素射影多様体で$n\geq2$とし、

$$
(n+73)H^n<(K\_X^2-2c\_2(X))\cdot H^{n-2}
$$

が成り立てば、$(X,H)$には弱Ulrich束が存在しない。係数$73$は$a=b=1$を上の不等式に代入して得られる。この非存在は、次元2までの逐次的な滑らかな超平面切断にも引き継がれる。

### 全次元の非存在例（Theorem 2）

Hesse配置に付随する指数$k$のHirzebruch–Kummer被覆の極小解消$Y\_k$と、引用文献の記号による偏極$L\_k=4A\_k-E\_k$を取る。$k\geq8$なら$(Y\_k,L\_k)$は弱Ulrich束を持たない。

さらに$n\geq3$で、滑らかな既約な$(n-2)$次元多様体$Z$と非常に豊富な線束$H\_Z$から

$$
X=Y\_k\times Z,\qquad H=L\_k\boxtimes H\_Z
$$

を作ると、十分大きい$k$で$(X,H)$、その滑らかな超曲面切断、さらに次元2までの逐次超平面切断に弱Ulrich束は存在しない。超曲面切断を用いることで、単なる非自明な積と同型でない例も得られるとIntroductionは説明する。

## 証明の見取り図

Introductionが示す経路は、弱Ulrich性を正則度に言い換え、一般の正則度に対する数値的障害を適用し、その障害を満たす既知の曲面を高次元化するというものである。数値的障害そのものの証明の詳細は後続節にあり、本記事では再構成しない。正標数では存在問題について異なる肯定的結果が紹介されており、複素数上の非存在例と区別する必要がある。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.36231)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.36231v1) — Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1、Corollary 1、Theorem 2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.36231v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
