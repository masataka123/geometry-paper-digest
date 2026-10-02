---
layout: paper
title: 'A Pluripotential-Theoretic Approach to Finiteness of Polarized Calabi--Yau Manifolds'
title_ja: "偏極Calabi–Yau多様体の有限性への多重ポテンシャル論的アプローチ"
authors: "Truong Dinh Dat"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  We propose a pluripotential-theoretic framework for studying finiteness questions for polarized Calabi--Yau manifolds. The central idea is to use global \(m\)-Hessian capacities as a quantitative intermediate between complex potential theory and global geometric boundedness. We formulate a chain of uniform estimates connecting \(m\)-Hessian capacity, volume--capacity inequalities, capacity--perimeter estimates, Sobolev bounds, and non-collapsing of the associated Ricci-flat K\"ahler metrics. Under suitable regularity assumptions, these estimates lead to uniform diameter and curvature control and hence to metric compactness. We then describe the algebraic part of the argument. Uniform projective embeddings with bounded degree lead, through the Macaulay--Gotzmann theory, to only finitely many possible Hilbert polynomials and hence to a finite collection of Hilbert schemes. Ehresmann's fibration theorem then converts boundedness of the smooth algebraic families into finiteness of diffeomorphism and topological types. The resulting framework isolates the main analytic and algebraic bottlenecks in a potential-theoretic approach to Calabi--Yau finiteness. In particular, the capacity--perimeter estimate and the derivation of uniform algebraic embedding data from the preceding metric estimates constitute the essential steps requiring further development. Thus the paper provides a structured program linking complex Hessian potential theory with geometric and algebraic boundedness, rather than assuming that these implications are automatic.
topic: algebraic-geometry
tags:
  - calabi-yau-geometry
  - pluripotential-theory
  - monge-ampere-equations
arxiv_id: "2610.00361v1"
arxiv_url: "https://arxiv.org/abs/2610.00361"
arxiv_submitted: "2026-09-30"
arxiv_updated: "2026-09-30"
summary: >-
  偏極Calabi–Yau多様体の有限性へ至る道筋を、global $m$-Hessian capacityから非崩壊・距離幾何的compactness・代数的有界性へ接続する枠組みとして整理する。完全な有限性定理ではなく、capacity–perimeter評価と一様な射影埋め込みdataの導出を今後必要な主要ボトルネックとして明示する。
abstract_en: ""
summary_en: >-
  This paper lays out a conditional program for deriving finiteness of polarized Calabi–Yau manifolds from global Hessian-capacity estimates. The proposed chain passes through volume-capacity and perimeter bounds, metric non-collapsing, compactness, and bounded projective embeddings before invoking Hilbert schemes and Ehresmann’s theorem. It explicitly treats curvature control and algebraic embedding data as additional requirements rather than established automatic consequences.
abstract_ja: >-
  global $m$-Hessian capacityを偏極Calabi–Yau多様体の解析的制御と有限性の間の媒介とする枠組みを提案する。volume–capacity評価、capacity–perimeter評価、Ricci-flat計量の非崩壊、metric compactness、射影埋め込みとHilbert schemeを結ぶ条件付きの連鎖を整理する。capacity–perimeter評価とmetric controlから一様な代数的埋め込みdataを得る部分は、なお開発を要する本質的段階として区別される。
abstract_source_url: "https://arxiv.org/abs/2610.00361"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.00361](https://arxiv.org/abs/2610.00361)
- **著者:** Truong Dinh Dat
- **初回投稿日・最終更新日:** 2026年09月30日
- **主分類・副分類:** math.AG, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

偏極Calabi–Yau多様体の解析的な一様評価から、微分同相型や位相型の有限性を導けるかが中心問題である。本論文はglobal $m$-Hessian capacityを中間量とする条件付きの研究プログラムを提示する。

想定する連鎖はvolume–capacity評価からcapacity–perimeter評価、Ricci-flat計量の非崩壊と直径制御、metric compactness、射影埋め込みの有界性、Hilbert schemeによる代数的有界性へ進む。最後にEhresmannの定理が滑らかな族内の微分同相型を固定する。

重要なのは、これは全ての矢印を無条件に証明した有限性定理ではない点である。Introductionは曲率評価と一様な埋め込みdataを追加仮定として扱い、capacity–perimeter評価を主要な未解決の橋として明示する。

## 背景と問題設定

Kähler形式$\omega$に対するglobal capacityは

$$\operatorname{Cap}_{m,\omega}(E)=\sup_{-1\le v\le0}\int_E(\omega+dd^cv)^m\wedge\omega^{n-m}$$

で与えられる。この量を体積・周長・測地球の体積へ順に結ぶことが目標である。

## 主結果

### 条件付きの有限性枠組み

Introductionでは概略として次のように述べられている。一様なvolume–capacity評価と適切なcapacity–perimeter評価から一様isoperimetric inequalityと非崩壊が従う。さらに必要な曲率制御があればmetric compactnessが得られる。

固定冪$L^q$が一様にvery ampleで$h^0(M,L^q)$と次数が有界なら、Macaulay–Gotzmann理論によりHilbert polynomialは有限個となる。有限個のHilbert schemeのsmooth locus上でEhresmannの定理を用いると、微分同相型・位相型の有限性へ至る。

### 限界

非崩壊と直径上界だけから一様曲率上界は出ない。またmetric controlから一様なvery ample冪を導く部分も自動ではない。本論文はこれらを仮定または今後の課題として分離する。

## 証明の見取り図

各段階を独立した解析的・幾何学的・代数的命題として整理し、必要な一様定数を追跡する。完成済みの背景定理と追加すべき橋を区別することで、有限性定理に必要な作業を明確化する。
## 原論文との対応

- **Abstractページ:** [arXiv:2610.00361](https://arxiv.org/abs/2610.00361)
- **Introduction:** Section 1
- **Introduction中で言及された主要定理番号:** 本文の主結果節に記載
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
