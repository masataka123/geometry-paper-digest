---
layout: paper
title: Rigidity of Pseudoconvex Neighborhoods and Ohsawa--Takegoshi Extension
title_ja: 平坦法束をもつ切断の擬凸近傍と正則管状近傍
authors: Takayuki Koike, Masakazu Takakura
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: Let $Y$ be a holomorphic section of a holomorphic submersion with one-dimensional fibers over a connected compact complex manifold. Assuming that its normal bundle is unitary flat, we prove that $Y$ admits a fundamental system of locally pseudoconvex neighborhoods if and only if it admits a holomorphic tubular neighborhood. The proof uses the sharp Ohsawa--Takegoshi extension theorem. As an application, we rule out such neighborhood systems in Ueda's example of class $(\gamma)$.
topic: several-complex-variables
tags:
- multiplier-ideals-extension
- l2-methods
- complex-analytic-spaces
- positivity
arxiv_id: 2610.29082v1
arxiv_url: https://arxiv.org/abs/2610.29082
arxiv_submitted: '2026-10-21'
arxiv_updated: '2026-10-21'
summary: コンパクト複素多様体上の一次元ファイバーをもつ正則沈め込みの切断について、ユニタリ平坦な法束を仮定する。局所擬凸近傍の基本系が存在することと、法束の零切断近傍へ正則に線形化できることの同値を示し、境界の正則性を仮定せずにUedaのγ型の例を排除する。
abstract_en: ''
summary_en: A flat normal bundle does not by itself determine the analytic neighborhood of a compact hypersurface. For hypersurfaces arising as sections of one-dimensional holomorphic submersions, this paper shows that a basis of locally pseudoconvex neighborhoods forces linearization to the normal bundle. A stronger form identifies sufficiently small simply connected-fiber neighborhoods with flat disk bundles. Sharp extension estimates provide rigidity without a boundary-regularity assumption.
abstract_ja: 連結コンパクト複素多様体を底とする一次元ファイバーの正則沈め込みと、その正則切断を考える。切断の法束がユニタリ平坦なら、局所擬凸近傍の基本系が存在するための必要十分条件は、正則管状近傍が存在することである。鋭いOhsawa–Takegoshi拡張定理を用い、さらにファイバーが連結かつ単連結な近傍基本系では、十分小さい近傍が平坦法束の単位円板束になる。応用としてUedaのγ型の例では局所擬凸近傍の基本系が存在しないことを示す。
abstract_source_url: https://arxiv.org/abs/2610.29082
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.29082v1](https://arxiv.org/abs/2610.29082)
- **著者:** Takayuki Koike, Masakazu Takakura
- **初回投稿日:** 2026-10-21
- **最終更新日:** 2026-10-21
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

コンパクト複素超曲面の法束が平坦でも、その近傍が法束そのものの零切断近傍と正則に同じになるとは限らない。本論文は、超曲面が一次元ファイバーの正則沈め込みの切断であるという設定で、局所擬凸近傍をいくらでも小さく取れることが、この線形化を強制すると示す。

結論は存在の同値にとどまらない。各ファイバーが連結かつ単連結となる近傍基本系では、十分小さな近傍は法束の平坦計量による単位円板束に一致する。底を保つ同型まで得られることが、近傍幾何の剛性を表す。

解析的な道具は鋭いOhsawa–Takegoshi拡張評価である。境界の正則性を追加せずに結論を得る点が、Riemann面の擬凸変形に関する従来の剛性問題との比較で強調される。Uedaのγ型の例への応用は、平坦性だけでは擬凸近傍基本系が存在しないことも示す。

## 背景と問題設定

$Z$ を連結コンパクト複素 $n$ 次元多様体、$X$ を複素 $(n+1)$ 次元多様体、$p:X\to Z$ を全射正則沈め込みとし、正則切断 $s:Z\to X$ を取る。$Y=s(Z)$ は滑らかなコンパクト超曲面である。

法束 $N\_{Y/X}$ がユニタリ平坦とは、局所正則フレームを選び、遷移関数を $U(1)$ に値を取る局所定数にできることである。標準的な例は平坦線束の零切断で、その円板半径を縮めれば局所擬凸近傍が得られる。本論文はこの標準例への帰着が、擬凸近傍基本系の存在から強制されるかを問う。

## 主結果

### 擬凸近傍と正則管状近傍の同値（Theorem 1.1）

上の設定で $N\_{Y/X}$ をユニタリ平坦とする。このとき次は同値である。

1. $Y$ は局所擬凸近傍の基本系 $\lbrace \Omega\_\nu\rbrace $ をもつ。
2. その基本系を、各 $p|\_{\Omega\_\nu}$ のファイバーが連結かつ単連結になるように選べる。
3. $Y$ は正則管状近傍をもつ。

第三条件は、$Y$ の近傍 $\Omega\subset X$ と法束全空間の零切断近傍 $\Omega'$ の間に

$$
\Phi:\Omega\xrightarrow{\ \cong\ }\Omega'
$$

という双正則写像が存在し、$Y$ を対応する零切断へ移すことを意味する。単に滑らかな管状近傍があるという位相的な主張ではない。

### 平坦円板束としての標準形（Theorem 1.2）

第二条件を満たす基本系が $\Omega\_{\nu+1}\subset\Omega\_\nu$ と入れ子になっているとする。十分大きな $\nu$ について、法束上の平坦計量 $h$ と双正則写像 $\Phi$ が存在し、

$$
\Phi(\Omega\_\nu)=\lbrace \xi\in N\_{Y/X}:|\xi|\_h<1\rbrace ,\qquad
\pi\circ\Phi=s\circ p
$$

が成り立つ。ここで $\pi:N\_{Y/X}\to Y$ は射影である。したがって選んだ小近傍自体が、ファイバーを保って平坦円板束に線形化される。

### Uedaの例への応用

Introductionは、平坦法束をもつ切断の任意の十分小さな近傍に、切断を避けながらその高倍とホモロガスなコンパクト曲線が現れるUedaの例を挙げる。主定理の応用として、このγ型の例は局所擬凸近傍の基本系を許さない。近傍での多重劣調和関数についての先行結果だけでは決まらなかった存在問題を判定する点に意味がある。

## 証明の見取り図

Introductionでは、Bergman核、その変動、および鋭い $L^2$ 拡張評価を準備して主定理へ進む構成が示される。Ohsawa–Takegoshi拡張定理を使うことで境界の正則性に依存しない剛性を導く、という点が著者らの方法の特徴である。核の具体的な等号解析や後続節の証明は、本記事では再構成していない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.29082)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.29082v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2；Introductionで述べられるCorollary 4.1への応用
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.29082v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
