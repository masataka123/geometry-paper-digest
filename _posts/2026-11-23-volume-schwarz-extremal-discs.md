---
layout: paper
title: 'Remark on Kobayashi''s conjecture: a volume Schwarz lemma'
title_ja: 極値正則円板の体積Schwarz補題と標準束のビッグ性
authors: Shiyu Zhang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.CV
arxiv_abstract: 'This remark offers an expository reconstruction of OpenAI''s proof of Kobayashi''s ampleness conjecture for compact Kähler manifolds, together with new results. We extract a volume Schwarz lemma for extremal discs and derive a pointwise volume comparison: the volume form of a Kähler metric with $\mathrm{Ric}(ω)\ge-ω$ is bounded below by an intrinsic volume form built from the Kähler--Einstein metrics of pseudoconvex domains containing the Kobayashi--Royden indicatrix. As a consequence, if a compact Kähler manifold $X$ has nef canonical bundle and its Kobayashi--Royden indicatrix is bounded at some point, then $X$ is of general type.'
topic: differential-geometry
tags:
- hyperbolicity
- kahler-einstein-metrics
- positivity
arxiv_id: 2611.26524v1
arxiv_url: https://arxiv.org/abs/2611.26524
arxiv_submitted: '2026-11-19'
arxiv_updated: '2026-11-19'
summary: コンパクトKähler多様体の一点でKobayashi–Royden指示体が有界なら、nefな標準束はビッグである。極値正則円板の変分から体積比較を導き、小林予想に関するOpenAIの議論を一点での条件に拡張する。
abstract_en: ''
summary_en: A tangent indicatrix at a single point controls an extremal problem over pointed holomorphic discs. Comparing variations of a maximizing disc supplies an intrinsic lower bound for Kähler volume. The bound forces a nef canonical class to have positive volume even when hyperbolicity fails elsewhere.
abstract_ja: 正則円板の中心で取れる微分の大きさから、その点でのKähler体積に下界を与える。接空間の有界擬凸領域上の完備Kähler–Einstein計量が比較の対象になる。大域的な双曲性は仮定せず、標準束のnef性は別に必要となる。
abstract_source_url: https://arxiv.org/abs/2611.26524
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.26524v1](https://arxiv.org/abs/2611.26524)
- **著者:** Shiyu Zhang
- **初回投稿日:** 2026-11-19
- **最終更新日:** 2026-11-19
- **主分類・副分類:** math.DG（主分類）; math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

正則円板が一点からどの方向へどれほど速く動けるかは、接空間のKobayashi–Royden指示体に記録される。著者はOpenAIによる小林予想の証明をたどり、この局所的な量とKähler体積を比較する。

比較には負曲率の背景計量をあらかじめ必要としない。指示体を包む有界擬凸領域の完備Kähler–Einstein計量から内在的体積を作る。

帰結として、標準束がnefなら、一点での指示体の有界性だけで多様体は一般型となる。他の点を通る有理曲線や整曲線の存在は許される。

## 背景と問題設定

従来の負の正則断面曲率の議論では恒等写像にSchwarz補題を適用する。OpenAIの証明は中心を固定した正則円板を変分する。著者は後者から行列式に関する不等式を取り出す。

## 主結果

### 極値円板（Theorem A）

指示体が有界な点 $x$ を中心とする円板について、$J(f)=u(f'(0))+R\_\omega(f)$ は最大値を取る。ここで $R\_\omega$ は円板上の引き戻しを $\log|z|$ で重み付けしたRiesz汎関数である。最大円板 $f$ の中心微分の近くで $u$ が $C^2$ 級で、その点でLevi形式が半正なら、
$$
\omega^n(x)\ge e^{-R\_{\mathrm{Ric}(\omega)}(f)}
(i\partial\bar\partial u)^n(f'(0)).
$$

### 体積比較（Theorem B）

$\mathrm{Ric}(\omega)\ge-\omega$ なら $\omega^n\ge S$ である。$S$ は指示体を包む擬凸領域のKähler–Einstein体積で定める内在的体積形式である。

### 標準束の正値性（Theorem C）

$K\_X$ がnefで、ある一点の指示体が有界なら $K\_X$ はビッグである。nef性を外せるかどうかはQuestion 1.3として残る。

## 証明の見取り図

面積評価で最大化列の中心でのバブルを排除する。境界でのフレームを選んで第二変分を取り、その行列不等式の行列式を評価する。擬凸領域のKähler–Einsteinポテンシャルを代入すると内在的な体積比較が従う。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.26524)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.26524v1) — §1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems A–C, Question 1.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.26524v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
