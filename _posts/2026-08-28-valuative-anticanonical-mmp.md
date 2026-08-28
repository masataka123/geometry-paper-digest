---
layout: paper
title: "A valuative approach to the anticanonical minimal model program"
title_ja: "反標準極小モデル・プログラムへの付値的アプローチ"
authors: "Sung Rak Choi, Sungwook Jang, Donghyeon Kim, Dae-Won Lee"
arxiv_primary_category: "math.AG"
arxiv_categories: [math.AG]
arxiv_abstract: >-
  In this paper, we show that the log canonical threshold of a potentially klt triple can be computed by a quasi-monomial valuation. The notion of potential triples provides a larger and more flexible framework to work with than that of generalized pairs. Our main result can be considered as an extension to the result of Xu on klt pairs. As an application of the main result, we show that we can run the MMP on any potentially klt triples and $-(K_X+Δ)$-MMP on the potentially klt pairs.
topic: algebraic-geometry
tags: [singularities, birational-geometry, minimal-model-program]
arxiv_id: "2506.13637v1"
arxiv_url: "https://arxiv.org/abs/2506.13637"
arxiv_submitted: "2025-06-16"
arxiv_updated: "2025-06-16"
summary: >-
  potentially klt tripleの対数的標準閾値が準単項付値で計算されることを示す。これを摂動に用い、potential tripleに対するMMPとpotentially klt pairに対する反標準MMPを実行可能にする。
abstract_en: ""
summary_en: >-
  The paper develops a valuative treatment of potentially klt triples, a framework broader than generalized pairs. It proves that their asymptotic log canonical threshold is attained by a quasi-monomial valuation. A perturbation consequence then supplies the positivity needed to run a minimal model program. In particular, the method applies to the anticanonical MMP of potentially klt pairs.
abstract_ja: >-
  potentially klt tripleの対数的標準閾値を準単項付値が計算することを証明する。potential tripleは一般化対より広い枠組みであり、結果はklt対に対するXuの定理を拡張する。応用として、potentially klt tripleのMMPおよびpotentially klt pairの$-(K_X+\Delta)$-MMPを実行できる。
abstract_source_url: "https://arxiv.org/abs/2506.13637"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2506.13637v1](https://arxiv.org/abs/2506.13637v1)
- **著者:** Sung Rak Choi, Sungwook Jang, Donghyeon Kim, Dae-Won Lee
- **初回投稿日・最終更新日:** 2025年6月16日
- **主分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

対数的標準閾値は双有理幾何における特異点の基本的不変量である。klt対では閾値を準単項付値が計算するというXuの結果がある。

本論文は、対$(X,\Delta)$と擬有効$\mathbb R$-Cartier因子$D$からなるpotential tripleへ対象を広げる。potentially kltという条件の下で、漸近付値により定義される閾値が準単項付値で達成されることを示す。

この達成性から$D$をわずかに増した$(X,\Delta,(1+\varepsilon)D)$もpotentially kltであるという摂動結果を導き、対応するMMPを実行する。反標準因子を選ぶことで反標準MMPが得られる。

## 背景と問題設定

通常の対とgraded ideal $\mathfrak a_\bullet$に対する閾値は、log discrepancyと付値の比の下限で記述される。potential tripleでは

$$
\operatorname{lct}_\sigma(X,\Delta,D)=\inf_{\nu\in\operatorname{Val}_X^*}
\frac{A_{X,\Delta}(\nu)}{\sigma_\nu(D)}
$$

を考える。ここで$\sigma_\nu(D)$は漸近付値である。難点は$D$がbigでないと付値空間上のこの関数が一般に連続でないことである。

## 主結果

### 主定理1（Theorem 1.1）

pklt triple $(X,\Delta,D)$には、上の閾値を計算する準単項付値$\omega$が存在し、

$$
\operatorname{lct}_\sigma(X,\Delta,D)=\frac{A_{X,\Delta}(\omega)}{\sigma_\omega(D)}
$$

となる。一般のpotential tripleで下限の達成者を具体的な付値クラスに置く結果である。

### MMPへの応用（Theorem 1.2, Corollaries 1.3–1.4）

$0<\varepsilon\ll1$に対して$(K_X+\Delta+(1+\varepsilon)D)$-MMPをample因子によるscaling付きで実行できる。$D=-(K_X+\Delta)$なら反標準MMPが得られ、曲面ではflipがないため反標準極小モデルが存在する。

## 証明の見取り図

閾値を近似する付値列を同じcenterに揃え、diminished multiplier idealを用いて最大イデアルへの付値に一様な正の下界を与える。体を拡大して付値列をlog-smooth pairのdual complex上の準単項付値として表し、BFJの連続性をこの有限的な場所で適用する。収束部分列の極限が閾値を計算し、準単項性を保つ。MMPの主張はこの結果による摂動とDiophantine近似から導かれる。

## 原論文との対応

- **Abstractページ:** [arXiv:2506.13637v1](https://arxiv.org/abs/2506.13637v1)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2; Corollaries 1.3, 1.4
- **論文構成の説明:** p. 3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
