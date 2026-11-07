---
layout: paper
title: Log canonical singularities of plurisubharmonic functions
title_ja: 多重劣調和関数の対数標準特異点と非可積分部分空間の半正規性
authors: Dano Kim, János Kollár
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.AG
arxiv_abstract: A plurisubharmonic weight is \emph{log canonical} if it is at the critical point of turning non-integrable. Given a log canonical plurisubharmonic weight, we show that locally there always exists a log canonical `holomorphic' weight having the same non-integrable locus. The proof uses the theory of quasimonomial valuations developed by Jonsson-Musta\c{t}\u{a} and Xu, as well as the minimal model program over complex analytic spaces due to Fujino and Lyu-Murayama. As a consequence, we obtain that the non-integrable locus is seminormal.
topic: several-complex-variables
tags:
- singularities
- pluripotential-theory
- multiplier-ideals-extension
- complex-analytic-spaces
- minimal-model-program
arxiv_id: 2312.16140v3
arxiv_url: https://arxiv.org/abs/2312.16140
arxiv_submitted: '2023-12-26'
arxiv_updated: '2026-11-05'
summary: 対数標準なquasi-psh関数の乗数イデアルを、局所的に対数標準な解析的特異性をもつ関数で実現する。これにより非可積分部分空間の半正規性を導き、非代数的な特異性と対の特異点理論を結ぶ。
abstract_en: ''
summary_en: This paper asks how much algebraic singularity theory survives for general quasi-plurisubharmonic weights. Its local construction replaces a log canonical weight by a holomorphic logarithmic model without changing the multiplier ideal. This transfers seminormality statements to the associated non-integrable subspace. A key intermediate result controls discrepancies themselves along divisorial approximations, rather than only a normalized ratio.
abstract_ja: 複素多様体上の対数標準なquasi-psh関数について、同じ乗数イデアルを与える対数標準な解析的特異性の局所モデルを構成する。その結果、非可積分部分空間と、その成分・交差・和を繰り返して得られる空間は被約かつ半正規になる。証明の鍵は、非可積分部分空間の各成分を中心とする因子的付値で、対数食い違いそのものが零へ近づく列を得ることである。
abstract_source_url: https://arxiv.org/abs/2312.16140
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2312.16140v3](https://arxiv.org/abs/2312.16140)
- **著者:** Dano Kim, János Kollár
- **初回投稿日:** 2023-12-26
- **最終更新日:** 2026-11-05
- **主分類・副分類:** math.CV（主分類）; math.AG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

多重劣調和関数の特異性は、局所積分可能性を通じて乗数イデアルに記録される。しかし一般のquasi-psh関数は代数的な因子から生じるとは限らず、代数幾何の対数標準特異点について知られた構造定理を直接適用できない。

本論文は、対数標準という条件を保ちながら、同じ乗数イデアルをもつ解析的特異性の局所モデルへ置き換えられることを示す。特異性の大きさを上下からそろえることではなく、非可積分性を表すイデアルを正確に保つことが結論である。

この置き換えにより、非可積分部分空間は被約かつ半正規になる。その既約成分を取り、交差や和を繰り返して得られる部分空間にも同様の性質が成立する。さらに、一般のpsh特異性に対して対数標準中心を付値的に捉える方法を与える。

## 背景と問題設定

複素多様体 $X$ 上のquasi-psh関数 $\varphi$ に対し、乗数イデアル $\mathcal J(\varphi)$ は $|f|^2e^{-2\varphi}$ が局所可積分となる正則関数 $f$ からなる。$\mathcal J(\varphi)=\mathcal O\_X$ のときkltであり、全ての $\delta>0$ に対して $(1-\delta)\varphi$ がkltとなる条件が対数標準性である。

問題となる非可積分部分空間は

$$
W=\operatorname{Spec}\_X\bigl(\mathcal O\_X/\mathcal J(\varphi)\bigr)
$$

である。Demailly近似は解析的特異性を与えるが、乗数イデアルを保つための調整と対数標準性を保つための調整が一致しない。この二つを同時に実現することが主要な難点になる。

## 主結果

### 乗数イデアルを保つ対数標準モデル（Theorem 1.1）

$\varphi$ が至る所で対数標準なら、任意の点のあるStein近傍 $V$ 上に、正則関数 $g\_i$ と正数 $c\_i$ を用いた

$$
\psi=\sum\_i c\_i\log|g\_i|,\qquad
\mathcal J(\varphi)|\_V=\mathcal J(\psi)
$$

が存在し、$\psi$ も対数標準となる。単に非可積分集合が一致するだけでなく、イデアル自体が一致する点が重要である。一方、$\varphi$ と $\psi$ の特異性が大小関係をもつという結論は要求していない。

### 非可積分部分空間の半正規性（Corollary 1.2）

$W$ は被約かつ半正規である。また、その既約成分を取る操作、交差、和を繰り返して得られる空間も被約かつ半正規となる。これは解析的な可積分性の条件から、特異部分空間の貼り合わせ方に関する代数幾何的な制約が得られることを意味する。

### 食い違いが零に近づく因子列（Theorem 1.3）

$W$ の各既約成分 $Z$ について、中心が正確に $Z$ である $X$ 上の素因子の列 $G\_j$ が存在し、

$$
A(G\_j,X,\varphi)\longrightarrow0
$$

となる。既存の近似で現れる正規化された比の収束より強く、対数食い違いそのものを零へ近づける。

### 対数標準中心と近似（Definition 1.4、Corollary 1.5）

上のような因子列をもつ既約解析部分集合を、一般のquasi-psh関数の対数標準中心として捉える。この $Z$ に対し、Demailly近似 $\varphi\_m$ は

$$
\operatorname{mld}(Z,X,\varphi\_m)\longrightarrow0
$$

を満たす。近似した解析的特異性の側で中心が「ほぼ対数標準」であることが、最終的な局所モデル構成へつながる。

## 証明の見取り図

まず対数食い違いが零となるquasi-monomial付値を用い、それを因子的付値で近似することでTheorem 1.3の列を作る。次にDemailly近似に対する最小対数食い違いの制御を得て、解析的な極小モデル理論を利用しながら、同じ乗数イデアルを保つ対数標準なモデルへ調整する。

このモデルに対する既存の対数標準中心の構造理論から、半正規性の結論が従う。Introductionでは、特異なklt空間への拡張やDu Bois性は今後の方向として扱われており、本論文の証明済み結論と混同しない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2312.16140)
- **Introduction:** [PDF](https://arxiv.org/pdf/2312.16140v3) — Section 1, pp. 1–6（Section 2開始直前まで）
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.3; Corollaries 1.2, 1.5; Definition 1.4
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2312.16140v3
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
