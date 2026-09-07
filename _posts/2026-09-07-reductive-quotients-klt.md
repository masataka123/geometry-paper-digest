---
layout: paper
title: "Reductive quotients of klt singularities"
title_ja: "klt特異点の簡約群商"
authors: "Lukas Braun, Daniel Greb, Kevin Langlois, Joaquín Moraga"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
  - math.DG
arxiv_abstract: >-
  We prove that the quotient of a klt type singularity by a reductive group is of klt type. In particular, given a klt variety $X$ endowed with the action of a reductive group $G$ and admitting a quasi-projective good quotient $X\rightarrow X/\!/G$, we can find a boundary $B$ on $X/\!/G$ so that the pair $(X/\!/G,B)$ is klt. This applies for example to GIT-quotients of klt varieties. Our main result has consequences for complex spaces obtained as quotients of Hamiltonian Kähler $G$-manifolds, for collapsings of homogeneous vector bundles as introduced by Kempf, and for good moduli spaces of smooth Artin stacks. In particular, it implies that the good moduli space parametrizing $n$-dimensional K-polystable Fano manifolds of volume $v$ has klt type singularities. As a corresponding result regarding global geometry, we show that quotients of Mori Dream Spaces with klt Cox rings are Mori Dream Spaces with klt Cox ring. This in turn applies to show that projective GIT-quotients of varieties of Fano type are of Fano type; in particular, projective moduli spaces of semistable quiver representations are of Fano type.
topic: algebraic-geometry
tags:
  - singularities
  - birational-geometry
  - minimal-model-program
  - moduli
  - fano-varieties
arxiv_id: "2111.02812v3"
arxiv_url: "https://arxiv.org/abs/2111.02812"
arxiv_submitted: "2021-11-04"
arxiv_updated: "2024-07-03"
summary: >-
  klt型特異点が標数0の簡約代数群による商で保存されることを示す。affine不変式論的商から準射影good quotientへ局所化し、K-polystable Fano多様体のgood moduli spaceやFano型多様体の射影GIT商にもklt型・Fano型が継承されることを導く。
abstract_en: ""
summary_en: >-
  This work establishes that taking a quotient by a reductive group preserves singularities of klt type in characteristic zero, without requiring the quotient to be Q-Gorenstein. The affine result extends to quasi-projective good quotients and hence to GIT quotients. It yields klt-type singularities for several good moduli spaces, including the space of K-polystable smooth Fano manifolds with fixed dimension and volume. A global counterpart shows preservation properties for Mori dream spaces and implies that projective GIT quotients of varieties of Fano type remain of Fano type.
abstract_ja: >-
  klt型特異点を簡約群で割った商が再びklt型であることを証明する。特に、簡約群 $G$ が作用するklt多様体 $X$ が準射影good quotient $X\to X/\!/G$ を持つとき、商上に境界 $B$ を選んで $(X/\!/G,B)$ をkltにできる。結果はGIT商、Hamiltonian Kähler $G$-多様体の商、滑らかなArtin stackのgood moduli spaceなどに適用される。さらにkltなCox環を持つMori dream spaceの商、およびFano型多様体の射影GIT商に対応する大域的帰結も得られる。
abstract_source_url: "https://arxiv.org/abs/2111.02812"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2111.02812](https://arxiv.org/abs/2111.02812)
- **著者:** Lukas Braun, Daniel Greb, Kevin Langlois, Joaquín Moraga
- **初回投稿日:** 2021年11月4日
- **最終更新日:** 2024年7月3日
- **主分類・副分類:** math.AG（主分類）, math.CV, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

簡約群による商にはトーリック特異点、有限商特異点、Artin stackのgood moduli spaceなど多くの重要例が現れる。一方、klt特異点はMMPの自然な特異点クラスであり、消滅定理、局所基本群、Cox環などに強い制約を持つ。本論文は、簡約群商がklt型というクラスを保存することを証明する。

商が $\mathbb Q$-Gorensteinなら先行結果があったが、簡単な $\mathbb G_m$ 商でさえその仮定を満たさない場合がある。そこで多様体そのものがkltであることではなく、適切な有効境界 $B$ を加えた対がkltとなる「klt型」を採用する。主定理は、元のklt境界が群不変であることも要求しない。

affine商の結果は準射影good quotientとGIT商へ広がる。さらにHamiltonian Kähler商、滑らかなArtin stackのgood moduli space、K-polystableな滑らかなFano多様体のモジュライへ応用され、これらの局所特異性がMMPの枠内に入ることを示す。

大域版では、Cox環を介してMori dream spaceのgood quotientを制御する。とりわけ射影Fano型多様体のGIT商が再びFano型となり、非巡回quiverの半安定表現の射影モジュライ空間にも適用される。

## 背景と問題設定

正規多様体 $X$ がklt型であるとは、ある有効境界 $B$ に対して $K_X+B$ が $\mathbb Q$-Cartierであり、対 $(X,B)$ がkltとなることをいう。この柔軟性は、商が $\mathbb Q$-Gorensteinでない障害を境界に吸収するために本質的である。

標数0では簡約群の不変式環は有限生成であるが、それだけでは商の特異点がklt型であるとは直ちに分からない。本論文は簡約群を半単純部分、トーラス、有限群へ分解し、それぞれに異なる手法を組み合わせる。

## 主結果

### affine簡約群商（Theorem 1）

klt型affine多様体 $X$ に簡約群 $G$ が作用するとき、

$$
X/\!/G=\operatorname{Spec}\mathbb K[X]^G
$$

はklt型である。特に簡約群表現の原点の商にétale局所同値な簡約商特異点はklt型となる。

### 準射影good quotientとGIT商（Theorem 2, Corollary 2）

klt型多様体 $X$ が準射影なgood quotient $X\to X/\!/G$ を持つなら商もklt型である。線形化された線束に関するGIT商 $X_L^{ss}/\!/G$ はその直接の応用である。

### K-polystable Fanoモジュライ（Theorem 4）

次元 $n$ と体積 $v$ を固定したK-polystableな滑らかなFano多様体のgood moduli space $X_{n,v}$ には有効境界 $B_{n,v}$ が存在し、

$$
(X_{n,v},B_{n,v})\ \text{はkltである}。
$$

### Mori dream spaceとFano型（Theorem 6, Corollary 3）

Mori dream spaceの不変開集合のgood quotientは再びMori dream spaceとなり、元のCox環がklt型なら商のCox環もklt型となる。これにより、射影Fano型多様体の射影GIT商はFano型である。

## 証明の見取り図

まず群の恒等成分の導来部分で割り、半単純群、トーラス、有限群の問題へ還元する。トーラス作用の局所解析にはproper polyhedral divisorとAmbroの標準束公式を用い、有限群の場合も直接処理する。klt型がétale局所的性質であることとLunaのétale slice theoremにより固定点近傍へ移る。非因子的なklt型特異点では群作用を反復Cox環へ持ち上げ、最終的に得られる因子的多様体で半単純群商を扱う。

## 原論文との対応

本記事はIntroductionのTheorems 1–6とCorollaries 1–3、およびIntroduction末尾の証明方針を中心に整理した。Kempf collapsingなど追加応用の詳細と各技術節の証明は扱っていない。
