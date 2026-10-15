---
layout: paper
title: Every Gromov elliptic domain is meromorphically pseudoconvex
title_ja: Gromov楕円領域の有理型擬凸性とOka性との違い
authors: Yuta Kusakabe
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: 'We prove that every Gromov elliptic domain $\Omega$ in a complex manifold has the following property, which we call meromorphic pseudoconvexity: each boundary point has a neighborhood $V$ such that $\Omega\cap V$ becomes Stein after removing a set which is, locally in $\Omega\cap V$, the union of the polar sets of finitely many meromorphic functions on $\Omega\cap V$. Since meromorphic functions on Hartogs figures extend to their hulls, it follows that, for a domain $\Omega=\operatorname{int}\overline\Omega$ in a Stein manifold, Gromov ellipticity is equivalent to being Oka and Stein, and also to being Oka and admitting a complete K\"ahler metric. This complements a theorem of Matsumura and the author that every weakly pseudoconvex Oka manifold admitting a positive line bundle is elliptic. As applications, we show that the Oka manifolds $\mathbb C^n\setminus\overline{\mathbb B^n}$ and $\mathbb C^n\setminus\mathbb R^n$, $n\geq2$, are not elliptic, and that no proper domain
  with Lipschitz boundary in $\mathbb P^n$, $n\geq2$, is elliptic.'
topic: several-complex-variables
tags:
- oka-theory
- stein-geometry
- pluripotential-theory
arxiv_id: 2610.20574v1
arxiv_url: https://arxiv.org/abs/2610.20574
arxiv_submitted: '2026-10-14'
arxiv_updated: '2026-10-14'
summary: Gromov楕円な領域は、有理型関数の極集合を除けば境界近くでSteinとなるという有理型擬凸性を示す。Stein多様体内で閉包の内部と一致する領域では、楕円性はOka性とStein性の両立に同値となる。閉球の補集合など、Okaであっても楕円ではない領域をこの結果から得る。
abstract_en: ''
summary_en: A dominating spray imposes restrictions on the boundary of a domain that are not shared by all Oka manifolds. The paper isolates these restrictions using meromorphic functions and local Stein complements. On domains equal to the interior of their closure in a Stein manifold, the resulting criterion identifies ellipticity with the simultaneous Oka and Stein properties. It also provides obstructions to ellipticity for several familiar complements.
abstract_ja: 正則な支配的sprayをもつ領域について、局所的な極集合を除いた部分がSteinとなることを証明する。この有理型擬凸性は、Oka性だけからは従わないGromov楕円性の制約を表す。Stein多様体の中で閉包の内部と一致する領域では、楕円性、OkaかつSteinであること、Okaかつ完備Kähler計量をもつことが同値となる。これにより閉球や実部分空間の補集合が与えるOka非楕円例を扱う。
abstract_source_url: https://arxiv.org/abs/2610.20574
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.20574v1](https://arxiv.org/abs/2610.20574)
- **著者:** Yuta Kusakabe
- **初回投稿日:** 2026-10-14
- **最終更新日:** 2026-10-14
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Gromov楕円性は、正則ベクトル束上のsprayが各点の接空間を支配するという条件であり、Oka性を導く。逆向きは一般には成り立たない。本論文は、領域の境界から楕円性を制限する条件を取り出し、両者の違いを明確にする。

主定理は、楕円領域が有理型擬凸であることを述べる。これは普通の擬凸性そのものではなく、有理型関数の極からなる例外集合を局所的に除くとSteinになるという性質である。例外集合を許すことは、点を除いた複素空間のような楕円領域を扱うために必要となる。

Stein多様体内で領域が閉包の内部に一致するなら、この例外を伴う条件からStein性を導ける。その結果、楕円性はOka性とStein性の組合せに一致する。閉球の補集合や実部分空間の補集合について、Okaでありながら楕円でないことが従う。

## 背景と問題設定

Gromov楕円性を与えるのは、正則ベクトル束$E\to Y$上の写像$s:E\to Y$で、$s(0_y)=y$かつ$ds_{0_y}(E_y)=T_yY$となる支配的sprayである。Oka性が正則写像の柔軟性を表す一方、この一つの束とsprayによる支配は追加の幾何学的制約をもつ。

Definition 1.1では、領域$\Omega\subset Y$の各境界点の近傍$V$で、

$$
(\Omega\cap V)\setminus P\text{がStein}
$$

となり、$P$が局所的に$\Omega\cap V$上の有限個の有理型関数の極集合の合併であるとき、有理型擬凸と呼ぶ。極集合には不定点も含める。これは有理型関数による凸包を扱う「有理型凸性」とは別の概念である。

## 主結果

### 楕円性が与える有理型擬凸性（Theorem 1.2）

複素多様体内のすべてのGromov楕円領域は有理型擬凸である。$P$は純余次元1の閉解析部分集合であり、空集合も許す。$P$を空にできる場合には普通の擬凸性に戻るが、一般には極集合が必要となる。たとえば$\mathbb C^2\setminus\{0\}$は楕円であり、$1/z_1$の極集合を除けば擬凸になる。

### Stein領域での同値（Corollary 1.3）

Stein多様体$Y$内の領域$\Omega$が

$$
\Omega=\operatorname{int}\overline\Omega
$$

を満たすとする。このとき次の三条件は同値である。

- $\Omega$はGromov楕円である。
- $\Omega$はOkaかつSteinである。
- $\Omega$はOkaであり、完備Kähler計量をもつ。

閉包の内部に一致する仮定はLipschitz境界をもつ領域で成立するが、一般には省けない。$\mathbb C^2\setminus\{0\}$がその反例となる。また、Stein多様体内の任意の楕円領域が完備Kähler計量をもつかどうかはProblem 1.4として残される。

### Oka非楕円例と射影空間内の障害（Corollary 1.5）

$n\ge2$とする。非空コンパクト集合$K\subset\mathbb C^n$が

$$
K=\overline{\operatorname{int}K}
$$

を満たし、補集合が連結なら、$\mathbb C^n\setminus K$はGromov楕円ではない。特に閉単位球の補集合$\mathbb C^n\setminus\overline{\mathbb B^n}$はOkaだが楕円ではない。

同じく$\mathbb C^n\setminus\mathbb R^n$もOka非楕円である。また、Lipschitz境界をもつ射影空間の真の領域$\Omega\subsetneq\mathbb P^n$はGromov楕円にはならない。これらは単にsprayの構成法が未発見という主張ではなく、楕円性そのものへの障害である。

## 証明の見取り図

Introductionはsprayの微分の局所的な正則右逆を使い、写像を

$$
s(\sigma_y\xi)=y+\xi+\sum_{|\alpha|\ge2}A_\alpha(y)\xi^\alpha
$$

と展開する。係数の成長から多重劣調和関数を作り、境界までの距離を指数関数的に制御する。右逆は一意でも大域的でもないため、Taylor係数へのアフィン条件によって有限個を選ぶことが重要となる。

選んだ係数の対称式は有理型となり、対応する多重劣調和関数の最大値を、その極集合の外へ延長する。これが有理型擬凸性を与える。その後はLeviの有理型延長定理とHartogs図形を用い、閉包の内部に一致する条件などから各系を導くという方針である。

## 原論文との対応

- **Abstractページ:** [Every Gromov elliptic domain is meromorphically pseudoconvex](https://arxiv.org/abs/2610.20574)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.20574v1) — Section 1, pp. 1–3（Section 2の開始前まで）
- **Introduction中で言及された主要結果:** Definition 1.1, Theorem 1.2, Corollaries 1.3 and 1.5; Problem 1.4は未解決
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.20574v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
