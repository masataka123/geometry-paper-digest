---
layout: paper
title: On the Hodge Extension of Local Kähler Forms
title_ja: Stein多様体上の局所Kähler形式のHodge延長
authors: Rasul Shafikov
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: 'Let $X$ be a Stein manifold, and let $K=\{h\le0\}$ be a compact sublevel set of a strictly plurisubharmonic function $h$ defined near $K$. It is known that $K$ is meromorphically convex in $X$ if and only if $dd^ch$ extends to a Hodge form on $X$. We show that if $H_2(X,\mathbb Z)$ is the direct sum of a free abelian group and a torsion group, for example if it is finitely generated, then any extension of $dd^ch$ to a K\"ahler form on $X$ can be modified, after replacing $h$ by a positive multiple, into a Hodge form. Thus meromorphic convexity of $K$ is equivalent to the extendability of $dd^ch$ as a K\"ahler form. We also show that the topological assumption cannot be dropped: we construct a Stein manifold $X$ of dimension $6$ with $H_2(X,\mathbb Z)\cong\mathbb Q$, a sublevel set $K$ as above that is not meromorphically convex although $dd^ch$ extends to a K\"ahler form, and a totally real torus in $K$ that is isotropic for a K\"ahler form but is not meromorphically convex.
  This shows that the Hodge condition in Guedj''s characterization of meromorphically convex totally real submanifolds cannot be weakened to a K\"ahler condition, and gives counterexamples to two criteria stated by Cieliebak and Eliashberg.'
topic: several-complex-variables
tags:
- stein-geometry
- positivity
- complex-analytic-spaces
arxiv_id: 2610.38055v1
arxiv_url: https://arxiv.org/abs/2610.38055
arxiv_submitted: '2026-10-27'
arxiv_updated: '2026-10-27'
summary: Stein多様体上の局所Kähler形式を、大域的な整数周期のKähler形式へ延長できるかを調べる。第二ホモロジー群が自由群とtorsion群の直和なら正の整数倍を取ることでHodge延長が得られる一方、この位相条件を外すと有理型凸性との同値が壊れる具体例を構成する。
abstract_en: 'Let $X$ be a Stein manifold, and let $K=\{h\le0\}$ be a compact sublevel set of a strictly plurisubharmonic function $h$ defined near $K$. It is known that $K$ is meromorphically convex in $X$ if and only if $dd^ch$ extends to a Hodge form on $X$. We show that if $H_2(X,\mathbb Z)$ is the direct sum of a free abelian group and a torsion group, for example if it is finitely generated, then any extension of $dd^ch$ to a K\"ahler form on $X$ can be modified, after replacing $h$ by a positive multiple, into a Hodge form. Thus meromorphic convexity of $K$ is equivalent to the extendability of $dd^ch$ as a K\"ahler form. We also show that the topological assumption cannot be dropped: we construct a Stein manifold $X$ of dimension $6$ with $H_2(X,\mathbb Z)\cong\mathbb Q$, a sublevel set $K$ as above that is not meromorphically convex although $dd^ch$ extends to a K\"ahler form, and a totally real torus in $K$ that is isotropic for a K\"ahler form but is not meromorphically convex.
  This shows that the Hodge condition in Guedj''s characterization of meromorphically convex totally real submanifolds cannot be weakened to a K\"ahler condition, and gives counterexamples to two criteria stated by Cieliebak and Eliashberg.'
