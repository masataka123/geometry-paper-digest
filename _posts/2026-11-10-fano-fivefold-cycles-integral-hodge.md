---
layout: paper
title: Algebraic cycles on some Fano varieties with Hodge structure of level one and of Calabi-Yau type
title_ja: Fano五次元多様体のサイクルと4次二重被覆の整係数Hodge予想
authors: Pedro Montero, Iván Rosas-Soto
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We study Chow groups and étale motivic cohomology groups of smooth complete intersections with Hodge structures of level one, classified by Deligne and Rapoport, with particular attention to fivefolds. We extend these results to an étale motivic context and recover an analogous finite-dimensionality in the sense of Kimura. We then turn to quartic double fivefolds, which are Fano fivefolds whose middle cohomology is numerically similar to that of a Calabi-Yau threefold. By means of cubic surfaces which are totally ramified along the branch locus, we prove the integral Hodge conjecture for all of them. We also show that the comparison maps between their Chow groups and étale Chow groups are isomorphisms except possibly in codimension three, where we describe the kernel and the cokernel in terms of Bloch-Ogus cohomology and, via a Sarkisov link, of the unramified cohomology of a cubic surface over the function field of $\mathbb{P}^3$.
topic: algebraic-geometry
tags:
- fano-varieties
- hodge-theory
- algebraic-cycles-enumerative
- birational-geometry
arxiv_id: 2509.12186v3
arxiv_url: https://arxiv.org/abs/2509.12186
arxiv_submitted: '2025-09-15'
arxiv_updated: '2026-11-07'
summary: 4次超曲面に分岐するP⁵の滑らかな二重被覆について整係数Hodge予想を証明する。通常のChow群とétale Chow群を比較し、Hodgeレベル1のFano多様体では同型を、4次二重五次元多様体では余次元3に残る差の記述を与える。
abstract_en: We study Chow groups and étale motivic cohomology groups of smooth complete intersections with Hodge structures of level one, classified by Deligne and Rapoport, with particular attention to fivefolds. We extend these results to an étale motivic context and recover an analogous finite-dimensionality in the sense of Kimura. We then turn to quartic double fivefolds, which are Fano fivefolds whose middle cohomology is numerically similar to that of a Calabi-Yau threefold. By means of cubic surfaces which are totally ramified along the branch locus, we prove the integral Hodge conjecture for all of them. We also show that the comparison maps between their Chow groups and étale Chow groups are isomorphisms except possibly in codimension three, where we describe the kernel and the cokernel in terms of Bloch-Ogus cohomology and, via a Sarkisov link, of the unramified cohomology of a cubic surface over the function field of $\mathbb{P}^3$.
summary_en: ''
abstract_ja: レベル1のHodge構造を持つ完全交叉のChow群とétaleモチーフ的コホモロジーを調べ、モチーフの有限次元性にも議論を広げる。Calabi–Yau型の中間コホモロジーを持つ4次二重五次元多様体について、分岐因子に全分岐する3次曲面を使って整係数Hodge予想を示す。Chow群の比較写像は余次元3以外で同型となり、余次元3の核と余核をBloch–Ogusコホモロジーと非分岐コホモロジーで記述する。
abstract_source_url: https://arxiv.org/abs/2509.12186
license_name: CC0 1.0 Universal
license_url: http://creativecommons.org/publicdomain/zero/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2509.12186v3](https://arxiv.org/abs/2509.12186)
- **著者:** Pedro Montero, Iván Rosas-Soto
- **初回投稿日:** 2025-09-15
- **最終更新日:** 2026-11-07
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [CC0 1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)

## 要約

有理係数で代数的なHodge類であっても、その整係数の生成元が代数的サイクルで表せるとは限らない。本論文が扱う4次二重五次元多様体では、この違いが次数6のコホモロジーに現れる。

分岐因子を引き戻すだけでは偶数倍の類しか得られないところに、適切な3次曲面を持ち込んで奇数倍の類を構成する。これにより、滑らかな4次超曲面に分岐するすべての二重被覆で整係数Hodge予想を得る。

もう一つの軸は、通常のChow群とétale Chow群の比較である。レベル1のHodge構造を持ついくつかのFano多様体では差が消える一方、Calabi–Yau型の例では余次元3に差が残り得る。整係数Hodge予想の成立と、両Chow群の全面的な一致を区別している。

