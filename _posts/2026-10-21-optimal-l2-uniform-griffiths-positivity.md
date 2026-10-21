---
layout: paper
title: From the Optimal $L^2$-Estimates \((p,n)\) and \((n,p)\)-Forms to Uniform Griffiths \(p\)-Positivity via Convolution and Restriction
title_ja: 最適L²評価から一様Griffiths部分正値性へ
authors: Zhuo Liu, Xujun Zhang
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: We prove that the optimal \(L^2\)-estimate property for \((p,n)\)-forms is preserved under standard convolution regularization. As an application, we show that a singular Hermitian metric satisfying the optimal \(L^2\)-estimate property for \((p,n)\)-forms is uniform Griffiths \(p\)-positive. By establishing the restriction property, we prove that a singular Hermitian metric satisfying the optimal \(L^2\)-estimate property for \((n,p)\)-forms is also uniform Griffiths \(p\)-positive.
topic: several-complex-variables
tags:
- positivity
- vector-bundles-sheaves
- l2-methods
- pluripotential-theory
- stein-geometry
arxiv_id: 2610.28236v1
arxiv_url: https://arxiv.org/abs/2610.28236
arxiv_submitted: '2026-10-20'
arxiv_updated: '2026-10-20'
summary: 特異Hermitian計量の最適L²評価が幾何学的な部分正値性を導くかを調べる。(p,n)型では畳み込みによる滑らかな近似を、(n,p)型では複素部分空間への制限を用い、半連続性や連接性などの仮定の下で一様Griffiths部分正値性を得る。
abstract_en: ''
summary_en: For a nonsmooth bundle metric, curvature cannot always be read from differentiating its coefficients. This work instead starts from sharp solvability estimates for the Dolbeault equation. Two mechanisms, regularization and restriction, turn these analytic conditions into partial positivity statements. The precise conclusions depend on the bidegree and on semicontinuity and coherence hypotheses.
abstract_ja: 特異Hermitian計量に対する最適L²評価と一様Griffithsのp正値性の関係を扱う。(p,n)型の評価が畳み込み正則化で保存されることから、滑らかなdual Nakano部分半正値計量による近似を得る。(n,p)型ではp次元複素部分空間への制限を組み合わせる。Introductionの定理では、双対ノルムの強い上半連続性や乗数部分加群層の連接性など、場合に応じた追加仮定が置かれる。
abstract_source_url: https://arxiv.org/abs/2610.28236
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.28236v1](https://arxiv.org/abs/2610.28236)
- **著者:** Zhuo Liu, Xujun Zhang
- **初回投稿日:** 2026-10-20
- **最終更新日:** 2026-10-20
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかなHermitian計量の正値性は曲率で表せるが、特異計量では微分が扱えないことがある。そこで$\bar\partial$方程式の最適L²評価を、曲率正値性の代わりの定義として使う逆向きのL²理論が発展してきた。本論文は、その解析的条件が部分的な幾何学的正値性を本当に保証するかを問う。

$(p,n)$型では、評価条件を保存する畳み込み正則化から滑らかなdual Nakano部分半正値計量の増大近似を得る。一方、$(n,p)$型では$p$次元複素部分空間への制限を使う。これらにより、半連続性などの条件の下で一様Griffithsの$p$正値性・半正値性を導く。

「正の方向がいくつか存在する」という従来の弱い部分正値性と、任意の$p$方向を統一的に扱う条件を区別することが重要である。また、特異計量に対する結論をAbstractの一文だけから無条件に読むことはできない。Introductionでは、双対ノルムの強い上半連続性、計量の下半連続性、乗数部分加群層の連接性などが定理ごとに指定される。

## 背景と問題設定

$D\subset\mathbb C^n$上の自明束$E=D\times\mathbb C^r$と特異Hermitian計量$h$を考える。特異計量は可測な半正定値形式で、$0<\det h<\infty$がほとんど至る所で成り立つものとする。

Definition 1.1の$(p,n)$型の最適評価とは、任意の滑らかな狭義$p$-多重劣調和重み$\varphi$と、右辺が有限な$\bar\partial$閉形式$f$に対し、$\bar\partial u=f$の解で

$$
\int\_D|u|\_h^2e^{-\varphi}dV\_{\omega\_e}\le\int\_D\langle B\_{\omega\_e,\varphi}^{-1}f,f\rangle\_h e^{-\varphi}dV\_{\omega\_e},\qquad B\_{\omega\_e,\varphi}=[\sqrt{-1}\partial\bar\partial\varphi\otimes\operatorname{Id}\_E,\Lambda\_{\omega\_e}]
$$

を満たすものが存在するという条件である。$(n,p)$型も同様に定義する。線束の一様条件は、曲率の任意の$p$個の固有値の和が非負であることに対応する。

## 主結果

### 滑らかなdual Nakano計量による近似（Theorems 1.2, 1.3）

$(p,n)$型の最適評価を満たし、任意の局所正則双対切断$s$について$|s|\_{h^*}^2$が上半連続なら、任意の$U\Subset D$上で滑らかなdual Nakano $p$-半正値計量の増大列$h\_k$が存在し、$h\_k^*\to h^*$が$L^1(U)$で成り立つ。

Theorem 1.3は定数正定値Hermitian行列$a$から定まる平坦Kähler形式$\omega\_a$の場合を扱い、$h^*$の局所可積分性を仮定する。増大極限は$h$とほとんど至る所で一致する代表を与える。点ごとの代表と零集合を除く一致を区別している。

### Griffiths正値性への帰結（Corollaries 1.5, 1.6）

双対切断ノルムの**強い**上半連続性の下で、$\omega\_a$に関するdual Nakano $p$-半正値性から、論文のいう一様Griffiths $p$-正値性が従う。さらにすべての定数正定値行列$a$について仮定が成り立つなら、通常のGriffiths半正値性を得る。ここで「すべての$a$」という条件を一つの背景計量での条件へ弱めてはいけない。

### 最上次数による特徴づけ（Theorem 1.7）

$D\Subset\mathbb C^n$が擬凸で、すべての局所正則双対切断のノルムが強く上半連続なら、$h$のGriffiths半正値性は、**すべてのKähler計量に関する**$(n,n)$型の最適L²評価と同値である。

### 制限を用いる$(n,p)$型の結果（Theorem 1.8）

$h$が下半連続、双対切断ノルムが強く上半連続、乗数部分加群層$E(h)$が連接であり、$(D,\omega\_e;E,h)$が$(n,p)$型の最適評価を満たすなら、$h$は一様Griffiths $p$-半正値である。連接性はこの定理の明示的な仮定であり、すべての特異計量で自動的に満たされるとして省略できない。

### 領域と重みの逆特徴づけ（Theorem 1.9）

$D=\operatorname{int}\overline D$を満たす領域と強く上半連続な重み$\phi$を考える。任意の滑らかな狭義多重劣調和重み・任意のKähler計量に関して$(n,1)$型の最適L²可解性が成り立つなら、$D$は擬凸、$\phi$は多重劣調和となる。先行結果の$C^2$正則性を緩める帰結である。

## 証明の見取り図

Section 3では畳み込みが$(p,n)$型の最適評価を保つことを示し、滑らかな場合の曲率による特徴づけへ接続する。Section 4では$(n,p)$型の評価を$p$次元複素部分空間へ制限できることを確立し、前半の正値性結果と組み合わせる。Introductionが強調するのは、局所Stein部分領域すべてでの可解性を初めから要求する枠組みとは異なり、自明束上の大域可解性と$p$-多重劣調和の試験重みから議論する点である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.28236)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.28236v1) — Section 1, pp. 1–4（Section 2直前まで）。
- **Introduction中で言及された主要結果:** Definition 1.1、Theorems 1.2, 1.3, 1.7, 1.8, 1.9、Corollaries 1.5, 1.6。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.28236v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
