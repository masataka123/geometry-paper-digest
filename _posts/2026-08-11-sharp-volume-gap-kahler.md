---
layout: paper
title: "The sharp volume gap for Kähler manifolds with positive Ricci curvature"
title_ja: "正Ricci曲率を持つKähler多様体の鋭い体積ギャップ"
authors: "Chi Li, Minghao Miao, Kewei Zhang"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
  - math.MG
topic: differential-geometry
tags:
  - positivity
  - curvature
  - fano-varieties
arxiv_id: "2608.08193v1"
arxiv_url: "https://arxiv.org/abs/2608.08193"
arxiv_submitted: "2026-08-08"
arxiv_updated: "2026-08-08"
summary: >-
  $\operatorname{Ric}(\omega)\geq(n+1)\omega$ を満たす射影空間でないコンパクトKähler多様体の体積に鋭い上界を与え、等号の場合を二次超曲面と $\mathbb P^1\times\mathbb P^{n-1}$ に特徴づける。正Ricci曲率の解析的条件をFano多様体の最小有理曲線とOkounkov体の正値性へ移して、従来は暗黙的だった体積ギャップを明示する。
abstract_en: ""
summary_en: >-
  The authors determine the exact volume gap below complex projective space among compact Kähler manifolds with a normalized positive Ricci lower bound. They identify both the sharp constant and every equality case. The argument reformulates the problem through a scale-invariant combination of volume and the greatest Ricci lower bound, then applies Fano-geometric methods. A toric logarithmic K-semistable analogue is also proved.
abstract_ja: >-
  $n$ 次元コンパクトKähler多様体 $(X,\omega)$ が $\operatorname{Ric}(\omega)\geq(n+1)\omega$ を満たし、$X\not\cong\mathbb P^n$ なら、体積には明示的な鋭い上界がある。等号は、標準Kähler–Einstein計量を持つ二次超曲面または $\mathbb P^1\times\mathbb P^{n-1}$ の場合に限る。K半安定トーリックlog Fano対にも鋭い対応結果を与える。
abstract_source_url: "https://arxiv.org/abs/2608.08193"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.08193](https://arxiv.org/abs/2608.08193)
- **著者:** Chi Li, Minghao Miao, Kewei Zhang
- **初回投稿日:** 2026年8月8日
- **最終更新日:** 2026年8月8日
- **主分類・副分類:** math.DG（主分類）, math.AG, math.MG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

正のRicci曲率下界を持つ多様体について、最大体積に近ければ標準空間に剛性を持つという「almost rigidity」が知られている。Kähler幾何では最大体積を持つ $\mathbb P^n$ への剛性が既知だったが、どれほど近ければよいかを表す定数は暗黙的だった。

本論文はその最適定数を決定する。$\operatorname{Ric}(\omega)\geq(n+1)\omega$ かつ $X\not\cong\mathbb P^n$ なら、体積は射影空間の体積の $2n^n/(n+1)^n$ 以下である。

さらに等号の場合を完全に特徴づけ、二次超曲面 $Q^n$ または積 $\mathbb P^1\times\mathbb P^{n-1}$ の標準Kähler–Einstein計量に限ることを示す。単なる上界だけでなく「第二位」の幾何を同定する点が重要である。

議論は最大Ricci下界 $\beta(X,L)$ と体積の積という尺度不変量へ問題を置き換える。K半安定Fanoの場合の先行結果を任意のample実クラスへ拡張し、トーリックlog Fano対にも鋭い反標準体積評価を得る。

## 背景と問題設定

既知のKähler almost rigidity は、ある $\varepsilon(n)>0$ に対し

$$
\operatorname{vol}(X,\omega)>(1-\varepsilon(n))\operatorname{vol}(\mathbb P^n,\omega_{\mathrm{FS}})
$$

なら $X\cong\mathbb P^n$ と述べる。本論文の問いは、この $\varepsilon(n)$ の最適値と境界例を求めることである。規格化は $\operatorname{vol}(\mathbb P^n,\omega_{\mathrm{FS}})=(2\pi)^n$ である。

正Ricci曲率により $X$ はFanoとなる。$L$ を $[\omega]/2\pi$ の数値類とし、

$$
\beta(X,L)=\sup\{t>0:\exists\,\omega\in2\pi c_1(L),\ \operatorname{Ric}(\omega)\geq t\omega\}
$$

を考えると、$\beta(X,L)^n\operatorname{vol}(L)$ は $L$ のスケール変更に不変である。

## 主結果

### 鋭い体積ギャップ（Theorem 1.3）

最適定数は

$$
\varepsilon(n)=1-\frac{2n^n}{(n+1)^n}
$$

である。したがって $X\not\cong\mathbb P^n$ なら

$$
\operatorname{vol}(X,\omega)\leq
\frac{2n^n}{(n+1)^n}\operatorname{vol}(\mathbb P^n,\omega_{\mathrm{FS}})
=\frac{2^{n+1}\pi^n n^n}{(n+1)^n}.
$$

等号は $(X,\omega)$ が、Einstein定数 $n+1$ の標準計量を備えた $Q^n$ または $\mathbb P^1\times\mathbb P^{n-1}$ と双正則等長な場合に限る。

### β体積版（Theorem 1.4）

$X\not\cong\mathbb P^n$ を $n$ 次元滑らかなFano多様体、$L$ をampleな $\mathbb R$-直線束とすると

$$
\beta(X,L)^n\operatorname{vol}(L)\leq2n^n.
$$

等号となり得る多様体は $Q^n$ と $\mathbb P^1\times\mathbb P^{n-1}$ だけである。この定式化がRicci曲率版を包含する。

### トーリックlog Fano対（Theorem 1.6）

$X\not\cong\mathbb P^n$ であるK半安定トーリックlog Fano対 $(X,\Delta)$ について

$$
(-K_X-\Delta)^n\leq(-K_{\mathbb P^1\times\mathbb P^{n-1}})^n=2n^n,
$$

かつ等号は $(X,\Delta)\cong(\mathbb P^1\times\mathbb P^{n-1},0)$ の場合に限る。

## 証明の見取り図

Ricci下界を $\beta$-体積へ翻訳し、MoriによるFano多様体上の最小有理曲線とFujita型の体積評価を組み合わせる。これにより射影空間以外では $2n^n$ という上界が出る。

難所は等号が有理とは限らない $\mathbb R$-直線束で達成され得る点である。論文はOkounkov体の正値性理論を使ってこの非有理クラスを制御し、等号例を二種類に絞る。トーリックの場合は自明な法束を持つ低次元射影空間の埋め込みとlog Fano体積ギャップを用いる。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.08193](https://arxiv.org/abs/2608.08193)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorems 1.3, 1.4, 1.5, 1.6
- **論文構成の説明:** Introduction, pp. 2–3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
