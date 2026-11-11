---
layout: paper
title: Gromov-Hausdorff limits of Kähler manifolds with Ricci curvature bounded below
title_ja: Ricci曲率下界のもとでのKähler多様体の射影的極限
authors: Gang Liu, Gábor Székelyhidi
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AG
- math.CV
arxiv_abstract: We show that non-collapsed Gromov-Hausdorff limits of polarized Kahler manifolds, with Ricci curvature bounded below, are normal projective varieties, and the metric singularities of the limit space are precisely given by a countable union of analytic subvarieties. This extends a fundamental result of Donaldson-Sun, in which 2-sided Ricci curvature bounds were assumed. As a basic ingredient we show that, under lower Ricci curvature bounds, almost Euclidean balls in Kahler manifolds admit good holomorphic coordinates. Further applications are integral bounds for the scalar curvature on balls, and a rigidity theorem for Kahler manifolds with almost Euclidean volume growth.
topic: differential-geometry
tags:
- curvature
- metric-limits
- complex-analytic-spaces
- singularities
- noncompact-kahler-geometry
arxiv_id: 1804.08567v2
arxiv_url: https://arxiv.org/abs/1804.08567v2
arxiv_submitted: '2018-04-23'
arxiv_updated: '2020-05-19'
summary: 非崩壊な偏極Kähler多様体列について、Ricci曲率の下界と直径上界だけからGromov–Hausdorff極限を正規射影多様体として実現する。従来のRicci上界を除き、距離的特異集合が解析的部分多様体の可算和となることや、概Euclid領域での正則座標の存在も示す。
abstract_en: ''
summary_en: How much curvature control is needed for a metric limit to retain a projective algebraic structure? For polarized Kähler manifolds with a volume lower bound and a diameter upper bound, the paper removes the upper Ricci bound from the Donaldson–Sun framework. A local construction of holomorphic coordinates near almost Euclidean balls supports a uniform supply of global sections. The resulting algebraic model also constrains metric singularities, with additional consequences for scalar curvature and volume-growth rigidity.
abstract_ja: 一般の偏極を持つKähler多様体に対し、Ricci曲率を下からだけ制御しても、非崩壊な距離極限に射影代数構造が残ることを証明する。ほぼEuclid的な球に良い正則座標とKählerポテンシャルを作る局所定理が、部分C⁰評価の基礎となる。極限の距離的特異点には解析的な剛性があり、さらにスカラー曲率の積分評価や非コンパクト多様体の剛性を得る。
abstract_source_url: https://arxiv.org/abs/1804.08567v2
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:1804.08567v2](https://arxiv.org/abs/1804.08567v2)
- **著者:** Gang Liu, Gábor Székelyhidi
- **初回投稿日:** 2018-04-23
- **最終更新日:** 2020-05-19
- **主分類・副分類:** math.DG（主分類）; math.AG, math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler多様体を距離空間として極限へ近づけたとき、複素構造や射影代数構造がどこまで残るかは、解析と代数幾何を結ぶ問題である。Donaldson–Sunは、体積が潰れない偏極Kähler多様体列について、Ricci曲率の上下界のもとで極限が正規射影多様体となることを示した。

本論文はこの結果からRicci曲率の上界を取り除く。次元、体積の正の下界、直径の上界を固定し、Ricci曲率を下から制御すれば、ある一様な冪の偏極線束で各多様体を射影空間に埋め込み、その代数的極限として距離極限を実現できる。

距離的特異集合にも強い制約が得られる。それは解析的部分多様体の可算和であり、一般のRiemann多様体の距離極限で起こりうる複雑な特異集合とは異なる。ただし、Kähler–Einsteinの場合と違って、距離的特異集合と代数多様体としての特異集合が一致するとは限らない。

技術的な核は、ほぼEuclid的な球に良い正則座標を作る局所定理である。この結果は部分C⁰評価に使われるだけでなく、スカラー曲率の積分制御や、体積成長がEuclid空間に十分近い非コンパクトKähler多様体の一意化にも応用される。

## 背景と問題設定

複素次元$n$の偏極Kähler多様体$(M\_i,L\_i,\omega\_i)$を考える。Hermitian正則線束$L\_i$の曲率は$-\sqrt{-1}\omega\_i$であり、固定した正数$d,v$に対し

$$
\operatorname{Ric}(\omega\_i)>-\omega\_i,
\qquad\operatorname{vol}(M\_i)>v,
\qquad\operatorname{diam}(M\_i,\omega\_i)<d
$$

を仮定する。体積下界と直径上界を含むこれらの仮定が、非崩壊な極限を扱う枠組みを与える。偏極は反標準束に限定せず、一般の正の線束を許す。

## 主結果

### 主定理1：射影代数構造の保持（Theorem 1.1）

Gromov–Hausdorff極限$X$は、正規射影多様体に同相である。より具体的には、$n,d,v$だけに依存する$k\_1,N>0$があり、各$M\_i$は$L\_i^{k\_1}$の切断で$\mathbb P^N$の部分空間へ埋め込める。部分列と適切な射影変換を選ぶと、これらの射影多様体は$X$へ代数的にも収束する。

Ricci上界を使わずに一般の偏極を扱う点が新しい。Introductionでは、同じ一様な幾何条件のもとで現れるHilbert多項式が有限個となること、さらに微分同相型も有限個となることがCorollary 1.1として述べられている。

### 主定理2：部分C⁰評価（Theorem 1.2）

同じ$n,d,v$に依存する$k\_2,b>0$があり、任意の点$p\in M$に対して、$L^{k\_2}$の大域正則切断$s$を

$$
\Vert s\Vert \_{L^2}=1,\qquad |s(p)|>b
$$

となるよう選べる。これは各点を一様に検出する切断を確保する評価であり、計量から射影埋め込みへ移る要となる。反標準偏極に限らない点が、Introductionで強調される改善である。

### 主定理3：距離的特異集合の解析性（Theorem 1.3）

Euclid単位球の体積を$\omega\_{2n}$とし、

$$
\mathcal R\_\varepsilon=\left\lbrace p\in X:\lim\_{r\to0}r^{-2n}\operatorname{Vol}(B(p,r))>\omega\_{2n}-\varepsilon\right\rbrace ,
\qquad\mathcal R=\bigcap\_{\varepsilon>0}\mathcal R\_\varepsilon
$$

と置く。任意の$\varepsilon>0$について$X\setminus\mathcal R\_\varepsilon$は有限個の解析的部分多様体の和に含まれ、$X\setminus\mathcal R$は部分多様体の可算和に等しい。前者は包含、後者は等号という違いに注意が必要である。距離的正則集合$\mathcal R$が一般に開集合であるとは主張していない。

### 主定理4：概Euclid球の正則座標（Theorem 1.4）

次元に応じた十分小さい$\varepsilon>0$を取る。完備性を仮定しないKähler多様体の相対コンパクトな球$B(p,\varepsilon^{-1})$で

$$
\operatorname{Ric}(\omega)>-\varepsilon\omega,
\qquad d\_{GH}\bigl(B(p,\varepsilon^{-1}),B\_{\mathbb C^n}(0,\varepsilon^{-1})\bigr)<\varepsilon
$$

ならば、$B(p,1)$上に、その像への$\Psi(\varepsilon\mid n)$-Gromov–Hausdorff近似となる正則座標$F$が存在する。さらに

$$
\omega=\sqrt{-1}\partial\bar\partial\varphi,
\qquad |\varphi-r^2|<\Psi(\varepsilon\mid n)
$$

を満たすポテンシャルがある。ここで$r$は$p$からの距離であり、$\Psi$は$n$を固定して$\varepsilon\to0$とすると0へ近づく誤差である。

### スカラー曲率と無限遠の剛性への応用

Corollary 1.2は、Ricci下界のもとで単位球が十分Euclid的なら、半径$1/2$の球のスカラー曲率積分を任意に小さくできることを述べる。偏極と$\operatorname{vol}(B(p,1))>v$を仮定したProposition 1.1では、スカラー曲率$S$について

$$
\int\_{B(p,1)}S<C(n,v)
$$

を得る。またProposition 1.2は、完備非コンパクトKähler多様体で$\operatorname{Ric}\ge0$かつ

$$
\lim\_{r\to\infty}r^{-2n}\operatorname{vol}(B(p,r))\ge\omega\_{2n}-\varepsilon(n)
$$

ならば$M\simeq\mathbb C^n$が双正則に成り立つとする。単に体積成長が正であるという仮定まで弱めた結論ではない。

## 証明の見取り図

最初にTheorem 1.4の局所的な正則座標を構成する。その座標を使い、Donaldson–Sunの方法に沿って線束の高い冪の大域正則切断を作ることで、部分C⁰評価と射影埋め込みの定理へ進む。

その後、距離的特異性と複素解析的特異性の関係を調べ、Theorem 1.3を証明する。Introductionによれば、大域切断の議論ではCheeger–Jiang–Naberの評価を用いるが、付録にはChen–Donaldson–Sunの方法に従ってその結果に依存せず証明する道筋も用意されている。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/1804.08567v2)
- **Introduction:** [PDF](https://arxiv.org/pdf/1804.08567v2) — Section 1, pp. 1–4（Section 2より前）
- **Introduction中で言及された主要結果:** Theorems 1.1–1.4; Corollaries 1.1–1.2; Propositions 1.1–1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 1804.08567v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
