---
layout: paper
title: "Degenerating Kähler-Einstein cones, locally symmetric cusps, and the Tian-Yau metric"
title_ja: "退化するKähler–Einstein錐、局所対称カスプとTian–Yau計量"
authors: "Olivier Biquard, Henri Guenancia"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.CV
arxiv_abstract: >-
  Let $X$ be a complex projective manifold and let $D\subset X$ be a smooth divisor. In this article, we are interested in studying limits when $β\to 0$ of Kähler-Einstein metrics $ω_β$ with a cone singularity of angle $2πβ$ along $D$. In our first result, we assume that $X\setminus D$ is a locally symmetric space and we show that $ω_β$ converges to the locally symmetric metric and further give asymptotics of $ω_β$ when $X\setminus D$ is a ball quotient. Our second result deals with the case when $X$ is Fano and $D$ is anticanonical. We prove a folklore conjecture asserting that a rescaled limit of $ω_β$ is the complete, Ricci flat Tian-Yau metric on $X\setminus D$. Furthermore, we prove that $(X,ω_β)$ converges to an interval in the Gromov-Hausdorff sense.
topic: differential-geometry
tags:
  - kahler-einstein-metrics
  - metric-limits
  - fano-varieties
  - noncompact-kahler-geometry
  - pluripotential-theory
arxiv_id: "2108.13318v2"
arxiv_url: "https://arxiv.org/abs/2108.13318"
arxiv_submitted: "2021-08-30"
arxiv_updated: "2022-07-20"
summary: >-
  滑らかな因子に沿う錐角 $2\pi\beta$ のKähler–Einstein計量を $\beta\to0$ とした極限を調べる。球商のトロイダルコンパクト化では複素双曲計量への収束を示し、Fano多様体の滑らかな反標準因子では適切な再尺度化が完全Ricci平坦Tian–Yau計量へ収束する一方、非再尺度化空間が区間へ測度付きGromov–Hausdorff収束することを証明する。
abstract_en: ""
summary_en: >-
  The paper analyzes the small-angle limit of conical Kähler–Einstein metrics along a smooth divisor. For toroidal compactifications of ball quotients, the metrics approach the complete complex hyperbolic metric and admit controlled boundary asymptotics. For a Fano manifold with a smooth anticanonical divisor, a specific rescaling converges locally smoothly to the complete Ricci-flat Tian–Yau metric on the complement. Without that rescaling, the compact metric spaces collapse in the measured Gromov–Hausdorff sense to an interval.
abstract_ja: >-
  複素射影多様体 $X$ と滑らかな因子 $D\subset X$ に対し、$D$ に沿って錐角 $2\pi\beta$ を持つKähler–Einstein計量 $\omega_\beta$ の $\beta\to0$ における極限を研究する。補集合が局所対称空間なら局所対称計量への収束を示し、球商の場合には漸近形も与える。$X$ がFanoで $D$ が反標準因子なら、再尺度化した極限が $X\setminus D$ 上の完全Ricci平坦Tian–Yau計量であることを示す。さらに $(X,\omega_\beta)$ はGromov–Hausdorffの意味で区間へ収束する。
