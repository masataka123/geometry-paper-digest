---
layout: paper
title: Free rational curves on singular Fano varieties
title_ja: 特異Fano多様体の滑らかな部分にある自由有理曲線
authors: Zheng Xu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We prove that every klt Fano variety admits a free rational curve in its smooth locus.
topic: algebraic-geometry
tags:
- fano-varieties
- singularities
- minimal-model-program
arxiv_id: 2611.30137v1
arxiv_url: https://arxiv.org/abs/2611.30137
arxiv_submitted: '2026-11-23'
arxiv_updated: '2026-11-23'
summary: klt Fano多様体では、特異点を一度も通らずに動く自由有理曲線が存在する。対数的bend-and-breakで得た曲線を極小モデルプログラムに沿って降ろすことで、滑らかな部分の有理連結性を導く。
abstract_en: ''
summary_en: A rational curve on a singular variety can owe its existence to the singular points it passes through. Xu constructs curves that move entirely inside the regular locus of a klt Fano variety. The construction tracks how a moving curve meets the exceptional divisors of a resolution.
abstract_ja: 反標準因子が豊富なklt多様体を考える。著者はその滑らかな開集合への自由射を構成し、二つの一般点を、その開集合の中の有理曲線で結べることを示す。
abstract_source_url: https://arxiv.org/abs/2611.30137
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.30137v1](https://arxiv.org/abs/2611.30137)
- **著者:** Zheng Xu
- **初回投稿日:** 2026-11-23
- **最終更新日:** 2026-11-23
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Fano多様体を有理曲線で調べる際、特異点を許すと、曲線の変形が滑らかな部分だけで完結するかが問題になる。一本の曲線から特異点を取り除くだけでは、射影直線全体からの射を得たことにはならない。

本論文はklt特異点を許す任意次元のFano多様体について、像が滑らかな部分に収まり、しかも自由に変形できる射を構成する。

この存在から滑らかな部分自身の有理連結性が従う。曲線の存在を多様体全体から開部分へ強める結果である。

## 背景と問題設定

滑らかな多様体 $V$ への非定数射 $f:\mathbb P^1\to V$ が自由であるとは、$f^\ast T\_V$ が大域切断で生成されることをいう。曲面ではKeel–McKernanが対数Fano曲面の滑らかな部分を扱い、三次元では終端特異点をもつFano三次元多様体で非常に自由な曲線が構成されていた。

## 主結果

### 滑らかな部分への自由射（Theorem 1.1）

klt Fano多様体 $X$ について自由射 $f:\mathbb P^1\to X\_{\mathrm{reg}}$ が存在する。像の一般点だけでなく全点が $X\_{\mathrm{reg}}$ に属する。

### 滑らかな部分の有理連結性（Corollary 1.2）

この状況で自由曲線の存在から非常に自由な曲線の存在が従い、$X\_{\mathrm{reg}}$ は有理連結となる。

## 証明の見取り図

対数解消上で対数的bend-and-breakを使い、元の多様体上で正の次数をもつ曲線を作る。フリップの中心は余次元二以上なので一般変形で避けられる。因子的収縮では、例外因子との各交点に法方向の次数が $-1$ の垂直曲線を付けて平滑化する。例外因子との交点数を零にしつつ元の多様体上の次数を保つことが、収縮を越えて進む鍵となる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.30137)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.30137v1) — §1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1.1、Corollary 1.2。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.30137v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
