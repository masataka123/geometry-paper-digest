---
layout: paper
title: "A note on orbifold regularity of canonical metrics"
title_ja: "標準計量のオービフォールド正則性"
authors: "Henri Guenancia, Chung-Ming Pan, Mihai Păun"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.CV
arxiv_abstract: >-
  In this short note, we prove that on a compact Kähler variety $X$ with log terminal singularities and
  $c_1(X)=0$, any singular Ricci-flat Kähler metric has orbifold singularities in restriction to the orbifold
  locus of $X$.
topic: differential-geometry
tags:
  - singularities
  - kahler-einstein-metrics
  - monge-ampere-equations
arxiv_id: "2509.09259v1"
arxiv_url: "https://arxiv.org/abs/2509.09259"
arxiv_submitted: "2025-09-11"
arxiv_updated: "2025-09-11"
summary: >-
  log terminal特異点と第一Chern類の消滅をもつコンパクトKähler多様体上で、特異Ricci平坦Kähler計量のオービフォールド軌跡における正則性を証明する。局所
  自明な代数近似とMonge–Ampère方程式の一様評価を結び、射影的場合に知られていた結論をKählerの場合へ移す。
abstract_en: ""
summary_en: >-
  The paper studies a singular Ricci-flat Kähler metric on a compact log-terminal Kähler variety with vanishing
  first Chern class. It proves that, over the locus admitting finite smooth local covers, the pulled-back metric
  is genuinely Kähler. The argument transfers estimates from projective approximating fibres to the original
  Kähler space.
abstract_ja: >-
  コンパクトKähler多様体 $X$ がlog terminal特異点をもち $c_1(X)=0$ を満たすとき、任意の特異Ricci平坦Kähler計量は $X$
  のオービフォールド軌跡へ制限するとオービフォールド特異性をもつ。
abstract_source_url: "https://arxiv.org/abs/2509.09259"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---
## 書誌情報

- **arXiv:** [arXiv:2509.09259](https://arxiv.org/abs/2509.09259)
- **著者:** Henri Guenancia, Chung-Ming Pan, Mihai Păun
- **主分類・副分類:** math.DG; math.CV
- **ライセンス:** arXiv non-exclusive distribution license

## 要約

log terminal特異点をもつコンパクト正規Kähler空間では、正規化された標準測度を右辺とする複素Monge–Ampère方程式

$$
(\omega_X+dd^c\varphi)^n=\mu_h,\qquad \sup_X\varphi=0
$$

が一意な有界解をもち、得られる正電流は正則部分でKähler計量になる。しかし特異点近傍での計量挙動は一般に不明であり、有限商特異点上で局所被覆へ引き戻した計量が非退化になるかが問題となる。

本論文は、局所自明な代数近似をもつ $X$ についてこのオービフォールド正則性を証明する。とくに $c_1(K_X)=0$ の場合は既知の代数近似定理が適用でき、特異Ricci平坦計量がオービフォールド軌跡全体で期待どおりの正則性をもつ。

## 背景と問題設定

射影的な場合や孤立商特異点では既知だったが、一般のKähler空間では計量の大域的定義が局所解析を難しくする。$X^{\mathrm{orb}}$ を高々有限商特異点をもつ最大Euclid開集合とし、各一様化 $p:V\to U$ 上で $p^*\omega$ がKähler計量になることを目標とする。

## 主結果

### Theorem A

log terminal特異点をもつコンパクトKähler多様体が局所自明な代数近似を許すなら、式(1.1)の解 $\omega$ は $X^{\mathrm{orb}}$ 上でオービフォールド特異性をもつ。

### Corollary B

さらに $c_1(K_X)=0$ なら、任意のKähler類の特異Ricci平坦計量は $X^{\mathrm{orb}}$ 上でオービフォールド正則である。これは標準類が正または負の場合の既知の射影的議論と合わせ、log terminalコンパクトKähler多様体上の特異Kähler–Einstein計量を統一的に扱う。

## 証明の見取り図

局所自明変形の射影的ファイバー上で $f_t=\operatorname{tr}_{\omega_t}\omega_{\mathrm{orb}}$ を考える。小さい冪に対する一様楕円型不等式、Monge–Ampère解のstrict positivity、特異集合を避けるcutoffを組み合わせ、Harnack型不等式により $L^1$ 評価を $L^\infty$ 評価へ上げる。最後に多重ポテンシャル論的極限操作で中心ファイバーへ評価を移す。

## 原論文との対応

- **Abstractページ:** [arXiv:2509.09259](https://arxiv.org/abs/2509.09259)
- **Introduction:** Section 1, pp. 1–3
- **確認したarXivバージョン:** 2509.09259v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