abstract_source_url: "https://arxiv.org/abs/2108.13318"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2108.13318](https://arxiv.org/abs/2108.13318)
- **著者:** Olivier Biquard, Henri Guenancia
- **初回投稿日:** 2021年8月30日
- **最終更新日:** 2022年7月20日
- **主分類・副分類:** math.DG（主分類）, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

射影多様体 $X$ の滑らかな因子 $D$ に沿って錐角 $2\pi\beta$ を持つKähler–Einstein計量を考え、錐角がゼロへ近づくとき、補集合 $X^\circ=X\setminus D$ 上のどの標準計量が現れるかを問う。計量は

$$
\operatorname{Ric}\omega_\beta=\sigma\omega_\beta+(1-\beta)[D],\qquad \sigma=\pm1
$$

を満たす。

負曲率側では、球商のトロイダルコンパクト化において $\omega_\beta$ が完全複素双曲計量へ局所滑らかかつカレントとして収束する。より一般の有界対称領域の商にも収束部分が拡張され、球商では因子近傍の精密な漸近も得られる。

正曲率側では、$X$ がFanoで $D$ が滑らかな反標準因子である場合を扱う。適切なべきで再尺度化した $\omega_\beta$ は補集合上の完全Ricci平坦Tian–Yau計量へ局所滑らかに収束し、Donaldsonに由来する予想を証明する。

同じ計量族を再尺度化せず大域的に見ると、因子方向と円周方向が異なる速度で潰れ、測度付きGromov–Hausdorff極限は区間となる。局所の非コンパクト極限と大域的collapseを一つの族で同時に記述する点が特徴である。

## 背景と問題設定

錐計量の局所模型は $D=(z_1=0)$ の座標で

$$
\omega_{\beta,\mathrm{mod}}=
\frac{i\,dz_1\wedge d\bar z_1}{|z_1|^{2(1-\beta)}}+
\sum_{j\geq2}i\,dz_j\wedge d\bar z_j
$$

である。$\beta>0$ では不完備かつ有限体積だが、$\beta\to0$ では因子の補集合上に完全計量が現れ得る。本論文は負曲率の局所対称カスプと、正曲率のFano・反標準因子という二つの幾何状況を比較する。

## 主結果

### 球商のカスプ極限（Theorem A）

$(X,D)$ を球商 $X^\circ=\Gamma\backslash\mathbb B^n$ のトロイダルコンパクト化とし、$\sigma=-1$ の錐Kähler–Einstein計量を考える。このとき

$$
\omega_\beta\longrightarrow\omega_{\mathrm{hyp}}
$$

が $X^\circ$ 上の $C^\infty_{\mathrm{loc}}$ と $X$ 上のカレントの弱収束の双方で成り立ち、$D$ 近傍での漸近形も得られる。

### Tian–Yau極限とcollapse（Theorem B）

$X$ を次元 $n$ のFano多様体、$D\in|-K_X|$ を滑らかな反標準因子とする。小さい $\beta$ に対する正Ricci曲率の錐Kähler–Einstein計量は

$$
\beta^{-1-1/n}\omega_\beta\longrightarrow\omega_{\mathrm{TY}}
$$

と $X\setminus D$ 上で局所滑らかに収束する。ここで $\omega_{\mathrm{TY}}$ は完全Ricci平坦Tian–Yau計量である。

さらに $p\in D$ を固定し、Riemann計量を $g_\beta$、正規化体積測度を $\nu_\beta$ とすると、$(X,g_\beta,p,\nu_\beta)$ は測度付きGromov–Hausdorffの意味で

$$
\left([0,\pi/2],\frac{2}{n+1}ds^2,0,
d\!\left(-\cos^{\frac{2n}{n+1}}s\right)\right)
$$

へ収束する。

## 証明の見取り図

両定理は、$D$ の法束の零切断近傍にCalabi ansatzで模型計量を作る点を共有する。Theorem Aでは比較原理を中心とする多重ポテンシャル論でポテンシャルを評価し、Chern–Lu公式により因子から離れた滑らかな収束を得る。

Theorem Bでは、因子近傍のCalabi模型と外側のTian–Yau計量を貼り合わせる。錐角に一様なSchauder評価とcollapseに適合した重み付きHölder空間を構築し、陰関数定理で近似計量を真のKähler–Einstein計量へ補正する。この精密な誤差制御から局所再尺度化極限と大域的collapseの双方を導く。

## 原論文との対応

本記事はAbstractとIntroductionのQuestion、Theorems A and B、およびIntroduction末尾の証明戦略を扱った。漸近展開の詳細、Schauder評価、貼り合わせ計算は後続節に属するため扱っていない。
