---
layout: paper
title: "From complex to non-Archimedean geometry: an approach to the YTD conjecture"
title_ja: "複素幾何から非Archimedes幾何へ：YTD予想への一つのアプローチ"
authors: "Sébastien Boucksom, Mattias Jonsson"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DG
arxiv_abstract: >-
  These notes expand on talks given by the authors at the 2025 Summer Research Institute in Algebraic Geometry in Fort Collins, Colorado. We discuss the relation between algebraic, analytic, and non-Archimedean geometry over the complex numbers, and sketch a proof of a version of the Yau--Tian--Donaldson conjecture for constant scalar curvature K\"ahler metrics.
topic: algebraic-geometry
tags:
  - k-stability
  - csck-extremal-kahler-metrics
  - pluripotential-theory
arxiv_id: "2602.10800v2"
arxiv_url: "https://arxiv.org/abs/2602.10800"
arxiv_submitted: "2026-02-11"
arxiv_updated: "2026-05-19"
summary: >-
  複素解析・代数・非Archimedes幾何の対応を用いて、cscK計量に対するYau–Tian–Donaldson予想の変分的証明を概説する。自己同型群の単位成分が自明な滑らかな偏極射影多様体について、cscK計量の存在と拡張K安定性の同値を説明する。
abstract_en: ""
summary_en: >-
  These expository notes connect complex analytic, algebraic, and trivially valued non-Archimedean geometry. They explain a variational route to a constant-scalar-curvature Kähler version of the Yau–Tian–Donaldson correspondence. The argument compares finite-energy complex metrics and geodesic rays with their non-Archimedean counterparts, using the Mabuchi functional on both sides. Under a discrete-automorphism hypothesis, the resulting criterion is an extended form of K-stability.
abstract_ja: >-
  2025年Summer Research Instituteの講演を発展させ、複素数上の代数幾何・解析幾何・非Archimedes幾何の関係を論じる。定スカラー曲率Kähler計量に対するYau–Tian–Donaldson予想の一つの版について、証明の概略を与える。
abstract_source_url: "https://arxiv.org/abs/2602.10800"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2602.10800](https://arxiv.org/abs/2602.10800)
- **著者:** Sébastien Boucksom, Mattias Jonsson
- **初回投稿日:** 2026年2月11日
- **最終更新日:** 2026年5月19日
- **主分類・副分類:** math.AG（主分類）, math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

偏極滑らかな射影多様体 $(X,L)$ に対し、$c_1(L)$ 内のcscK計量の存在を代数幾何的安定性で特徴づけるYau–Tian–Donaldson予想を扱う。本ノートの特色は、複素有限エネルギー計量の空間と自明付値上のBerkovich解析化を並行して見ることにある。

複素側では、Mabuchi汎関数を滑らかな正計量の空間から有限エネルギーpsh計量の空間 $\mathcal E^1$ へ延長し、その測地的凸性を使う。非Archimedes側では、test configurationに対応するFubini–Study計量を完備化した $\mathcal E^1_{\mathrm{na}}$ と非Archimedes Mabuchi汎関数を用いる。

自己同型群の単位成分が自明という仮定の下で、cscK計量の存在と $\widehat K$-安定性が同値になる。核心は、複素測地線rayに沿うMabuchi汎関数の漸近勾配を非Archimedes Mabuchi汎関数と同一視することである。

## 背景と問題設定

$\mathcal H$ を $L$ 上の滑らかな正計量の空間とすると、その $L^1$ 型Darvas距離による完備化は有限エネルギーpsh計量の空間 $\mathcal E^1$ と同一視される。cscK計量はMabuchi汎関数 $M$ の最小点に対応する。一方、非Archimedes Fubini–Study計量の空間 $\mathcal H^{\mathrm{na}}$ は正規ample test configurationと対応し、その完備化が $\mathcal E^1_{\mathrm{na}}$ である。

## 主結果

### cscK版YTD対応（Theorem A）

$(X,L)$ を偏極滑らかな複素射影多様体とし、$\operatorname{Aut}^0(X,L)$ が自明であるとする。このとき

$$
c_1(L)\text{ にcscK計量が存在する}
\quad\Longleftrightarrow\quad
(X,L)\text{ は }\widehat K\text{-安定である}.
$$

ここで $\widehat K$-安定性は、$\mathcal E^1_{\mathrm{na}}$ 上で $M^{\mathrm{na}}\ge0$、定数ポテンシャル以外では狭義不等式が成り立つという条件である。

### 勾配公式

基準計量から出るpsh測地線ray $\{\varphi_t\}$ が $\varphi\in\mathcal E^1_{\mathrm{na}}$ を定める場合、Introductionは中心公式を

$$
\lim_{t\to\infty}t^{-1}M(\varphi_t)=M^{\mathrm{na}}(\varphi)
$$

と記す。rayが非Archimedes有限エネルギー空間の外にある場合には勾配は無限大となる。この二分法により、全測地線ray上の解析的安定性を非Archimedes安定性へ翻訳する。

## 証明の見取り図

まずMabuchi汎関数の最小点とcscK計量を結び、測地的凸性から存在問題を全非自明測地線rayに沿う増大条件へ変換する。次に $\mathcal E^1_{\mathrm{na}}$ を複素側の測地線ray空間へ埋め、上の勾配公式を適用する。最後に $\widehat K$-安定性が一様版と同値であり、section ringのfiltrationや因子的付値の有理凸結合で検査できることを用いる。

## 原論文との対応

- **Abstractページ:** [arXiv:2602.10800](https://arxiv.org/abs/2602.10800)
- **Introduction:** pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorem A, Theorem 6.2
- **論文構成の説明:** Introduction, pp. 3–4
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
