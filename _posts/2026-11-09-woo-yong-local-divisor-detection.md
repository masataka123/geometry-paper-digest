---
layout: paper
title: The Woo-Yong conjecture
title_ja: Woo–Yong予想と局所Weil因子類の検出
authors: Minghua Dou
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.AC
arxiv_abstract: 'We prove the Woo-Yong conjecture: the non-Gorenstein locus of a type A Schubert variety is the union of its generically non-Gorenstein maximal singular components. More strongly, at every scheme point, local Weil divisor classes are detected at the generic points of the maximal singular components containing that point. For arbitrary finite crystallographic type, the analogous localization map is injective on the torsion subgroup of the source local class group. This determines Cartier indices of locally $\mathbb{Q}$-Cartier divisors and gives the Woo-Yong criterion on the $\mathbb{Q}$-Gorenstein locus. A type D family shows the necessity of this hypothesis: the ambient variety is generically Gorenstein along its singular locus but not $\mathbb{Q}$-Gorenstein along a deeper nonempty locus. The type A proof and the counterexamples are geometric; the general torsion proof also uses bounded finite inputs with explicit certificates and reproducible reconstruction programs.'
topic: algebraic-geometry
tags:
- singularities
- vector-bundles-sheaves
arxiv_id: 2611.09237v1
arxiv_url: https://arxiv.org/abs/2611.09237
arxiv_submitted: '2026-11-06'
arxiv_updated: '2026-11-06'
summary: A型Schubert多様体の局所Weil類群が、特異 locusの極大成分の一般点で検出できることを示し、Woo–Yong予想を証明する。一般の有限結晶型ではtorsion類に対する同様の単射を得る一方、D型の反例でQ-Gorenstein仮定の必要性を示す。
abstract_en: ''
summary_en: Dou approaches the Woo–Yong conjecture through localization of Weil divisor classes. In type A, testing generic points of maximal singular components detects every local divisor obstruction. For other finite crystallographic types, the result is restricted to finite-order classes and controls Cartier indices. A family in type D exhibits the infinite-order canonical obstruction that prevents an unrestricted extension.
abstract_ja: A型の完全または部分旗多様体内のSchubert多様体について、各スキーム点の局所Weil類群から、その点を含む極大特異成分の一般点の類群への局所化写像が単射であることを示す。標準因子に適用すると非Gorenstein locusに関するWoo–Yong予想が従う。任意の有限結晶型ではtorsion部分に単射性が成り立ち、Q-Cartier因子の指数を一般点の指数の最小公倍数で計算できる。D型では一般点でGorensteinでも深い locusでQ-Gorensteinでない例を構成する。
abstract_source_url: https://arxiv.org/abs/2611.09237
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.09237v1](https://arxiv.org/abs/2611.09237)
- **著者:** Minghua Dou
- **初回投稿日:** 2026-11-06
- **最終更新日:** 2026-11-06
- **主分類・副分類:** math.AG（主分類）; math.AC
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Schubert多様体は正規かつCohen–Macaulayだが、標準層が直線束にならない場所を持ち得る。Woo–Yong予想は、A型におけるこの非Gorenstein locusを、極大特異成分の一般点での情報から完全に決められるかを問う。

本論文は標準因子だけでなく、すべてのWeil因子の局所類を検出する単射性を示す。これにより、全体としてGorensteinかを判定する従来の分類から、各点の局所的な障害の検出へ進む。

一般の有限結晶型では結論を有限位数の類に制限する必要がある。D型の明示的な族は、特異 locusの一般点では見えない無限位数の標準因子の障害を示し、Q-Gorenstein条件を外せないことを説明する。

## 背景と問題設定

$X\subset G/P$を複素数体上のSchubert多様体とし、特異 locusの既約成分全体を$\mathcal M(X)$、成分$Z$の一般点を$\eta\_Z$とする。問題となるのは$Z$自体の特異性ではなく、周囲の局所環$\mathcal O\_{X,\eta\_Z}$である。

各スキーム点$x$で局所化写像

$$
\rho\_x:\operatorname{Cl}(\mathcal O\_{X,x})\longrightarrow
\bigoplus\_{\substack{Z\in\mathcal M(X)\thinspace ;\thinspace x\in Z}}
\operatorname{Cl}(\mathcal O\_{X,\eta\_Z})
$$

が定まる。Weil因子の局所類が0であることは、その点でCartierであることに対応する。以下のlocusの等式は閉点に限らない集合としての等式であり、スキーム構造の一致を主張しない。

## 主結果

### 主定理1：A型での全因子類の検出（Theorem 1.2）

A型の完全または部分旗多様体内の$X$では、すべての$x$で$\rho\_x$が単射となる。したがって任意のWeil因子$D$について、その非Cartier locusは、一般点で$D$がCartierでない極大特異成分の合併に等しい。

$D=K\_X$とすると、一般点で非Gorensteinな極大特異成分の合併$B\_{\mathrm{bad}}(X)$を用いて

$$
\operatorname{NGor}(X)=B\_{\mathrm{bad}}(X)
$$

が得られ、Conjecture 1.1を証明する。この定理は無限位数の局所類も含む。

### 主定理2：一般の有限型でのtorsion検出（Theorem 1.3、Corollary 1.4）

有限結晶根系が可約でも、$\rho\_x$の定義域のtorsion部分への制限は単射である。$D$が$x$で$\mathbb Q$-Cartierなら、

$$
\operatorname{ind}\_x(D)=\operatorname{lcm}\_{Z\ni x}\operatorname{ind}\_{\eta\_Z}(D)
$$

となる。ここで$Z\in\mathcal M(X)$で、空集合の最小公倍数は1とする。特に$\mathbb Q$-Gorenstein locusでは一般点でのGorenstein性を検査すればよく、全体では

$$
\operatorname{NGor}(X)=\operatorname{NonQGor}(X)\cup B\_{\mathrm{bad}}(X)
$$

となる。有理係数にしてtorsionを消してしまう議論では、この単射性は得られない。

### 主定理3：D型の反例（Theorem 1.5）

各$r\geq k\geq3$について、次元$k(r-k+2)$のSchubert多様体$X\subset\operatorname{OG}(k,2r+4)$が存在し、特異 locusは既約で余次元3、一般点の横断特異点は通常の三次元nodeである。それでも

$$
\operatorname{NGor}(X)=\operatorname{NonQGor}(X)\simeq\operatorname{Gr}(k,r),
\qquad\operatorname{codim}\_X\operatorname{NGor}(X)=2k
$$

となる。この族では$B\_{\mathrm{bad}}(X)$が空であり、障害となる標準類は無限位数である。最小の$(r,k)=(3,3)$は6次元で、非Gorenstein点を一つ持つ。

## 証明の見取り図

A型では座標を一つ可逆化して、より小さいKazhdan–Lusztig sliceと$\mathbb G\_m$の実際の積を得る。階数1の行列式sliceの二つのrulingが因子係数の整数差を検出し、Nagata局所化と帰納法により単射性へ進む。

torsionの場合は別の仕組みを使い、strict local punctureの有限被覆を境界で検出し、Bruhat区間の位相と局所Lefschetz定理で比較する。Bott–Samelsonファイバー内の整サイクルの次数による評価も用いる。IntroductionはF₄型に有限証明書を使うことを述べるが、その計算プログラムを本記事では実行・検証していない。D型の構成はこれらと独立である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.09237)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.09237v1) — Section 1, pp. 8–11（Section 2開始前まで）
- **Introduction中で言及された主要結果:** Theorems 1.2, 1.3, 1.5; Corollary 1.4; Conjecture 1.1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.09237v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
