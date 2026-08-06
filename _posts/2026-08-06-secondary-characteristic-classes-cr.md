---
layout: paper
title: "Secondary Characteristic Classes in CR Geometry"
title_ja: "CR 幾何における二次特性類"
authors: "Shuya Matsumoto"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.CV
topic: differential-geometry
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

## イントロダクションの日本語要約

強擬凸 CR 多様体の二次特性不変量の出発点は、Burns と Epstein が三次元で導入した不変量である。CR 正則接束が自明なら Cartan bundle の大域切断を選び、normal Cartan connection の Chern--Simons form を積分できる。この不変量の変分は CR 構造が spherical であることとも関係する。

領域の境界の場合、Burns--Epstein は完備 Kähler--Einstein 計量の Chern connection から発散部分を除いた renormalized connection を用い、領域内部の characteristic number と境界不変量を結ぶ公式を得た。Marugame は pseudo-Einstein 構造を使う相対 Chern--Simons form により、より大域的な設定へこの考えを拡張した。

しかし一般のコンパクト強擬凸 CR 多様体では、standard tractor bundle が大域的に存在しない場合や、自明でない場合があるため、通常の Chern--Simons form を直接使う構成は機能しない。本論文はこの障害を、pseudo-Einstein 接触形式と Cheeger--Simons differential character の組合せによって回避する。

具体的には、局所的な standard tractor bundle を canonical bundle の根に由来する線束で tensor し、大域的なベクトル束を作る。pseudo-Einstein 接触形式がこの線束上に平坦接続を与え、それと tractor connection の tensor product に differential character を適用する。値を整数で割った $\mathbb R/\mathbb Z$ に取ることが、cycle の lift の選択に伴う整数の曖昧さを吸収する。

Introduction で述べられる中心的主張は、こうして得た character が pseudo-Einstein 接触形式の選択に依存しない CR 不変量になるというものである。適切な partial frame があれば実数値 lift をもち、CR 正則接束が自明な場合には一般化 Burns--Epstein 不変量と一致する。三次元では元来の Burns--Epstein 不変量が再現される。

領域境界との対応は二段階で示される。Theorem 1.1では接続を rank $n+1$ の部分束へ内在的に reduce しても differential character が一致することを示す。Theorem 1.2では、CR 多様体が強擬凸領域の境界なら、領域上の rank $n+2$ の束と metric connection を構成し、その接束への射影が renormalized connection になり、境界上では先の接続の対と同一視できることを述べる。

これらの同定と differential character の Stokes 公式、Chern 類の residue 公式から、renormalized characteristic number と境界不変量を結ぶ bulk--boundary 公式が得られる。Introduction によれば、これは Burns--Epstein と Marugame の公式を回収し拡張する。また $c_1\Phi$ 型の Chern monomial に対応する不変量の非消滅は必要な partial frame の存在を妨げ、複素 Euclid 空間への CR 埋め込み障害を与える。

最後に、Reinhardt 領域の境界と正則 Sasakian $\eta$-Einstein 多様体で不変量を計算する。Introduction は、三次元で $c_1c_1$ と $c_2$ に対応する不変量が普遍的には比例しないことを挙げ、既存の renormalized characteristic form 由来の大域 CR 不変量だけでは捉えられない情報を示している。

## 論文の主要ポイント

- pseudo-Einstein 接触形式をもつ強擬凸 CR 多様体に、$\mathbb R/\mathbb Z$ 値の二次特性 CR 不変量を構成する。
- 大域的に修正した tractor connection と Cheeger--Simons differential character により、束の非自明性に伴う問題を回避する。
- 適切な実数値 lift は一般化 Burns--Epstein 不変量を回収する。
- 領域境界では renormalized connection と同定し、Chern 類の residue を含む bulk--boundary 公式を得る。
- 不変量の非消滅から複素 Euclid 空間への CR 埋め込み障害を導く。
- 具体例の計算により、異なる Chern monomial からの不変量が新しい独立な情報をもちうることを示す。

## 論文の構成

Section 2で CR 幾何と接続を準備し、Section 3で Cartan connection の二次不変量を定義する。Section 4で reduction、ambient construction、bulk--boundary 公式を扱い、Section 5で Reinhardt 領域境界と Sasakian $\eta$-Einstein 多様体の例を計算する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.01859v1](https://arxiv.org/abs/2608.01859v1)
- **Introduction:** Section 1, pp. 2--5
- **Introduction中で言及された主要定理番号:** Theorems 1.1 and 1.2
- **論文構成の説明:** pp. 4--5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license 1.0
- **source_scope:** Abstract and Introduction
