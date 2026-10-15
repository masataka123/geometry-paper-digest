---
layout: paper
title: Oka realizations, fundamental groups, and holomorphic cofibrations
title_ja: Oka多様体のホモトピー型・基本群と正則cofibration
authors: Bin Guo, Yuta Kusakabe, Peng-Chao Wang
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.AG
- math.AT
arxiv_abstract: The homotopy types of Oka manifolds are exactly those of countable finite-dimensional CW complexes. We construct realizations as open subsets of complex Euclidean spaces with explicit dimension bounds. Other realizations have good open covers by sets biholomorphic to $\C^N$, with prescribed finite nerves, or are unions of Fatou--Bieberbach domains whose nonempty finite intersections are again Fatou--Bieberbach domains. Every nonempty Stein manifold admits a proper holomorphic embedding into an Oka open subset of some $\C^N$, and this embedding is a homotopy equivalence. We obtain holomorphic representatives of ordinary and generalized cohomology classes, and realize every countable group as the fundamental group of an Oka domain in $\C^5$. The fundamental groups of algebraically elliptic manifolds are precisely the finite groups, and every virtually abelian K\"ahler group is the fundamental group of a projective Oka manifold. Finally, we classify holomorphic cofibrations
  in L\'arusson's intermediate model structures and establish factorizations over aspherical targets into proper holomorphic embeddings and holomorphic fibre bundles with Oka fibre.
