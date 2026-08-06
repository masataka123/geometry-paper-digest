---
layout: paper
title: "Projective moduli of log Calabi--Yau fibrations over curves"
title_ja: "曲線上のlog Calabi--Yauファイブレーションの射影的モジュライ"
authors: "Giovanni Inchiostro, Junyan Zhao"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
arxiv_id: "2607.23878v1"
arxiv_url: "https://arxiv.org/abs/2607.23878v1"
arxiv_submitted: "2026-07-26"
arxiv_updated: "2026-07-26"
summary: >-
  曲線上のlog Calabi--Yauファイブレーションに新しい安定性条件を導入し、固定した数値的不変量ごとにproperなDeligne--Mumfordスタックと射影的粗モジュライ空間を構成する。境界でも平坦なファイブレーションというモジュラーな意味を保つよう、特異点、quasimap、Chow線束の条件を組み合わせる。
abstract_en: ""
summary_en: >-
  The paper formulates stability for log Calabi--Yau fibrations whose bases are curves. For fixed numerical data, the resulting non-degenerate objects form a proper finite-type Deligne--Mumford stack, and its coarse moduli space is projective. The compactification retains flat fibrations at the boundary by combining singularity control, a quasimap condition, and positivity from a Chow line bundle. This provides a modular compactification rather than merely an abstract proper space.
abstract_ja: >-
  曲線上のlog Calabi--Yauファイブレーションに対する新しい安定性条件を定める。この条件からproperなDeligne--Mumfordスタックと射影的粗モジュライ空間が得られ、その境界も平坦なファイブレーションをパラメータ化する。
abstract_source_url: "https://arxiv.org/abs/2607.23878v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2607.23878v1](https://arxiv.org/abs/2607.23878v1)
- **著者:** Giovanni Inchiostro, Junyan Zhao
- **初回投稿日:** 2026年7月26日
- **最終更新日:** 2026年7月26日（v1）
- **主分類・副分類:** Algebraic Geometry (math.AG)
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

代数多様体の最小モデルは、概念的にはFano、Calabi--Yau、標準偏極型のファイブレーションから組み立てられる。FanoにはK-moduli、標準偏極型にはKSBAモジュライが発展している一方、Calabi--Yau多様体には自然に選ばれる偏極がないため、一般的な射影的モジュライの構成は難しい。

本論文は、曲線を底とするlog Calabi--Yauファイブレーションをコンパクト化する。滑らかな対象だけでなく、一パラメータ退化の極限として何を境界に加えればpropernessとモジュラーな解釈を同時に保てるかが中心問題である。

## 背景と問題設定

非退化な基本対象は、正常射影多様体から滑らかな射影曲線への射 $f:(X,cD)\to C$ である。$D$ は水平かつ相対的にampleで、$(X,cD)$ はklt、さらにあるnefな $\mathbb Q$-線束 $L$ に対して $K_X+cD\sim_{\mathbb Q}f^*L$ を満たす。この枠組みは楕円曲面の高次元版、Calabi--Yau多様体の曲線上のファイブレーション、Fano fibrationを含む。

Definition 1.1のstable log Calabi--Yau fibrationでは、底をtwisted nodal curve、全空間をdemi-normalなDeligne--Mumfordスタックまで広げる。安定性はlog Calabi--Yau条件（LCY）、開部分でKSBA安定族となるquasimap条件（Qmap）、ファイバーのsemi-log canonical thresholdを制御する特異点条件（Sing）、Chow線束を用いたample性条件（Stab）からなる。

（Sing）は標準束公式の判別因子が底上でkltとなることに対応し、モジュライのseparatednessに不可欠である。（Stab）は随伴線束がnefにとどまる成分でも、Chow線束の正値性によって非自明な変動を検出する。KSBA安定極限がChow次数を最小化する性質を、境界因子がファイバー成分を含み得る状況へ拡張することが技術的入力となる。

（Qmap）は節点の近傍でKSBA安定族と平坦性を保証するため、底の節点にstack構造を許す。このstackinessはpropernessのために一般には避けられないが、粗空間から必要なroot stackとして一意に決まるという意味で制御されている。

## 主結果

### モジュライの properness と射影性（Theorem 1.2）

Theorem 1.2は、固定した数値的不変量 $\Phi$ ごとに、non-degenerate typeのstable log Calabi--Yau fibrationsをパラメータ化する有限型proper Deligne--Mumfordスタック $\mathcal M_\Phi$ が存在し、その粗モジュライ空間 $M_\Phi$ が射影的であると述べる。境界にも平坦なファイブレーションが残る点が、このコンパクト化の幾何学的内容である。

Introductionは、K-stable Calabi--Yau fibrationのモジュライなどとの比較や、高次元の底への拡張を将来課題として挙げる。後者には高次元多様体からモジュライスタックへの写像の理論が不足しており、本論文の結論は曲線上に限定される。

### 主結果の意味と射程

- 曲線上のstable log Calabi--Yau fibrationを四つの幾何的条件で定義する（Definition 1.1）。
- 固定数値的不変量に対してproperな有限型Deligne--Mumfordスタックを構成する（Theorem 1.2）。
- その粗モジュライ空間が射影的であることを示す。
- 境界でも平坦なファイブレーションを保ち、退化にモジュラーな解釈を与える。
- 特異点条件をseparatednessに、Chow線束の正値性をpropernessとprojectivityに結びつける。

## 証明の見取り図

Section 2で準備を行い、Section 3で安定なlog Calabi--Yau fibrationを定義する。Section 4でproperness、Section 5でboundedness、Section 6でDeligne--Mumfordスタックによる表現可能性、Section 7でprojectivityを証明する。

## 原論文との対応

- **Abstractページ:** [arXiv:2607.23878v1](https://arxiv.org/abs/2607.23878v1)
- **Introduction:** Section 1, pp. 1–8
- **Introduction中で言及された主要定理番号:** Definition 1.1, Theorem 1.2
- **論文構成の説明:** Section 1.4 and Contents, pp. 1, 8
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license（arXiv Abstractページの表示）
- **source_scope:** Abstract and Introduction
