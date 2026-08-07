---
layout: paper
title: "Seshadri constants of Higgs Vector bundles"
title_ja: "Higgsベクトル束のSeshadri定数"
authors: "Krishna Hanumanthu, Snehajit Misra, Nabanita Ray"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
arxiv_id: "2605.25776v2"
arxiv_url: "https://arxiv.org/abs/2605.25776"
arxiv_submitted: "2026-05-25"
arxiv_updated: "2026-06-06"
summary: >-
  Higgsベクトル束に局所的正値性を測るSeshadri定数を導入し、Higgs豊富性の判定、曲線への制限による計算、曲線上での最小Higgs傾きとの一致を示す。通常のベクトル束の理論を、Higgs商を記録するGrassmannスキームへ移す研究である。
abstract_en: ""
summary_en: >-
  The paper introduces local Seshadri invariants for Higgs vector bundles on smooth projective varieties in characteristic zero. It relates the invariant on a curve to the least slope among Higgs quotients and establishes a uniform positivity test for Higgs ampleness. It also shows that the local invariant may be recovered by restricting the bundle to curves through the chosen point. Further results examine standard bundle operations and examples with very small positive constants.
abstract_ja: >-
  標数0の代数閉体上の滑らかな射影多様体で、Higgsベクトル束のSeshadri定数を定義する。通常のベクトル束に対する局所的不変量との類似を確立し、Higgs豊富性のSeshadri型判定を得る。さらに、曲線への制限から定数を計算できること、曲線上では最小Higgs傾きに一致することを示す。
abstract_source_url: "https://arxiv.org/abs/2605.25776"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2605.25776v2](https://arxiv.org/abs/2605.25776)
- **著者:** Krishna Hanumanthu, Snehajit Misra, Nabanita Ray
- **初回投稿日:** 2026年5月25日
- **最終更新日:** 2026年6月6日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Seshadri定数は、線束の正値性を一点の近傍で数量化する不変量である。Haconらはこれを高階数ベクトル束へ広げたが、本論文はさらにHiggs場を備えた束へ拡張する。

中心となる考えは、Higgs場と両立する商だけをパラメータ化するHiggs Grassmannスキーム上の普遍商線束を用いることである。これにより、通常のSeshadri定数と同じく曲線との交点数と重複度の比から局所的不変量を作りつつ、Higgs構造を失わない。

Introductionが挙げる主要成果は三つある。曲線上で定数が最小Higgs傾きに等しいこと、全点で一様な正の下限を持つことがHiggs豊富性を特徴づけること、そして一点での定数をその点を通る曲線への制限から計算できることである。

さらに論文はテンソル積、対称冪、完全列に対する挙動、 ruled surface 上の計算例、正でありながら任意に小さい定数を与えるMiranda型現象を扱うと予告する。これらは主概念が単なる定義の移植ではなく、通常の正値性理論に対応する演算的性質を備えることを示す。

## 背景と問題設定

射影多様体 $X$ 上のnef線束 $L$ と点 $x$ に対し、古典的定義は

$$
\varepsilon(L;x)=\inf_{x\in C\subset X}\frac{L\cdot C}{\operatorname{mult}_x C}
$$

である。ベクトル束では射影束上のSerre線束を使う。本論文は射影束全体ではなく、Higgs商を表す閉部分スキーム $\operatorname{Gr}_k(\mathcal E)$ とその普遍商 $\mathcal Q_k$ を使うことで、Higgs場に適合する局所正値性を抽出する。

Higgs束 $\mathcal E=(E,\theta)$ の曲線上での最小Higgs傾きは、非零Higgs商 $\mathcal Q$ 全体について

$$
\mu^H_{\min}(\mathcal E)=\min\{\mu(\mathcal Q)\mid \mathcal E\twoheadrightarrow\mathcal Q,\ \mathcal Q\ne0\}
$$

と表される。これが局所的不変量と傾き安定性を結ぶ量になる。

## 主結果

### 曲線上の同定（Theorem 4.7）

滑らかな射影曲線上では、Higgs Seshadri定数はその束の最小Higgs傾きに等しい。したがって局所的に定義された量が、Harder--Narasimhan理論から得られる大域的な最小商傾きで計算できる。

### Higgs豊富性の判定（Theorem 4.9）

Introductionでは概略として、Higgs Seshadri定数が全点で一様な正の下限を持つことによりHiggs豊富性を判定できる、と述べられている。これは線束のSeshadri判定をHiggs束へ運ぶ結果であり、単に各点で正であることと、一様な正値性を区別する。

### 曲線への制限（Theorem 4.11）

一点でのHiggs Seshadri定数は、その点を通る曲線への制限から計算できる。高次元多様体上の局所正値性を曲線上のHiggs商と傾きへ還元できる点が、Theorem 4.7との組合せで実用的な意味を持つ。

## 証明の見取り図

Introductionが示す論理は、Higgs Grassmannスキーム上の普遍Higgs商を通じて交点論的定義を作り、曲線上ではHiggs Harder--Narasimhanフィルトレーションの最小商へ落とす、というものである。その曲線上の同定を、全曲線に沿う一様な正値性および制限公式へ接続する。Introductionは各証明の詳細を述べていないため、ここではこの構成上の流れに限る。

## 原論文との対応

- **Abstractページ:** [arXiv:2605.25776](https://arxiv.org/abs/2605.25776)
- **Introduction:** Section 1, pp. 1--3
- **Introduction中で言及された主要定理番号:** Theorems 4.7, 4.9, 4.11, 5.12, 5.15, 5.19; Corollaries 5.5, 5.14; Proposition 5.7
- **論文構成の説明:** pp. 2--3
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
