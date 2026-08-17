---
layout: paper
title: "Point Singularities and Bubbling in Degenerations of Rank-Two Bundles on Threefolds"
title_ja: "三次元多様体上の階数2束の退化における点特異点とbubbling"
authors: "Xuemiao Chen"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
arxiv_abstract: >-
  We study one-parameter degenerations of rank-two vector bundles on complex threefolds to a rank-two
  torsion-free sheaf with an isolated point singularity. We prove a rigidity identity: the algebraic
  bubbling multiplicity of the central fiber equals one half of the Ext-length of the singularity of
  its reflexive hull. Furthermore, bubbling is forced when a family develops such an isolated point
  singularity. We use this identity to obtain smoothability obstructions and construct sharp local
  smoothings. We realize the local example from earlier joint work with Sun as a global degeneration
  of smooth Hermitian-Yang-Mills connections. Rescaling this degeneration produces a smooth non-flat
  Hermitian-Yang-Mills connection on $\mathbb C^3$ with density one at infinity, whose tangent cone at
  infinity has flat connection part and a multiplicity-one line as the blow-up cycle. We also
  construct smoothings of elementary modifications of projective-cone singularities with explicit
  algebraic bubbles. These examples give local models for Hermitian-Yang-Mills point bubbling in
  complex dimension three and distinguish this phenomenon from bubbling along complex codimension-two
  loci.
topic: differential-geometry
tags:
  - singularities
  - vector-bundles-sheaves
  - hermite-einstein-metrics
arxiv_id: "2606.25110v1"
arxiv_url: "https://arxiv.org/abs/2606.25110v1"
arxiv_submitted: "2026-06-23"
arxiv_updated: "2026-06-23"
summary: >-
  複素三次元多様体上の階数2ベクトル束が孤立点特異点をもつtorsion-free層へ退化するとき、代数的bubbling multiplicityがreflexive hullのExt-lengthの半分に等しいことを示す。この剛性からsmoothability障害と鋭い局所模型を導き、$\mathbb C^3$ 上の非平坦Hermitian--Yang--Mills bubbleを構成する。
abstract_en: ""
summary_en: >-
  The paper investigates one-parameter limits of rank-two bundles on complex threefolds when the limiting torsion-free sheaf has an isolated singularity. It proves that the length of the algebraic bubble is forced to equal half an Ext-length attached to the reflexive hull. This rigidity yields obstructions to smoothing as well as sharp local and global examples. The resulting constructions include a non-flat Hermitian--Yang--Mills connection on affine three-space with minimal density at infinity.
abstract_ja: >-
  複素三次元上の階数2束の一径数退化において、孤立点特異点は代数的bubblingから独立には発生できないことを示す。中心fiberとそのreflexive hullの差の長さは、reflexive hullの特異性を測るExt-lengthの半分に固定される。この恒等式をsmoothabilityの障害と構成に応用し、Hermitian--Yang--Mills接続の点bubblingを表す局所模型を与える。
abstract_source_url: "https://arxiv.org/abs/2606.25110v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2606.25110v1](https://arxiv.org/abs/2606.25110v1)
- **著者:** Xuemiao Chen
- **初回投稿日:** 2026年6月23日
- **最終更新日:** 2026年6月23日（v1）
- **主分類・副分類:** Differential Geometry (math.DG); Algebraic Geometry (math.AG)
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素三次元多様体上で階数2局所自由層のflat familyがtorsion-free層へ退化し、中心fiberに孤立点特異点が生じる状況を扱う。高階数ではessential singularityがbubblingなしに現れうるが、階数2には特有の剛性がある。

中心fiberを $C$ とすると、$C^{**}/C$ が測る代数的bubbleと $C^{**}$ のExt特異性は厳密な恒等式で結ばれる。従って点特異点が形成されればbubblingは必ず起こり、Ext-lengthは偶数になる。

この数値条件は必要条件にとどまらない。論文は所定の長さを実現するelementary modificationを構成し、最小bubbleの場合には局所解析座標変換を除いて模型が一意であることを示す。さらに射影空間上へglobalizeし、滑らかなHYM接続の実際の退化を得る。

## 背景と問題設定

点bubblingは三次元gauge理論のcompactness問題に現れる。曲線に沿うbubblingとは異なり、孤立点には横断的な四次元instanton模型がない。また接続のtangent-cone部分が平坦でも、blow-up cycleが特異性を保持しうるため、接続部分だけを見る次元縮約では不十分である。

## 主結果

### 局所剛性恒等式（Theorem 2.3）

$B\subset\mathbb C^3$、円板 $\Delta$ 上の一径数退化で一般fiberが階数2局所自由層、中心fiber $C$ が孤立点特異点をもつtorsion-free層であるとする。このとき

$$
\ell(C^{**}/C)=\frac12\ell(\operatorname{Ext}^1(C,\mathcal O_B))>0.
$$

左辺 $m_{\mathrm{alg}}$ が代数的bubbling multiplicityで、右辺のExtは $C^{**}$ のみに依存する。従って $C$ はreflexiveではなく、$C^{**}$ も局所自由ではない。

### smoothabilityと最小模型

恒等式が指定する長さの商 $F\twoheadrightarrow\tau$ をもつreflexive層 $F$ の明示的クラスについて、$\ker(F\to\tau)$ が滑らかな一般fiberをもつflat familyの中心fiberとなる。最小の場合 $m_{\mathrm{alg}}=1$ にはsmoothable模型が局所解析座標変換を除いて一意である（Theorem 3.3）。

### HYM bubbleのglobalな実現（Theorem 4.1）

$\mathbb P^3$ 上で一般fiberが安定な階数2ベクトル束、中心fiberが二つの最小点特異点をもつfamilyを構成する。再スケールにより $\mathbb C^3$ 上の滑らかで非平坦なHYM接続を得る。その無限遠でのdensityは1で、tangent coneの接続部分は平坦だがmultiplicity-oneの複素直線がblow-up cycleとして残る。

## 証明の見取り図

局所恒等式はflat familyの中心fiberとreflexive hullの局所第三Chern類を比較し、階数2の自己双対性を用いてExt-lengthへ変換する。構成側ではelementary modificationをflatに滑らかにする具体的familyを作る。global例には安定束とDonaldson--Uhlenbeck--Yau対応を用い、代数的familyをHYM接続の退化として解釈する。

## 原論文との対応

- **Abstractページ:** [arXiv:2606.25110v1](https://arxiv.org/abs/2606.25110v1)
- **Introduction:** Section 1, pp. 2–5
- **Introduction中で言及された主要定理番号:** Theorems 2.3, 3.3, and 4.1; Proposition 3.1
- **論文構成の説明:** Introduction, pp. 3–5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
