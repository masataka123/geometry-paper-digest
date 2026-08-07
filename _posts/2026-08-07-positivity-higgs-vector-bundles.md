---
layout: paper
title: "Positivity of Higgs Vector Bundles"
title_ja: "Higgsベクトル束の正値性"
authors: "Indranil Biswas, Snehajit Misra, Nabanita Ray"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
arxiv_id: "2605.22402v1"
arxiv_url: "https://arxiv.org/abs/2605.22402"
arxiv_submitted: "2026-05-21"
arxiv_updated: "2026-05-21"
summary: >-
  Higgs場が零のとき通常のベクトル束の豊富性に戻るよう、Higgs豊富性の定義を修正する。新定義に対し、全ての曲線への引戻しとHiggs商の次数を一様に下から抑えるBarton--Kleiman型判定を証明する。
abstract_en: ""
summary_en: >-
  The authors revise a notion of ampleness for Higgs vector bundles so that a zero Higgs field recovers ordinary vector-bundle ampleness. Their definition uses nefness together with ampleness of determinant line bundles attached to all universal Higgs quotients. They prove functorial properties and characterize the revised positivity by a uniform lower bound for the degrees of Higgs quotients after pullback to curves. This gives a Higgs analogue of the Barton--Kleiman criterion.
abstract_ja: >-
  既存のHiggs束の豊富性はHiggs場を零にしても通常のベクトル束の豊富性と一致しない。本論文はこの不一致を解消するよう定義を修正し、新しいHiggs豊富性の諸性質を調べる。特に、曲線への全ての引戻しのHiggs商の次数によるBarton--Kleiman型判定を証明する。
abstract_source_url: "https://arxiv.org/abs/2605.22402"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2605.22402v1](https://arxiv.org/abs/2605.22402)
- **著者:** Indranil Biswas, Snehajit Misra, Nabanita Ray
- **初回投稿日・最終更新日:** 2026年5月21日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

線束のample・nefは多様体の幾何を測る基本概念であり、Hartshorne、Campana--Peternellらにより高階数ベクトル束へ拡張された。Higgs束にも同様の定義が提案されていたが、従来のHiggs豊富性はHiggs場を零にしても通常のベクトル束の豊富性へ戻らないという問題があった。

本論文はHiggs Grassmannスキーム上の全ての普遍商のdeterminant line bundleがampleであることとHiggs nefnessを組み合わせ、新しいHiggs豊富性を定義する。この定義では $(E,0)$ がHiggs ampleであることと、通常の束 $E$ がampleであることが一致する。

新定義は従来定義より弱く、従来の意味でHiggs ampleなら新しい意味でもHiggs ampleだが、逆は一般に成立しない。これは不整合を直すために条件を単に追加したのではなく、通常の豊富性を正しく包含するよう条件を調整したことを意味する。

主結果はBarton--Kleiman型の数値判定である。determinantの豊富性に加え、任意の曲線からの写像で引き戻した束の任意のHiggs商の次数が、固定ample classとの次数に比例して一様に正であることが、新しいHiggs豊富性と同値になる。

## 背景と問題設定

rank $r$ のHiggs束 $\mathcal E=(E,\theta)$ に対し、rank $k$ のHiggs商を表す $\operatorname{Gr}_k(\mathcal E)$ と普遍商 $\mathcal Q_{\mathcal E,k}$ を考える。新定義はHiggs nefness、$\det E$ の豊富性、および全ての $1\le k\le r-1$ に対する

$$
\mathcal O_{\operatorname{Gr}_k(\mathcal E)}(1)=\det\mathcal Q_{\mathcal E,k}
$$

の豊富性を要求する。通常の束ではrank 1の普遍商だけで足りるのに対し、Higgs商では全rankを調べる必要がある。

## 主結果

### Barton--Kleiman型判定（Theorem 1.1 / Corollary 3.4）

滑らかな射影多様体 $X$ と固定ample class $h\in\operatorname{NS}(X)_{\mathbb R}$ に対し、$\mathcal E=(E,\theta)$ がHiggs ampleであるための必要十分条件は次の二つである。

1. $\det(E)$ がampleである。
2. $X$ への全ての滑らかな射影曲線からの写像 $f:C\to X$ と、全てのHiggs商 $f^*\mathcal E\twoheadrightarrow\mathcal Q$ に対し、$C,f$ に依存しない $\delta>0$ が存在して

$$
\deg(\mathcal Q)\ge\delta\,(C\cdot f^*h)
$$

が成立する。

「各曲線ごとに正」というだけでなく、単一の $\delta$ が全曲線・全Higgs商を同時に制御する点が豊富性を捉える。Introductionは、この判定が新定義に対する主要な数値的特徴づけであると位置づける。

## 証明の見取り図

Introductionは証明が通常のBarton--Kleiman判定の議論に着想を得ると述べる。曲線上のHiggs Harder--Narasimhan理論で最小Higgs商傾きを捉え、一様な下界から各普遍商determinantのnef性を少しample方向へ押し上げる。逆向きには、Higgs Grassmannスキーム上のample line bundleの曲線に対する一様な正値性をHiggs商へ引き戻す。詳細な交点計算はIntroductionの範囲外なので、ここでは論理的な役割分担に留める。

## 原論文との対応
- **Abstractページ:** [arXiv:2605.22402](https://arxiv.org/abs/2605.22402)
- **Introduction:** Section 1, pp. 1--2
- **Introduction中で言及された主要定理番号:** Theorem 1.1（Corollary 3.4）
- **論文構成の説明:** IntroductionからSection 2への接続, p. 2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