## 背景と問題設定

比較写像を

$$
\kappa^i:\operatorname{CH}^i(X)\longrightarrow\operatorname{CH}\_{\mathrm{\acute et}}^i(X)
$$

と書く。後者はétaleモチーフ的コホモロジーによるChow群であり、$\kappa^i$は有理係数化すると同型になる。整数係数での差は、Hodge類や非分岐コホモロジーと結び付く。

$X\to\mathbb P^5$が滑らかな4次超曲面に分岐する二重被覆なら、$X$は次数2のdel Pezzo五次元多様体で、$h^{5,0}=0$、$h^{4,1}=1$、$h^{3,2}=90$である。「Calabi–Yau型」はこの中間Hodge構造の型を指し、$X$自体がCalabi–Yau多様体だという意味ではない。

## 主結果

### 主定理1：整係数Hodge予想（Theorem 1.1）

$f:X\to\mathbb P^5$を、滑らかな4次超曲面$B$に分岐する滑らかな二重被覆とする。このとき$X$の整係数Hodge類はすべて代数的である。

主な難所は

$$
H^6(X,\mathbb Z)=\mathbb Z\beta,\qquad
\beta=\frac12f^\ast H^3
$$

の生成元である。$\mathbb P^5$の平面の逆像は$2\beta$を与える。論文は$B\cap T=2C$となる3次曲面$T\subset\mathbb P^3\subset\mathbb P^5$を使い、$X$へ同型に持ち上がる曲面で$3\beta$を表す。したがって$\beta$も代数的となる。

### 主定理2：比較写像（Theorem 1.2）

$X$が滑らかな複素射影多様体で、Fano三次元多様体、3次五次元超曲面、$\mathbb P^7$の2つの二次曲面の完全交叉、$\mathbb P^8$の3つの二次曲面の完全交叉、またはGushel–Mukai三次元・五次元多様体のいずれかなら、すべての$i\geq0$について$\kappa^i$は同型である。

一方、上記の4次二重五次元多様体では$i\ne3$で同型となる。$\mathcal H^q(\mathbb Z)$を$U\mapsto H\_B^q(U,\mathbb Z)$に付随するZariski層とすると、

$$
\operatorname{coker}\kappa^3\simeq H^1(X,\mathcal H^4(\mathbb Z))\otimes\mathbb Q/\mathbb Z
$$

であり、$\ker\kappa^3$は

$$
H^4\_{\mathrm{nr}}(X,\mathbb Q/\mathbb Z(3))
\simeq H^1(X,\mathcal H^4(\mathbb Z))\_{\mathrm{tors}}
$$

の商である。さらに分岐因子に含まれない次数1の曲線からの射影とSarkisovリンクにより、$K=\mathbb C(\mathbb P^3)$上の滑らかな3次曲面$Y\_K$を得て、$\mathbb C(X)=K(Y\_K)$という関数体の表示と、対応する相対非分岐コホモロジーへの単射を得る。

この記述は$\kappa^3$の同型を無条件に主張しない。対象の相対非分岐コホモロジーが消える場合には、$\kappa^3$が同型であることと$H^1(X,\mathcal H^4(\mathbb Z))$が$\mathbb Q$-ベクトル空間であることが同値になる。

## 証明の見取り図

整係数Hodge予想では、全分岐する3次曲面のincidence多様体が4次超曲面のパラメータ空間を支配し、一般ファイバーが6次元になることを示す。さらに固有性の議論で、一般の分岐因子だけでなくすべての滑らかな分岐因子へ存在を広げる。

比較写像ではChow群、étaleモチーフ、対角分解の道具を用いる。余次元3の残る差にはBloch–Ogusコホモロジーを使い、次数1曲線からの射影の一般ファイバーである次数2 del Pezzo曲面から、$K$上の$(-1)$曲線を収縮して3次曲面へ移る。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2509.12186)
- **Introduction:** [PDF](https://arxiv.org/pdf/2509.12186v3) — Section 1, pp. 2–7
- **Introduction中で言及された主要結果:** Theorems 1.1–1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2509.12186v3
- **確認したライセンス:** [CC0 1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)
- **source\_scope:** Abstract and Introduction
