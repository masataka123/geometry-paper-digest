---
layout: paper
title: Uniform Positivity of the $F$-Signature and Pure Descent of klt Singularities
title_ja: 標数還元におけるF-signatureの一様正値性とklt型特異点
authors: Rahul Ajit, Daniel Apsley
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.AC
arxiv_abstract: In this paper, we affirmatively answer the question of Carvajal-Rojas, Schwede, and Tucker on the uniform positivity of the $F$-signature, and prove a converse. Namely, given a klt type singularity, we establish uniform lower bounds on the $F$-signatures of its reductions mod $p$ for $p$ sufficiently large. Conversely, if the $F$-signatures of the reductions of a normal singularity are uniformly bounded below by a positive constant on large primes, we prove that the singularity is of klt type. As an application, we give a new reduction-mod-$p$ proof of Zhuang's theorem that klt type singularities descend along pure morphisms.
topic: algebraic-geometry
tags:
- singularities
- positive-characteristic
- fano-varieties
arxiv_id: 2611.26163v1
arxiv_url: https://arxiv.org/abs/2611.26163
arxiv_submitted: '2026-11-19'
arxiv_updated: '2026-11-19'
summary: 複素正規特異点がklt型であることを、標数還元のF-signatureが一様な正の下界を持つことで特徴づける。この数値条件から、純射のもとでのklt型特異点の降下に標数還元による証明を与える。
abstract_en: ''
summary_en: The invariant counts free summands asymptotically under Frobenius. A quantitative estimate for pairs leads to a lower bound that survives variation of the prime. In the opposite direction small signatures can be forced on an open set of reductions, yielding a criterion for singularities in characteristic zero.
abstract_ja: 個々の素数でFrobeniusの分裂が存在するかを問うだけでなく、分裂の漸近的な割合を標数に依存しない定数で下から押さえる。klt型でなければ任意の正定数を下回る開集合が存在するため、一様評価の失敗も数値的に検出される。
abstract_source_url: https://arxiv.org/abs/2611.26163
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.26163v1](https://arxiv.org/abs/2611.26163)
- **著者:** Rahul Ajit, Daniel Apsley
- **初回投稿日:** 2026-11-19
- **最終更新日:** 2026-11-19
- **主分類・副分類:** math.AG（主分類）; math.AC
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素特異点がklt型であるとは、適切な境界を加えてklt対にできることをいう。これを正標数の局所環のF-signatureから読み取れるかが主題である。

著者らは有限生成の基礎環上にモデルを取り、閉点での還元に対する一様な正の下界を与える。klt型でない場合には、一様下界の存在を否定する逆向きの評価を与える。

この対応からFano型の判定、純射による降下、局所エタール基本群の位数の評価が従う。一様な下界を与える向きについてはLuo–Polstraの独立な結果との重なりも序論で説明されている。

## 背景と問題設定

有限生成の整数環上に広げた特異点のモデルを使い、閉点を動かして標数を変える。各還元で不変量が正であっても、標数とともに零に近づく余地があるため、一様性は別の条件である。

## 主結果

### 標数を通じた一様性（Theorem 1.2）

$\Lambda\subset\mathbb C$ を有限型の $\mathbb Z$ 代数とし、有限型モデル上の切断で与えた点を考える。複素ファイバーがその点で正規なら、klt型の場合にはある $\varepsilon>0$ と空でない開集合があり、そこでのすべての閉点 $b$ で $s(\mathcal O\_{X\_b,x\_b})\ge\varepsilon$ となる。klt型でなければ任意の $\varepsilon>0$ に対し、空でない開集合のすべての閉点でこの値は $\varepsilon$ 未満となる。

### 対の下界（Theorem 1.3）

完全体上本質的有限型の $n$ 次元正規局所整域と、分母が標数と互いに素な有効境界 $\Delta$ を取る。剰余体はその完全体とする。Noether正規化に応じた非零元 $d$ を選べば、分母が標数と互いに素な $0<\eta<1$ に対し、$(R,\Delta+\eta\thinspace \mathrm{div}(d))$ の強F正則性から
$$
s(R,\Delta)\ge\frac{\eta^n}{2^n n!}
$$
が従う。

### 純射による降下（Theorem 1.5）

正規複素アフィン多様体の純射 $\mathrm{Spec}(B)\to\mathrm{Spec}(A)$ について、始域がklt型なら終域もklt型である。これはZhuangの定理の別証明である。

## 証明の見取り図

Noether正規化で選んだ境界をモデルに広げ、正標数で分裂の個数を下から評価する。逆向きでは分裂を正の対数的食い違いを持つ因子に結び付ける。純射の応用では還元後に射全体の純性を要求せず、必要な写像の値を含む有限生成部分加群に議論を限定する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.26163)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.26163v1) — §1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1.2, 1.3, 1.5, Corollaries 1.4, 1.6
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.26163v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
