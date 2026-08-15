---
layout: paper
title: "Kodaira-Iitaka dimension and multiplicity: an analytic perspective"
title_ja: "Kodaira–Iitaka次元と重複度の解析的記述"
authors: "Siarhei Finski"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.AG
  - math.DG
  - math.FA
topic: several-complex-variables
arxiv_id: "2603.22194v1"
arxiv_url: "https://arxiv.org/abs/2603.22194"
arxiv_submitted: "2026-03-23"
arxiv_updated: "2026-03-23"
summary: >-
  次数付き線形系列のKodaira–Iitaka次元と重複度を、付随する多重劣調和包絡の非pluripolar交叉で表す。さらにsupノルム単位球の体積比と部分Bergman核について計量的・点ごとの精密化を与え、新しい数値的次元を既存の不変量と比較する。
abstract_en: >-
  We express the Kodaira-Iitaka dimension and the multiplicity of graded linear series in terms of the intersection theory of the plurisubharmonic envelope associated with the linear series, and obtain two refined versions of these formulas at the pointwise and at the metric levels. At the pointwise level, we focus on the weak convergence of the partial Bergman kernel associated with the linear series and a Bernstein-Markov measure. At the metric level, we compute the asymptotic ratio of the volumes of unit balls defined by the sup-norms on the linear series. Based on our findings, we introduce a non-pluripolar version of the numerical Kodaira-Iitaka dimension for a line bundle, show that this invariant dominates the classical Kodaira-Iitaka dimension and is, in turn, bounded above by the numerical versions proposed so far.
summary_en: ""
abstract_ja: >-
  次数付き線形系列に付随する多重劣調和包絡の交叉理論によって、Kodaira–Iitaka次元と重複度を表す。点ごとの精密化ではBernstein–Markov測度に関する部分Bergman核の弱収束を、計量的精密化ではsupノルムが定める単位球の体積比の漸近を扱う。さらに非pluripolar版の数値的Kodaira–Iitaka次元を導入し、古典的次元以上で、既存の数値的次元以下であることを示す。
abstract_source_url: "https://arxiv.org/abs/2603.22194v1"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2603.22194v1](https://arxiv.org/abs/2603.22194v1)
- **著者:** Siarhei Finski
- **初回投稿日・最終更新日:** 2026年3月23日（v1）
- **主分類・副分類:** math.CV（主分類）、math.AG、math.DG、math.FA
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

射影多様体 $X$ 上の線束 $L$ と次数付き線形系列 $W=\bigoplus_{k\geq0}W_k$ を考える。代数的には $\dim W_k$ の増大率がKodaira–Iitaka次元 $κ(W)$ と重複度 $\operatorname{vol}_{κ}(W)$ を定める。本論文はこれを $W$ から作る多重劣調和包絡の非pluripolar交叉に翻訳する。

第一の公式は、包絡の第一Chern currentの非消滅次数から $κ(W)$ を読み取る。第二の公式は最高の非消滅交叉積を一般ファイバーの体積で正規化して重複度を与える。bigとは限らない線束にも適用できる点が中心である。

これを二方向に精密化する。計量方向では二つの連続計量が $W_k$ 上に定めるsupノルム単位球の体積比を相対Monge–Ampère $κ$-energyで記述し、点ごとの方向では部分Bergman測度を適切な像へ押し出した弱収束を示す。一般には押し出す前の弱収束が失敗する反例もある。

## 背景と問題設定

$P[W,h^L]$ は $W_k$ のsupノルムから得るFubini–Study特異計量の漸近包絡である。Kähler形式を $ω$ とすると、非pluripolar積

$$
c_1(L,P[W,h^L])^i\wedge ω^{n-i}
$$

が線形系列の代数的成長を測る。見かけ上は $h^L,ω$ に依存するが、主公式で使う非消滅次数と正規化量は本質的な不変量になる。

## 主結果

### Kodaira–Iitaka次元（Theorem 1.1）

任意の次数付き線形系列について

$$
κ(W)=\max\{i\in\{0,\ldots,n\}:c_1(L,P[W,h^L])^i\wedge ω^{n-i}\neq0\}.
$$

したがって、切断数の成長次数が包絡の非pluripolar数値次元として回収される。

### 重複度（Theorem 1.3）

十分大きい $m$ で線形系列が定める有理写像を $φ_m$ とすると

$$
\operatorname{vol}_{κ}(W)=\frac{1}{φ_*[ω]^{n-κ(W)}}
\int_X c_1(L,P[W,h^L])^{κ(W)}\wedge ω^{n-κ(W)}.
$$

bigな完全線形系列では既知の体積公式を回収し、一般の線形系列へ拡張する。

### 数値的次元の比較（Corollary 1.5）

有効線束 $L$ に非pluripolar数値次元 $κ_{\mathrm{np}}(L)$ を導入し、

$$
κ(L)\leq κ_{\mathrm{np}}(L)\leq κ_{\mathrm{mov}}(L)
$$

を得る。bigの場合には最初の不等式は等号だが、一般には逆向きは成立しない。

### 計量的・点ごとの精密化（Theorems 1.7, 1.9）

二つの連続計量に対応する単位球 $B_k(h_0^L),B_k(h_1^L)$ について、$k^{κ(W)+1}$ で正規化した対数体積比の極限は包絡間の相対Monge–Ampère $κ$-energyである。またBernstein–Markov測度から作る部分Bergman測度は、線形系列の有理写像を因子化する空間へ押し出すと平衡測度へ弱収束する。

## 証明の見取り図

Introductionによれば、Fubini–Study写像と包絡の交叉理論をFujita型近似・解消と組み合わせて次元と重複度の公式を示す。体積比にはBerman–Boucksomのbigな完全線形系列での方法を拡張し、Bergman測度の収束は相対energyの部分的微分可能性と結び付ける。

## 原論文との対応

- **Abstractページ:** [arXiv:2603.22194v1](https://arxiv.org/abs/2603.22194v1)
- **Introduction:** Section 1, pp. 1–8
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.3, 1.7, 1.9; Corollary 1.5
- **論文構成の説明:** p. 7
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
