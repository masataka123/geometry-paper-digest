---
layout: paper
title: "Arakelov inequalities and characterization of totally geodesic ball quotients in $\\mathcal{A}_g$"
title_ja: "Arakelov不等式と$\\mathcal{A}_g$内の全測地的球商の特徴づけ"
authors: "Matteo Costantini, Daniel Greb, Carolina Tamborini"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DG
arxiv_abstract: >-
  We establish an Arakelov inequality for variations of Hodge structures underlying families of principally polarized complex Abelian varieties. In the equality case, this leads to a numerical characterization of certain totally geodesic ball quotients inside the moduli space of Abelian varieties. Our result extends work of Möller-Viehweg-Zuo by removing the strong positivity conditions imposed in their statement. For families over compact base spaces, our proof involves showing that the period map associated with a family of Abelian varieties factors through certain MMP operations and then generalizing the results of Möller, Viehweg, and Zuo to an appropriate singular setting. In the quasiprojective surface case, we implement a new approach that does not pass through Miyaoka-Yau-type uniformisation theorems but uses an argument going back to an idea of Mok, symmetric space theory and semistability considerations instead.
topic: algebraic-geometry
tags:
  - hodge-theory
  - moduli
  - stability
  - minimal-model-program
  - uniformization
arxiv_id: "2609.37023v1"
arxiv_url: "https://arxiv.org/abs/2609.37023"
arxiv_submitted: "2026-09-29"
arxiv_updated: "2026-09-29"
summary: >-
  主偏極複素Abel多様体の族が定める重さ1のHodge構造変動に対し、対数正準モデル上のArakelov不等式を証明する。等号、対数余接層の対称冪の安定性、Higgs場の長さ条件から、周期写像像が $\mathcal A_g$ 内の全測地的複素球商であることを数値的に特徴づける。
abstract_en: ""
summary_en: >-
  This paper develops an Arakelov inequality for weight-one variations arising from families of principally polarized abelian varieties over suitable compact or surface bases. Period maps are first shown to descend through minimal-model operations to an adapted log-canonical model. Equality in the slope inequality, together with stability and Higgs-length conditions, characterizes when the period image is a totally geodesic complex-ball quotient in the moduli space. In the open surface case, the argument avoids relying on a Miyaoka–Yau equality uniformization theorem.
abstract_ja: >-
  主偏極複素Abel多様体の族に付随するHodge構造変動についてArakelov不等式を確立する。等号の場合には、Abel多様体のモジュライ空間内のある全測地的球商を数値的に特徴づける。強い正値性仮定を外すため、コンパクト基底では周期写像のMMPを通じた分解を用い、準射影曲面では対称空間論と半安定性による別の議論を用いる。
abstract_source_url: "https://arxiv.org/abs/2609.37023"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.37023](https://arxiv.org/abs/2609.37023)
- **著者:** Matteo Costantini, Daniel Greb, Carolina Tamborini
- **初回投稿日・最終更新日:** 2026年9月29日
- **主分類・副分類:** math.AG, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

$\mathcal A_g$ 内の全測地的部分多様体はShimura部分多様体と密接に関係する。本論文は、主偏極Abel多様体の族の周期写像像が複素球商となる状況を、Hodge束の傾きとHiggs場の数値データで特徴づける。

従来のMöller–Viehweg–Zuoの定理にあった滑らかなコンパクト化と強い正値性の仮定を、適切な対数正準モデル上で計算することにより緩和する。基底はコンパクトなら任意次元、非コンパクトなら準射影曲面を扱う。

## 背景と問題設定

族 $f:A\to U$ の周期写像が生成的有限で、境界で一価的な局所モノドロミーをもち、非延長可能である状況を考える。まず周期写像をMMP操作を通じて、$K_{Y_c}+D_c$ がnefかつbigで $U_c$ 上ampleとなるモデルへ降ろす必要がある。

## 主結果

### 周期写像のMMPによる分解（Theorem 1.1）

周期写像はcanonicalまたはlog-canonicalな対 $(Y_c,D_c)$ 上の正則写像へ降り、誘導されるHodge構造変動の一価性、非延長可能性、周期写像のproper性が保たれる。

### 全測地的球商の特徴づけ（Theorem 1.2）

$\operatorname{Sym}^{[m]}\Omega^1_{Y_c}(\log D_c)$ がすべての $m$ で $K_{Y_c}+D_c$ に関して傾き安定であるとする。周期写像像が全測地的球商であることは、重さ1のHodge構造変動がunitary部分 $\mathbb U$ と残り $\mathbb W$ に分解し、$\mathbb W$ の各既約部分についてArakelov等号とIntroductionに明記されたHiggs場の長さ等式が成り立つことと同値である。

### 特異対上のArakelov不等式（Theorem 1.4）

$(Y,D)$ が $K_Y+D$ bigかつnefな射影log-canonical対で、$\mathbb V$ が非unitary既約な重さ1の複素Hodge構造変動なら、

$$
\mu(E^{1,0})-\mu(E^{0,1})\le \mu\bigl(\Omega_Y^{[1]}(\log D)\bigr)=(K_Y+D)^d.
$$

等号なら $E^{1,0}$ と $E^{0,1}$ はともに半安定である。

## 証明の見取り図

MMPの特異点と周期写像のファイバーを解析して適合モデルを作り、特異空間上のHiggs層の半安定性からArakelov不等式を得る。非コンパクト曲面の場合、等号とHiggs場の長さから普遍被覆上の周期写像像をSiegel空間内の全測地的部分多様体とし、Mokの着想と対称空間論で局所対称性を示す。bidiscの場合を安定性で排除して球を特定する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.37023](https://arxiv.org/abs/2609.37023)
- **Introduction:** Section 1, pp. 1–6
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2, and 1.4
- **論文構成の説明:** Sections 1.1–1.2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
