---
layout: paper
title: "Gromov-Hausdorff limits of immortal Kähler-Ricci flows"
title_ja: "長時間存在するKähler–Ricci flowのGromov–Hausdorff極限"
authors: "Man-Chun Lee, Valentino Tosatti, Junsheng Zhang"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.CV
  - math.MG
arxiv_abstract: >-
  We show that the normalized Kähler-Ricci flow on a compact Kähler manifold with semiample canonical bundle converges in the Gromov-Hausdorff topology to the metric completion of the twisted Kähler-Einstein metric on the canonical model, as conjectured by Song-Tian's analytic mimimal model program.
topic: differential-geometry
tags:
  - kahler-ricci-flow-solitons
  - metric-limits
  - kahler-einstein-metrics
  - calabi-yau-geometry
arxiv_id: "2602.19913v2"
arxiv_url: "https://arxiv.org/abs/2602.19913"
arxiv_submitted: "2026-02-23"
arxiv_updated: "2026-05-19"
summary: >-
  半ampleな標準束をもつコンパクトKähler多様体上の正規化Kähler–Ricci flowについて、Song–Tianの予想した大域的Gromov–Hausdorff収束を証明する。極限は標準モデル上のtwisted Kähler–Einstein計量の距離完備化であり、崩壊する中間Kodaira次元も追加の滑らかさ仮定なしに含む。
abstract_en: ""
summary_en: >-
  This work determines the global metric limit of the normalized Kähler–Ricci flow when the canonical bundle is semiample. The evolving compact Kähler manifold converges in the Gromov–Hausdorff sense to the completion of the canonical model equipped with its twisted Kähler–Einstein metric. The theorem covers both collapsing and non-collapsing regimes without imposing regularity assumptions on the canonical model or discriminant. Its proof controls parabolic geodesics near the singular region through an almost-avoidance argument and metric-measure estimates.
abstract_ja: >-
  半ampleな標準束をもつコンパクトKähler多様体上の正規化Kähler–Ricci flowは、標準モデル上のtwisted Kähler–Einstein計量の距離完備化へGromov–Hausdorff収束する。これはSong–Tianの解析的極小モデル・プログラムにおける予想を解決する。
abstract_source_url: "https://arxiv.org/abs/2602.19913"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2602.19913v2](https://arxiv.org/abs/2602.19913)
- **著者:** Man-Chun Lee, Valentino Tosatti, Junsheng Zhang
- **初回投稿日:** 2026-02-23
- **最終更新日:** 2026-05-19
- **主分類・副分類:** math.DG（primary）, math.CV, math.MG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

コンパクトKähler多様体 $(X,\omega_0)$ 上の正規化Kähler–Ricci flowが全時刻で存在し、標準束 $K_X$ がsemiampleである場合を考える。十分な倍数の標準系はIitaka fibration $f:X\to Y$ を定め、その一般ファイバーはCalabi–Yau多様体となる。

正則部分ではflowが標準モデル $Y$ 上のtwisted Kähler–Einstein計量へ局所滑らかに収束することが既知であった。しかし判別集合の逆像付近の制御が難しく、この局所収束から大域的な距離空間収束を導くことが問題であった。

主定理は、正規化flowがtwisted Kähler–Einstein計量の距離完備化 $(Y,d_{\rm can})$ へGromov–Hausdorff収束することを示す。Kodaira次元が $0$ または $n$ の端点だけでなく、体積が崩壊する $0<m<n$ も含み、標準モデルや判別因子への追加の正規交差仮定を必要としない。

既知結果により $(Y,d_{\rm can})$ は $Y$ と同相なnon-collapsed RCD空間であるため、定理は解析的MMPの極限を標準モデルの位相と結び付ける。

## 背景と問題設定

flowは

$$
\frac{\partial}{\partial t}\omega(t)=-\operatorname{Ric}(\omega(t))-\omega(t),
\qquad \omega(0)=\omega_0
$$

で与えられる。$K_X$ がsemiampleなら、$m=\kappa(X)$ として

$$
f:X\longrightarrow Y\subset\mathbb P^N,
\qquad \ell K_X=f^*(\mathcal O_{\mathbb P^N}(1)|_Y)
$$

が得られる。判別集合と $Y$ の特異集合の和を $D$ とし、$Y^\circ=Y\setminus D$ 上のtwisted Kähler–Einstein計量を $\omega_{\rm can}$ とする。

## 主結果

### Song–Tian予想の解決（Theorem 1.2）

IntroductionではConjecture 1.1の設定として次のように述べられている。$K_X$ がsemiampleなコンパクトKähler多様体上の正規化Kähler–Ricci flowに対し、$t\to\infty$ のとき

$$
(X,\omega(t))\xrightarrow{\mathrm{GH}}(Y,d_{\rm can}),
$$

ここで右辺は $(Y^\circ,\omega_{\rm can})$ の距離完備化である。これによりSong–TianのConjecture 1.1が一般に成立する。

## 証明の見取り図

Perelmanのreduced volumeの単調性を、Ricci曲率下界のもとでのBishop–Gromov比較の放物型対応物として利用する。一般の特異な $Y$ では円錐計量による近似が使えないため、判別集合を細かく層別化し、最小 $\mathcal L$-geodesicが悪い領域を避ける、または制御された回数と時間だけ通るalmost-avoidance原理を確立する。RCD性による近傍の体積上界と $d_{\rm can}$ のHölder評価を組み合わせ、標準モデル側の距離を放物型距離で上から抑えてGH収束を得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2602.19913](https://arxiv.org/abs/2602.19913)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Conjecture 1.1; Theorem 1.2
- **論文構成・証明方針の説明:** pp. 3–4
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
