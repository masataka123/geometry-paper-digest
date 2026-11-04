---
layout: paper
title: From almost smooth spaces to RCD spaces
title_ja: ほとんど滑らかな空間のRCD条件を局所解析で特徴づける
authors: Shouhei Honda, Song Sun
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.MG
arxiv_abstract: We provide various characterizations for a given almost smooth space to be an RCD space, in terms of a local volume doubling and a local Poincar\'e inequality. Applications include a characterization of Einstein $4$-orbifolds.
topic: differential-geometry
tags:
- metric-limits
- curvature
arxiv_id: 2502.20998v2
arxiv_url: https://arxiv.org/abs/2502.20998
arxiv_submitted: '2025-02-28'
arxiv_updated: '2025-11-22'
summary: 特異集合の外で滑らかな距離測度空間がRCD空間になる条件を、局所的な倍加性・Poincaré不等式と調和関数の評価で特徴づける。特異集合に体積的な余次元4条件を課すと、調和関数のLipschitz評価を独立に仮定する必要がなくなる。
abstract_en: ''
summary_en: The work asks when Ricci lower bounds on the regular part control a singular metric completion. It formulates criteria using volume and Poincaré estimates that are uniform in the centers of balls. Harmonic gradient control is an essential extra ingredient in the general case. A stronger size condition on the singular locus allows that ingredient to be proved, extending the characterization to noncompact weighted spaces.
abstract_ja: 完備な長さ空間で、零2容量の特異集合を除いて重み付きRiemann多様体となる空間を扱う。正則部分のBakry–Émery Ricci下界に加え、中心に一様な局所倍加性・Poincaré不等式、Sobolev-to-Lipschitz性、調和関数の定量的Lipschitz評価を課すことがRCD条件と同値になる。特異集合の近傍体積が余次元4に対応する評価を満たす場合、最後の調和関数の条件を導ける。結果は非コンパクト・重み付きの設定も含み、4次元Einstein軌道体の特徴づけに応用される。
abstract_source_url: https://arxiv.org/abs/2502.20998
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2502.20998v2](https://arxiv.org/abs/2502.20998)
- **著者:** Shouhei Honda, Song Sun
- **初回投稿日:** 2025-02-28
- **最終更新日:** 2025-11-22
- **主分類・副分類:** math.DG（主分類）; math.MG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

正則部分でRicci曲率が下から有界でも、その距離完備化がRCD空間になるとは限らない。RCD条件は特異点を含めた空間全体で曲率と次元を制御するため、特異集合を横断する解析が必要となる。本論文はそのための局所的な条件を与える。

対象は、零2容量の閉集合を除いて重み付きRiemann多様体となる、ほとんど滑らかな空間である。局所倍加性とPoincaré不等式に、Sobolev-to-Lipschitz性および調和関数の定量的Lipschitz評価を組み合わせると、正則部分のBakry–Émery Ricci下界を空間全体のRCD条件へ移せる。

さらに、特異集合の近傍体積に余次元4の評価があれば、調和関数のLipschitz性を導出できる。結論はコンパクト空間に限定されず、重み付き・非コンパクトな場合にも適用される。曲率下界だけでなく、特異集合の大きさと空間全体の関数論の役割を切り分ける結果である。

## 背景と問題設定

$X=(X,d\_X,m\_X)$ を完備な距離測度空間とし、各開球の測度は正かつ有限とする。閉集合 $S$ が零2容量を持ち、$\mathcal R=X\setminus S$ が局所的に $n$ 次元重み付きRiemann多様体と距離測度の意味で同型なら、$n$ 次元のalmost smooth空間と呼ぶ。

本論文のPI条件は一様局所的な倍加性と $(1,2)$-Poincaré不等式である。例えば

$$
m\_X(B\_{2r}(x))\leq C m\_X(B\_r(x))
$$

を要求する。定数は半径の上限には依存してよいが、球の中心には依存しない。序論は、適切な固有長さ空間ではPoincaré条件をNeumann固有値の $1/(Cr^2)$ という下界で表せると説明する。

SLはSobolev-to-Lipschitz性を表す。QLは、球 $B$ 上の調和関数 $h$ に対し、半径を半分にした同心球で

$$
|\nabla h|\leq\frac{C}{r\thinspace m\_X(B)}\int\_B|h|\thinspace dm\_X
$$

という定量的な評価を要求する条件である。

## 主結果

### 一般のalmost smooth空間の特徴づけ（Theorem 1.1）

$X$ が $n$ 次元almost smoothな長さ空間であるとする。任意の $K\in\mathbb R$ と有限の $N\in[n,\infty)$ について、次は同値である。

- $X$ は $\operatorname{RCD}(K,N)$ 空間である。
- $X$ はPI、SL、QLを満たし、正則部分の $N$-Bakry–Émery Ricciテンソルは $K$ 以上である。

新しい方向は後者から前者を導くことである。大きな周長の円を底とする錐は、頂点以外で平坦かつPIであってもRCDではない。したがって一般の場合にQLを単に削除することはできない。

### 余次元4条件のもとでQLを導く（Theorem 1.2）

上の設定で、すべての開球 $B$ について

$$
\limsup\_{\varepsilon\to0}\varepsilon^{-4}
 m\_X\bigl(B\_\varepsilon(S\cap B)\bigr)<\infty
$$

を仮定する。$B\_\varepsilon(A)$ は集合 $A$ の開 $\varepsilon$-近傍である。この体積的な条件のもとでは、

$$
X\text{ が }\operatorname{RCD}(K,N)
\quad\Longleftrightarrow\quad
\text{PI、SL、および正則部分で }\operatorname{Ric}\_N\geq K
$$

となる。単なる形式的な次元の呼称ではなく、明示した近傍体積の評価が仮定である。QLは結論へ至る途中で証明される。

序論は、この結果を4次元Einstein軌道体の特徴づけに応用すると述べる。またalmost RCD空間への非滑らかな一般化も紹介するが、その完全な仮定はIntroductionだけでは提示されていないため、ここでは主定理二つと区別する。

## 証明の見取り図

PIとQLからPoisson方程式の解および熱核の局所Lipschitz評価を得て、良い切断関数を作る。局所Bakry–Émery条件を特異集合を越えて示し、局所から大域への定理で全体の条件へ移す。SLなどと合わせてRCD性を導く。

余次元4の場合は、PIが与える調和関数のHölder性と正則部分の勾配評価から、ある $0<\gamma<1$ について

$$
|\nabla h|(x)\leq\frac{C}{d\_X(x,S)^{1-\gamma}}
$$

を得る。近傍体積の評価とBochner不等式を用いて、$|\nabla h|^2$ が特異集合を越えて局所的に $H^{1,2}$ に属することを示す。再びBochner不等式を適用し、Moser反復によって勾配の局所有界性、すなわちQLを回復する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2502.20998)
- **Introduction:** [PDF](https://arxiv.org/pdf/2502.20998v2) — Section 1, pp. 2–5
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2; equations (1.1)–(1.3)
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2502.20998v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
