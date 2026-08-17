---
layout: paper
title: "Secondary Characteristic Classes in CR Geometry"
title_ja: "CR 幾何における二次特性類"
authors: "Shuya Matsumoto"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.CV
arxiv_abstract: >-
  We construct a family of $\mathbb{R}/\mathbb{Z}$-valued CR invariants for compact strictly
  pseudoconvex CR manifolds admitting pseudo-Einstein contact forms. We define these invariants by
  applying the theory of Cheeger--Simons differential characters to a globally defined modification of
  the normal tractor connection. When the CR holomorphic tangent bundle is trivial, their natural
  $\mathbb{R}$-valued lifts agree with the generalized Burns--Epstein invariants. For CR manifolds
  arising as boundaries of relatively compact strictly pseudoconvex domains, we identify these
  differential characters with those determined by the renormalized connection and derive
  bulk--boundary formulas involving renormalized characteristic numbers and residues of Chern classes.
  These formulas recover and extend the results of Burns--Epstein and Marugame. We also obtain
  obstructions to CR embeddings into complex Euclidean space.
topic: differential-geometry
tags:
  - chern-classes
  - cr-geometry
arxiv_id: "2608.01859v1"
arxiv_url: "https://arxiv.org/abs/2608.01859"
arxiv_submitted: "2026-08-03"
arxiv_updated: "2026-08-03"
summary: >-
  pseudo-Einstein 接触形式をもつコンパクト強擬凸 CR 多様体に、Cheeger--Simons differential character による $\mathbb R/\mathbb Z$ 値の二次特性不変量を構成する。既存の Burns--Epstein 型不変量との一致、領域境界に対する bulk--boundary 公式、複素 Euclid 空間への CR 埋め込み障害が得られる。
abstract_en: ""
summary_en: >-
  The paper defines secondary invariants for compact strictly pseudoconvex CR manifolds equipped with pseudo-Einstein contact forms. Its construction uses differential characters associated with a globally defined modification of the normal tractor connection, so the invariants take values modulo integers without requiring a trivial tractor bundle. Natural real-valued lifts recover earlier Burns--Epstein invariants in appropriate cases. For boundaries of strictly pseudoconvex domains, the construction is related to renormalized connections and yields characteristic-number formulas as well as embedding obstructions.
abstract_ja: >-
  pseudo-Einstein 接触形式を許すコンパクト強擬凸 CR 多様体に対して、$\mathbb R/\mathbb Z$ 値の CR 不変量の族を構成する。normal tractor connection の大域的な修正に Cheeger--Simons differential character を適用し、CR 正則接束が自明な場合の自然な実数値 lift が一般化 Burns--Epstein 不変量と一致することを示す。強擬凸領域の境界では renormalized connection から得られる character と同定し、renormalized characteristic number および Chern 類の residue を含む bulk--boundary 公式と、CR 埋め込みへの障害を導く。