topic: several-complex-variables
tags:
- oka-theory
- fundamental-groups
- stein-geometry
arxiv_id: 2610.17044v1
arxiv_url: https://arxiv.org/abs/2610.17044
arxiv_submitted: '2026-10-12'
arxiv_updated: '2026-10-12'
summary: 可算有限次元CW複体のホモトピー型が、Oka多様体として実現できる型とちょうど一致することを示す。複素Euclid空間の開集合としての次元評価や任意の可算群の基本群としての実現に加え、代数的楕円性・コンパクトKähler性を課した場合の制約を明らかにする。Stein多様体のOka領域への正則埋込みとcofibrationの分類も扱う。
abstract_en: ''
summary_en: The paper constructs Oka manifolds with prescribed topology and then studies how extra geometric conditions restrict these constructions. Countable finite-dimensional CW models can be realized by Oka domains in complex Euclidean spaces with dimension estimates. Fundamental groups range over all countable groups for general Oka domains, but become much more restricted under algebraic ellipticity or compact Kähler assumptions. Proper embeddings and a classification of holomorphic cofibrations connect these results to the model-category formulation of Oka theory.
abstract_ja: Oka多様体として実現できるホモトピー型を、可算有限次元CW複体の型として特徴づける。Fatou–Bieberbach領域による被覆や次元を制御したEuclid空間内の構成を与え、コホモロジー類の正則写像による表示へ応用する。一般のOka領域では任意の可算群を基本群として実現できる一方、代数的楕円性やコンパクトKähler条件の下では群が制限される。さらにStein多様体のproper正則埋込み、正則cofibrationの分類、非球面的な対象への写像の分解を扱う。
abstract_source_url: https://arxiv.org/abs/2610.17044
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.17044v1](https://arxiv.org/abs/2610.17044)
- **著者:** Bin Guo, Yuta Kusakabe, Peng-Chao Wang
- **初回投稿日:** 2026-10-12
- **最終更新日:** 2026-10-12
- **主分類・副分類:** math.CV（主分類）; math.AG, math.AT
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Oka多様体はStein多様体からの正則写像に対して柔軟性をもつが、その位相がどの程度自由かは別の問題である。本論文は、Oka多様体として実現できるホモトピー型を可算有限次元CW複体の型として完全に特徴づけ、有限CW複体に関するGromovの問いを含む実現問題に答える。

実現は抽象的な複素多様体にとどまらず、ある複素Euclid空間のOka開集合として行える。Fatou–Bieberbach領域の交わりを使う構成、明示的な次元評価をもつ構成、指定されたnerveをもつ良い被覆による構成を使い分ける。

一般のOka領域の基本群は任意の可算群を許す。しかし代数的楕円性を要求すると有限群に限られ、コンパクトKähler Oka多様体ではvirtually abelianなKähler群に限られる。こうした制約の違いを、実現例と必要条件の両面から整理する。

さらに、Stein多様体をホモトピー同値となるようOka領域へproper正則に埋め込めること、正則cofibrationの分類、写像の幾何学的分解を扱う。位相的な実現問題が、Oka理論のモデル圏的な定式化へつながる。

## 背景と問題設定

Oka多様体$Y$に対して、Stein多様体$X$からの正則写像空間$\mathcal O(X,Y)$は連続写像空間$\mathcal C(X,Y)$と弱ホモトピー同値になる。この性質を利用するには、所望の位相をもつ$Y$を構成する必要がある。論文では複素多様体は第二可算かつ有限の複素次元をもち、非連結の場合も許す。

Fatou–Bieberbach領域とは、$\mathbb C^N$の真の部分領域で$\mathbb C^N$と双正則なものである。良い開被覆は非空の有限交叉がすべて可縮な被覆であり、そのnerveの位相を被覆の和集合へ移せる。

## 主結果

### Oka実現の特徴づけ（Theorem 1.1）

あるホモトピー型がOka多様体として実現できることと、可算有限次元CW複体のホモトピー型であることは同値である。実現する多様体は$\mathbb C^N$の開集合で、可算個のFatou–Bieberbach領域の和集合にでき、非空の有限交叉もFatou–Bieberbach領域にできる。

Introductionで説明される別の構成（Theorem 2.5）では、非空の$d$次元可算CW複体を

$$
N(d)=2\left\lfloor\frac d2\right\rfloor+3
$$

として$\mathbb C^{N(d)}$のOka開集合に実現する。有限単体複体が$v$頂点と$s$個の極大単体をもつ場合、$5s+2$次元でちょうど$v$個の$\mathbb C^{5s+2}$型の開集合による良い被覆をもち、nerveが指定された複体となる実現も得る（Theorem 3.1）。異なる次元評価は異なる追加条件に対応する。

### Eilenberg–MacLane空間の条件（Corollary 1.2）

$K(G,1)$がOka実現をもつための必要十分条件は、$G$が可算で$\operatorname{cd}_{\mathbb Z}G<\infty$であることである。また$G\ne0$がアーベル群、$n\ge2$の場合、$K(G,n)$がOka実現をもつことは、$G$が有限次元の有理ベクトル空間で$n$が奇数であることと同値となる。

### コホモロジー類の正則代表（Theorem 1.3）

可算ホモトピー群をもつスペクトラム$E$、$k\in\mathbb Z$、$m\ge0$を固定する。あるOka開集合$Y\subset\mathbb C^N$と$u\in E^k(Y)$が存在し、複素次元が$m$以下のすべてのStein多様体$X$に対して

$$
\pi_0\mathcal O(X,Y)\longrightarrow E^k(X),\qquad[g]\longmapsto g^*u
$$

が自然な全単射となる。正則写像の連続な族で結ばれるものを同一視することで、一般化コホモロジー類を正則写像によって表現する。ここではStein源の次元上限を固定しており、すべての次元を一つの$Y$で同時に扱えると無条件に述べてはいない。

### 代数的楕円多様体の基本群（Theorem 1.4）

代数的楕円多様体の基本群として現れる群は、ちょうど有限群である。任意の有限群はflexibleな準アフィン多様体の基本群となり、有限巡回群なら曲面で実現できる。有限群$G$と$d\ge1$に対し、代数的楕円準アフィン多様体から$K(G,1)$への$d$-connectedな写像も存在する。

これに対して、幾何学的な追加条件のない場合は任意の可算群が$\mathbb C^5$内のOka領域の基本群になる（Corollary 5.1）。基本群だけを実現することと、$K(G,1)$全体のホモトピー型を実現することは異なる。

### コンパクトKähler Oka多様体（Theorem 1.5）

ある群がコンパクトKähler Oka多様体の基本群となることと、virtually abelianなKähler群であることは同値である。virtually abelianとは有限指数のアーベル部分群をもつことをいい、Kähler群とはコンパクトKähler多様体の基本群をいう。そのような群は射影的Oka多様体でも実現できる。

Introductionは必要方向について、Campanaの判定と最近のプレプリントのabelianity定理を用いると明記する。一方、存在方向では有限群の自由作用をもつ単連結な射影的Oka多様体を構成し、既存のアフィン作用と組み合わせる。既知・引用結果に依存する部分と構成部分を区別する必要がある。

### 正則cofibrationと埋込み・分解

Introductionが説明するTheorem 6.1によれば、Lárussonのintermediate model structureで正則写像$i:A\to X$がcofibrationとなることと、双正則写像であるか、Steinな標的への閉正則埋込みであることは同値である。非連結Stein多様体も含むStein siteを用いる。

また任意の非空Stein多様体$S$は、Oka開集合$D\subset\mathbb C^N$へproper正則に埋め込め、その埋込みをホモトピー同値にできる（Theorem 6.7）。非球面的な複素多様体への正則写像は、この種の埋込みとOkaファイバーをもつ正則ファイバー束との合成へ分解できる（Theorem 6.8）。非球面的とは普遍被覆が可縮であることをいう。

## 証明の見取り図

最初の実現では、互いに交わらないFatou–Bieberbach領域の積を使って細分の単体を符号化する。被覆のnerveが所望の位相をもち、nerve lemmaが和集合のホモトピー型を決める。各点の近くが複素Euclid空間型となることからstrong dominabilityを得て、Introductionが引用するAn–Du–Guo–Wang–Xieの判定によってOka性へ移る。

次元を抑える構成は、所望の位相をもつ実Euclid開集合から出発し、複素パラメータを含む実線形座標変換と整曲線の族の判定を使う。指定されたnerveを作る別構成では、正則な平行移動で開集合を貼り合わせ、写像の差のproper性でHausdorff性を確保する。

cofibrationの分類には生成cofibrationのpushoutを用い、双正則でない場合の標的をStein多様体の正則retractとして捉える。ここで挙げた方針はIntroductionの説明に限り、各構成の後続節の証明を検証したものではない。

## 原論文との対応

- **Abstractページ:** [Oka realizations, fundamental groups, and holomorphic cofibrations](https://arxiv.org/abs/2610.17044)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.17044v1) — Section 1, pp. 1–5（Section 2の開始前まで）
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.3–1.5; Corollary 1.2; Introduction中のTheorems 2.5, 3.1, 6.1, 6.7–6.8への説明
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.17044v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
