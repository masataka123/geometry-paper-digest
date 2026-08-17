---
layout: paper
title: "Griffiths and Nakano positivity and Nakano-Nadel vanishing theorems for singular Hermitian metrics on complex spaces"
title_ja: "複素空間上の特異 Hermite 計量の正値性と Nakano–Nadel 消滅"
authors: "Yuta Watanabe"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
topic: several-complex-variables
tags:
  - positivity
  - vector-bundles-sheaves
  - l2-methods
  - multiplier-ideals-extension
arxiv_id: "2606.16275v1"
arxiv_url: "https://arxiv.org/abs/2606.16275v1"
arxiv_submitted: "2026-06-15"
arxiv_updated: "2026-06-15"
summary: >-
  特異複素空間上のベクトル束に対して特異 Griffiths・Nakano 正値性を整備し、解消との対応と $L^2$ Dolbeault 理論を構築する。弱擬凸複素空間上で高次コホモロジーの Nakano–Nadel 型消滅を導く。
abstract_en: ""
summary_en: >-
  This paper develops notions of Griffiths and Nakano positivity for singular Hermitian metrics on vector bundles over complex spaces. It analyzes how these notions behave under a canonical resolution and builds fine Dolbeault resolutions from forms on the regular locus. Global weighted estimates for the d-bar equation then lead to Nakano–Nadel type vanishing on weakly pseudoconvex spaces. The framework also gives higher direct-image vanishing and cohomological comparison with a resolution.
abstract_ja: >-
  複素空間上で $\bar\partial$ 作用素の一般的な $L^2$ 理論を作るため、ベクトル束の特異 Hermite 計量に対する Griffiths および Nakano 正値性を定義し、その解消上への引き戻しとの関係を調べる。正則部分上の $L^2$ 形式から fine Dolbeault resolution、コホモロジー同型、$L^2$ 存在定理を構成し、弱擬凸複素空間上の Nakano–Nadel 型消滅定理を得る。
abstract_source_url: "https://arxiv.org/abs/2606.16275v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2606.16275v1](https://arxiv.org/abs/2606.16275v1)
- **著者:** Yuta Watanabe
- **初回投稿日・最終更新日:** 2026年6月15日（確認した v1）
- **主分類:** math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかな多様体上では特異 Hermite 計量と $\bar\partial$ の $L^2$ 評価が正値性・消滅定理を結ぶが、特異複素空間では正則部分と特異集合、解消上の例外因子を同時に扱う必要がある。本論文は Griffiths 正値性をカレント、Nakano 正値性を $L^2$ 評価によって定式化する。

これらの正値性が標準的な特異点解消への引き戻しとどう対応するかを証明する。Nakano 正値性は余次元一の現象に鈍感で引き戻しと同値になる一方、Griffiths 正値性の逆向きには正規性または局所有限性条件が現れる。

さらに Grauert–Riemenschneider 標準層の計量付き版を正則部分の可積分性から定め、$L^2$ Dolbeault fine resolution と解消上の層コホモロジーとの同型を構成する。最終的に弱擬凸 Kähler 複素空間上の大域 $L^2$ 解法から高次コホモロジー消滅を得る。

## 背景と問題設定

主な障害は、特異点解消 $\pi:\widetilde X\to X$ の例外因子上で正値性が退化し得ることと、特異計量の $L^2$ 部分層を保つ必要があることである。論文は negativity lemma と strong openness を組み合わせ、準多重劣調和関数による微小な twist で正値性を補う。

## 主結果

### 解消と正値性（Theorems 1.1–1.4）

Griffiths 半正値性は $\pi^*h$ に引き継がれ、局所既約性の下では逆も成り立つ。連続 $(1,1)$-形式 $\theta$ に対する $\theta$-Nakano 正値性は
$$
h\text{ が }\theta\text{-Nakano 正値}\quad\Longleftrightarrow\quad
\pi^*h\text{ が }\pi^*\theta\text{-Nakano 正値}
$$
である。また Griffiths 正値な $h$ から $h\otimes\det h$ の Nakano 正値性を得る。

### $L^2$ Dolbeault resolution（Theorem 1.8）

$X$ を純次元 $n$ の複素空間とし、$h$ が局所 Nakano 下方有界なら
$$
0\to\omega_X^{\mathrm{GR}}(E,h)\to\mathcal L_{E,h}^{n,0}
\xrightarrow{\bar\partial}\mathcal L_{E,h}^{n,1}\xrightarrow{\bar\partial}\cdots
$$
は exact な fine resolution になる。

### Nakano–Nadel 消滅（Theorems 1.12, 1.13）

特異正線束をもつ純次元の弱擬凸 Kähler 複素空間で $h$ が Nakano 正値なら
$$
H^q\!\left(X,\omega_X^{\mathrm{GR}}(E,h)\right)=0\qquad(q>0).
$$
非 Kähler の場合は $H^1$ の消滅までを得る。Griffiths 正値かつほとんど至る所半正値なら、$E\otimes\det E$ に対応する同様の消滅が成り立つ。

## 証明の見取り図

標準解消上に問題を移し、微小な準多重劣調和 twist で例外因子方向の退化を補正しつつ $L^2$ 部分層を保存する。既知の多様体上の $L^2$ 評価を正則部分へ戻して局所 resolution と大域 $\bar\partial$ 解を作り、fine resolution と組み合わせて層コホモロジーの消滅へ移す。

## 原論文との対応
- **Abstractページ:** [arXiv:2606.16275v1](https://arxiv.org/abs/2606.16275v1)
- **Introduction:** Section 1, pp. 1–5
- **主要定理:** Theorems 1.1–1.13（本記事では主要系列を抜粋）
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