abstract_source_url: "https://arxiv.org/abs/2608.01859"
license_name: "arXiv non-exclusive distribution license 1.0"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.01859v1](https://arxiv.org/abs/2608.01859v1)
- **著者:** Shuya Matsumoto
- **初回投稿日:** 2026年8月3日
- **最終更新日:** 2026年8月3日（v1）
- **主分類・副分類:** Differential Geometry (math.DG), Complex Variables (math.CV)
- **ライセンス:** [arXiv non-exclusive distribution license 1.0](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

コンパクト強擬凸 CR 多様体に対し、normal Cartan connection から $\mathbb R/\mathbb Z$ 値の二次特性不変量を構成する。通常の Chern--Simons form では standard tractor bundle の大域的存在や自明性が障害になるため、pseudo-Einstein 接触形式と Cheeger--Simons differential character を用いる。

局所的な standard tractor bundle を density line bundle でねじって大域的な束を作り、pseudo-Einstein 接触形式が与える平坦接続と tractor connection の tensor product に differential character を適用する。得られる character は接触形式の選択に依存しない CR 不変量であり、partial frame がある場合には実数値 lift をもつ。

CR 正則接束が自明な場合、その自然な lift は generalized Burns--Epstein invariant と一致し、三次元では元来の Burns--Epstein invariant を回収する。強擬凸領域の境界では renormalized connection と結びつき、bulk--boundary 公式と CR 埋め込み障害を与える。

## 背景と問題設定

Burns--Epstein invariant は、三次元強擬凸 CR 多様体で CR 正則接束が自明なとき、normal Cartan connection $\omega$ の第2 Chern polynomial に対する Chern--Simons form を積分して定義される：

$$
\widetilde\mu^{\mathrm{BE}}_{c_2}(M)=\int_M s^*T_{c_2}(\omega).
$$

領域境界の場合には、完備 Kähler--Einstein 計量の renormalized connection $\overline{\nabla}^{\mathrm g}$ が内部の characteristic number と境界不変量を結ぶ。Introduction に掲げられた Burns--Epstein の公式は

$$
\int_\Omega c_{n+1}(\overline{\nabla}^{\mathrm g})
=\chi(\Omega)+\widetilde\mu_{c_{n+1}}(\partial\Omega),
$$

および $q_1+\cdots+q_m=n+1$, $m\geq2$ に対する

$$
\int_\Omega (c_{q_1}\cdots c_{q_m})(\overline{\nabla}^{\mathrm g})
=\widetilde\mu_{c_{q_1}\cdots c_{q_m}}(\partial\Omega)
$$

である。本論文は、tractor bundle が大域的に存在しない、または自明でない一般の CR 多様体でも意味をもつ構成を目指す。

局所的な standard tractor bundle $\mathcal T^\#$ と density line bundle $\mathcal E(1,0)$ から

$$
\mathcal T=\mathcal E(1,0)\otimes\mathcal T^\#,
\qquad
\nabla^{\mathcal T}=D^\theta\otimes\nabla^{\mathcal T^\#}
$$

を作る。ここで $D^\theta$ は pseudo-Einstein 接触形式 $\theta$ が定める平坦接続である。cycle の lift の違いによる整数の曖昧さを $\mathbb R/\mathbb Z$ に移すことが、differential character を使う理由である。

## 主結果

### CR 不変量の構成（Introduction の main claim）

Introductionでは概略として次のように述べられている。$\nabla^{\mathcal T}=D^\theta\otimes\nabla^{\mathcal T^\#}$ に付随する Cheeger--Simons differential characters は、pseudo-Einstein 接触形式 $\theta$ の選択に依存しない $\mathbb R/\mathbb Z$ 値 CR 不変量を定める。適切な partial frame があれば canonical または frame-dependent な実数値 lift をもち、Burns--Epstein と Marugame の不変量はそのような lift として現れる。

### 接続の reduction（Theorem 1.1 = Theorem 4.1）

rank $n+2$ の $\mathcal T$ には、接続 $\nabla^{\underline{\mathcal T}}$ を備えた rank $n+1$ の部分束 $\underline{\mathcal T}\subset\mathcal T$ が存在する。$\nabla^{\underline{\mathcal T}}$ に付随する Cheeger--Simons differential characters は、$\nabla^{\mathcal T}$ に付随するものと一致する。したがって boundary case との比較に必要な rank の reduction は二次特性情報を変えない。

### ambient construction と renormalized connection（Theorem 1.2 = Theorem 4.6）

$M=\partial\Omega$ が強擬凸領域の境界であるとする。このとき $\Omega$ 上に metric connection $\nabla^{\widetilde h}$ を備えた rank $n+2$ の束 $\widetilde{\mathcal T}$ が存在し、次を満たす。

1. $T^{1,0}\overline{\Omega}$ は $\widetilde{\mathcal T}$ の部分束である。
2. $\nabla^{\widetilde h}$ を $T^{1,0}\overline{\Omega}$ へ射影して得る接続は renormalized connection $\overline{\nabla}^{\mathrm g}$ と一致する。
3. 境界上で束の対と接続の対は

$$
(\widetilde{\mathcal T}|_{\partial\Omega},T^{1,0}\overline{\Omega}|_{\partial\Omega})
\simeq(\mathcal T,\underline{\mathcal T}),
$$

$$
(\nabla^{\widetilde h},\overline{\nabla}^{\mathrm g})
\longleftrightarrow
(\nabla^{\mathcal T},\nabla^{\underline{\mathcal T}})
$$

と対応する。

Theorems 1.1 と 1.2 を differential character の Stokes 公式および Chern-class residue 公式と組み合わせることで、renormalized characteristic number と境界不変量を結ぶ bulk--boundary 公式が得られる。さらに $c_1\Phi$ 型 Chern monomial の不変量の非消滅は必要な partial frame、したがって $\mathbb C^{n+1}$ への CR embedding を妨げる。

## 証明の見取り図

まず pseudo-Einstein structure を使って局所 tractor connection を大域的な $\mathcal T$ 上の接続へ修正し、Cheeger--Simons 理論により cycle 上の積分を整数を法として定義する。flat な $D^\theta$ を使うため曲率は元の tractor connection の曲率と自然に同一視され、接触形式を変えたときの character の不変性を示せる。

次に $\nabla^{\mathcal T}$ を rank $n+1$ の部分束へ内在的に reduce する。boundary case では ambient construction で領域上の $\widetilde{\mathcal T}$ と metric connection を作り、その射影が renormalized connection になることを確認する。境界上の接続の対を reduction で得た対と同一視した後、Stokes 公式と residue 公式が内部と境界の特性数を結ぶ。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.01859v1](https://arxiv.org/abs/2608.01859v1)
- **Introduction:** Section 1, pp. 2–5
- **Introduction中で言及された主要定理番号:** Theorems 1.1 and 1.2
- **中心数式:** pp. 2–5（Burns--Epstein invariant、bulk--boundary formulas、tractor connections）
- **論文構成の説明:** pp. 4–5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license 1.0
- **source_scope:** Abstract and Introduction
