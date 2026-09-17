---
layout: paper
title: "Finite time singularities of the Ricci flow on compact Kähler surfaces are of Type I"
title_ja: "コンパクトKähler曲面上のRicci流の有限時間特異点はType Iである"
authors: "Charles Cifarelli, Ronan Conlon, Max Hallgren, Junsheng Zhang"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  For any volume-collapsing finite-time singularity of a Kähler-Ricci flow on a compact Kähler surface, we show the flow satisfies a Type I curvature bound and classify the corresponding tangent flows. Combined with previous results, this shows that any finite-time singularity of a Kähler-Ricci flow on a compact Kähler surface is of Type I.
topic: differential-geometry
tags:
  - kahler-ricci-flow-solitons
  - curvature
  - metric-limits
arxiv_id: "2609.16733v1"
arxiv_url: "https://arxiv.org/abs/2609.16733"
arxiv_submitted: "2026-09-15"
arxiv_updated: "2026-09-15"
summary: >-
  コンパクトKähler曲面上のKähler–Ricci流で残されていた体積崩壊型の有限時間特異点を扱い、全域的なType I曲率評価と接流の分類を与える。既知の非崩壊・消滅の場合と合わせ、有限時間特異点がすべてType Iであることが完成する。
abstract_en: ""
summary_en: >-
  The paper resolves the volume-collapsing case of finite-time Kähler–Ricci flow singularities on compact complex surfaces. It proves a global Type I curvature estimate and identifies the pointed blow-up limits according to whether the base point lies over a regular or singular fiber of the limiting Fano fibration. Together with earlier work on the other volume regimes, this yields a complete Type I statement for finite-time singularities in complex dimension two.
abstract_ja: >-
  コンパクトKähler曲面上のKähler–Ricci流について、体積崩壊を伴う有限時間特異点がType I曲率評価を満たすことを示す。正則ファイバー上の接流は $\mathbb C\times\mathbb P^1$ の円筒型計量であり、特異ファイバー上では既知のKähler–Ricci縮小解になる。これにより曲面上の有限時間特異点のType I性が全場合で確立される。
abstract_source_url: "https://arxiv.org/abs/2609.16733"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.16733](https://arxiv.org/abs/2609.16733)
- **著者:** Charles Cifarelli, Ronan Conlon, Max Hallgren, Junsheng Zhang
- **初回投稿日・最終更新日:** 2026年9月15日
- **主分類:** math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

コンパクトKähler曲面のKähler–Ricci流が有限時刻 $T$ で特異になるとき、非崩壊、体積崩壊、消滅の三つの挙動がある。本論文は最後まで一般の場合が残っていた体積崩壊を扱う。

極限Kähler類が曲線 $Y$ へのFanoファイブレーション $\widetilde\pi:M\to Y$ の引き戻しになる状況で、特異ファイバー近傍も含む全域的Type I評価を証明する。さらに、正則ファイバーと特異ファイバーで異なる接流を明示的に分類する。

## 背景と問題設定

Type I評価とは、ある $C>0$ が存在して

$$
\sup_M|\operatorname{Rm}(\widetilde g_t)|_{\widetilde g_t}\le \frac{C}{T-t}
$$

が成り立つことである。体積崩壊の場合は

$$
0<\lim_{t\nearrow T}(T-t)^{-1}\operatorname{Vol}_{\widetilde g_t}(M)<\infty
$$

であり、正則ファイバー近傍の評価は既知だったが、特異ファイバー近傍が障害であった。

## 主結果

### 主定理（Theorem A）

体積崩壊するコンパクトKähler曲面上のRicci流はType I特異点を形成する。さらに、$U\subset Y$ を正則値の集合とすると、$p\in\widetilde\pi^{-1}(U)$ に基づく任意のType Iスケールの部分列極限は

$$
(\mathbb C\times\mathbb P^1,g_{\mathbb C}+g_{\rm FS})
$$

である。特異ファイバー上の点に基づく極限は、Bamlerらが構成した $\mathbb C\times\mathbb P^1$ の爆発上のKähler–Ricci縮小解となる。既知結果と合わせ、コンパクトKähler曲面の任意の有限時間特異点がType Iである。

## 証明の見取り図

特異ファイバー上の接流が滑らかであることが核心である。随伴公式とFanoファイブレーション構造から候補空間の位相と特異点を絞り、相対極小モデルと交叉行列を用いてorbifold特異点を排除する。接流を二種類に分類した後、Type I評価が破れると仮定してさらに小さい尺度で非自明な特異縮小解を作り、Nash entropyの上界と分類済み接流のentropy下界を矛盾させる。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.16733](https://arxiv.org/abs/2609.16733)
- **Introduction:** Section 1, pp. 1–3
- **主要定理:** Theorem A
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