summary_en: ''
abstract_ja: Stein多様体Xのコンパクト集合Kを、近傍で定義された強多重劣調和関数hの零以下の部分集合とする。H₂(X,ℤ)が自由アーベル群とtorsion群の直和なら、ddᶜhの大域Kähler延長を、hの正の整数倍への置き換えの後にHodge形式へ修正できることを示す。これによりKの有理型凸性とKähler延長可能性が同値になる。対照的に、第二ホモロジー群がℚである複素次元6のStein多様体上で、Kähler延長が存在してもKは有理型凸でない例と、Kähler形式に関して等方的だが有理型凸でない全実トーラスを構成する。
abstract_source_url: https://arxiv.org/abs/2610.38055
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.38055v1](https://arxiv.org/abs/2610.38055)
- **著者:** Rasul Shafikov
- **初回投稿日:** 2026-10-27
- **最終更新日:** 2026-10-27
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

Stein多様体上の有理型凸性を、局所的に与えた強多重劣調和関数のLevi形式の延長で判定したい、という問題を扱う。既知の判定は整数周期を持つHodge形式への延長を要求するが、単なるKähler形式への延長で十分かどうかには位相が関与する。

本論文は、第二ホモロジー群が自由アーベル群とtorsion群の直和に分解されるなら、正の整数倍を取ることでKähler延長をHodge延長へ修正できると示す。この仮定は有限生成の場合を含み、すべてのStein曲面でも成り立つ。

一方で、一般のStein多様体では仮定を除けない。著者は第二ホモロジー群が有理数群になる例を使い、Kähler延長と有理型凸性、また等方的な全実部分多様体と有理型凸性の間に隔たりを作る。

## 背景と問題設定

Stein多様体$X$のコンパクト集合の有理型凸包は、$X$の複素超曲面によって点を分離することで定まる。Hodge形式とは、そのコホモロジー類が$H^2(X,\mathbb Z)\to H^2(X,\mathbb R)$の像に入るKähler形式、すなわち整数周期を持つ形式である。

$U\subset X$上の強多重劣調和関数$h$で$K=\lbrace h\le0\rbrace\Subset U$を考える。「延長」は$K$のある近傍で$dd^ch$と一致する大域形式を意味する。正の倍数に変えても$K$自体は変わらない。

## 主結果

### 位相条件のもとでのHodge延長（Theorem 1）

$$
H\_2(X,\mathbb Z)\simeq F\oplus T
$$

で、$F$が自由アーベル群、$T$がtorsion群であるとする。$dd^ch$が$X$上のKähler形式へ延長できれば、ある正整数$N$について$dd^c(Nh)$がHodge形式へ延長できる。したがって$K$は有理型凸となる。$F$は無限階数でもよい。

既知のHodge延長による判定と合わせると、この位相条件のもとでは、正の倍数を許して有理型凸性とKähler延長可能性を同値に扱える。Stein曲面は2次元CW複体のホモトピー型を持つため第二ホモロジー群が自由となり、この定理が適用できる。

### 一般のStein多様体での反例（Theorem 2）

複素次元6で$H\_2(X,\mathbb Z)\simeq\mathbb Q$となるStein多様体と、上記の$K$、全実トーラス$\Lambda\subset\operatorname{int}K$が存在する。$dd^ch$はKähler形式$\omega$へ延長し、$\omega|\_\Lambda=0$であるにもかかわらず、$K$も$\Lambda$も有理型凸ではない。

しかも、任意の$\lambda>0$に対し$dd^c(\lambda h)$を延長するKähler形式$\Omega$は

$$
[\Omega]\ne0\quad\text{in }H^2(X,\mathbb R)
$$

を満たす。この例では整数コホモロジーから来る実類は零だけなので、いかなる正整数倍でもHodge延長はできない。$\Lambda$の有理型凸包には、境界が$\Lambda$にあるが$K$からはみ出す正則annulusが含まれる。

IntroductionはHulekの領域を用いた複素次元3での同様の構成も説明し、Stein曲面では成立する結果との対比から次元3が最適であると述べる。

## 証明の見取り図

反例の位相的な要点は、実周期は非零でも整数周期から来る類が存在しない状況を作ることである。Introductionでは、適切なホモロジーを持つStein領域$Y$に8の字曲線を配置し、$X=Y\times\mathbb C^\ast $上で、その上に半径の異なる円を載せた全実トーラスを構成する。

局所ポテンシャルと大域Kähler形式は、多重劣調和関数の明示式、cutoffによる貼り合わせ、交点付近の多重調和補正から作る。これにより解析的延長と周期の位相的障害を同じ例の中で両立させる。一般定理の証明の詳細はIntroductionだけから再構成しない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.38055)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.38055v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems 1, 2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.38055v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
