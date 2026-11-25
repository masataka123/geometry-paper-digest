---
layout: paper
title: Optimal first eigenvalue estimates for positive holomorphic sectional curvature
title_ja: 正の正則断面曲率から従う第一固有値の最適下界
authors: Jiaxuan Fan, Mingwei Wang, Xiaokui Yang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: Let $(M,ω_g)$ be a compact Kähler manifold with holomorphic sectional curvature $\geq 2$. We prove that the first positive eigenvalue of the Laplacian $Δ_d$ satisfies $$λ_1\geq 4, $$ and $λ_1=4$ if and only if $(M,ω_g)$ is holomorphically isometric to $(\mathbb{P}^1,ω_{\mathrm{FS}})$.
topic: differential-geometry
tags:
- curvature
arxiv_id: 2611.30482v1
arxiv_url: https://arxiv.org/abs/2611.30482
arxiv_submitted: '2026-11-23'
arxiv_updated: '2026-11-23'
summary: 正則断面曲率が2以上のコンパクトKähler多様体では、実ラプラシアンの第一正固有値は4以上となる。等号は標準的な射影直線だけで起こるが、どの次元でもこの定数は改善できない。
abstract_en: Let $(M,ω_g)$ be a compact Kähler manifold with holomorphic sectional curvature $\geq 2$. We prove that the first positive eigenvalue of the Laplacian $Δ_d$ satisfies $$λ_1\geq 4, $$ and $λ_1=4$ if and only if $(M,ω_g)$ is holomorphically isometric to $(\mathbb{P}^1,ω_{\mathrm{FS}})$.
summary_en: ''
abstract_ja: 著者らは複素直線方向の曲率下界から次元によらないスペクトル評価を得る。高次元では等号が実現しないにもかかわらず、異なる比率で計量を縮めた射影直線の積により第一正固有値を4に近づけられる。
abstract_source_url: https://arxiv.org/abs/2611.30482
license_name: CC0 1.0 Universal
license_url: http://creativecommons.org/publicdomain/zero/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.30482v1](https://arxiv.org/abs/2611.30482)
- **著者:** Jiaxuan Fan, Mingwei Wang, Xiaokui Yang
- **初回投稿日:** 2026-11-23
- **最終更新日:** 2026-11-23
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [CC0 1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)

## 要約

曲率の下界から第一固有値をどこまで押し上げられるか。ここで仮定するのは正則断面曲率の下界であり、すべての複素直線方向の曲率を制約する。

著者らは、射影直線で実現する値があらゆる次元の下界になることを示す。従来の次元依存評価では届かなかった定数である。

さらに、等号を実現する計量の分類と、等号に近づく高次元の例を分けて与える。高次元で等号が起こらないことと、高次元で最適定数が大きくなることは別の主張である。

## 背景と問題設定

Fubini–Study計量を正則断面曲率が恒等的に2となるよう正規化する。このとき複素射影直線の第一固有値は4である。先行評価 $(320(n-1)+576)/(81(n-1)+144)$ は複素次元 $n>1$ で4を下回っていた。

## 主結果

### 固有値の下界と等号剛性（Theorem 1.1）

コンパクトKähler多様体で $\mathrm{HSC}\ge2$ なら
$$
\lambda\_1\ge4.
$$
等号成立と、標準計量を備えた $\mathbb{CP}^1$ に正則等長であることは同値である。

### 各次元での鋭さ

$n\ge2$ で射影直線の $n$ 個の積をとり、一つの因子の計量を $1-(n-1)t$ 倍、残りを $t$ 倍する。$0<t<1/n$ では正則断面曲率は2以上に保たれ、
$$
\lambda\_1(M\_t)=\frac{4}{1-(n-1)t}\longrightarrow4\qquad(t\downarrow0).
$$
したがって等号計量の存在しない次元に限っても、4を一様に大きい定数に置き換えることはできない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.30482)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.30482v1) — §1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1.1 および直後の積の例。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.30482v1
- **確認したライセンス:** [CC0 1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)
- **source\_scope:** Abstract and Introduction
