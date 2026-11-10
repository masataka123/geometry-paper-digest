---
layout: paper
title: Gromov-Hausdorff limits of Kähler manifolds with Ricci curvature bounded below, II
title_ja: Ricci下界を持つKähler極限の接錐と正規アフィン多様体
authors: Gang Liu, Gábor Székelyhidi
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.CV
arxiv_abstract: We study non-collapsed Gromov-Hausdorff limits of K\"ahler manifolds with Ricci curvature bounded below. Our main result is that each tangent cone is homeomorphic to a normal affine variety. This extends a result of Donaldson-Sun, who considered non-collapsed limits of polarized K\"ahler manifolds with two-sided Ricci curvature bounds.
topic: differential-geometry
tags:
- metric-limits
- curvature
- noncompact-kahler-geometry
- l2-methods
- complex-analytic-spaces
arxiv_id: 1903.04390v2
arxiv_url: https://arxiv.org/abs/1903.04390v2
arxiv_submitted: '2019-03-11'
arxiv_updated: '2019-04-17'
summary: Ricci曲率の下界と非崩壊条件を満たす完備Kähler多様体列の極限では、すべての接錐が正規アフィン代数多様体と同相になる。偏極を仮定せずにこの代数的構造を得る一方、接錐の一意性までは証明しない。
abstract_en: ''
summary_en: The complex geometry of a metric limit remains visible even without a chosen polarization. Liu and Székelyhidi obtain an affine algebraic model for every tangent cone under non-collapsing and a Ricci lower bound. With an additional upper bound, they also compare the degrees of homogeneous holomorphic functions across different tangent cones at a point. Their argument constructs holomorphic functions using estimates on the singular cone itself.
abstract_ja: 完備Kähler多様体列に一様なRicci下界と単位球の体積下界を課し、その非崩壊Gromov–Hausdorff極限を調べる。極限の各接錐は正規アフィン代数多様体と同相で、適切な埋め込みの下で拡大縮小作用は線形トーラス作用へ延びる。偏極とRicci曲率の両側評価を仮定したDonaldson–Sunの結果を拡張する。
abstract_source_url: https://arxiv.org/abs/1903.04390v2
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:1903.04390v2](https://arxiv.org/abs/1903.04390v2)
- **著者:** Gang Liu, Gábor Székelyhidi
- **初回投稿日:** 2019-03-11
- **最終更新日:** 2019-04-17
- **主分類・副分類:** math.DG（主分類）; math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Ricci曲率に下界を持つ多様体列の極限には、一般に特異点が現れる。非崩壊の場合、その各点に距離錐としての接錐が存在するが、元の多様体がKählerであることを極限のどの構造に読み取れるかは別の問題である。

本論文は、接錐が単なる距離空間ではなく、正規アフィン代数多様体と同相になることを示す。さらに接錐の拡大縮小作用も代数的なトーラス作用と結び付く。元のKähler形式が線束の曲率であるという偏極の仮定は不要である。

Ricci曲率に両側の評価を加えると、同じ点の異なる接錐で正則スペクトルが一致し、体積比は代数的数になる。ただし著者らは接錐そのものの一意性を証明しておらず、極限空間全体に解析空間構造が入るという一般の主張とも区別している。

## 背景と問題設定

複素次元$n$の基点付き完備Kähler多様体列$(M\_i,\omega\_i,p\_i)$に対し

$$
\operatorname{Ric}(\omega\_i)>-\omega\_i,\qquad
\operatorname{Vol}(B(p\_i,1))>\nu>0
$$

を仮定し、基点付きGromov–Hausdorff極限を$(Z,d,p)$とする。体積下界は崩壊を排除する条件である。

Cheeger–Coldingの理論により各点の接錐は距離錐となる。Kählerの場合には、十分小さい$\varepsilon$について、体積密度がEuclid空間に近い$\varepsilon$-正則集合が複素多様体になることも著者らの先行研究で知られていた。しかし計量の滑らかさは保証されず、その複素構造を特異集合の向こうへ延ばす問題が残る。

偏極がある場合の極限の解析空間構造や接錐の代数性にはDonaldson–Sunらの先行結果がある。本論文の焦点は、偏極なし・Ricci下界のみという条件で、少なくとも接錐の代数的構造を得ることである。

## 主結果

### 主定理：接錐のアフィン代数性（Theorem 1）

上記の$Z$の任意の接錐は、正規アフィン代数多様体と同相である。さらに適切な$\mathbb C^N$への埋め込みを選ぶと、接錐の拡大縮小作用は線形トーラス作用に拡張される。

結論は各点で選んだすべての接錐について成り立つ。従来のDonaldson–Sunの定理が偏極とRicci曲率の両側評価を仮定していたのに対し、その両方を弱めている。ただしこれは$Z$全体が正規解析空間となるという主張ではない。Introductionは偏極なしでのその問題を未解決としている。

### 正則スペクトルと体積比（Corollary 2）

特異性を許すKähler錐$C(Y)$の正則スペクトルを

$$
\mathcal S=\lbrace \deg(f):f\text{ は }C(Y)\text{ 上の斉次正則関数}\rbrace \subset\mathbb R
$$

とする。さらに元の列に$|\operatorname{Ric}(\omega\_i)|<1$という両側の評価があるなら、任意の$q\in Z$について、$q$におけるすべての接錐の正則スペクトルは同じである。

また接錐$(Z\_q,o)$に対し

$$
V\_{2n}^{-1}\operatorname{Vol}(B(o,1))
$$

は代数的数となる。ここで$V\_{2n}$は実$2n$次元Euclid単位球の体積である。Introductionは、これらの結果がEuclid体積増大を持つCalabi–Yau多様体の無限遠接錐にも適用されると説明する。

正則スペクトルの一致は接錐の一意性より弱い。Donaldson–Sunは自身の設定でスペクトルの剛性を一意性へ利用したが、本論文は一般の非偏極の場合の一意性を結論しない。

## 証明の見取り図

大枠はDonaldson–Sunによる、正則関数を作って極限空間を有限次元複素空間に実現する方針に従う。ただしここでは接錐上の正則関数を、滑らかな多様体上の正則関数の極限として得るのではない。接錐そのものの上でHörmander型の$L^2$評価を示し、必要な関数を構成する。

Ricci曲率の両側評価がある場合は特異集合の余次元4という性質を使い、接錐上で直接評価を証明する。下界だけの場合は、接錐に収束する滑らかな空間上で近似的な評価を示す。これらを用いてアフィン代数モデルを構成する。

正則スペクトルの剛性には、ある点の接錐全体の空間が連結であることと、スペクトルが代数的数からなることが用いられる。Introductionが説明するのはこの論理の骨格であり、後続節の解析的評価の証明全体はここでは扱わない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/1903.04390v2)
- **Introduction:** [PDF](https://arxiv.org/pdf/1903.04390v2) — Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1; Corollary 2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 1903.04390v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
